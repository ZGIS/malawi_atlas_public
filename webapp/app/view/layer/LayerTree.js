Ext.define("MalawiAtlas.view.layer.LayerTree", {
  extend: "Ext.tree.Panel",
  xtype: "ma-layertree",

  requires: ["MalawiAtlas.controller.layer.LayerTreeController"],
  controller: "malawilayertree",

  useArrows: true,
  lines: false,

  rootVisible: false,
  flex: 1,
  border: false,

  // Reorder layers
  viewConfig: {
    plugins: {
      ptype: "treeviewdragdrop"
    }
  },

  columns: [
    {
      xtype: "treecolumn",
      dataIndex: "text",
      width: 320,
      menudisabled: true,
      sortable: false
    },
    {
      // info button
      xtype: "actioncolumn",
      glyph: "xf05a@FontAwesome",
      menudisabled: true,
      sortable: false,
      width: 25,
      isDisabled: "isGroup",
      handler: "openMetaDataPanel"
    },
    {
      // download button
      xtype: "actioncolumn",
      glyph: "xf019@FontAwesome",
      menudisabled: true,
      sortable: false,
      width: 25,
      isDisabled: "isRasterLayerOrGroup",
      handler: "openDownloadWindow"
    },
    {
      // slider button
      xtype: "actioncolumn",
      glyph: "xf06e@FontAwesome",
      menudisabled: true,
      sortable: false,
      width: 25,
      isDisabled: "isGroup",
      handler: "showOpacitySlider"
    }
  ],

  initComponent: function () {
    var me = this;

    // TODO: start loading layer tree once the config JSON has been loaded

    var olMap = MalawiAtlas.util.Map.getOlMap();

    // TODO: use top level GeoExt function like in legend
    var layerArray = [];
    olMap.getLayers().forEach(function (layer) {
      if (layer.get("basemap") != true && layer.get("measurementLayer") != true)
        layerArray.push(layer);
    });

    var treeStore = Ext.create("GeoExt.data.store.LayersTree", {
      layerGroup: new ol.layer.Group({
        layers: layerArray
      })
    });

    me.store = treeStore;

    // uncomment, if layer tree shall be expanded
    // me.expandAll();

    me.callParent();
  }
});
