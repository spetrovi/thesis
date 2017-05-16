
// Set up the chart
var image_4_chart;
$(document).ready(function () {image_4_chart= new Highcharts.Chart({

  chart: {
    renderTo: 'image_4',
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
    categories: ['4K-8K', '8K-16K', '16K-32K', '32K-64K', '64K-128K', '128K-256K', '256K-512K', '512K-1024K', '1M-2M', '2M-4M', '4M-8M', '8M-16M', '16M-32M', '32M-64M', '64M-128M', '128M-256M', '256M-512M', '512M-1024M', '1G-2G'],
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
data:[[0,2],[14,5],[15,5],[16,2],[17,4],[18,55],]},{
stack: 1,
data:[[0,3],[3,2],[6,1],[7,5],[8,8],[9,25],[10,37],[14,24],[17,2],[18,39],]},{
stack: 2,
data:[[0,3],[3,4],[6,4],[7,13],[8,17],[9,44],[10,78],[14,37],[17,1],[18,21],]},{
stack: 3,
data:[[0,4],[3,4],[4,1],[6,4],[7,15],[8,28],[9,64],[10,116],[11,2],[12,1],[13,2],[14,62],[18,3],]},{
stack: 4,
data:[[0,1],[6,1],[10,4],[11,2],[12,1],[14,4],]},{
stack: 5,
data:[[0,1],[7,1],[10,1],[11,1],]},{
stack: 6,
data:[[0,1],[9,1],[13,1],[14,5],]},{
stack: 7,
data:[[0,1],[9,2],[10,4],[11,1],[12,2],[13,3],[14,1],]},{
stack: 8,
data:[[0,3],[1,1],[4,1],[5,1],[6,1],[8,1],[9,3],[10,1],[11,6],[12,5],[13,7],[15,1],[16,1],]},{
stack: 9,
data:[[0,3],[8,2],[10,4],]},{
stack: 10,
data:[[0,1],[4,1],[5,1],[7,2],[10,2],[11,2],[12,2],]},{
stack: 11,
data:[[7,1],[8,1],[9,2],[10,1],]},{
stack: 12,
data:[[0,3],[5,1],[6,1],[7,3],[8,4],[10,12],[11,14],[12,6],[13,5],]},{
stack: 13,
data:[[13,1],[14,1],[15,1],]},{
stack: 14,
data:[[0,1],[2,1],[5,1],[6,3],[8,4],[9,1],[10,2],]},{
stack: 15,
data:[[8,1],[10,3],[11,30],[12,19],[13,8],]},{
stack: 16,
data:[[0,36],[1,6],[2,4],[3,9],[4,11],[5,26],[6,25],[7,7],[8,1],[9,1],[10,3],[11,1],[12,1],[13,2],[14,1],]},{
stack: 17,
data:[[9,2],[12,1],]},{
stack: 18,
data:[[1,1],[8,1],[10,3],[11,1],]},{
stack: 19,
data:[[0,2],[4,1],[5,1],[7,1],[8,2],[9,8],[10,5],[11,1],[14,5],]},{
stack: 20,
data:[[0,1],[8,2],[9,1],[10,3],[11,11],[12,1],[13,2],[14,2],]},{
stack: 21,
data:[[8,1],[9,1],[12,1],]},{
stack: 22,
data:[[4,1],[6,1],[7,2],[8,3],[9,3],]},{
stack: 23,
data:[[0,2],[1,3],[4,1],[5,1],[6,1],[8,4],[11,5],[12,2],[13,4],]},{
stack: 24,
data:[[0,1],[8,1],[10,2],[11,4],[12,6],[13,4],[14,1],]},{
stack: 25,
data:[[0,6],[1,4],[3,4],[4,5],[5,6],[6,8],[7,12],[8,10],[9,10],[10,14],[11,5],[12,4],[13,3],]},{
stack: 26,
data:[[0,4],[1,1],[4,1],[6,1],[7,2],[8,6],[9,4],[10,1],[11,5],[12,1],[13,2],]},{
stack: 27,
data:[[0,1],[6,1],[7,1],[9,1],[10,3],[11,12],[12,8],[13,4],]},{
stack: 28,
data:[[0,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,1],]},{
stack: 29,
data:[[0,1],[3,1],[5,1],[7,1],[8,1],[9,1],[10,3],[12,2],[13,2],]},{
stack: 30,
data:[[5,1],[6,1],[9,1],[10,8],[11,7],[12,5],]},{
stack: 31,
data:[[1,1],[7,1],[8,1],[10,2],[11,1],]},{
stack: 32,
data:[[5,2],[6,15],[7,4],[8,2],[10,1],]},{
stack: 33,
data:[[5,1],[7,1],[9,1],[10,1],[11,1],]},{
stack: 34,
data:[[0,2],[8,2],[10,3],]},{
stack: 35,
data:[[0,71],[1,29],[2,15],[3,25],[4,35],[5,53],[6,36],[7,8],[8,27],[9,28],[10,37],[11,12],[12,5],[13,2],]},{
stack: 36,
data:[[1,1],[2,2],[3,1],[4,2],[5,1],[6,4],[7,14],[8,3],]},{
stack: 37,
data:[[0,2],[3,1],[4,7],[5,2],[6,6],[7,39],[8,4],[11,14],[12,8],[13,1],]},{
stack: 38,
data:[[0,90],[1,31],[2,23],[3,26],[4,39],[5,55],[7,2],[8,1],[10,1],[11,26],[12,3],[13,6],]},{
stack: 39,
data:[[0,1],[4,1],[5,1],[9,1],[10,3],]},{
stack: 40,
data:[[4,2],[5,2],[6,3],[8,4],[9,1],[10,1],]},{
stack: 41,
data:[[0,1],[4,1],[8,1],[9,2],[10,1],[11,2],[12,1],]},{
stack: 42,
data:[[0,1],[2,1],[9,1],[10,1],[11,9],[12,4],[13,3],]},{
stack: 43,
data:[[0,3],[2,1],[5,1],[6,1],[8,4],[9,4],[10,2],]},{
stack: 44,
data:[[0,1],[6,1],[7,1],[9,2],[10,3],]},{
stack: 45,
data:[[1,1],[10,5],[11,3],]},{
stack: 46,
data:[[0,2],[9,2],[10,2],[11,20],[12,9],[13,7],]},{
stack: 47,
data:[[0,2],[1,4],[3,3],[4,1],[5,3],[6,13],[7,18],[8,9],]},{
stack: 48,
data:[[0,2],[1,3],[6,3],[7,6],[8,53],[9,25],[10,22],[11,28],[12,12],[13,3],]},{
stack: 49,
data:[[0,4],[1,4],[2,5],[3,7],[4,4],[5,9],[6,7],[7,21],[8,1],[10,1],]},{
stack: 50,
data:[[4,2],[6,1],[7,1],[8,2],[9,11],[10,2],[11,16],[12,7],[13,1],]},{
stack: 51,
data:[[0,1],[8,1],[9,2],[10,2],[11,9],[12,5],[13,3],[14,1],]},{
stack: 52,
data:[[0,3],[1,4],[2,8],[3,10],[4,5],[5,2],[6,1],[7,1],[8,2],[9,2],[10,1],]},{
stack: 53,
data:[[0,2],[6,1],[9,3],[10,3],[11,5],[12,1],[13,2],]},{
stack: 54,
data:[[0,2],[1,1],[2,1],[3,1],[4,4],[5,5],[6,5],[7,6],[8,10],]},{
stack: 55,
data:[[5,1],[10,2],[11,4],[12,5],]},{
stack: 56,
data:[[6,1],[9,2],[11,2],]},{
stack: 57,
data:[[0,1],[1,1],[5,1],[6,1],[7,1],[8,5],[9,7],[10,1],[11,3],[12,1],]},{
stack: 58,
data:[[0,2],[3,1],[7,3],[8,5],[9,1],[10,3],[11,4],[12,2],[13,1],]},{
stack: 59,
data:[[9,3],[10,7],[11,25],[12,12],[13,1],]},]
});


// Add mouse events for rotation
$(image_4_chart.container).on('mousedown.hc touchstart.hc', function(eStart) {
  eStart = image_4_chart.pointer.normalize(eStart);

  var posX = eStart.pageX,
    posY = eStart.pageY,
    alpha = image_4_chart.options.chart.options3d.alpha,
    beta = image_4_chart.options.chart.options3d.beta,
    newAlpha,
    newBeta,
    sensitivity = 5; // lower is more sensitive

  $(document).on({
    'mousemove.hc touchdrag.hc': function(e) {
      // Run beta
      newBeta = beta + (posX - e.pageX) / sensitivity;
      image_4_chart.options.chart.options3d.beta = newBeta;

      // Run alpha
      newAlpha = alpha + (e.pageY - posY) / sensitivity;
      image_4_chart.options.chart.options3d.alpha = newAlpha;

      image_4_chart.redraw(false);
    },
    'mouseup touchend': function() {
      $(document).off('.hc');
    }
  });

var image_4_button = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#image_4_button').click(function () {image_4.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });});
});

