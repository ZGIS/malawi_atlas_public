Ext.define("MalawiAtlas.controller.main.Main", {
  extend: "Ext.app.ViewController",
  alias: "controller.main",

  /**
   * Switches satellite map on and off
   */
  onBasemapBtn: function (button, e) {
    var olMap = MalawiAtlas.util.Map.getOlMap();

    var topo;
    var satellite;
    olMap.getLayers().forEach(function (layer) {
      if (layer.get("lid") == "basemapSatellite") satellite = layer;
      if (layer.get("lid") == "basemapStreet") topo = layer;
    });

    if (topo.getVisible()) {
      button.setText("Topo");
      button.setIconCls("x-fa fa-map-o");
      topo.setVisible(false);
      satellite.setVisible(true);
    } else {
      button.setText("Satellite");
      button.setIconCls("x-fa fa-globe");
      topo.setVisible(true);
      satellite.setVisible(false);
    }
  },

  /**
   * Reads the extent from the records and zooms to it
   */
  comboZoomToExtent: function (combo, record, eOpts) {
    // format geometry
    var geometry = record.get("geometry");
    var format = new ol.format.GeoJSON({
      featureProjection: "EPSG:3857"
    });

    var geoJsonGeom = format.readGeometry(geometry);
    MalawiAtlas.util.Map.zoomToExtent(geoJsonGeom);

    // delete combobox selection when map is dragged
    MalawiAtlas.util.Map.getOlMap().on("pointerdrag", function (evt) {
      Ext.getCmp("ta_id").setValue(null);
      Ext.getCmp("district_id").setValue(null);
    });
  }
});
