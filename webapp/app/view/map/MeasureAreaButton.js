/**
 * Button for zooming the map to its maximum (initial) extent.
 *
 * @author C. Mayer, meggsimum
 */
Ext.define('MalawiAtlas.view.map.MeasureAreaButton', {
  extend: "Ext.button.Button",
  xtype: 'ma-map-measurearea-button',
  requires: [
    'MalawiAtlas.controller.map.MeasureButtonController'
  ],

  /** */
  controller: 'measureButton',

  /** */
  iconCls: 'x-fa fa-square-o',

  /** */
  text: 'Area',

  /** */
  pressed: false,

  /** */
  toggleGroup: 'MEASURE',

  /**
   * [measureType description]
   * @type {String}
   */
  measureType: 'Polygon',

  /**
   * Listeners bound to our view controller
   */
  listeners: {
    toggle: 'onToggle'
  }
});
