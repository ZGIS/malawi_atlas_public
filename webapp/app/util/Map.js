var olMap = new ol.Map({
  layers: MalawiAtlas.util.Layer.layers,
  controls: ol.control.defaults({
    attributionOptions: {
      collapsible: false,
      collapsed: false
    }
  }),
  view: new ol.View({
    center: ol.proj.fromLonLat([34.3, -13.2]),
    zoom: 7
  })
});

var baselayers = [];
olMap.getLayers().forEach(function(layer) {
  if (layer.get('basemap') == true) baselayers.push(layer);
});

olMap.addControl(
  new ol.control.OverviewMap({
    layers: baselayers,
    // TODO: if not collapse, map is empty
    //collapsed: false
  }));

olMap.addControl(new ol.control.ScaleLine());


Ext.define('MalawiAtlas.util.Map', {

  singleton: true,
  map: olMap,

  /**
   * Zooms to extent
   */
  zoomToExtent: function(extent) {
    me = this;

    var view = me.map.getView();
    view.fit(extent, {
      duration: 2000,
      nearest: true
    });

  },

  /**
   * Returns the OpenLayers map object
   */
  getMap: function() {
    me = this;
    return me.map;
  }
});
