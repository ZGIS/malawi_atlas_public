Ext.define("MalawiAtlas.view.chart.GenderPieChart", {
  extend: "Ext.chart.PolarChart",
  requires: "Ext.chart.series.Pie",
  xtype: "ma-gender-piechart",

  width: 400,
  height: 150,
  insetPadding: 30,
  // innerPadding: 20,
  series: {
    type: "pie",
    angleField: "count_persons",
    label: {
      field: "gender_type",
      display: "outside"
    }
  }
});
