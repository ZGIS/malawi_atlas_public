Ext.define('MalawiAtlas.store.Districts', {
  extend: 'Ext.data.Store',

  alias: 'store.districts',
  storeId: 'districts',

  proxy: {
    type: 'ajax',
    url: 'http://isi.zgis.at/geoserver/malawi/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=malawi:malawi_district&outputFormat=application%2Fjson',

    reader: {
      type: 'json',
      rootProperty: 'features'
    }
  },
  fields: ['type', 'id', 'geometry', 'geometry_name', 'properties',
    {
      name: 'districtName',
      mapping: 'properties.admin3'
    }
  ],
  autoLoad: true,
  sorters: ['districtName']

});
