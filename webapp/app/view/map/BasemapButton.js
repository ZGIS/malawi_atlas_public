// source: https://github.com/cawa-uw-sic/wuemoca/blob/d5b2c66e68dbf56e9bb3f15bae7520a29945dea9/app/view/satellite/Button.js
Ext.define("MalawiAtlas.view.map.BasemapButton", {
  extend: "Ext.button.Button",

  xtype: "ma-basemap-button",

  id: "basemap-button",

  iconCls: "x-fa fa-globe",

  text: "Satellite",

  width: 100,
  scale: "small",

  handler: "onBasemapBtn"
});
