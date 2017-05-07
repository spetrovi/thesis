
// Set up the chart
var XXX_NAME_XXX_chart;
$(document).ready(function () {XXX_NAME_XXX_chart= new Highcharts.Chart({

  chart: {
    renderTo: 'XXX_NAME_XXX',
    margin: 100,
    type: 'column',
    width: 700,
    height: 700,
    options3d: {
      enabled: true,
      alpha: 10,
      beta: 30,
      depth: XXX_DEPTH_XXX,
      viewDistance: 5,
      fitToPlot: false,
      frame: {
        bottom: {
          size: 1,
          color: 'rgba(0,0,0,0.02)'
        },
        back: {
          size: 1,
          color: 'rgba(0,0,0,0.04)'
        },
        side: {
          size: 1,
          color: 'rgba(0,0,0,0.06)'
        }
      }
    }
  },
  title: {
    text: 'Draggable box'
  },
  subtitle: {
    text: 'Click and drag the plot area to rotate in space'
  },
  plotOptions: {
    column: {
      stacking: true,
      grouping: false,
      groupZPadding: 0,
      groupXPadding: 0,
      depth: 5
    }
  },
  yAxis: {

    min: 0.1,
    title: {text: 'Number of extents'}
  },
  xAxis: {
    categories: XXX_BINS_XXX,
    gridLineWidth: 1,
title: {text: 'Extent size'}
  },
  zAxis: {
title: {text: 'Time'},
categories: XXX_TIMES_XXX,
    showFirstLabel: false

  },
  legend: {
    enabled: false
  },
  series: [XXX_DATA_XXX]
});


// Add mouse events for rotation
$(XXX_NAME_XXX_chart.container).on('mousedown.hc touchstart.hc', function(eStart) {
  eStart = XXX_NAME_XXX_chart.pointer.normalize(eStart);

  var posX = eStart.pageX,
    posY = eStart.pageY,
    alpha = XXX_NAME_XXX_chart.options.chart.options3d.alpha,
    beta = XXX_NAME_XXX_chart.options.chart.options3d.beta,
    newAlpha,
    newBeta,
    sensitivity = 5; // lower is more sensitive

  $(document).on({
    'mousemove.hc touchdrag.hc': function(e) {
      // Run beta
      newBeta = beta + (posX - e.pageX) / sensitivity;
      XXX_NAME_XXX_chart.options.chart.options3d.beta = newBeta;

      // Run alpha
      newAlpha = alpha + (e.pageY - posY) / sensitivity;
      XXX_NAME_XXX_chart.options.chart.options3d.alpha = newAlpha;

      XXX_NAME_XXX_chart.redraw(false);
    },
    'mouseup touchend': function() {
      $(document).off('.hc');
    }
  });

var XXX_NAME_XXX_button = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#XXX_NAME_XXX_button').click(function () {XXX_NAME_XXX.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });});
});

