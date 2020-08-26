var olMap = new ol.Map({
  layers: [],
  // layers: MalawiAtlas.util.Layer.layers,
  controls: ol.control.defaults({
    attributionOptions: {
      collapsible: false,
      collapsed: false,
    },
  }),
  view: new ol.View({
    center: ol.proj.fromLonLat([34.3, -13.2]),
    zoom: 7,
  }),
});

olMap.addControl(
  new ol.control.ScaleLine({
    minWidth: 120,
  })
);

olMap.addControl(
  new ol.control.OverviewMap({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
  })
);

var measurePopup = Ext.create("GeoExt.component.Popup", {
  map: olMap,
  width: 140,
});

var measureVectorSource = new ol.source.Vector();
var measureLayer = new ol.layer.Vector({
  displayInLayerTree: false,
  measurementLayer: true,
  source: measureVectorSource,
  style: new ol.style.Style({
    fill: new ol.style.Fill({
      color: "rgba(255, 20, 20, 0.2)",
    }),
    stroke: new ol.style.Stroke({
      color: "#ff0033",
      width: 2,
      lineDash: [10, 10],
    }),
    image: new ol.style.Circle({
      radius: 7,
      fill: new ol.style.Fill({
        color: "#ff0033",
      }),
    }),
  }),
});

olMap.addLayer(measureLayer);
measureLayer.setVisible(true);

Ext.define("MalawiAtlas.util.Map", {
  singleton: true,
  map: olMap,

  measurePopup: measurePopup,

  measureVectorSource: measureVectorSource,

  zoomToExtent: function (extent) {
    me = this;

    var view = me.map.getView();
    view.fit(extent, {
      duration: 2000,
      nearest: true,
    });
  },

  /**
   * Returns the OpenLayers map object
   */
  getOlMap: function () {
    var me = this;
    return me.map;
  },
});
