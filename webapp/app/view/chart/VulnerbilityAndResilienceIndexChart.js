Ext.define("MalawiAtlas.view.chart.VulnerbilityAndResilienceIndexChart", {
  extend: "Ext.chart.CartesianChart",
  xtype: "ma-res-vul-indexchart",

  requires: [
    "Ext.chart.series.Bar",
    "Ext.chart.axis.Numeric",
    "Ext.chart.axis.Category"
  ],

  width: 400,
  height: 200,
  flipXY: true,

  //define the x and y-axis configuration.
  axes: [
    {
      type: "numeric",
      position: "bottom",
      grid: true,
      minimum: 0,
      maximum: 100
    },
    {
      type: "category",
      position: "left",
      label: {
        fontSize: 10,
        padding: 0,
        textAlign: "right"
      }
    }
  ],

  padding: "0 10 0 0",
  insetPadding: "40 40 0 0",

  //define the actual bar series.
  series: [
    {
      type: "bar",
      xField: "name",
      yField: ["value"],

      label: {
        display: "insideEnd",
        field: "value",
        renderer: Ext.util.Format.numberRenderer("0.0"),
        orientation: "horizontal",
        contrast: true
      },

      // colors of bars
      renderer: function (sprite, config, data, index) {
        var fillColor = data.store.getAt(index).get("fillColor");
        return {
          fillStyle: fillColor // dark red
        };
      },

      axis: "bottom"
    }
  ],

  initComponent: function () {
    var me = this;

    // set the chart title
    if (me.chartTitle) {
      me.setSprites({
        type: "text",
        text: me.chartTitle,
        fontSize: 18,
        width: 100,
        height: 30,
        x: 40, // the sprite x position
        y: 20 // the sprite y position
      });
    }

    me.callParent();
  }
});
