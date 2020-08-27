Ext.define("MalawiAtlas.util.Layer", {
  singleton: true,

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
  }
});
