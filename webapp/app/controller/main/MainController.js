Ext.define('MalawiAtlas.controller.main.Main', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.main',

  /**
   * Switches satellite map on and off
   */
  onBasemapBtn: function(button, e) {

    var olMap = MalawiAtlas.util.Map.getMap();

    var topo;
    var satellite;
    olMap.getLayers().forEach(function(layer) {
      if (layer.get('lid') == "basemapSatellite") satellite = layer;
      if (layer.get('lid') == "basemapStreet") topo = layer;
    });

    if (topo.getVisible()) {
      button.setText("Topo");
      topo.setVisible(false);
      satellite.setVisible(true);

    } else {
      button.setText("Satellite");
      topo.setVisible(true);
      satellite.setVisible(false);
    }
  },

  /**
   * Reads the extent from the records and zooms to it
   */
  comboZoomToExtent: function(combo, record, eOpts) {

    // format geometry
    var geometry = record.get('geometry');
    var format = new ol.format.GeoJSON({
      featureProjection: 'EPSG:3857'
    });
    var geoJsonGeom = format.readGeometry(geometry);

    MalawiAtlas.util.Map.zoomToExtent(geoJsonGeom);
  },




  /**
   * Opens a window with the print settings
   */
  onPrintButton: function(button, e) {

    // create and open a window with a form inside
    Ext.create('Ext.window.Window', {
      title: 'Print Settings',
      closable: true,
      items: [{
        xtype: 'ma-print-form'
      }],
      x: 235
    }).show();
  }
});
