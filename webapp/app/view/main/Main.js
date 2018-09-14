Ext.define('MalawiAtlas.view.main.Main', {
  extend: 'Ext.panel.Panel',
  xtype: 'app-main',

  requires: [
    'Ext.plugin.Viewport',
    'Ext.window.MessageBox',
    'MalawiAtlas.controller.main.Main',
    'MalawiAtlas.view.map.BasemapButton',
    'MalawiAtlas.view.map.ZoomToExtent',
    'MalawiAtlas.store.Districts',
    'MalawiAtlas.store.TraditionalAuthorities'
  ],

  controller: 'main',

  layout: 'border',

  items: [{
      region: 'north',
      frame: false,
      tbar: {
        defaults: {
          scale: 'medium'
        },
        items: [{
            xtype: 'image',
            src: 'resources/images/heading.png',
            // resize image
            width: 787 / 4,
            height: 100 / 4,
            listeners: {
              el: {
                click: function() {
                  location.reload();
                }
              }
            }
          },
          '->',
          {
            xtype: 'ma-thematic-group-combobox',
          },
          {
            xtype: 'button',
            text: 'Measure',
            requires: [
              'MalawiAtlas.controller.map.MeasureButtonController'
            ],
            controller: 'measureButton',
            iconCls: 'x-fa fa-arrows-h',
            menu: new Ext.menu.Menu({
              items: [{
                  iconCls: 'x-fa fa-square-o',
                  text: 'Area',
                  measureType: 'Polygon',
                  listeners: {
                    click: 'onMeasureClick'
                  }
                },
                {
                  iconCls: 'x-fa fa-arrows-h',
                  text: 'Distance',
                  measureType: 'LineString',
                  listeners: {
                    click: 'onMeasureClick'
                  }
                }
              ]
            })
          },
          {
            xtype: 'button',
            text: 'Print',
            iconCls: 'x-fa fa-print',
            menu: new Ext.menu.Menu({
              items: [{
                xtype: 'ma-print-form'
              }]
            })
          },
          {
            xtype: 'button',
            text: 'Zoom',
            iconCls: 'x-fa fa-search',
            menu: new Ext.menu.Menu({
              referenceHolder: true,
              viewModel: true,
              items: [{
                  text: 'Malawi',
                  iconCls: 'ma-zoom-malawi',
                  listeners: {
                    click: function() {
                      MalawiAtlas.util.Map.zoomToExtent([3650738, -1945482, 4053741, -1032934]);
                    }
                  }
                },
                '-', {
                  xtype: 'combobox',
                  id: 'district_id',
                  reference: 'districts',
                  emptyText: 'District',
                  displayField: 'districtName',
                  publishes: 'value',
                  valueField: 'districtName',
                  store: {
                    type: 'districts'
                  },
                  minChars: 0,
                  queryMode: 'remote',
                  typeAhead: true,
                  listeners: {
                    'select': 'comboZoomToExtent'
                  },
                  indent: false
                },
                {
                  xtype: 'combobox',
                  id: 'ta_id',
                  reference: 'traditionalauthorities',
                  emptyText: 'Traditional Authorities',
                  displayField: 'taName',
                  forceSelection: true,
                  bind: {
                    filters: {
                      property: 'districtName',
                      value: '{districts.value}'
                    }
                  },
                  store: {
                    type: 'traditionalauthorities'
                  },
                  minChars: 0,
                  queryMode: 'remote',
                  typeAhead: true,
                  listeners: {
                    'select': 'comboZoomToExtent'
                  },
                  indent: false
                }
              ]
            })
          }, {
            text: 'Reports',
            iconCls: 'x-fa fa-file',
            menu: {
              items: [{
                  text: 'Resilience Assessment to food insecurity - Salima',
                  iconCls: 'x-fa fa-file',
                  listeners: {
                    click: function() {
                      window.open(
                        'resources/pdf/Report_RA_Salima_20140327.pdf', '_blank'
                      );
                    }
                  }
                },
                {
                  text: 'Vulnerability Assessment to floods - Salima',
                  iconCls: 'x-fa fa-file',
                  listeners: {
                    click: function() {
                      window.open(
                        'resources/pdf/Report_VA_Salima_20140327.pdf', '_blank'
                      );
                    }
                  }
                }
              ]
            }
          },
          {
            xtype: 'button',
            iconCls: 'x-fa fa-question-circle',
            menu: new Ext.menu.Menu({
              items: [

                {
                  text: 'Source Code',
                  iconCls: 'x-fa fa-code',
                  listeners: {
                    click: function() {
                      window.open(
                        'https://github.com/zgis/malawi_atlas_public', '_blank'
                      );
                    }
                  }
                }
              ]
            })
          },
          {
            xtype: 'image',
            src: 'resources/images/logo_malawi_government.png',
            width: 40,
            height: 40
          }
        ]
      },
    },

    // map
    {
      region: 'center',
      xtype: 'panel',
      layout: 'absolute',
      frame: true,
      flex: 1,
      items: [{
        xtype: 'ma-mappanel',
        anchor: '100% 100%'
      }, {
        xtype: 'ma-basemap-button'
      }]
    },

    // left side-bar
    {
      xtype: 'panel',
      region: 'west',
      width: 400,
      layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
      },
      scrollable: 'y',
      items: [{
        title: 'Layers',

        xtype: 'ma-layertree',
        bodyBorder: false
      }, {
        xtype: 'ma-feature-info-panel'
      }]
    },

    // legend
    {
      region: 'east',
      title: 'Legend',
      width: 180,
      scrollable: 'y',
      items: [{
        xtype: 'ma-legend'
      }]
    }
  ]
});
