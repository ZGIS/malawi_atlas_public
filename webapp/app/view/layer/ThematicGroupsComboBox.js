Ext.define('MalawiAtlas.view.layer.ThematicGroupsComboBox', {
  extend: 'Ext.form.ComboBox',
  xtype: 'ma-thematic-group-combobox',

  requires: [
    'MalawiAtlas.controller.main.Main',
  ],

  width: 250,
  queryMode: 'local',
  displayField: 'name',
  valueField: 'extent',
  emptyText: 'predefined map ... ',
  initComponent: function() {
    var me = this;

    var thematicGroupItems = MalawiAtlas.util.Layer.thematicGroupItems;

    // re-structure JSON
    var comboBoxArray = [];
    Object.keys(thematicGroupItems).forEach(
      function(key) {
        var thematicGroupParams = thematicGroupItems[key];
        var name = thematicGroupParams.name;
        var extent = thematicGroupParams.extent;
        comboBoxArray.push({
          name: name,
          extent: extent,
          thematicGroup: key
        });
      }
    );

    me.store = Ext.create('Ext.data.Store', {
      fields: ['name', 'extent'],
      data: comboBoxArray
    });

    me.callParent();
  },

  layerChangeListenerKey: null,

  listeners: {
    'select': function(combo, record, eOpts) {

      var me = this;

      // unset listener, otherwise thematic group will not be shown
      // after the second time chosen
      ol.Observable.unByKey(me.layerChangeListenerKey);

      // zoom to extent
      var extent = record.get('extent');
      MalawiAtlas.util.Map.zoomToExtent(extent);

      // activate layers
      var flatLayerList = MalawiAtlas.util.Layer.getFlatLayerList();
      flatLayerList.forEach(function(layer) {
        if (record.get('thematicGroup') === layer.get('thematicGroup')) {
          layer.setVisible(true);
        } else {
          layer.setVisible(false);
        }
      });

      // if a layer is changed, combobox will be cleared
      me.layerChangeListenerKey = MalawiAtlas.util.Map.getOlMap().getLayerGroup().on('change',
        function() {
          me.setValue(null);
        });
    }
  }

});
