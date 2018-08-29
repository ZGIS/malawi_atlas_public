/**
 * View controller for the measure buttons
 *
 * @author C. Mayer, meggsimum
 */
Ext.define('MalawiAtlas.controller.map.MeasureButtonController', {
  extend: 'Ext.app.ViewController',

  alias: 'controller.measureButton',


  /**
   * Linestring or Polygon
   * @cfg {String}
   */
  measureType: null,

  /**
   * [measureTypePrefix description]
   * @type {String}
   */
  measureTypePrefix: '',

  /**
   * OL interaction to draw measure sketches
   * @property {ol.interaction.Draw}
   */
  drawInteraction: null,

  /**
   * WGS 84 sphere definition to calculate correct distances and areas
   * @property {ol.Sphere}
   * @readonly
   */
  wgs84Sphere: new ol.Sphere(6378137),

  /**
   * Handles the toggling of th measure tools. Disables / enables the
   * corresponding measure tools.
   *
   * @param {'MalawiAtlas.view.map.MeasureAreaButton' |
   *    'MalawiAtlas.view.map.MeasureDistanceButton'} btn
   *          The pressed/unpressed button
   * @param {Boolean} pressed State if button is pressed or unpressed
   *
   * @private
   */
  onToggle: function(btn, pressed) {
    var me = this;
    var measBtnGroup = me.getMeasureTool();

    // activate / deactivate the correct measure tool
    if (pressed === true) {
      me.measureType = btn.measureType;
      // get the correct diplay value for result window
      me.measureTypePrefix =
        (me.measureType === 'LineString' ? 'Distance: ' : 'Area: ');
      me.startMeasureInteraction();
    } else {
      me.stopMeasureInteraction();
      // in case we deactivate all measure tools we have to hide the layer
      // and the result window as well
      if (!measBtnGroup.hasOnePressedButton()) {
        measBtnGroup.vectorLayer.setVisible(false);
        measBtnGroup.resultWin.hide();
      }
    }
  },

  /**
   * Returns the measure toolbox.
   *
   * @return {'MalawiAtlas.view.map.MeasureTool'} the measure tool button group
   */
  getMeasureTool: function() {
    var me = this;
    return me.getView().up();
  },

  /**
   * Stop / disable measure interaction
   */
  stopMeasureInteraction: function() {
    var me = this;
    var measBtnGroup = me.getMeasureTool();
    // cleanup result window
    measBtnGroup.resultWin.setHtml('');
    // cleanup old features
    measBtnGroup.vectorSource.clear();
    // remove draw tool
    measBtnGroup.olMap.removeInteraction(me.drawInteraction);
  },

  /**
   * Start / enable measure interaction
   */
  startMeasureInteraction: function() {
    var me = this;
    var sketch;
    var measBtnGroup = me.getMeasureTool();

    // show the layer and the result window as well
    measBtnGroup.resultWin.show();
    measBtnGroup.vectorLayer.setVisible(true);

    // var type = (typeSelect.value == 'area' ? 'Polygon' : 'LineString');
    var type = me.measureType;
    var draw = new ol.interaction.Draw({
      source: measBtnGroup.vectorSource,
      type: type,
      style: new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new ol.style.Stroke({
          color: 'rgba(0, 0, 0, 0.5)',
          lineDash: [10, 10],
          width: 2
        }),
        image: new ol.style.Circle({
          radius: 5,
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 0.7)'
          }),
          fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
          })
        })
      })
    });
    measBtnGroup.olMap.addInteraction(draw);

    var geomChngListener;
    draw.on('drawstart', function(evt) {

      // cleanup old features
      measBtnGroup.vectorSource.clear();

      // set sketch
      sketch = evt.feature;

      /** @type {ol.Coordinate|undefined} */
      var tooltipCoord = evt.coordinate;

      geomChngListener = sketch.getGeometry().on('change', function(evt) {
        var geom = evt.target;
        var output;
        if (geom instanceof ol.geom.Polygon) {
          output = me.formatArea(geom);
          tooltipCoord = geom.getInteriorPoint().getCoordinates();
        } else if (geom instanceof ol.geom.LineString) {
          output = me.formatLength(geom);
          tooltipCoord = geom.getLastCoordinate();
        }
        // save last measure
        me.lastOutput = output;
        // show the current result in result window
        measBtnGroup.resultWin.setHtml(
          me.measureTypePrefix + me.lastOutput
        );
      });
    }, this);

    draw.on('drawend',
      function() {
        // show the final result in result window
        measBtnGroup.resultWin.setHtml(
          me.measureTypePrefix + me.lastOutput
        );
        // unset sketch
        sketch = null;
        // unbind the event for geometry change
        // (display measure on mouse move)
        ol.Observable.unByKey(geomChngListener);
      }, this);

    me.drawInteraction = draw;
  },

  /**
   * Formatting the length of a line geometry as readbale text.
   *
   * @param {ol.geom.LineString} line The line geometry to get length for
   * @return {String}             The prettyfied length of the given line
   */
  formatLength: function(line) {
    var me = this;
    var output;
    var length = 0;
    var measBtnGroup = me.getMeasureTool();
    var olMap = measBtnGroup.olMap;
    var coordinates = line.getCoordinates();
    var sourceProj = olMap.getView().getProjection();
    for (var i = 0, ii = coordinates.length - 1; i < ii; ++i) {
      var c1 = ol.proj.transform(coordinates[i], sourceProj, 'EPSG:4326');
      var c2 =
        ol.proj.transform(coordinates[i + 1], sourceProj, 'EPSG:4326');
      length += me.wgs84Sphere.haversineDistance(c1, c2);
    }

    if (length > 100) {
      output = (Math.round(length / 1000 * 100) / 100) +
        ' ' + 'km';
    } else {
      output = (Math.round(length * 100) / 100) +
        ' ' + 'm';
    }
    return output;
  },

  /**
   * Formatting the area of a polygon geometry as readable text.
   *
   * @param  {ol.geom.Polygon} polygon The line geometry to get length for
   * @return {String}          The prettyfied length of the given polygon
   */
  formatArea: function(polygon) {
    var me = this;
    var output;
    var measBtnGroup = me.getMeasureTool();
    var olMap = measBtnGroup.olMap;
    var sourceProj = olMap.getView().getProjection();
    var geom = polygon.clone().transform(sourceProj, 'EPSG:4326');
    var coordinates = geom.getLinearRing(0).getCoordinates();
    area = Math.abs(me.wgs84Sphere.geodesicArea(coordinates));

    if (area > 10000) {
      output = (Math.round(area / 1000000 * 100) / 100) +
        ' ' + 'km<sup>2</sup>';
    } else {
      output = (Math.round(area * 100) / 100) +
        ' ' + 'm<sup>2</sup>';
    }
    return output;
  }
});
