Ext.define('MalawiAtlas.store.TraditionalAuthorities', {
  extend: 'Ext.data.Store',

  alias: 'store.traditionalauthorities',
  storeId: 'traditionalauthorities',

  proxy: {
    type: 'ajax',
    url: 'http://195.201.223.241/geoserver/malawi_atlas/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=malawi:malawi_traditional_authority&outputFormat=application%2Fjson',

    reader: {
      type: 'json',
      rootProperty: 'features'
    }
  },
  fields: ['type', 'id', 'geometry', 'geometry_name', 'properties',
    {
      name: 'taName',
      mapping: 'properties.name1_'
    },
    {
      name: 'districtName',
      mapping: 'properties.name2_'
    }
  ],
  autoLoad: true,
  sorters: ['taName']


});
