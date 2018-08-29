Ext.define('MalawiAtlas.view.map.ZoomToExtent', {
  extend: 'Ext.panel.Panel',
  xtype: 'ma-map-zoom-to-exent',
  title: 'Zoomt to Extent',

  requires: [
    'MalawiAtlas.controller.main.Main',
  ],

  controller: 'main',

  referenceHolder: true,
  viewModel: true,
  collapsible: true,
  items: [{
      xtype: 'combobox',
      reference: 'districts',
      fieldLabel: 'District',
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
      }
    },
    {
      xtype: 'combobox',
      reference: 'traditionalauthorities',
      fieldLabel: 'Traditional Authorities:',
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
      }
    }
  ]

});
