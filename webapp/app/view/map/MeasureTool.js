/**
 * Button group holding the measure tools for distance and area
 *
 * @author C. Mayer, meggsimum
 */
Ext.define('MalawiAtlas.view.map.MeasureTool', {
  extend: 'Ext.panel.Panel',
  xtype: 'ma-map-measuretool',
  requires: [
    'Ext.window.Window',
    'MalawiAtlas.view.map.Map',
    'MalawiAtlas.view.map.MeasureDistanceButton',
    'MalawiAtlas.view.map.MeasureAreaButton'
  ],



  /**
   * The OpenLayers map
   */
  olMap: null,

  /**
   * Little window to show measure results
   */
  resultWin: null,

  /**
   * OL vector source for layer to draw measure sketches
   */
  vectorSource: null,

  /**
   * OL layer to draw measure sketches
   */
  vectorLayer: null,

  collapsible: true,

  defaults: {
    margin: '0 5 0 0'
  },

  /** The 2 buttons for length and area measurement */
  items: [{
    xtype: 'ma-map-measuredistance-button'
  }, {
    xtype: 'ma-map-measurearea-button'
  }],

  initComponent: function() {
    var me = this;
    // get the map component and the ol map

    me.olMap = MalawiAtlas.util.Map.map;

    // layer to draw measure sketches
    me.vectorSource = new ol.source.Vector();
    me.vectorLayer = new ol.layer.Vector({
      displayInLayerTree: false,
      measurementLayer: true,
      source: me.vectorSource,
      style: new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(255, 20, 20, 0.2)'
        }),
        stroke: new ol.style.Stroke({
          color: '#ff0033',
          width: 2,
          lineDash: [10, 10]
        }),
        image: new ol.style.Circle({
          radius: 7,
          fill: new ol.style.Fill({
            color: '#ff0033'
          })
        })
      })
    });
    me.olMap.addLayer(me.vectorLayer);

    // little window to show measure results
    me.resultWin = Ext.create('Ext.window.Window', {
      title: 'Result',
      closable: false,
      x: 235,
      padding: 5,
      height: 75,
      width: 200,
      height: 200
    });

    me.callParent();

    // make child buttons accesible via members
    me.distanceBtn = me.down('ma-map-measuredistance-button');
    me.areaBtn = me.down('ma-map-measurearea-button');
  },

  /**
   * Checks if there at least one button pressed in this button group
   *
   * @return {Boolean} min. one button pressed? ==> true otherwise false
   */
  hasOnePressedButton: function() {
    var me = this;
    return me.distanceBtn.pressed === true || me.areaBtn.pressed === true;
  }
});
