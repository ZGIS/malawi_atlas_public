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

  // empty store will be filled later
  store: {},

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
      isDisabled: "checkIfNotDownloadable",
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
  ]
});
