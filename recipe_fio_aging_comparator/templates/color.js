// Give the points a 3D feel by adding a radial gradient
Highcharts.getOptions().colors = $.map(Highcharts.getOptions().colors, function(color) {
  return {
    radialGradient: {
      cx: 0.4,
      cy: 0.3,
      r: 0.5
    },
    stops: [
      [0, color],
      [1, Highcharts.Color(color).brighten(-0.2).get('rgb')]
    ]
  };
});
