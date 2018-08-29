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

  defaults: {
    bodyPadding: 5
  },

  header: {
    height: 50,

    title: "Malawi Atlas",

    defaults: {
      margin: '0 10 0 0'
    },

    items: [{
        xtype: 'button',
        text: 'Source Code',
        scale: 'small',
        iconCls: 'x-fa fa-github',
        handler: function() {
          window.open(
            'https://github.com/zgis/malawi_atlas_public', '_blank'
          );
        }
      },
      {
        xtype: 'image',
        src: 'resources/images/logo_gi4drr.jpg',
        width: 180,
        height: 40
      },
      {
        xtype: 'image',
        src: 'resources/images/logo_malawi_government.png',
        width: 40,
        height: 40
      }
    ]
  },

  items: [{
      id: 'middle-column',
      region: 'center',
      xtype: 'panel',
      layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
      },

      defaults: {
        frame: false
      },
      items: [{
          xtype: 'toolbar',
          items: [{
              xtype: 'ma-map-measuretool',
              collapsible: false,
              margin: '0 0 10 0',
            },
            '-',
            {
              xtype: 'button',
              text: 'Print',
              scale: 'small',
              iconCls: 'x-fa fa-print',
              handler: 'onPrintButton'
            }
          ]
        },
        {
          itemId: 'map-container',
          id: 'map-panel',
          layout: 'absolute',
          flex: 1,

          items: [{
            xtype: 'ma-mappanel',
            anchor: '100% 100%'
          }, {
            xtype: 'ma-satellite-button'
          }]
        }
      ]
    },

    // side-bar
    {
      xtype: 'panel',
      region: 'west',
      collapsible: false,
      width: 400,
      layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
      },
      scrollable: 'y',
      defaults: {
        frame: true,
        bodyPadding: 10,
        margin: '0 0 10 0 '
      },
      items: [{
          xtype: 'ma-map-zoom-to-exent',
        }, {
          xtype: 'ma-thematicgrouppanel'
        }, {
          xtype: 'ma-layertree',
        },
        {
          xtype: 'ma-feature-info-panel',
        }
      ]
    },


    // legend images
    {
      xtype: 'ma-legend',
      region: 'east',
      title: 'Legend',
      collapsible: false,
      collapsed: false,
      width: 180,
      frame: true
    }
  ]
});
