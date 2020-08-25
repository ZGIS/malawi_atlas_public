Ext.define("MalawiAtlas.view.map.Map", {
  extend: "GeoExt.component.Map",
  xtype: "ma-mappanel",

  requires: ["MalawiAtlas.controller.map.MapController"],

  controller: "main-map",

  initComponent: function () {
    var me = this;

    // TODO: Load config

    me.map = MalawiAtlas.util.Map.getOlMap();

    // me.map = new ol.Map({
    //   layers: [
    //     new ol.layer.Tile({
    //       source: new ol.source.OSM(),
    //     }),
    //   ],
    //   controls: ol.control.defaults({
    //     attributionOptions: {
    //       collapsible: false,
    //       collapsed: false,
    //     },
    //   }),
    //   view: new ol.View({
    //     center: ol.proj.fromLonLat([34.3, -13.2]),
    //     zoom: 7,
    //   }),
    // });

    // convert OL event to Ext event
    // (necessary for accessing controller functions)
    me.map.on("singleclick", function (evt) {
      me.fireEvent("mapSingleClick", evt);
    });

    me.callParent();
  },

  listeners: {
    mapSingleClick: "onMapSingleClick",
  },
});
