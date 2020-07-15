// TODO: create function that reads all visibile layers
//       open respective legends and display them
//       listen to map if something changes
Ext.define("MalawiAtlas.view.layer.Legend", {
  extend: "Ext.panel.Panel",
  xtype: "ma-legend",

  items: [],
  initComponent: function () {
    var me = this;

    me.items = [];

    var flatLayers = MalawiAtlas.util.Layer.getFlatLayerList();

    Ext.each(flatLayers, function (layer) {
      me.addLegendItems(layer);
    });

    Ext.each(flatLayers, function (layer) {
      layer.on("change:visible", function (evt) {
        var layer = evt.target;
        var lid = layer.get("lid");
        if (layer.getVisible()) {
          // TODO: make more elegant!!
          me.items.each(function (item) {
            if (item.layerRef === lid) {
              item.show();
            }
          });
        } else {
          // TODO: make more elegant!!
          me.items.each(function (item) {
            if (item.layerRef === lid) {
              item.hide();
            }
          });
        }
      });
    });

    me.callParent();
  },

  addLegendItems: function (layer) {
    var me = this;

    var height;

    if (layer.get("legendHeight")) {
      height = layer.get("legendHeight");
    }

    me.items.push({
      itemId: "text_" + layer.get("lid"),
      xtype: "displayfield",
      value: layer.get("title"),
      layerRef: layer.get("lid"),
      hidden: layer.getVisible() === false,
    });
    me.items.push({
      xtype: "image",
      src: layer.get("legend"),
      layerRef: layer.get("lid"),
      hidden: layer.getVisible() === false,
      height: height,
    });
  },
});
