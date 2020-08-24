Ext.define("MalawiAtlas.view.map.Map", {
  extend: "GeoExt.component.Map",
  xtype: "ma-mappanel",

  requires: ["MalawiAtlas.controller.map.MapController"],

  controller: "main-map",

  initComponent: function () {
    var me = this;

    // TODO: Load config

    // me.map = MalawiAtlas.util.Map.getOlMap();

    // // convert OL event to Ext event
    // // (necessary for accessing controller functions)
    // me.map.on("singleclick", function (evt) {
    //   me.fireEvent("mapSingleClick", evt);
    // });

    Ext.Ajax.request({
      url: "resources/config_simple.json",
      success: function (response) {
        // var layerJson = Ext.decode(response.responseText);
        console.log("Success");

        me.map = MalawiAtlas.util.Map.getOlMap();

        // convert OL event to Ext event
        // (necessary for accessing controller functions)
        me.map.on("singleclick", function (evt) {
          me.fireEvent("mapSingleClick", evt);
        });
      },
    });

  me.callParent();

  },

  listeners: {
    mapSingleClick: "onMapSingleClick",
  },
});
