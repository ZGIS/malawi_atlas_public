/**
 * Container for charts and features information
 * hidden initially
 */
Ext.define("MalawiAtlas.view.featureinfo.FeatureInfo", {
  extend: "Ext.panel.Panel",

  xtype: "ma-feature-info-panel",
  title: "Feature Info",
  closable: true,
  layout: "vbox",
  height: 500,
  scrollable: "vertical",

  defaults: {
    padding: 10,
  },

  hidden: true,

  // panel shall not be destroyed on close
  closeAction: "hide",
});
