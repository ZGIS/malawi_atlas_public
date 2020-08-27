Ext.define("MalawiAtlas.view.main.Main", {
  extend: "Ext.panel.Panel",
  xtype: "app-main",

  requires: [
    "Ext.plugin.Viewport",
    "Ext.window.MessageBox",
    "MalawiAtlas.controller.main.Main",
    "MalawiAtlas.view.map.BasemapButton",
    "MalawiAtlas.view.map.ZoomToExtent",
    "MalawiAtlas.store.Districts",
    "MalawiAtlas.store.TraditionalAuthorities",
  ],

  controller: "main",

  layout: "border",

  initComponent: function () {
    var me = this;

    // read properties from config file
    Ext.Ajax.request({
      url: "resources/config.json",
      success: function (response) {
        var configJson = Ext.decode(response.responseText);

        var parentGroups = configJson.MalawiAtlasLayers.parentGroups;

        parentGroupLayers = [];
        parentGroups.forEach(function (parentGroup) {
          var groupLayers = [];

          var groups = parentGroup.groups;
          groups.forEach(function (group) {
            wmsLayers = [];

            var layers = group.layers;
            layers.forEach(function (layer) {
              // assign properties of group
              var groupDescription = group.group_description;
              if (groupDescription) {
                layer.description = groupDescription;
              }
              var fieldAliases = group.field_aliases;
              if (fieldAliases) {
                layer.field_aliases = fieldAliases;
              }

              var wmsLayer = MalawiAtlas.util.Map.createWMSLayerFromJSON(layer);

              wmsLayers.push(wmsLayer);
            }); // end - layer

            var groupLayer = new ol.layer.Group({
              name: group.groupName,
              layers: wmsLayers,
            });
            groupLayers.push(groupLayer);
          }); // end - group

          var parentGroupLayer = new ol.layer.Group({
            name: parentGroup.parentGroupName,
            layers: groupLayers,
          });
          parentGroupLayers.push(parentGroupLayer);
        }); // end - parent group

        // has to be at the bottom of all layers
        var baseLayers = [
          new ol.layer.Tile({
            lid: "basemapSatellite",
            basemap: true,
            visible: false,
            source: new ol.source.XYZ({
              url:
                "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
              attributions:
                "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
            }),
          }),
          new ol.layer.Tile({
            lid: "basemapStreet",
            visible: true,
            basemap: true,
            source: new ol.source.OSM(),
          }),
        ];

        layers = baseLayers.concat(parentGroupLayers);

        Ext.each(layers, function (layer) {
          if (layer) {
            me.olMap.addLayer(layer);
          }
        });

        // set Layer Tree

        layerTree = Ext.ComponentQuery.query("ma-layertree")[0];

        var layerArray = [];
        me.olMap.getLayers().forEach(function (layer) {
          if (
            layer.get("basemap") != true &&
            layer.get("measurementLayer") != true
          )
            layerArray.push(layer);
        });

        var store = Ext.create("GeoExt.data.store.LayersTree", {
          layerGroup: new ol.layer.Group({
            layers: layerArray,
          }),
        });

        layerTree.setStore(store);

        // LEGEND

        var leg = Ext.ComponentQuery.query("ma-legend")[0];

        var flatLayers = MalawiAtlas.util.Map.getFlatLayerList();

        Ext.each(
          flatLayers,
          function (layer) {
            var height;

            if (layer.get("legendHeight")) {
              height = layer.get("legendHeight");
            }

            leg.add({
              itemId: "text_" + layer.get("lid"),
              xtype: "displayfield",
              value: layer.get("title"),
              layerRef: layer.get("lid"),
              hidden: layer.getVisible() === false,
            });

            leg.add({
              xtype: "image",
              src: layer.get("legend"),
              layerRef: layer.get("lid"),
              hidden: layer.getVisible() === false,
              height: height,
            });
          },
          this,
          true // <---REVERSE
        );

        Ext.each(flatLayers, function (layer) {
          layer.on("change:visible", function (evt) {
            var layer = evt.target;
            var lid = layer.get("lid");
            if (layer.getVisible()) {
              // TODO: make more elegant!!
              leg.items.each(function (item) {
                if (item.layerRef === lid) {
                  item.show();
                }
              });
            } else {
              // TODO: make more elegant!!
              leg.items.each(function (item) {
                if (item.layerRef === lid) {
                  item.hide();
                }
              });
            }
          });
        });

        // THEMATIC MAP

        var thematicGroupItems = configJson.MalawiAtlasLayers.thematicGroups;

        var comboBoxArray = [];
        Object.keys(thematicGroupItems).forEach(function (key) {
          var thematicGroupParams = thematicGroupItems[key];
          var name = thematicGroupParams.name;
          var extent = thematicGroupParams.extent;
          comboBoxArray.push({
            name: name,
            extent: extent,
            thematicGroup: key,
          });
        });

        comboStore = Ext.create("Ext.data.Store", {
          fields: ["name", "extent"],
          data: comboBoxArray,
        });

        var thematicGroupsComp = Ext.ComponentQuery.query(
          "ma-thematic-group-combobox"
        )[0];

        thematicGroupsComp.setStore(comboStore);
      },
    });
    me.callParent();

    me.mapCmp = Ext.ComponentQuery.query("ma-mappanel")[0];
    me.olMap = me.mapCmp.map;
  },

  items: [
    {
      region: "north",
      frame: false,
      tbar: {
        defaults: {
          scale: "medium",
        },
        items: [
          {
            xtype: "image",
            src: "resources/images/heading.png",
            // resize image
            width: 483 / 2,
            height: 82 / 2,
            listeners: {
              el: {
                click: function () {
                  location.reload();
                },
              },
            },
          },
          "->",
          {
            xtype: "ma-thematic-group-combobox",
          },
          {
            xtype: "button",
            text: "Measure",
            requires: ["MalawiAtlas.controller.map.MeasureButtonController"],
            controller: "measureButton",
            iconCls: "x-fa fa-arrows-h",
            menu: new Ext.menu.Menu({
              items: [
                {
                  iconCls: "x-fa fa-square-o",
                  text: "Area",
                  measureType: "Polygon",
                  listeners: {
                    click: "onMeasureClick",
                  },
                },
                {
                  iconCls: "x-fa fa-arrows-h",
                  text: "Distance",
                  measureType: "LineString",
                  listeners: {
                    click: "onMeasureClick",
                  },
                },
              ],
            }),
          },
          {
            xtype: "button",
            text: "Print",
            iconCls: "x-fa fa-print",
            menu: new Ext.menu.Menu({
              items: [
                {
                  xtype: "ma-print-form",
                },
              ],
            }),
          },
          {
            xtype: "button",
            text: "Zoom",
            iconCls: "x-fa fa-search",
            menu: new Ext.menu.Menu({
              referenceHolder: true,
              viewModel: true,
              items: [
                {
                  text: "Malawi",
                  iconCls: "ma-zoom-malawi",
                  listeners: {
                    click: function () {
                      MalawiAtlas.util.Map.zoomToExtent([
                        3650738,
                        -1945482,
                        4053741,
                        -1032934,
                      ]);
                    },
                  },
                },
                "-",
                {
                  xtype: "combobox",
                  id: "district_id",
                  reference: "districts",
                  emptyText: "District",
                  displayField: "districtName",
                  publishes: "value",
                  valueField: "districtName",
                  store: {
                    type: "districts",
                  },
                  minChars: 0,
                  queryMode: "remote",
                  typeAhead: true,
                  listeners: {
                    select: "comboZoomToExtent",
                  },
                  indent: false,
                },
                {
                  xtype: "combobox",
                  id: "ta_id",
                  reference: "traditionalauthorities",
                  emptyText: "Traditional Authorities",
                  displayField: "taName",
                  forceSelection: true,
                  bind: {
                    filters: {
                      property: "districtName",
                      value: "{districts.value}",
                    },
                  },
                  store: {
                    type: "traditionalauthorities",
                  },
                  minChars: 0,
                  queryMode: "remote",
                  typeAhead: true,
                  listeners: {
                    select: "comboZoomToExtent",
                  },
                  indent: false,
                },
              ],
            }),
          },
          {
            text: "Reports",
            iconCls: "x-fa fa-file",
            menu: {
              items: [
                {
                  text: "Resilience Assessment to food insecurity - Salima",
                  iconCls: "x-fa fa-file",
                  listeners: {
                    click: function () {
                      window.open(
                        "resources/pdf/Report_RA_Salima_20140327.pdf",
                        "_blank"
                      );
                    },
                  },
                },
                {
                  text: "Vulnerability Assessment to floods - Salima",
                  iconCls: "x-fa fa-file",
                  listeners: {
                    click: function () {
                      window.open(
                        "resources/pdf/Report_VA_Salima_20140327.pdf",
                        "_blank"
                      );
                    },
                  },
                },
                {
                  text: "Guidelines UAV",
                  iconCls: "x-fa fa-file",
                  listeners: {
                    click: function () {
                      window.open(
                        "resources/pdf/D_3_1_Guidelines_UAV.pdf",
                        "_blank"
                      );
                    },
                  },
                },
                {
                  text: "Systematization UAV",
                  iconCls: "x-fa fa-file",
                  listeners: {
                    click: function () {
                      window.open(
                        "resources/pdf/D_3_3_Systematization_UAV.pdf",
                        "_blank"
                      );
                    },
                  },
                },
                {
                  text: "ECHO STRIM Baseline Consolidated Report",
                  iconCls: "x-fa fa-file",
                  listeners: {
                    click: function () {
                      window.open(
                        "resources/pdf/ECHO STRIM Baseline Consolidated Report 101219.pdf",
                        "_blank"
                      );
                    },
                  },
                },
                {
                  text: "ECHO STRIM EVCA Consolidated Report",
                  iconCls: "x-fa fa-file",
                  listeners: {
                    click: function () {
                      window.open(
                        "resources/pdf/ECHO STRIM EVCA Consolidated Report 101219.pdf",
                        "_blank"
                      );
                    },
                  },
                },
                {
                  text: "Karonga ECHO STRIM eVCA Report",
                  iconCls: "x-fa fa-file",
                  listeners: {
                    click: function () {
                      window.open(
                        "resources/pdf/Karonga ECHO STRIM eVCA Report.pdf",
                        "_blank"
                      );
                    },
                  },
                },
                {
                  text: "Lilongwe ECHO STRIM eVCA Report",
                  iconCls: "x-fa fa-file",
                  listeners: {
                    click: function () {
                      window.open(
                        "resources/pdf/Lilongwe ECHO STRIM eVCA Report.pdf",
                        "_blank"
                      );
                    },
                  },
                },
                {
                  text: "Mzuzu ECHO STRIM eVCA Report",
                  iconCls: "x-fa fa-file",
                  listeners: {
                    click: function () {
                      window.open(
                        "resources/pdf/Mzuzu ECHO STRIM eVCA Report.pdf",
                        "_blank"
                      );
                    },
                  },
                },
              ],
            },
          },
          {
            xtype: "button",
            iconCls: "x-fa fa-question-circle",
            menu: new Ext.menu.Menu({
              items: [
                {
                  text: "Documentation",
                  iconCls: "x-fa fa-question-circle",
                  listeners: {
                    click: function () {
                      window.open("https://www.gis-malawi.com/docs/", "_blank");
                    },
                  },
                },
                {
                  text: "Source Code",
                  iconCls: "x-fa fa-code",
                  listeners: {
                    click: function () {
                      window.open(
                        "https://github.com/zgis/malawi_atlas_public",
                        "_blank"
                      );
                    },
                  },
                },
              ],
            }),
          },
          {
            xtype: "image",
            src: "resources/images/logo_eu.png",
            width: (1.4 * 3345) / 81.65,
            height: (1.4 * 3266) / 81.65,
          },
          {
            xtype: "image",
            src: "resources/images/logo_malawi_government.png",
            width: 40,
            height: 40,
          },
          {
            xtype: "image",
            src: "resources/images/logo_coopi.jpeg",
            width: 1320 / 13.55,
            height: 542 / 13.55,
          },
          {
            xtype: "image",
            src: "resources/images/logo_concern_worldwide.gif",
            width: (0.8 * 434) / 3.675,
            height: (0.8 * 147) / 3.675,
          },
          {
            xtype: "image",
            src: "resources/images/logo_zgis.jpg",
            width: (0.7 * 132) / 1.275,
            height: (0.7 * 51) / 1.275,
          },
        ],
      },
    },

    // map
    {
      region: "center",
      xtype: "panel",
      layout: "absolute",
      frame: true,
      flex: 1,
      items: [
        {
          xtype: "ma-mappanel",
          anchor: "100% 100%",
        },
        {
          xtype: "ma-basemap-button",
        },
      ],
    },

    // left side-bar
    {
      xtype: "panel",
      region: "west",
      width: 400,
      layout: {
        type: "vbox",
        pack: "start",
        align: "stretch",
      },
      scrollable: "y",
      items: [
        {
          title: "Layers",

          xtype: "ma-layertree",
          bodyBorder: false,
        },
        {
          xtype: "ma-feature-info-panel",
        },
      ],
    },

    // legend
    // TODO ENABLE AGAIN
    {
      region: "east",
      title: "Legend",
      width: 180,
      scrollable: "y",
      items: [
        {
          xtype: "ma-legend",
        },
      ],
    },
  ],
});
