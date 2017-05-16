
// Set up the chart
var image_115_chart;
$(document).ready(function () {image_115_chart= new Highcharts.Chart({

  chart: {
    renderTo: 'image_115',
    margin: 100,
    type: 'column',
    width: 700,
    height: 700,
    options3d: {
      enabled: true,
      alpha: 10,
      beta: 30,
      depth: 413,
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
    categories: ['1K-1K', '2K-3K', '4K-7K', '8K-15K', '16K-31K', '32K-63K', '64K-127K', '128K-255K', '256K-511K', '512K-1023K', '1M-2M', '2M-4M', '4M-8M', '8M-16M', '16M-32M', '32M-65M', '65M-131M', '131M-262M', '262M-524M', '524M-1048M', '16G-33G', '33G-36G'],
    gridLineWidth: 1,
title: {text: 'Extent size'}
  },
  zAxis: {
title: {text: 'Time'},
categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58],
    showFirstLabel: false

  },
  legend: {
    enabled: false
  },
  series: [{
stack: 0,
data:[[0,12],[21,3],]},{
stack: 1,
data:[[0,12],[3,1],[5,2],[14,2],[21,3],]},{
stack: 2,
data:[[0,13],[1,2],[4,4],[8,2],[10,2],[14,1],[21,3],]},{
stack: 3,
data:[[0,13],[1,2],[3,2],[6,3],[7,3],[8,3],[14,1],[15,2],[20,3],]},{
stack: 4,
data:[[0,13],[1,3],[4,1],[5,2],[6,4],[7,1],[8,1],[9,2],[11,1],[15,2],[18,1],[20,3],]},{
stack: 5,
data:[[0,13],[1,3],[2,2],[4,4],[5,2],[6,1],[7,2],[9,1],[15,3],[20,3],]},{
stack: 6,
data:[[0,13],[1,3],[2,2],[3,3],[4,1],[5,2],[6,1],[7,2],[9,2],[14,1],[15,2],[20,3],]},{
stack: 7,
data:[[0,13],[1,3],[2,4],[3,1],[4,2],[5,2],[6,1],[7,2],[8,1],[9,1],[14,1],[15,2],[20,3],]},{
stack: 8,
data:[[0,13],[1,3],[2,4],[3,3],[4,3],[5,1],[6,3],[7,1],[9,2],[13,1],[15,3],[20,1],]},{
stack: 9,
data:[[0,13],[1,3],[2,4],[3,3],[4,3],[5,3],[6,1],[7,1],[9,2],[13,1],[14,4],[15,1],[20,1],]},{
stack: 10,
data:[[0,13],[1,3],[2,8],[3,2],[4,2],[6,2],[7,1],[9,1],[10,2],[11,2],[12,1],[16,1],[17,1],[20,2],]},{
stack: 11,
data:[[0,13],[1,3],[2,8],[4,5],[5,3],[7,1],[8,2],[12,1],[20,2],]},{
stack: 12,
data:[[0,13],[1,5],[2,8],[4,3],[5,3],[6,2],[7,1],[10,2],[12,3],[13,2],[20,2],]},{
stack: 13,
data:[[0,13],[1,5],[2,9],[4,3],[5,4],[6,2],[10,3],[12,2],[13,2],[15,1],]},{
stack: 14,
data:[[0,13],[1,6],[2,11],[3,1],[4,4],[5,4],[6,4],[7,2],[8,2],[9,2],[10,1],[15,1],]},{
stack: 15,
data:[[0,14],[1,7],[2,13],[3,2],[4,3],[5,6],[6,3],[7,3],[9,2],[13,1],]},{
stack: 16,
data:[[0,15],[1,9],[2,13],[3,2],[4,3],[5,5],[6,3],[7,5],[9,4],[10,1],]},{
stack: 17,
data:[[0,15],[1,9],[2,13],[3,4],[4,3],[5,7],[6,2],[7,6],[10,1],[15,1],]},{
stack: 18,
data:[[0,15],[1,9],[2,13],[3,3],[4,3],[5,6],[6,2],[7,7],[8,1],[13,1],[15,1],[16,2],[19,1],]},{
stack: 19,
data:[[0,15],[1,9],[2,11],[3,3],[4,7],[5,11],[6,5],[7,3],[8,3],[9,4],[10,2],]},{
stack: 20,
data:[[0,17],[1,9],[2,12],[3,5],[4,21],[5,12],[6,7],[7,9],[8,12],[9,11],[10,8],[11,6],[12,1],[13,4],[14,10],[15,8],[16,4],[17,3],[18,5],[19,1],]},{
stack: 21,
data:[[0,17],[1,11],[2,12],[3,6],[4,24],[5,17],[6,8],[7,8],[8,6],[9,2],]},{
stack: 22,
data:[[0,19],[1,6],[2,18],[3,5],[4,29],[5,23],[6,14],[7,23],[8,18],[9,10],[10,23],[11,4],[12,12],[14,7],[15,5],[16,2],[17,2],[18,7],[19,4],]},{
stack: 23,
data:[[0,19],[1,6],[2,18],[3,4],[4,35],[5,19],[6,18],[7,22],[8,8],[9,18],[10,8],[11,2],[12,8],[13,4],[14,4],[15,2],[16,2],]},{
stack: 24,
data:[[0,19],[1,7],[2,16],[3,6],[4,24],[5,27],[6,25],[7,29],[8,19],[9,16],[10,22],[11,8],[12,7],[13,10],[14,9],[15,14],[16,11],[17,12],[18,5],[19,2],]},{
stack: 25,
data:[[0,19],[1,7],[2,17],[3,5],[4,23],[5,28],[6,21],[7,24],[15,1],]},{
stack: 26,
data:[[0,20],[1,5],[2,11],[3,10],[4,23],[5,25],[6,33],[7,36],[8,23],[9,35],[10,27],[11,28],[12,26],[13,9],[14,5],[15,8],[16,4],[17,2],[18,14],]},{
stack: 27,
data:[[0,20],[1,6],[2,11],[3,12],[4,26],[5,25],[6,31],[7,41],[8,28],[9,29],[10,15],[11,26],[12,26],[13,10],[14,10],[15,2],]},{
stack: 28,
data:[[0,20],[1,8],[2,14],[3,15],[4,33],[5,26],[6,26],[7,18],[8,1],]},{
stack: 29,
data:[[0,18],[1,9],[2,17],[3,18],[4,34],[5,26],[6,33],[7,29],[8,17],[9,14],[10,17],[11,14],[12,11],[13,4],[14,13],[15,2],[16,11],[17,2],[18,4],]},{
stack: 30,
data:[[0,18],[1,10],[2,19],[3,20],[4,36],[5,31],[6,28],[7,12],]},{
stack: 31,
data:[[0,18],[1,11],[2,19],[3,21],[4,38],[5,32],[6,29],[7,14],[8,1],[9,8],[10,8],[11,1],[12,5],[13,2],[14,4],[16,2],[18,2],]},{
stack: 32,
data:[[0,18],[1,11],[2,22],[3,22],[4,35],[5,30],[6,30],[7,12],[8,3],[9,4],[10,5],[11,2],[12,4],[13,4],[14,7],[15,2],]},{
stack: 33,
data:[[0,18],[1,15],[2,21],[3,25],[4,34],[5,29],[6,31],[7,10],]},{
stack: 34,
data:[[0,18],[1,12],[2,20],[3,26],[4,33],[5,26],[6,41],[7,19],[8,27],[9,29],[10,30],[11,26],[12,15],[13,8],[14,14],[15,7],[16,3],[17,2],]},{
stack: 35,
data:[[0,18],[1,13],[2,20],[3,28],[4,37],[5,31],[6,43],[7,16],]},{
stack: 36,
data:[[0,18],[1,12],[2,17],[3,28],[4,34],[5,30],[6,41],[7,41],[8,25],[9,33],[10,26],[11,42],[12,34],[13,22],[14,23],[15,21],[16,20],[17,6],[18,8],[19,4],]},{
stack: 37,
data:[[0,18],[1,12],[2,19],[3,29],[4,35],[5,30],[6,43],[7,38],[8,26],[9,38],[10,27],[11,43],[12,36],[13,29],[14,24],[15,11],]},{
stack: 38,
data:[[0,18],[1,13],[2,20],[3,26],[4,39],[5,37],[6,37],[7,12],[8,12],[9,13],[10,5],[11,9],[12,5],[14,5],[15,9],[16,10],[17,4],[18,2],[19,4],]},{
stack: 39,
data:[[0,18],[1,17],[2,19],[3,30],[4,44],[5,39],[6,42],[7,3],[15,4],]},{
stack: 40,
data:[[0,22],[1,17],[2,21],[3,20],[4,32],[5,39],[6,44],[7,12],[8,13],[9,25],[10,20],[11,13],[12,14],[13,8],[14,28],[15,42],[16,17],[17,6],[18,6],[19,2],]},{
stack: 41,
data:[[0,20],[1,17],[2,23],[3,20],[4,36],[5,39],[6,44],[7,4],[8,3],[9,4],[10,7],[11,3],[12,2],[13,6],[14,10],[15,9],]},{
stack: 42,
data:[[0,19],[1,19],[2,21],[3,27],[4,43],[5,43],[6,44],[7,13],[8,35],[9,44],[10,35],[11,31],[12,19],[13,7],[14,15],[15,20],[16,13],[17,6],[18,2],]},{
stack: 43,
data:[[0,19],[1,19],[2,21],[3,27],[4,46],[5,39],[6,47],[7,2],[15,2],]},{
stack: 44,
data:[[0,19],[1,17],[2,17],[3,26],[4,46],[5,48],[6,56],[7,21],[8,57],[9,34],[10,36],[11,24],[12,8],[13,8],[14,7],[15,18],[16,4],[18,2],]},{
stack: 45,
data:[[0,19],[1,17],[2,17],[3,27],[4,49],[5,44],[6,59],[7,25],[8,54],[9,41],[10,30],[11,20],[12,10],[13,7],[14,5],[15,14],[16,2],[19,1],]},{
stack: 46,
data:[[0,19],[1,14],[2,13],[3,26],[4,50],[5,38],[6,61],[7,31],[8,73],[9,48],[10,38],[11,26],[12,17],[13,17],[14,12],[15,20],[16,33],[17,12],[18,6],]},{
stack: 47,
data:[[0,21],[1,14],[2,13],[3,26],[4,53],[5,35],[6,66],[7,31],[8,73],[9,45],[10,42],[11,27],[12,19],[13,18],[14,15],[15,24],[16,22],[17,4],]},{
stack: 48,
data:[[0,20],[1,11],[2,14],[3,29],[4,53],[5,40],[6,59],[7,60],[8,79],[9,70],[10,65],[11,73],[12,62],[13,36],[14,14],[15,16],[16,21],[17,4],[18,10],]},{
stack: 49,
data:[[0,20],[1,11],[2,14],[3,29],[4,56],[5,44],[6,58],[7,60],[8,78],[9,72],[10,61],[11,81],[12,61],[13,38],[14,13],[15,16],[16,11],]},{
stack: 50,
data:[[0,20],[1,9],[2,23],[3,35],[4,49],[5,48],[6,48],[7,51],[8,76],[9,82],[10,87],[11,37],[12,24],[13,30],[14,17],[15,24],[16,11],[17,4],[18,17],]},{
stack: 51,
data:[[0,20],[1,9],[2,24],[3,32],[4,60],[5,41],[6,46],[7,57],[8,77],[9,85],[10,81],[11,43],[12,24],[13,31],[14,12],[15,21],[16,6],[17,2],[18,2],]},{
stack: 52,
data:[[0,20],[1,10],[2,26],[3,37],[4,62],[5,44],[6,31],[12,1],[13,2],[15,2],[16,2],[17,1],[18,1],]},{
stack: 53,
data:[[0,20],[1,6],[2,19],[3,32],[4,76],[5,35],[6,48],[7,11],[8,30],[9,20],[10,25],[11,20],[12,38],[13,7],[14,11],[15,26],[16,35],[17,11],[18,1],]},{
stack: 54,
data:[[0,20],[1,8],[2,19],[3,31],[4,80],[5,37],[6,43],[7,16],[8,31],[9,22],[10,20],[11,17],[12,40],[13,14],[14,12],[15,22],[16,6],]},{
stack: 55,
data:[[0,21],[1,8],[2,19],[3,26],[4,75],[5,38],[6,44],[7,25],[8,45],[9,48],[10,37],[11,43],[12,50],[13,24],[14,30],[15,14],[16,12],[17,11],]},{
stack: 56,
data:[[0,25],[1,6],[2,19],[3,33],[4,73],[5,44],[6,34],[17,1],]},{
stack: 57,
data:[[0,24],[1,14],[2,18],[3,35],[4,72],[5,50],[6,17],[7,6],[10,1],[13,1],[15,9],[16,14],[17,2],[18,2],]},{
stack: 58,
data:[[0,24],[1,14],[2,18],[3,37],[4,71],[5,50],[6,19],[7,4],[9,1],]},]
});


// Add mouse events for rotation
$(image_115_chart.container).on('mousedown.hc touchstart.hc', function(eStart) {
  eStart = image_115_chart.pointer.normalize(eStart);

  var posX = eStart.pageX,
    posY = eStart.pageY,
    alpha = image_115_chart.options.chart.options3d.alpha,
    beta = image_115_chart.options.chart.options3d.beta,
    newAlpha,
    newBeta,
    sensitivity = 5; // lower is more sensitive

  $(document).on({
    'mousemove.hc touchdrag.hc': function(e) {
      // Run beta
      newBeta = beta + (posX - e.pageX) / sensitivity;
      image_115_chart.options.chart.options3d.beta = newBeta;

      // Run alpha
      newAlpha = alpha + (e.pageY - posY) / sensitivity;
      image_115_chart.options.chart.options3d.alpha = newAlpha;

      image_115_chart.redraw(false);
    },
    'mouseup touchend': function() {
      $(document).off('.hc');
    }
  });

var image_115_button = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#image_115_button').click(function () {image_115.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });});
});

