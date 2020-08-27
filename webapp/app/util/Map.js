var olMap = new ol.Map({
  layers: [],
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

  getFlatLayerList: function () {
    var flatLayers = [];

    var mapCmp = Ext.ComponentQuery.query("ma-mappanel")[0];
    var layerStore = mapCmp.getStore();

    layerStore.each(function (parentGroupLayer) {
      if (parentGroupLayer.getOlLayer() instanceof ol.layer.Group) {
        var parentGroupLayers = parentGroupLayer.getOlLayer().getLayers();
        parentGroupLayers.forEach(function (groupLayer) {
          if (groupLayer instanceof ol.layer.Group) {
            groupLayer.getLayers().forEach(function (layer) {
              flatLayers.push(layer);
            });
          }
        });
      }
    });

    return flatLayers;
  },

  createWMSLayerFromJSON: function (layerJSON) {
    // some layers need a different height
    var legendHeight;
    if (layerJSON.legendHeight) {
      legendHeight = layerJSON.legendHeight;
    }

    // TODO: Read URL from config
    var legend =
      "https://www.gis-malawi.com/geoserver/wms?" +
      "&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetLegendGraphic" +
      "&FORMAT=image/png&LAYER=malawi_atlas:" +
      layerJSON.name;
    var resultLayer;
    if (layerJSON.useImageWmsInsteadOfTileWMS) {
      // prevent rendering problems with the pie charts.
      resultLayer = new ol.layer.Image({
        source: new ol.source.ImageWMS({
          url: "https://www.gis-malawi.com/geoserver/malawi_atlas/wms",
          params: {
            LAYERS: layerJSON.name,
          },
          serverType: "geoserver",
          crossOrigin: "",
        }),
      });
    } else {
      resultLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
          url: "https://www.gis-malawi.com/geoserver/malawi_atlas/wms",
          params: {
            LAYERS: layerJSON.name,
            TILED: true,
          },
          serverType: "geoserver",
          crossOrigin: "",
        }),
      });
    } // set layer properties
    resultLayer.set("dataqtip", layerJSON.dataqtip);
    resultLayer.set("description", layerJSON.description);
    resultLayer.set("feature_info_activated", layerJSON.feature_info_activated);
    resultLayer.set("field_aliases", layerJSON.field_aliases);
    resultLayer.set("group", layerJSON.group);
    resultLayer.set("layer_extent", layerJSON.layer_extent);
    resultLayer.set("layer_source", layerJSON.layer_source);
    resultLayer.set("legend", legend);
    resultLayer.set("legendHeight", legendHeight);
    resultLayer.set("lid", layerJSON.name); // layer ID
    resultLayer.set("name", layerJSON.title); // only for display in layer tree
    resultLayer.set("opacity", layerJSON.opacity);
    resultLayer.set("parentGroup", layerJSON.parentGroup);
    resultLayer.set("raster_properties", layerJSON.raster_properties);
    resultLayer.set("thematicGroup", layerJSON.thematicGroup);
    resultLayer.set("title", layerJSON.title); // use title instead of name, because of consistency
    resultLayer.set("visible", false);
    resultLayer.set("year", layerJSON.year);

    return resultLayer;
  },
});
