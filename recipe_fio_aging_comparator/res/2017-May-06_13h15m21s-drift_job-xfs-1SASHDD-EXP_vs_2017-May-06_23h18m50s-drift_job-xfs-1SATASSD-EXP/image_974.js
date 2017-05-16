
// Set up the chart
var image_974_chart;
$(document).ready(function () {image_974_chart= new Highcharts.Chart({

  chart: {
    renderTo: 'image_974',
    margin: 100,
    type: 'column',
    width: 700,
    height: 700,
    options3d: {
      enabled: true,
      alpha: 10,
      beta: 30,
      depth: 420,
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
    categories: ['1K-1K', '2K-3K', '4K-7K', '8K-15K', '16K-31K', '32K-63K', '64K-127K', '128K-255K', '256K-511K', '512K-1023K', '1M-2M', '2M-4M', '4M-8M', '8M-16M', '16M-32M', '32M-65M', '65M-131M'],
    gridLineWidth: 1,
title: {text: 'Extent size'}
  },
  zAxis: {
title: {text: 'Time'},
categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
    showFirstLabel: false

  },
  legend: {
    enabled: false
  },
  series: [{
stack: 0,
data:[[0,14],]},{
stack: 1,
data:[[0,15],[1,2],[10,1],[12,2],[14,2],[15,2],[16,1],]},{
stack: 2,
data:[[0,16],[1,4],[9,1],[10,1],[11,2],[12,4],[13,3],[14,3],]},{
stack: 3,
data:[[0,16],[1,4],[9,1],[10,1],[11,4],[12,3],[13,8],[14,3],]},{
stack: 4,
data:[[0,16],[1,4],[7,2],[8,4],[9,3],[10,1],]},{
stack: 5,
data:[[0,16],[1,4],[7,2],[8,5],[9,5],]},{
stack: 6,
data:[[0,15],[1,5],[3,1],[7,4],[8,5],[9,4],]},{
stack: 7,
data:[[0,15],[1,5],[3,1],[5,2],[6,3],[7,2],[8,3],[9,7],]},{
stack: 8,
data:[[0,15],[1,5],[3,1],[4,3],[5,2],[6,3],[7,3],[8,2],[9,9],]},{
stack: 9,
data:[[0,16],[1,3],[3,1],[4,3],[5,2],[6,3],[7,1],[8,3],[9,7],]},{
stack: 10,
data:[[0,16],[1,3],[3,1],[4,3],[5,4],[8,3],[9,10],]},{
stack: 11,
data:[[0,16],[1,2],[3,1],[4,5],[5,2],[7,6],[8,6],[9,2],]},{
stack: 12,
data:[[0,16],[1,2],[3,1],[4,6],[5,1],[6,1],[7,8],[8,3],[9,2],]},{
stack: 13,
data:[[0,16],[1,2],[2,2],[3,2],[4,3],[5,3],[6,2],[7,6],[8,2],[13,1],]},{
stack: 14,
data:[[0,16],[1,2],[3,1],[4,3],[5,3],[6,2],[7,7],[8,3],[9,2],]},{
stack: 15,
data:[[0,15],[1,2],[3,1],[4,2],[5,4],[6,2],[7,7],[8,6],[9,2],]},{
stack: 16,
data:[[0,15],[1,2],[3,2],[4,3],[6,3],[7,6],[8,6],[9,5],]},{
stack: 17,
data:[[0,15],[1,4],[3,2],[4,3],[5,1],[6,3],[7,4],[8,5],[9,3],]},{
stack: 18,
data:[[0,15],[1,4],[2,1],[3,2],[4,1],[5,1],[6,4],[7,5],[8,5],[10,1],]},{
stack: 19,
data:[[0,15],[1,4],[2,1],[3,2],[5,1],[6,4],[7,8],[8,10],[9,1],[13,1],]},{
stack: 20,
data:[[0,15],[1,4],[3,2],[5,2],[6,3],[7,8],[8,10],[9,10],[10,9],[11,2],[12,10],[13,2],]},{
stack: 21,
data:[[0,15],[1,2],[3,2],[4,1],[6,3],[7,10],[8,8],[9,7],[15,1],]},{
stack: 22,
data:[[0,15],[1,2],[3,3],[4,1],[5,2],[6,5],[7,12],[8,9],[9,3],]},{
stack: 23,
data:[[0,15],[1,3],[4,1],[5,2],[6,3],[7,9],[8,13],[9,3],[12,1],]},{
stack: 24,
data:[[0,15],[1,3],[3,1],[4,1],[5,2],[6,2],[7,11],[8,15],[9,2],[13,1],]},{
stack: 25,
data:[[0,15],[1,3],[3,1],[4,3],[5,1],[6,3],[7,10],[8,16],[14,2],]},{
stack: 26,
data:[[0,15],[1,2],[3,1],[4,3],[6,4],[7,7],[8,18],[9,3],[10,12],[11,4],[12,3],[13,9],[14,12],[15,5],[16,1],]},{
stack: 27,
data:[[0,15],[1,3],[3,3],[4,3],[6,7],[7,16],[8,13],]},{
stack: 28,
data:[[0,15],[1,3],[3,3],[4,7],[6,9],[7,13],[8,14],]},{
stack: 29,
data:[[0,17],[1,3],[3,3],[4,7],[6,7],[7,11],[8,13],]},{
stack: 30,
data:[[0,19],[1,2],[3,3],[4,5],[6,2],[7,15],[8,10],[11,4],[12,11],[13,7],[14,4],]},{
stack: 31,
data:[[0,19],[1,2],[4,4],[5,1],[6,3],[7,16],[8,10],[9,2],]},{
stack: 32,
data:[[0,19],[1,2],[4,4],[5,3],[6,3],[7,12],[8,15],[9,4],]},{
stack: 33,
data:[[0,20],[1,2],[2,2],[4,4],[5,7],[6,7],[7,15],[8,10],[9,2],]},{
stack: 34,
data:[[0,18],[1,2],[4,6],[5,8],[6,7],[7,17],[8,8],]},{
stack: 35,
data:[[0,15],[4,5],[5,7],[6,7],[7,19],[8,7],]},{
stack: 36,
data:[[0,16],[4,6],[5,6],[6,15],[7,22],[8,3],[9,2],[13,4],[14,2],]},{
stack: 37,
data:[[0,16],[2,1],[3,8],[4,4],[5,8],[6,9],[7,12],[8,5],[9,2],]},{
stack: 38,
data:[[0,17],[2,1],[3,10],[4,8],[5,8],[6,5],[7,11],[8,3],[9,1],[12,1],[13,5],]},{
stack: 39,
data:[[0,18],[2,1],[3,6],[4,4],[5,8],[6,6],[7,10],[8,5],[9,2],]},{
stack: 40,
data:[[0,19],[2,1],[3,6],[4,4],[5,10],[6,8],[7,8],[8,3],[9,1],[12,3],[13,7],[14,5],[15,12],]},{
stack: 41,
data:[[0,16],[3,6],[4,5],[5,8],[6,6],[7,9],[8,6],[9,1],]},{
stack: 42,
data:[[0,16],[1,1],[3,7],[4,8],[5,5],[6,5],[7,9],[8,8],[9,1],]},{
stack: 43,
data:[[0,20],[1,1],[3,7],[4,6],[5,7],[6,6],[7,9],[8,8],[9,1],]},{
stack: 44,
data:[[0,20],[1,1],[3,7],[4,7],[5,7],[6,3],[7,11],[8,7],[9,1],[14,4],[15,1],]},{
stack: 45,
data:[[0,19],[1,1],[3,3],[4,6],[5,7],[6,3],[7,11],[8,7],[9,3],]},{
stack: 46,
data:[[0,22],[1,1],[3,3],[4,6],[5,7],[6,7],[7,10],[8,8],[9,3],]},{
stack: 47,
data:[[0,22],[1,1],[3,1],[4,5],[5,7],[6,5],[7,7],[8,9],[9,2],]},{
stack: 48,
data:[[0,22],[1,1],[3,5],[4,3],[5,6],[6,3],[7,9],[8,13],[9,2],]},{
stack: 49,
data:[[0,22],[1,2],[3,5],[4,3],[5,6],[6,2],[7,9],[8,14],[9,3],]},{
stack: 50,
data:[[0,20],[1,3],[3,4],[4,3],[5,6],[6,2],[7,10],[8,9],[9,3],]},{
stack: 51,
data:[[0,20],[1,3],[2,2],[3,4],[4,5],[5,5],[6,2],[7,14],[8,7],[9,2],[10,1],[11,7],[12,8],[13,7],[14,9],[15,10],[16,2],]},{
stack: 52,
data:[[0,18],[1,3],[2,2],[3,4],[4,3],[5,6],[6,4],[7,11],[8,10],[9,16],[10,20],[11,16],[12,20],[13,32],[14,12],[15,6],[16,4],]},{
stack: 53,
data:[[0,18],[1,3],[2,2],[3,4],[4,5],[5,6],[6,6],[7,7],[8,12],[9,2],[10,2],[11,2],[12,10],[13,20],[14,14],]},{
stack: 54,
data:[[0,19],[1,5],[2,2],[3,5],[4,3],[5,5],[6,2],[7,8],[8,11],[15,1],]},{
stack: 55,
data:[[0,19],[1,5],[2,4],[3,3],[4,3],[5,5],[6,6],[7,10],[8,6],[9,4],]},{
stack: 56,
data:[[0,19],[1,5],[2,4],[3,4],[4,3],[5,5],[6,7],[7,12],[8,5],[9,5],[10,1],[11,9],[12,2],]},{
stack: 57,
data:[[0,19],[1,3],[2,4],[3,2],[4,3],[5,8],[6,9],[7,14],[8,2],]},{
stack: 58,
data:[[0,19],[1,1],[2,4],[3,1],[4,1],[5,4],[6,9],[7,12],[8,6],[9,8],[10,22],[11,39],[12,27],[13,33],[14,27],[15,8],]},{
stack: 59,
data:[[0,16],[1,1],[2,2],[3,4],[4,3],[5,3],[6,12],[7,11],[8,6],[14,1],[15,1],]},]
});


// Add mouse events for rotation
$(image_974_chart.container).on('mousedown.hc touchstart.hc', function(eStart) {
  eStart = image_974_chart.pointer.normalize(eStart);

  var posX = eStart.pageX,
    posY = eStart.pageY,
    alpha = image_974_chart.options.chart.options3d.alpha,
    beta = image_974_chart.options.chart.options3d.beta,
    newAlpha,
    newBeta,
    sensitivity = 5; // lower is more sensitive

  $(document).on({
    'mousemove.hc touchdrag.hc': function(e) {
      // Run beta
      newBeta = beta + (posX - e.pageX) / sensitivity;
      image_974_chart.options.chart.options3d.beta = newBeta;

      // Run alpha
      newAlpha = alpha + (e.pageY - posY) / sensitivity;
      image_974_chart.options.chart.options3d.alpha = newAlpha;

      image_974_chart.redraw(false);
    },
    'mouseup touchend': function() {
      $(document).off('.hc');
    }
  });

var image_974_button = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#image_974_button').click(function () {image_974.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });});
});

