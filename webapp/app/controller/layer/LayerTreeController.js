Ext.define("MalawiAtlas.controller.layer.LayerTreeController", {
  extend: "Ext.app.ViewController",
  alias: "controller.malawilayertree",

  requires: ["Ext.slider.Single"],

  /**
   * If node is a group, then icon is disabled
   */
  isGroup: function (view, rowIdx, colIdx, item, record) {
    return record.data.isLayerGroup;
  },

  /**
   * If node is a group or raster, then icon is disabled
   */
  isRasterLayerOrGroup: function (view, rowIdx, colIdx, item, record) {
    var isRaster = record.data.get("raster_properties");

    return record.data.isLayerGroup || isRaster;
  },

  /**
   * Downloads the layer as GeoPackage
   */
  openDownloadWindow: function (
    view,
    rowIndex,
    colIndex,
    item,
    e,
    record,
    row
  ) {
    Ext.create("Ext.window.Window", {
      title: "Download layer",
      width: 200,
      layout: "fit",
      items: {
        xtype: "container",
        flex: 1,
        layout: {
          type: "vbox",
          align: "stretch"
        },
        defaults: {
          margin: "5 10 5 10"
        },
        defaultType: "button",
        items: [
          {
            text: "GeoPackage",
            handler: function () {
              var lid = record.data.get("lid");
              var geoPackageURL =
                "https://www.gis-malawi.com/geoserver/malawi_atlas/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=geopackage&typeName=malawi:" +
                lid;
              window.open(geoPackageURL, "_blank");
            }
          },
          {
            text: "ShapeFile",
            handler: function () {
              var lid = record.data.get("lid");
              var geoPackageURL =
                "https://www.gis-malawi.com/geoserver/malawi_atlas/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=shape-zip&typeName=malawi:" +
                lid;
              window.open(geoPackageURL, "_blank");
            }
          },
          {
            text: "GeoJSON",
            handler: function () {
              var lid = record.data.get("lid");
              var geoPackageURL =
                "https://www.gis-malawi.com/geoserver/malawi_atlas/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=application/json&typeName=malawi:" +
                lid;
              window.open(geoPackageURL, "_blank");
            }
          },
          {
            text: "CSV",
            handler: function () {
              var lid = record.data.get("lid");
              var geoPackageURL =
                "https://www.gis-malawi.com/geoserver/malawi_atlas/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=csv&typeName=malawi:" +
                lid;
              window.open(geoPackageURL, "_blank");
            }
          },
          {
            text: "KML",
            handler: function () {
              var lid = record.data.get("lid");
              var geoPackageURL =
                "https://www.gis-malawi.com/geoserver/malawi_atlas/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=kml&typeName=malawi:" +
                lid;
              window.open(geoPackageURL, "_blank");
            }
          },
          {
            text: "GML2",
            handler: function () {
              var lid = record.data.get("lid");
              var geoPackageURL =
                "https://www.gis-malawi.com/geoserver/malawi_atlas/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=GML2&typeName=malawi:" +
                lid;
              window.open(geoPackageURL, "_blank");
            }
          },

          {
            text: "GML3",
            handler: function () {
              var lid = record.data.get("lid");
              var geoPackageURL =
                "https://www.gis-malawi.com/geoserver/malawi_atlas/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=GML3&typeName=malawi:" +
                lid;
              window.open(geoPackageURL, "_blank");
            }
          }
        ]
      }
    }).show();
  },

  /**
   * Opens panel with metadata
   */
  openMetaDataPanel: function (view, rowIndex, colIndex, item, e, record, row) {
    var me = this;

    var layerData = record.data;

    var infoPanel = Ext.ComponentQuery.query("ma-feature-info-panel")[0];
    infoPanel.removeAll();
    infoPanel.setTitle(layerData.get("name"));
    infoPanel.height = 300;
    infoPanel.insert(0, {
      xtype: "displayfield",
      value: layerData.get("description"),
      width: 300,
      cls: "text-wrapper"
    });

    var layerProperties = me.extractLayerProperties(layerData);

    if (layerProperties) {
      var propertyGrid = Ext.create("Ext.grid.property.Grid", {
        width: 300,
        source: layerProperties
      });
      infoPanel.insert(1, propertyGrid);
    }

    infoPanel.show();
  },

  /**
   * Return a JSON that can be used as input for property grid
   * @param  {object} layerData the data of a record
   * @return {object} layerProperties the extracted properties
   * */
  extractLayerProperties: function (layerData) {
    var layerProperties = {};
    var year = layerData.get("year");
    if (year) {
      layerProperties["Year"] = year;
    }

    var layerSource = layerData.get("layer_source");
    if (layerSource) {
      layerProperties["Source"] = layerSource;
    }

    var extent = layerData.get("layer_extent");
    if (extent) {
      layerProperties["Extent"] = extent;
    }

    var rasterProperties = layerData.get("raster_properties");
    if (rasterProperties) {
      var spatialResolution = rasterProperties.spatial_resolution;
      if (spatialResolution) {
        layerProperties["Spatial Resolution"] = spatialResolution;
      }
      var valueMeaning = rasterProperties.value_meaning;
      if (valueMeaning) {
        layerProperties["Value Meaning"] = valueMeaning;
      }

      var valueStatistics = rasterProperties.value_statistics;
      if (valueStatistics) {
        layerProperties["Value Statistics"] = valueStatistics;
      }
    }

    return layerProperties;
  },

  /**
   * Shows a silder that changes the opacity of the layer
   * Also makes layer visible in case it was invisible before
   */
  showOpacitySlider: function (view, rowIndex, colIndex, item, e, record, row) {
    var contextMenu = new Ext.menu.Menu({
      items: [
        new Ext.slider.Single({
          width: 180,
          increment: 10,
          minValue: 0,
          maxValue: 100,
          listeners: {
            changecomplete: function (slider, newValue, thumb, eOpts) {
              var layer = record.data;
              layer.setOpacity(newValue / 100);
            },
            beforerender: function (slider, eOpts) {
              var layer = record.data;
              layer.setVisible(true);

              var opacity = layer.getOpacity();
              var sliderValue;
              // opacity is undefined if it is not set initially
              if (opacity) {
                sliderValue = opacity * 100;
              } else {
                sliderValue = 100;
              }
              slider.setValue(sliderValue);
            }
          }
        })
      ]
    });
    contextMenu.showAt(e.getXY());
  }
});
