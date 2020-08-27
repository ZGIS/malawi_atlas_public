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
    "MalawiAtlas.store.TraditionalAuthorities"
  ],

  controller: "main",

  layout: "border",

  initComponent: function () {
    var me = this;

    // read properties from config file
    Ext.Ajax.request({
      url: "resources/config_simple.json",
      success: function (response) {
        var layerJson = Ext.decode(response.responseText);

        var parentGroups = layerJson.MalawiAtlasLayers.parentGroups;

        function createWMSLayerFromJSON(layerJSON) {
          // some layers need a different height
          var legendHeight;
          if (layerJSON.legendHeight) {
            legendHeight = layerJSON.legendHeight;
          }

          // TODO: Read URL from config
          var legend =
            "https://www.gis-malawi.com/geoserver/wms?" +
            "&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetLegendGraphic" +
            "&FORMAT=image/png&LAYER=malawi_atlas:" +
            layerJSON.name;
          var resultLayer;
          if (layerJSON.useImageWmsInsteadOfTileWMS) {
            // prevent rendering problems with the pie charts.
            resultLayer = new ol.layer.Image({
              source: new ol.source.ImageWMS({
                url: "https://www.gis-malawi.com/geoserver/malawi_atlas/wms",
                params: {
                  LAYERS: layerJSON.name
                },
                serverType: "geoserver",
                crossOrigin: ""
              })
            });
          } else {
            resultLayer = new ol.layer.Tile({
              source: new ol.source.TileWMS({
                url: "https://www.gis-malawi.com/geoserver/malawi_atlas/wms",
                params: {
                  LAYERS: layerJSON.name,
                  TILED: true
                },
                serverType: "geoserver",
                crossOrigin: ""
              })
            });
          }

          // set layer properties
          resultLayer.set("dataqtip", layerJSON.dataqtip);
          resultLayer.set("description", layerJSON.description);
          resultLayer.set(
            "feature_info_activated",
            layerJSON.feature_info_activated
          );
          resultLayer.set("field_aliases", layerJSON.field_aliases);
          resultLayer.set("group", layerJSON.group);
          resultLayer.set("layer_extent", layerJSON.layer_extent);
          resultLayer.set("layer_source", layerJSON.layer_source);
          resultLayer.set("legend", legend);
          resultLayer.set("legendHeight", legendHeight);
          resultLayer.set("lid", layerJSON.name); // layer ID
          resultLayer.set("name", layerJSON.title); // only for display in layer tree
          resultLayer.set("opacity", layerJSON.opacity);
          resultLayer.set("parentGroup", layerJSON.parentGroup);
          resultLayer.set("raster_properties", layerJSON.raster_properties);
          resultLayer.set("thematicGroup", layerJSON.thematicGroup);
          resultLayer.set("title", layerJSON.title); // use title instead of name, because of consistency
          resultLayer.set("visible", false);
          resultLayer.set("year", layerJSON.year);

          return resultLayer;
        }

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

              var wmsLayer = createWMSLayerFromJSON(layer);

              wmsLayers.push(wmsLayer);
            }); // end - layer

            var groupLayer = new ol.layer.Group({
              name: group.groupName,
              layers: wmsLayers
            });
            groupLayers.push(groupLayer);
          }); // end - group

          var parentGroupLayer = new ol.layer.Group({
            name: parentGroup.parentGroupName,
            layers: groupLayers
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
                "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            })
          }),
          new ol.layer.Tile({
            lid: "basemapStreet",
            visible: true,
            basemap: true,
            source: new ol.source.OSM()
          })
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
            layers: layerArray
          })
        });

        layerTree.setStore(store);
      }
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
          scale: "medium"
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
                }
              }
            }
          },
          "->",
          // {
          //   xtype: "ma-thematic-group-combobox"
          // },
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
                    click: "onMeasureClick"
                  }
                },
                {
                  iconCls: "x-fa fa-arrows-h",
                  text: "Distance",
                  measureType: "LineString",
                  listeners: {
                    click: "onMeasureClick"
                  }
                }
              ]
            })
          },
          {
            xtype: "button",
            text: "Print",
            iconCls: "x-fa fa-print",
            menu: new Ext.menu.Menu({
              items: [
                {
                  xtype: "ma-print-form"
                }
              ]
            })
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
                        -1032934
                      ]);
                    }
                  }
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
                    type: "districts"
                  },
                  minChars: 0,
                  queryMode: "remote",
                  typeAhead: true,
                  listeners: {
                    select: "comboZoomToExtent"
                  },
                  indent: false
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
                      value: "{districts.value}"
                    }
                  },
                  store: {
                    type: "traditionalauthorities"
                  },
                  minChars: 0,
                  queryMode: "remote",
                  typeAhead: true,
                  listeners: {
                    select: "comboZoomToExtent"
                  },
                  indent: false
                }
              ]
            })
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
                    }
                  }
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
                    }
                  }
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
                    }
                  }
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
                    }
                  }
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
                    }
                  }
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
                    }
                  }
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
                    }
                  }
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
                    }
                  }
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
                    }
                  }
                }
              ]
            }
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
                    }
                  }
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
                    }
                  }
                }
              ]
            })
          },
          {
            xtype: "image",
            src: "resources/images/logo_eu.png",
            width: (1.4 * 3345) / 81.65,
            height: (1.4 * 3266) / 81.65
          },
          {
            xtype: "image",
            src: "resources/images/logo_malawi_government.png",
            width: 40,
            height: 40
          },
          {
            xtype: "image",
            src: "resources/images/logo_coopi.jpeg",
            width: 1320 / 13.55,
            height: 542 / 13.55
          },
          {
            xtype: "image",
            src: "resources/images/logo_concern_worldwide.gif",
            width: (0.8 * 434) / 3.675,
            height: (0.8 * 147) / 3.675
          },
          {
            xtype: "image",
            src: "resources/images/logo_zgis.jpg",
            width: (0.7 * 132) / 1.275,
            height: (0.7 * 51) / 1.275
          }
        ]
      }
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
          anchor: "100% 100%"
        },
        {
          xtype: "ma-basemap-button"
        }
      ]
    },

    // left side-bar
    {
      xtype: "panel",
      region: "west",
      width: 400,
      layout: {
        type: "vbox",
        pack: "start",
        align: "stretch"
      },
      scrollable: "y",
      items: [
        {
          title: "Layers",

          xtype: "ma-layertree",
          bodyBorder: false
        },
        {
          xtype: "ma-feature-info-panel"
        }
      ]
    }

    // legend
    // TODO ENABLE AGAIN
    // {
    //   region: "east",
    //   title: "Legend",
    //   width: 180,
    //   scrollable: "y",
    //   items: [
    //     {
    //       xtype: "ma-legend"
    //     }
    //   ]
    // }
  ]
});
