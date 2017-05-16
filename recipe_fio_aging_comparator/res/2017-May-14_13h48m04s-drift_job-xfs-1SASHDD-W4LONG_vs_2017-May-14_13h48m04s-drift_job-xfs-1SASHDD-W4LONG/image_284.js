

// Set up the chart
var image_284_chart;
$(document).ready(function () {
    Highcharts.setOptions({ // Apply to all charts
        chart: {
            events: {
                beforePrint: function () {
                    this.oldhasUserSize = this.hasUserSize;
                    this.resetParams = [this.chartWidth, this.chartHeight, false];
                    this.setSize(550, 550, false);
                },
                afterPrint: function () {
                    this.setSize.apply(this, this.resetParams);
                    this.hasUserSize = this.oldhasUserSize;
                }
            }
        }
    });

image_284_chart= new Highcharts.Chart({

  chart: {
    renderTo: 'image_284',
    margin: 100,
    type: 'column',
    width: 900,
    height: 900,
    options3d: {
      enabled: true,
      alpha: 10,
      beta: 30,
      depth: 350,
      viewDistance: 5,
      fitToPlot: true,
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
    categories: ['1K-1K', '2K-3K', '4K-7K', '8K-15K', '16K-31K', '32K-63K', '64K-127K', '128K-255K', '256K-511K', '512K-1023K', '2M-4M', '4M-8M', '8M-16M', '16M-32M', '65M-131M', '131M-262M', '262M-524M', '524M-1048M', '16G-33G', '33G-36G'],
    gridLineWidth: 1,
title: {text: 'Extent size'}
  },
  zAxis: {
title: {text: 'Time'},
categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    showFirstLabel: false

  },
  legend: {
    enabled: false
  },
  series: [{
stack: 0,
data:[[0,12],[19,3],]},{
stack: 1,
data:[[0,14],[2,2],[7,2],[18,6],]},{
stack: 2,
data:[[0,17],[2,2],[4,1],[7,2],[18,6],]},{
stack: 3,
data:[[0,16],[2,2],[7,2],[18,6],]},{
stack: 4,
data:[[0,12],[1,2],[4,2],[7,1],[18,6],]},{
stack: 5,
data:[[0,12],[2,3],[7,1],[18,6],]},{
stack: 6,
data:[[0,19],[7,1],[18,6],]},{
stack: 7,
data:[[0,18],[1,2],[2,1],[4,1],[7,1],[10,2],[18,6],]},{
stack: 8,
data:[[0,19],[1,1],[2,1],[5,2],[7,2],[18,6],]},{
stack: 9,
data:[[0,12],[1,1],[4,1],[9,2],[18,3],]},{
stack: 10,
data:[[0,13],[1,1],[5,2],[18,3],]},{
stack: 11,
data:[[0,17],[2,2],[8,2],[18,3],]},{
stack: 12,
data:[[0,13],[5,4],[18,2],]},{
stack: 13,
data:[[0,15],[5,1],[7,1],[18,2],]},{
stack: 14,
data:[[0,18],[1,2],[2,2],[3,2],[5,2],[17,2],[18,1],]},{
stack: 15,
data:[[0,17],[2,1],[4,2],[5,1],[11,2],[16,2],[18,1],]},{
stack: 16,
data:[[0,15],[1,2],[7,2],[17,1],[18,3],]},{
stack: 17,
data:[[0,12],[4,2],[17,1],[18,3],]},{
stack: 18,
data:[[0,16],[5,1],[15,1],[18,3],]},{
stack: 19,
data:[[0,12],[1,2],[5,3],[8,1],[18,3],]},{
stack: 20,
data:[[0,15],[1,1],[2,2],[18,3],]},{
stack: 21,
data:[[0,18],[1,2],[18,3],]},{
stack: 22,
data:[[0,14],[6,1],[18,3],]},{
stack: 23,
data:[[0,20],[18,3],]},{
stack: 24,
data:[[0,19],[1,1],[18,3],]},{
stack: 25,
data:[[0,17],[18,2],]},{
stack: 26,
data:[[0,13],[2,2],[6,2],[7,2],[18,2],]},{
stack: 27,
data:[[0,14],[5,1],[18,2],]},{
stack: 28,
data:[[0,13],[1,6],[2,1],[18,2],]},{
stack: 29,
data:[[0,17],[18,2],]},{
stack: 30,
data:[[0,14],[1,2],[10,2],[18,2],]},{
stack: 31,
data:[[0,14],[5,2],[10,2],[18,2],]},{
stack: 32,
data:[[0,12],[1,4],[2,1],[5,2],[12,2],[17,2],[18,1],]},{
stack: 33,
data:[[0,14],[1,1],[2,1],[14,2],[18,1],]},{
stack: 34,
data:[[0,17],[1,5],[5,2],[18,1],]},{
stack: 35,
data:[[0,14],[2,3],[9,2],[18,1],]},{
stack: 36,
data:[[0,16],[1,2],[8,1],[9,2],[18,1],]},{
stack: 37,
data:[[0,12],[1,2],[2,1],[4,2],[6,1],[18,1],]},{
stack: 38,
data:[[0,16],[1,1],[8,2],[17,1],[18,3],]},{
stack: 39,
data:[[0,16],[16,1],[18,3],]},{
stack: 40,
data:[[0,13],[1,2],[18,3],]},{
stack: 41,
data:[[0,16],[1,4],[4,2],[8,2],[18,2],]},{
stack: 42,
data:[[0,12],[2,1],[3,1],[18,2],]},{
stack: 43,
data:[[0,18],[1,1],[2,1],[11,1],[18,2],]},{
stack: 44,
data:[[0,14],[2,1],[4,1],[18,2],]},{
stack: 45,
data:[[0,12],[1,3],[2,3],[7,2],[8,2],[18,2],]},{
stack: 46,
data:[[0,12],[1,1],[18,2],]},{
stack: 47,
data:[[0,14],[1,2],[7,2],[13,2],[18,2],]},{
stack: 48,
data:[[0,12],[3,1],[11,2],[18,2],]},{
stack: 49,
data:[[0,12],[1,1],[7,2],]},]
});


// Add mouse events for rotation
$(image_284_chart.container).on('mousedown.hc touchstart.hc', function(eStart) {
  eStart = image_284_chart.pointer.normalize(eStart);

  var posX = eStart.pageX,
    posY = eStart.pageY,
    alpha = image_284_chart.options.chart.options3d.alpha,
    beta = image_284_chart.options.chart.options3d.beta,
    newAlpha,
    newBeta,
    sensitivity = 5; // lower is more sensitive

  $(document).on({
    'mousemove.hc touchdrag.hc': function(e) {
      // Run beta
      newBeta = beta + (posX - e.pageX) / sensitivity;
      image_284_chart.options.chart.options3d.beta = newBeta;

      // Run alpha
      newAlpha = alpha + (e.pageY - posY) / sensitivity;
      image_284_chart.options.chart.options3d.alpha = newAlpha;

      image_284_chart.redraw(false);
    },
    'mouseup touchend': function() {
      $(document).off('.hc');
    }
  });

var image_284_button = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#image_284_button').click(function () {image_284.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });});
});

