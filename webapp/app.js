Ext.application({
  name: "MalawiAtlas",

  extend: "MalawiAtlas.Application",

  requires: ["MalawiAtlas.view.main.Main", "Ext.tab.Panel"],

  mainView: "MalawiAtlas.view.main.Main",
});
