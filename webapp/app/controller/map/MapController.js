// TODO: maybe move to main controller
Ext.define("MalawiAtlas.controller.map.MapController", {
  extend: "Ext.app.ViewController",
  alias: "controller.main-map",

  infoPanel: null,

  swipeControl: null,

  onMapSingleClick: function (evt) {
    var me = this;

    // find top most layer of layerIdSet
    var featureInfoLayer = null;
    featureInfoLayer = evt.map.forEachLayerAtPixel(evt.pixel, function (layer) {
      return layer;
    });

    // needed for feature info request
    var coordinate = evt.coordinate;

    // create chart of info window for respective layer
    if (
      featureInfoLayer.get("feature_info_activated") ||
      featureInfoLayer.get("field_aliases")
    ) {
      me.queryLayer(coordinate, featureInfoLayer);
    } else {
      Ext.ComponentQuery.query("ma-feature-info-panel")[0].hide();
    }

    // clear selection if full
    if (me.selectionLayer) {
      me.selectionLayer.getSource().clear();
    }
  },

  /**
   * Calls GetFeatureInfo via Ajax
   */
  queryLayer: function (coordinate, featureInfoLayer) {
    var me = this;

    // init selectionLayer
    if (!me.selectionLayer) {
      me.selectionLayer = new ol.layer.Vector({
        source: new ol.source.Vector({}),
        // style for both point and polygon layer
        style: [
          new ol.style.Style({
            stroke: new ol.style.Stroke({
              color: "yellow",
              width: 3,
            }),
            fill: new ol.style.Fill({
              color: "rgba(244, 238, 66, 0.4)",
            }),
            image: new ol.style.Circle({
              radius: 15,
              fill: new ol.style.Fill({
                color: "rgba(244, 238, 66, 0.4)",
              }),
              stroke: new ol.style.Stroke({
                color: "gray",
                width: 3,
              }),
            }),
          }),
        ],
      });
      MalawiAtlas.util.Map.getOlMap().addLayer(me.selectionLayer);
    }

    var view = MalawiAtlas.util.Map.getOlMap().getView();
    var wmsSource = featureInfoLayer.getSource();
    var url = wmsSource.getGetFeatureInfoUrl(
      coordinate,
      view.getResolution(),
      "EPSG:3857",
      {
        INFO_FORMAT: "application/json",
      }
    );

    featureInfoLayer.on("change:visible", function () {
      me.selectionLayer.getSource().clear();
      Ext.ComponentQuery.query("ma-feature-info-panel")[0].hide();
    });

    if (url) {
      Ext.Ajax.request({
        url: url,
        success: function (response) {
          // read JSON data
          var geoJson = Ext.decode(response.responseText);

          // somehow the EPSG code has to be changed,
          // even though it worked with EPSG:3857 with the old GeoServer
          var format = new ol.format.GeoJSON({
            featureProjection: "EPSG:4326",
          });
          var features = format.readFeatures(geoJson);

          // fill selection
          me.selectionLayer.getSource().addFeatures(features);

          // properties for charting and feature info
          var properties = features[0].getProperties();

          // add field aliases
          var fieldAliases = featureInfoLayer.get("field_aliases");
          if (fieldAliases) {
            displayProperties = {};
            Object.keys(fieldAliases).forEach(function (key) {
              var shortName = key;
              var displayName = fieldAliases[key];
              var value = properties[shortName];
              displayProperties[displayName] = value;
            });
            // overwrite existing properties
            properties = displayProperties;
          }
          me.infoPanel = Ext.ComponentQuery.query("ma-feature-info-panel")[0];
          // make info panel empty
          me.infoPanel.removeAll();

          me.infoPanel.setTitle(featureInfoLayer.get("name"));

          // create chart of info window for respective layer
          if (featureInfoLayer) {
            switch (featureInfoLayer.get("lid")) {
              case "salima_vulnerability_to_floods_index_2014":
                me.chartVulnerabilityFloods(properties);
                break;
              case "salima_vulnerability_to_floods_index_2014_chart":
                me.chartVulnerabilityFloods(properties);
                break;
              case "salima_resilience_to_food_insecurity_index_2014":
                me.chartResilienceFood(properties);
                break;
              case "salima_resilience_to_food_insecurity_index_2014_chart":
                me.chartResilienceFood(properties);
                break;
              case "malawi_population_household_density_2008":
                me.districtDensity(properties, featureInfoLayer);
                break;
              case "malawi_population_density_2008":
                me.districtDensity(properties, featureInfoLayer);
                break;
              case "malawi_population_gender_2008":
                me.genderPieChart(properties, featureInfoLayer);
                break;
              default:
                // all layers where feature_info_activated is true
                me.simpleFeatureInfo(properties, featureInfoLayer);
                break;
            }
          }

          me.infoPanel.setListeners({
            hide: function () {
              if (me.selectionLayer) {
                me.selectionLayer.getSource().clear();
              }
            },
          });

          me.infoPanel.show();
        },

        failure: function (response) {
          // TODO: Handle fail
        },
      });
    }
  },

  /**
   * Show attribute Table of selected feature.
   * If point, then also show coordinates.
   */
  simpleFeatureInfo: function (properties, featureInfoLayer) {
    var me = this;

    me.infoPanel.height = 300;

    var propertyGrid = Ext.create("Ext.grid.property.Grid", {
      width: 300,
      source: properties,
    });

    // transform to WGS84
    var geometry = properties.geometry;

    // only show coordinates if feature is point
    if (geometry instanceof ol.geom.Point) {
      var coordinate = geometry.getCoordinates();
      // transform to LatLong
      coordinate = ol.proj.toLonLat(coordinate);
      // round digits
      coordinate = ol.coordinate.toStringXY(coordinate, 2);

      me.infoPanel.insert(0, {
        xtype: "displayfield",
        value: "Coordinate: " + coordinate,
      });
      me.infoPanel.insert(1, propertyGrid);
    } else {
      me.infoPanel.insert(0, propertyGrid);
    }
  },

  // TODO: 'chartResilienceFood' and 'chartVulnerabilityFloods'
  // are a bit redundant
  chartVulnerabilityFloods: function (properties) {
    var me = this;

    // index number that shall be displayed
    var vaIndex = properties.vu_vp_n;
    vaIndex = Math.round(vaIndex * 1000) / 1000;

    // reformat data for chart
    var chartData = [];
    for (var key in properties) {
      var value = properties[key];
      var name = null;
      var fillcolor = null;

      // assign colors and human readable values
      switch (key) {
        case "mean_pover":
          name = "Povertry";
          fillcolor = "#ffffe0";
          break;

        case "mean_ews":
          name = "Early Warning System detection";
          fillcolor = "#afeeee";
          break;

        case "mean_ess":
          name = "Ecosystem Services (food)";
          fillcolor = "#98fb98";
          break;

        case "mean_crops":
          name = "Cropland";
          fillcolor = "#ffdead";
          break;

        case "mean_confl":
          name = "Conflict Density";
          fillcolor = "#c0c0c0";
          break;

        case "mean_acces":
          name = "Access Index";
          fillcolor = "#ffb6c1";
          break;
      }

      // only use records specified above
      if (name) {
        var tmpItem = {
          name: name,
          value: (value * 100) / 255,
          fillColor: fillcolor,
        };
        chartData.push(tmpItem);
      }
    }

    // create store for chart
    var chartStore = new Ext.data.Store({
      fields: ["name", "value", " fillColor"],
      data: chartData,
    });

    me.infoPanel.height = 300;

    me.infoPanel.insert(0, {
      xtype: "displayfield",
      value: "District VA Index: " + vaIndex,
    });

    var chart = Ext.create(
      "MalawiAtlas.view.chart.VulnerbilityAndResilienceIndexChart",
      {
        store: chartStore,
        chartTitle: "Absolute indicator values",
      }
    );

    me.infoPanel.insert(1, chart);
  },

  chartResilienceFood: function (properties) {
    var me = this;

    // index number that shall be displayed
    var raIndex = properties.ra_vp_n;
    raIndex = Math.round(raIndex * 1000) / 1000;

    // reformat data for chart
    var chartData = [];
    for (var key in properties) {
      var value = properties[key];
      var name = null;
      var fillcolor = null;

      // assign colors and human readable values
      switch (key) {
        case "mean_ifa":
          name = "Income and Food Access";
          fillcolor = "#fa8072";
          break;

        case "mean_abs":
          name = "Access to Basic Services";
          fillcolor = "#90ee90";
          break;

        case "mean_aga":
          name = "Agricultural Assets";
          fillcolor = "#00ced1";
          break;

        case "mean_ssn":
          name = "Social Safety Nets";
          fillcolor = "#6495ed";
          break;

        case "mean_acp":
          name = "Adaptive Capacity";
          fillcolor = "#d8bfd8";
          break;

        case "mean_sta":
          name = "Stability";
          fillcolor = "#6b8e23";
          break;
      }

      // only use records specified above
      if (name) {
        var tmpItem = {
          name: name,
          value: (value * 100) / 255,
          fillColor: fillcolor,
        };
        chartData.push(tmpItem);
      }
    }

    // create store for chart
    var chartStore = new Ext.data.Store({
      fields: ["name", "value", " fillColor"],
      data: chartData,
    });

    me.infoPanel.height = 300;

    me.infoPanel.insert(0, {
      xtype: "displayfield",
      value: "District RA index: " + raIndex,
    });

    var chart = Ext.create(
      "MalawiAtlas.view.chart.VulnerbilityAndResilienceIndexChart",
      {
        store: chartStore,
        chartTitle: "Absolute indicator values",
      }
    );

    me.infoPanel.insert(1, chart);
  },

  districtDensity: function (properties, featureInfoLayer) {
    var me = this;

    me.infoPanel.height = 300;

    if (
      featureInfoLayer.get("lid") === "malawi_population_household_density_2008"
    ) {
      me.infoPanel.insert(0, {
        xtype: "displayfield",
        value:
          "EA Household Density: " +
          properties["Household density (households per km2)"],
      });
      me.infoPanel.insert(1, {
        xtype: "displayfield",
        value: "Malawi Average: " + 246.2, // computed with Postgres
      });
    } else if (
      featureInfoLayer.get("lid") === "malawi_population_density_2008"
    ) {
      me.infoPanel.insert(0, {
        xtype: "displayfield",
        value: "EA: " + properties["Population density (persons per km2)"],
      });
      me.infoPanel.insert(1, {
        xtype: "displayfield",
        value: "Malawi Average: " + 1077, // computed with Postgres
      });
    }

    var propertyGrid = Ext.create("Ext.grid.property.Grid", {
      width: 300,
      renderTo: Ext.getBody(),
      source: properties,
    });

    me.infoPanel.insert(2, propertyGrid);
  },

  genderPieChart: function (properties, featureInfoLayer) {
    var me = this;

    me.infoPanel.height = 500;

    var countMale = properties["No. males"];
    var countFemale = properties["No. females"];

    // create store for chart
    var chartStore = new Ext.data.Store({
      fields: ["gender_type", "count_persons"],
      data: [
        {
          gender_type: "male",
          count_persons: countMale,
        },
        {
          gender_type: "female",
          count_persons: countFemale,
        },
      ],
    });

    var pieChart = Ext.create("MalawiAtlas.view.chart.GenderPieChart", {
      store: chartStore,
    });
    me.infoPanel.insert(0, pieChart);

    var propertyGrid = Ext.create("Ext.grid.property.Grid", {
      width: 300,
      renderTo: Ext.getBody(),
      source: properties,
    });
    me.infoPanel.insert(1, propertyGrid);
  },

  initLayerSwipeControl: function () {
    var me = this;

    // get landcover layers
    var lc1990 = null;
    var lc2009 = null;
    MalawiAtlas.util.Layer.getFlatLayerList().forEach(function (layer) {
      var lid = layer.get("lid");
      if (lid === "linthipe_lingadzi_land_use_land_cover_1990") {
        lc1990 = layer;
      }
      if (lid === "linthipe_lingadzi_land_use_land_cover_2009") {
        lc2009 = layer;
      }
    });

    me.swipeControl = new ol.control.Swipe();
    // left
    me.swipeControl.addLayer(lc1990);
    // right
    me.swipeControl.addLayer(lc2009, true);

    // add listener to both layers
    lc1990.on("change:visible", function (evt) {
      me.toggleSwipe(lc1990, lc2009);
    });
    lc2009.on("change:visible", function (evt) {
      me.toggleSwipe(lc1990, lc2009);
    });
  },

  // swipe needs to be activated after map is created
  afterRender: function () {
    var me = this;
    // me.initLayerSwipeControl();
  },

  // activated swipe if both layers are visible
  toggleSwipe: function (lc1990, lc2009) {
    var me = this;

    if (lc1990.getVisible() && lc2009.getVisible()) {
      // both layers are visible
      MalawiAtlas.util.Map.getOlMap().addControl(me.swipeControl);
    } else {
      MalawiAtlas.util.Map.getOlMap().removeControl(me.swipeControl);
    }
  },
});
