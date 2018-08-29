/**
 * Button for zooming the map to its maximum (initial) extent.
 *
 * @author C. Mayer, meggsimum
 */
Ext.define('MalawiAtlas.view.map.MeasureDistanceButton', {
  extend: "Ext.button.Button",
  xtype: 'ma-map-measuredistance-button',
  requires: [
    'MalawiAtlas.controller.map.MeasureButtonController'
  ],

  /** */
  controller: 'measureButton',

  /** */
  iconCls: 'x-fa fa-arrows-h',

  /** */
  text: 'Distance',

  /** */
  pressed: false,

  /** */
  toggleGroup: 'MEASURE',

  /**
   * [measureType description]
   * @type {String}
   */
  measureType: 'LineString',

  /**
   * Listeners bound to our view controller
   */
  listeners: {
    toggle: 'onToggle'
  }
});
