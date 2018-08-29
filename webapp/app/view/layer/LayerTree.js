Ext.define('MalawiAtlas.view.layer.LayerTree', {
  extend: 'Ext.tree.Panel',
  xtype: 'ma-layertree',

  requires: [
    'MalawiAtlas.controller.layer.LayerTreeController',
  ],

  controller: 'malawilayertree',

  title: 'Layer Tree',
  width: 300,
  height: 250,

  rootVisible: false,
  flex: 1,
  border: false,
  collapsible: true,
  collapsed: false,
  listeners: {
    'itemclick': function(view, record, item, index, e, eOpts) {

      // TODO: replace with button, because info shows also when layer is toggled

      // TODO: other formats GeoJSON, GeoPackage?
      var shapefileURL = 'http://isi.zgis.at/geoserver/malawi/ows?service=WFS&version=1.0.0&request=GetFeature&outputFormat=shape-zip&typeName=malawi:' + record.data.get('lid');

      // TODO: disable button on raster files --> no simple export possible, or export via WMS (GeoTiff)

      // TODO: add metadata to LayerJSON

      // TODO: add download URLs to LayerJSON (TIF, GeoJSON, Shapefile, GeoPackage)

      // TODO: disable window on "leafs"

      var infoWindow = Ext.create('Ext.window.Window', {
        title: 'Layer Info',
        items: [{
            xtype: 'displayfield',
            value: record.data.get('name'),
          },
          {
            xtype: 'button',
            text: 'Download',
            handler: function() {
              window.open(
                shapefileURL, '_blank'
              );
            }
          }
        ],
        closable: true,
        x: 235,
        padding: 5,
        width: 200,
        height: 200
      });
      // activate once the TODOs are fixed
      //  infoWindow.show();

      // TODO: Open window. content:
      // * Layer name
      // * MetaData
      // * DownLoad Link (WFS)
    }
  },


  initComponent: function() {
    var me = this;

    var olMap = MalawiAtlas.util.Map.getMap();

    // TODO: use top level GeoExt function like in legend
    var layerArray = [];
    olMap.getLayers().forEach(function(layer) {
      if (layer.get('basemap') != true && layer.get('measurementLayer') != true) layerArray.push(layer);
    });

    var treeStore = Ext.create('GeoExt.data.store.LayersTree', {
      layerGroup: new ol.layer.Group({
        title: "Mein Titel",
        layers: layerArray
      })
    });

    me.store = treeStore;

    me.expandAll();

    me.callParent();
  }
});
