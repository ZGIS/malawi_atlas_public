Ext.define("MalawiAtlas.view.layer.ThematicGroupsComboBox", {
  extend: "Ext.form.ComboBox",
  xtype: "ma-thematic-group-combobox",

  requires: ["MalawiAtlas.controller.main.Main"],

  width: 250,
  queryMode: "local",
  displayField: "name",
  valueField: "extent",
  emptyText: "Choose your map:",
  store: {},

  layerChangeListenerKey: null,

  listeners: {
    select: function (combo, record, eOpts) {
      var me = this;

      // unset listener, otherwise thematic group will not be shown
      // after the second time chosen
      ol.Observable.unByKey(me.layerChangeListenerKey);

      // zoom to extent
      var extent = record.get("extent");
      MalawiAtlas.util.Map.zoomToExtent(extent);

      // activate layers
      var flatLayerList = MalawiAtlas.util.Layer.getFlatLayerList();
      flatLayerList.forEach(function (layer) {
        var themgroup = layer.get("thematicGroup");
        if (
          typeof themgroup !== "undefined" &&
          themgroup.includes(record.get("thematicGroup"))
        ) {
          layer.setVisible(true);
        } else {
          layer.setVisible(false);
        }
      });

      // if a layer is changed, combobox will be cleared
      me.layerChangeListenerKey = MalawiAtlas.util.Map.getOlMap()
        .getLayerGroup()
        .on("change", function () {
          me.setValue(null);
        });
    }
  }
});
