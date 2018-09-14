Ext.define('MalawiAtlas.controller.layer.LayerTreeController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.malawilayertree',


  /**
   * when node is a group, icon is disabled
   */
  isGroup: function(view, rowIdx, colIdx, item, record) {
    return record.data.isLayerGroup;
  },


  /**
   * when node is a group or raster, icon is disabled
   */
  isRasterLayerOrGroup: function(view, rowIdx, colIdx, item, record) {
    var isRaster = record.data.get('raster_properties');

    return record.data.isLayerGroup || isRaster;
  },

  /**
   * Downloads the layer as GeoPackage
   */
  openDownloadWindow: function(view, rowIndex, colIndex, item, e, record, row) {
    var lid = record.data.get('lid');
    var geoPackageURL = 'http://isi.zgis.at/geoserver/malawi_atlas/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=geopackage&typeName=malawi:' + lid;
    window.open(
      geoPackageURL, '_blank'
    );
  },

  /**
   * Opens panel with metadata
   */
  openMetaDataPanel: function(view, rowIndex, colIndex, item, e, record, row) {
    var me = this;

    var layerData = record.data;

    var infoPanel = Ext.ComponentQuery.query('ma-feature-info-panel')[0];
    infoPanel.removeAll();
    infoPanel.setTitle(layerData.get('name'));
    infoPanel.height = 300;
    infoPanel.insert(0, {
      xtype: 'displayfield',
      value: layerData.get('description'),
      width: 300,
      cls: 'text-wrapper',
    });

    var layerProperties = me.extractLayerProperties(layerData);

    if (layerProperties) {
      var propertyGrid = Ext.create('Ext.grid.property.Grid', {
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
  extractLayerProperties: function(layerData) {
    var layerProperties = {}
    var year = layerData.get('year');
    if (year) {
      layerProperties["Year"] = year;
    }

    var layerSource = layerData.get('layer_source');
    if (layerSource) {
      layerProperties["Source"] = layerSource;
    }

    var extent = layerData.get('layer_extent');
    if (extent) {
      layerProperties["Extent"] = extent;
    }

    var rasterProperties = layerData.get('raster_properties');
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
  }
});
