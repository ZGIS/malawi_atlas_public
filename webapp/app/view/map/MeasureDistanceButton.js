/**
 * @author C. Mayer, meggsimum, Jakob Miksch
 */
Ext.define("MalawiAtlas.view.map.MeasureDistanceButton", {
  extend: "Ext.button.Button",
  xtype: "ma-map-measure-distance-button",
  requires: ["MalawiAtlas.controller.map.MeasureButtonController"],

  controller: "measureButton",

  iconCls: "x-fa fa-arrows-h",

  text: "Distance",

  measureType: "LineString",

  listeners: {
    click: "onMeasureClick"
  }
});
