Ext.define("MalawiAtlas.controller.printing.PrintFormController", {
  extend: "Ext.app.ViewController",
  alias: "controller.ma-print-form",

  resetValues: function (btn) {
    var me = this;
    var form = me.getView().getForm();
    form.setValues({
      title: null,
      comment: null
    });
  },

  /**
   * Takes the user input and the parameters from the map,
   * builds a JSON and sends it to the print module of GeoServer
   */
  onPrintSubmit: function (btn) {
    var me = this;

    // TODO: handle case of too many layers
    // if the user selects too many layers
    // the map creation crashes

    // access values of form
    var form = me.getView().getForm();
    var values = form.getValues();

    // values may be null,
    // it simply causes an empty title and comment
    // but the PDF is still created normally
    var mapTitle = values.title;
    var comment = values.comment;

    // extent of current map view
    var olView = MalawiAtlas.util.Map.getOlMap().getView();
    var olExtent = olView.calculateExtent();

    // all layers
    var layers = MalawiAtlas.util.Layer.getFlatLayerList();

    // container arrays
    var layerIDs = [];
    var legendItems = [];

    layers.forEach(function (layer) {
      if (layer.getVisible()) {
        var layerID = layer.get("lid");
        var legendUrl = layer.get("legend");
        var layerName = layer.get("name");

        // build legend item
        var legendItem = {
          icons: [legendUrl],
          name: layerName,
          iconBeforeName: false
        };

        // add items to their arrays
        layerIDs.push(layer.get("lid"));
        legendItems.push(legendItem);
      }
    });

    var request_plain = {
      layout: "A4 portrait",
      srs: "EPSG:3857",
      units: "meters",
      outputFilename: "Malawi_Atlas_Map.pdf",
      outputFormat: "pdf",
      mapTitle: mapTitle,
      comment: comment,
      layers: [
        {
          baseURL: "http://tile.openstreetmap.org/",
          type: "Osm",
          maxExtent: [
            -20037508.3392,
            -20037508.3392,
            20037508.3392,
            20037508.3392
          ],
          tileSize: [256, 256],
          resolutions: [
            156543.0339,
            78271.51695,
            39135.758475,
            19567.8792375,
            9783.93961875,
            4891.969809375,
            2445.9849046875,
            1222.99245234375,
            611.496226171875,
            305.7481130859375,
            152.87405654296876,
            76.43702827148438,
            38.21851413574219,
            19.109257067871095,
            9.554628533935547,
            4.777314266967774,
            2.388657133483887,
            1.1943285667419434,
            0.5971642833709717
          ],
          extension: "png"
        },
        {
          type: "WMS",
          layers: layerIDs,
          baseURL: "https://www.gis-malawi.com/geoserver/malawi_atlas/wms?",
          format: "image/png"
        }
      ],
      pages: [
        {
          bbox: olExtent,
          // changing the scale does not seem to have any effect
          // however, the resulting PDF zooms to required region
          scale: 577790,
          dpi: 150,
          geodetic: true,
          strictEpsg4326: false
        }
      ],
      legends: [
        {
          name: "",
          classes: legendItems
        }
      ]
    };

    // build PDF URL
    // it is necessary to encode the query
    // otherwise the print module does not accept it
    var request_encoded = encodeURIComponent(JSON.stringify(request_plain));
    var pdf_url = "https://www.gis-malawi.com/geoserver/pdf/print.pdf?spec=";
    pdf_url = pdf_url + request_encoded;

    window.open(pdf_url, "_blank");

    // reset values
    me.resetValues();
  }
});
