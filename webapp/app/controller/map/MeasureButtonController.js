/**
 * View controller for the measure buttons
 *
 * @author C. Mayer, meggsimum, Jakob Miksch
 */
Ext.define("MalawiAtlas.controller.map.MeasureButtonController", {
  extend: "Ext.app.ViewController",

  alias: "controller.measureButton",

  /**
   * WGS 84 sphere definition to calculate correct distances and areas
   * @property {ol.Sphere}
   * @readonly
   */
  wgs84Sphere: new ol.Sphere(6378137),

  onMeasureClick: function (button, e) {
    var me = this;

    var measurePopup = MalawiAtlas.util.Map.measurePopup;
    var measureVectorSource = MalawiAtlas.util.Map.measureVectorSource;

    var draw = new ol.interaction.Draw({
      source: measureVectorSource,
      type: button.measureType,
      stopClick: true, // prevents doubleclick event while drawing
      style: new ol.style.Style({
        fill: new ol.style.Fill({
          color: "rgba(255, 255, 255, 0.2)"
        }),
        stroke: new ol.style.Stroke({
          color: "rgba(0, 0, 0, 0.5)",
          lineDash: [10, 10],
          width: 2
        }),
        image: new ol.style.Circle({
          radius: 5,
          stroke: new ol.style.Stroke({
            color: "rgba(0, 0, 0, 0.7)"
          }),
          fill: new ol.style.Fill({
            color: "rgba(255, 255, 255, 0.2)"
          })
        })
      })
    });
    MalawiAtlas.util.Map.getOlMap().addInteraction(draw);

    var geomOnChangeListener;

    draw.on(
      "drawstart",
      function (evt) {
        // cleanup old features
        measureVectorSource.clear();

        geomOnChangeListener = evt.feature
          .getGeometry()
          .on("change", function (evt) {
            var geom = evt.target;
            var popupContent;
            var tooltipCoord;

            // get popup info
            if (geom instanceof ol.geom.Polygon) {
              popupContent = me.formatArea(geom);
              tooltipCoord = geom.getInteriorPoint().getCoordinates();
            } else if (geom instanceof ol.geom.LineString) {
              popupContent = me.formatDistance(geom);
              tooltipCoord = geom.getLastCoordinate();
            }

            // necessary to use <p>, otherwise content is not styled with CSS
            measurePopup.setHtml("<p>" + popupContent + "</p>");

            // activate popup
            measurePopup.position(tooltipCoord);
            measurePopup.show();
          });
      },
      this
    );

    draw.on(
      "drawend",
      function () {
        MalawiAtlas.util.Map.getOlMap().removeInteraction(draw);

        ol.Observable.unByKey(geomOnChangeListener);

        MalawiAtlas.util.Map.getOlMap().once("singleclick", function () {
          measurePopup.hide();
          measureVectorSource.clear();
        });
      },
      this
    );
  },

  getDistanceInMeter: function (line) {
    var me = this;

    var length_m = 0;
    var coordinates = line.getCoordinates();
    var sourceProj = MalawiAtlas.util.Map.getOlMap().getView().getProjection();
    for (var i = 0, ii = coordinates.length - 1; i < ii; ++i) {
      var c1 = ol.proj.transform(coordinates[i], sourceProj, "EPSG:4326");
      var c2 = ol.proj.transform(coordinates[i + 1], sourceProj, "EPSG:4326");
      length_m += me.wgs84Sphere.haversineDistance(c1, c2);
    }

    return length_m;
  },

  formatDistance: function (geom) {
    var me = this;
    var distance_m = me.getDistanceInMeter(geom);

    var distance_km = distance_m / 1000;
    distance_km = Math.round(distance_km * 10) / 10;

    return distance_km + " km";
  },

  getAreaInSquareMeter: function (polygon) {
    var me = this;

    var sourceProj = MalawiAtlas.util.Map.getOlMap().getView().getProjection();
    var geom = polygon.clone().transform(sourceProj, "EPSG:4326");
    var coordinates = geom.getLinearRing(0).getCoordinates();

    return Math.abs(me.wgs84Sphere.geodesicArea(coordinates));
  },

  formatArea: function (geom) {
    var me = this;

    var area_km2 = me.getAreaInSquareMeter(geom) / 1000000;
    area_km2 = Math.round(area_km2 * 10) / 10;

    var area_hectar = area_km2 * 100;
    area_hectar = Math.round(area_hectar * 10) / 10;

    return area_km2 + " km<sup>2</sup>" + "<br>" + area_hectar + " ha";
  }
});
