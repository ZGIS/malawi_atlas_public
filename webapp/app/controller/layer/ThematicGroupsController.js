Ext.define('MalawiAtlas.controller.layer.ThematicGroupsController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.main-thematicgroups',

  requires: ['MalawiAtlas.view.chart.VulnerbilityAndResilienceIndexChart', 'Ext.window.Window'],

  /**
   * Loads layer of thematic group
   */
  onThematicGroupClick: function(btn) {
    var me = this;

    // Zoom to area
    var extent = btn.thematicGroupParams.extent;
    MalawiAtlas.util.Map.zoomToExtent(extent);

    // make layers visible or invisible
    var flatLayerList = MalawiAtlas.util.Layer.getFlatLayerList();
    flatLayerList.forEach(function(layer) {

      if (btn.thematicGroupKey === layer.get('thematicGroup')) {
        layer.setVisible(true);
      } else {
        layer.setVisible(false);
      }
    });
  }
});
