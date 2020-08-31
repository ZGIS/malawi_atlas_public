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


/**
 * Utility class for map and layer related tasks
 */
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

  /**
   * Untangle the nested layers 
   * returns a list with all single layers
   */
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
  /**
   * Creates OL groups from JSON config
   */
  makeLayerGroups: function (parentGroups) {
    var me = this;
    parentGroupLayers = [];
    parentGroups.forEach(function (parentGroup) {
      var groupLayers = [];

      var groups = parentGroup.groups;
      groups.forEach(function (group) {
        wmsLayers = [];

        var layers = group.layers;
        layers.forEach(function (layer) {
          // assign properties of group
          var groupDescription = group.group_description;
          if (groupDescription) {
            layer.description = groupDescription;
          }
          var fieldAliases = group.field_aliases;
          if (fieldAliases) {
            layer.field_aliases = fieldAliases;
          }

          var wmsLayer = me.createWMSLayerFromJSON(layer);

          wmsLayers.push(wmsLayer);
        }); // end - layer

        var groupLayer = new ol.layer.Group({
          name: group.groupName,
          layers: wmsLayers,
        });
        groupLayers.push(groupLayer);
      }); // end - group

      var parentGroupLayer = new ol.layer.Group({
        name: parentGroup.parentGroupName,
        layers: groupLayers,
      });
      parentGroupLayers.push(parentGroupLayer);
    }); // end - parent group
    return parentGroupLayers;
  },

  /**
   * Init legend after layers have loaded
   */
  makeLegend: function () {
    var me = this;
    var leg = Ext.ComponentQuery.query("ma-legend")[0];

    var flatLayers = me.getFlatLayerList();

    Ext.each(
      flatLayers,
      function (layer) {
        var height;

        if (layer.get("legendHeight")) {
          height = layer.get("legendHeight");
        }

        leg.add({
          itemId: "text_" + layer.get("lid"),
          xtype: "displayfield",
          value: layer.get("title"),
          layerRef: layer.get("lid"),
          hidden: layer.getVisible() === false,
        });

        leg.add({
          xtype: "image",
          src: layer.get("legend"),
          layerRef: layer.get("lid"),
          hidden: layer.getVisible() === false,
          height: height,
        });
      },
      this,
      true // <---for iterating in reverse order
    );

    // Make layers visible
    Ext.each(flatLayers, function (layer) {
      layer.on("change:visible", function (evt) {
        var layer = evt.target;
        var lid = layer.get("lid");
        if (layer.getVisible()) {
          // TODO: make more elegant!!
          leg.items.each(function (item) {
            if (item.layerRef === lid) {
              item.show();
            }
          });
        } else {
          // TODO: make more elegant!!
          leg.items.each(function (item) {
            if (item.layerRef === lid) {
              item.hide();
            }
          });
        }
      });
    });
  },

  /**
   * Init Thematic Maps after layers have loaded
   * @param {*} thematicGroupItems
   */
  makeThematicMaps: function (thematicGroupItems) {
    var comboBoxArray = [];
    Object.keys(thematicGroupItems).forEach(function (key) {
      var thematicGroupParams = thematicGroupItems[key];
      var name = thematicGroupParams.name;
      var extent = thematicGroupParams.extent;
      comboBoxArray.push({
        name: name,
        extent: extent,
        thematicGroup: key,
      });
    });

    comboStore = Ext.create("Ext.data.Store", {
      fields: ["name", "extent"],
      data: comboBoxArray,
    });

    var thematicGroupsComp = Ext.ComponentQuery.query(
      "ma-thematic-group-combobox"
    )[0];

    thematicGroupsComp.setStore(comboStore);
  },

  /**
   * Define two baselayers that can be toggled by the user
   */
  baseLayers: [
    new ol.layer.Tile({
      lid: "basemapSatellite",
      basemap: true,
      visible: false,
      source: new ol.source.XYZ({
        url:
          "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        attributions:
          "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
      }),
    }),
    new ol.layer.Tile({
      lid: "basemapStreet",
      visible: true,
      basemap: true,
      source: new ol.source.OSM(),
    }),
  ],
});
