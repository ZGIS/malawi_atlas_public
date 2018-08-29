// source: https://github.com/cawa-uw-sic/wuemoca/blob/d5b2c66e68dbf56e9bb3f15bae7520a29945dea9/app/view/satellite/Button.js
Ext.define('MalawiAtlas.view.map.BasemapButton', {
  extend: 'Ext.button.Button',

  xtype: 'ma-satellite-button',

  itemId: 'satellite-button',

  id: 'satellite-button',

  text: "Satellite",
  // height: 50,
  width: 100,
  scale: 'small',

  handler: 'onBasemapBtn'

  //TODO: add listener

});
