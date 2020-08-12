/**
 * @author C. Mayer, meggsimum, Jakob Miksch
 */
Ext.define("MalawiAtlas.view.map.MeasureAreaButton", {
  extend: "Ext.button.Button",
  xtype: "ma-map-measure-area-button",
  requires: ["MalawiAtlas.controller.map.MeasureButtonController"],

  controller: "measureButton",

  iconCls: "x-fa fa-square-o",

  text: "Area",

  measureType: "Polygon",

  listeners: {
    click: "onMeasureClick"
  }
});
