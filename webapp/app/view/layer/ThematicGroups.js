Ext.define('MalawiAtlas.view.layer.ThematicGroups', {
  extend: 'Ext.panel.Panel',
  xtype: 'ma-thematicgrouppanel',
  title: 'Thematic Layer Group',

  requires: [
    'MalawiAtlas.controller.layer.ThematicGroupsController'
  ],

  layout: {
    type: 'vbox'
  },

  scrollable: true,

  defaults: {
    iconAlign: 'left',
    scale: 'medium'
  },

  collapsible: true,
  collapsed: false,

  controller: 'main-thematicgroups',

  currentThematicGroupKey: null,

  initComponent: function() {
    var me = this;

    var thematicGroupItems = MalawiAtlas.util.Layer.thematicGroupItems;

    me.items = [];

    // loop through thematic groups
    Object.keys(thematicGroupItems).forEach(
      function(key) {
        var thematicGroupParams = thematicGroupItems[key];
        var name = thematicGroupParams.name;

        // add buttons
        me.items.push({
          xtype: 'button',
          thematicGroupKey: key,
          thematicGroupParams: thematicGroupParams,
          text: name,
          scale: 'small',
          listeners: {
            click: "onThematicGroupClick"
          },
        });
      }
    );

    me.callParent();

  }
});
