Ext.define("MalawiAtlas.view.map.ZoomToExtent", {
  extend: "Ext.panel.Panel",
  xtype: "ma-map-zoom-to-exent",

  requires: ["MalawiAtlas.controller.main.Main"],

  controller: "main",

  referenceHolder: true,
  viewModel: true,
  layout: "hbox",
  items: [
    {
      xtype: "combobox",
      id: "district_id",
      reference: "districts",
      emptyText: "District",
      displayField: "districtName",
      publishes: "value",
      valueField: "districtName",
      store: {
        type: "districts"
      },
      minChars: 0,
      queryMode: "remote",
      typeAhead: true,
      listeners: {
        select: "comboZoomToExtent"
      }
    },
    {
      xtype: "combobox",
      id: "ta_id",
      reference: "traditionalauthorities",
      emptyText: "Traditional Authorities",
      displayField: "taName",
      forceSelection: true,
      bind: {
        filters: {
          property: "districtName",
          value: "{districts.value}"
        }
      },
      store: {
        type: "traditionalauthorities"
      },
      minChars: 0,
      queryMode: "remote",
      typeAhead: true,
      listeners: {
        select: "comboZoomToExtent"
      }
    }
  ]
});
