var layerJSON = {
  MalawiAtlasLayers: {
    thematicGroups: {
      SALIMA_DISASTER: {
        name: "Salima Disaster Risk Reduction",
        extent: [3797310, -1586808, 3855005, -1507639],
      },
      SALIMA_VULERNABILITY: {
        name: "Salima Vulnerability to floods",
        extent: [3807468, -1569169, 3850398, -1510389],
      },
      MZUZU_PGIS: {
        name: "Mzuzu PGIS Hazards",
        extent: [3780375, -1289501, 3793398, -1277378],
      },
    },
    parentGroups: [
      {
        parentGroupName: "Salima",
        groups: [
          {
            groupName: "Hazards",
            layers: [
              {
                title: "Floods (DoDMA)",
                name: "salima_hazard_flood_dodma",
                description:
                  "Flood hazard zones delineated through community mapping exercises conducted by the Government of Malawi Department of Disaster Management (DoDMA)",
                year: "Unknown",
                source: "DoDMA",
                layer_extent: "Salima",
                projection: "WGS 84 (EPSG: 4326)",
                data_type: "Vector (.gpkg)",
                vector_geometry: "Polygon",
              },
              {
                title: "Floods (COOPI PGIS 2013)",
                name: "salima_hazard_pgis",
                thematicGroup: "SALIMA_DISASTER",
                description:
                  "Flood zones as identified in participatory GIS (PGIS) exercises",
                year: "Unknown",
                source: "COOPI",
                layer_extent: "Salima",
                projection: "WGS 84 (EPSG: 4326)",
                data_type: "Vector (.gpkg)",
                vector_geometry: "Polygon",
              },
              {
                title: "Floods (Irrigation & Water Development Department)",
                name: "salima_hazard_flood_irrigation_and_water_department",
                description: "Unknown",
                year:
                  "Zones of flood hazard as identified by the Salima District Department of Water and Irrigation",
                source: "Salima Department of Water and Irrigation",
                layer_extent: "Salima",
                projection: "WGS 84 (EPSG: 4326)",
                data_type: "Vector (.gpkg)",
                vector_geometry: "Polygon",
              },
              {
                title: "Floods (Forestry Department)",
                name: "salima_hazard_flood_forestry_department",
                description:
                  "Zones of flood hazard as identified by the Salima District Department of Forestry.",
                year: "Unknown",
                source: "Salima Forestry Department",
                layer_extent: "Salima",
                projection: "WGS 84 (EPSG: 4326)",
                data_type: "Vector (.gpkg)",
                vector_geometry: "Polygon",
              },
            ],
          },
          {
            groupName: "Vulnerability to floods",
            layers: [
              {
                title: "Flood vulnerability index",
                name: "salima_vulnerability_to_floods_index_2014",
                thematicGroup: "SALIMA_VULERNABILITY",
                opacity: 0.6,
                description:
                  "The flood vulnerability index highlights the spatial patterns in socioeconomic vulnerability to floods across the district. The index is a relative measure of vulnerability for the district of Salima and is based on a number of indicators including poverty, market and urban area accessability, health centre and education accessability, crop density, early warning systems, access to evacuation sites / safe places and more. The index was developed based on an approach developed by Kienberger (2009/2012) in Mozambique. See attached report for more details.",
                legendHeight: 150,
                year: 2014,
                source: "Z_GIS & COOPI",
                layer_extent: "Salima",
                projection: "WGS 84 (EPSG: 4326)",
                data_type: "Vector (.gpkg)",
                vector_geometry: "Polygon",
                feature_info_activated: true,
              },
              {
                title: "Piecharts",
                name: "salima_vulnerability_to_floods_index_2014_chart",
                thematicGroup: "SALIMA_VULERNABILITY",
                description: null,
                year: 2014,
                source: "Z_GIS & COOPI",
                layer_extent: "Salima",
                feature_info_activated: true,
                useImageWmsInsteadOfTileWMS: true,
              },
              {
                title: "Flood vulnerability index (selected GVHs)",
                name: "salima_vulnerability_to_floods_index_gvh_2014",
                thematicGroup: "SALIMA_VULERNABILITY",
                description:
                  "The flood vulnerability index highlights the spatial patterns in socioeconomic vulnerability to floods across the district. The index is a relative measure of vulnerability for the district of Salima and is based on a number of indicators including poverty, market and urban area accessability, health centre and education accessability, crop density, early warning systems, access to evacuation sites / safe places and more. The index was developed based on an approach developed by Kienberger (2009/2012) in Mozambique. This specific analysis was conducted for a number of selected GVHs in Salima District. See attached report for more details.",
                year: 2014,
                source: "Z_GIS & COOPI",
                layer_extent: "Salima",
                projection: "WGS 84 (EPSG: 4326)",
                data_type: "Vector (.gpkg)",
                vector_geometry: "Polygon",
                field_aliases: {
                  gvh: "GVH",
                  ta_name: "TA",
                  ref: "Vulnerability to floods index",
                },
              },
            ],
          },
        ],
      },
      {
        parentGroupName: "Mzuzu",
        groups: [
          {
            groupName: "Hazards",
            layers: [
              {
                title: "Flood hazards",
                name: "mzuzu_hazard_flood",
                thematicGroup: "MZUZU_PGIS",
                description: "",
                source: "COOPI & Z_GIS",
                year: 2020,
                layer_extent: "Mzuzu",
                projection: "WGS 84 (EPSG: 4326)",
                data_type: "Vector (.gpkg)",
                vector_geometry: "polygon",
              },
              {
                title: "Strong wind hazards",
                name: "mzuzu_hazard_strongwind",
                thematicGroup: "MZUZU_PGIS",
                description: "",
                source: "COOPI & Z_GIS",
                year: 2020,
                layer_extent: "Mzuzu",
                projection: "WGS 84 (EPSG: 4326)",
                data_Type: "Vector (.gpkg)",
                vector_geometry: "Line",
              },
            ],
          },
        ],
      },
    ],
  },
};

var thematicGroupItems = layerJSON.MalawiAtlasLayers.thematicGroups;
var parentGroups = layerJSON.MalawiAtlasLayers.parentGroups;

function createWMSLayerFromJSON(layerJSON) {
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
  }

  // set layer properties
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
}

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

      var wmsLayer = createWMSLayerFromJSON(layer);

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

// has to be at the bottom of all layers
var baseLayers = [
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
];

Ext.define("MalawiAtlas.util.Layer", {
  singleton: true,
  layers: baseLayers.concat(parentGroupLayers),
  // todo: this does not look right, probably a more elegant solution possible
  thematicGroupItems: thematicGroupItems,

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
});
