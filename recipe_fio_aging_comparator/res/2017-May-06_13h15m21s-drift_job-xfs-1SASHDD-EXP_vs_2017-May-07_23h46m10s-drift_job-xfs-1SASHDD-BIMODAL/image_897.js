
// Set up the chart
var image_897_chart;
$(document).ready(function () {image_897_chart= new Highcharts.Chart({

  chart: {
    renderTo: 'image_897',
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
data:[[0,12],[1,1],[11,1],[12,1],[13,2],[14,1],[21,3],]},{
stack: 2,
data:[[0,12],[1,1],[11,1],[12,2],[13,5],[20,1],[21,2],]},{
stack: 3,
data:[[0,12],[1,3],[11,2],[12,7],[13,5],[14,2],[15,1],[20,3],]},{
stack: 4,
data:[[0,14],[1,3],[11,4],[12,10],[13,3],[14,6],[15,3],[20,3],]},{
stack: 5,
data:[[0,14],[1,3],[11,6],[12,10],[13,5],[14,10],[15,1],[16,2],[20,3],]},{
stack: 6,
data:[[0,14],[1,3],[4,2],[8,3],[11,4],[12,13],[13,12],[14,13],[15,11],[16,2],[20,3],]},{
stack: 7,
data:[[0,15],[1,3],[4,2],[8,4],[9,2],[10,1],[11,5],[12,12],[13,16],[14,23],[15,9],[20,3],]},{
stack: 8,
data:[[0,16],[1,3],[4,2],[5,2],[8,4],[9,5],[10,4],[11,7],[12,15],[13,16],[14,24],[16,2],[20,3],]},{
stack: 9,
data:[[0,16],[1,3],[4,3],[5,2],[8,4],[9,5],[10,4],[11,9],[12,19],[13,21],[14,21],[15,2],[20,3],]},{
stack: 10,
data:[[0,16],[1,3],[4,3],[5,2],[8,4],[9,7],[10,4],[11,14],[12,16],[13,22],[14,21],[15,5],[16,2],[20,1],]},{
stack: 11,
data:[[0,16],[1,5],[4,3],[5,2],[8,4],[9,7],[10,5],[11,14],[12,23],[13,23],[14,17],[15,6],[16,4],]},{
stack: 12,
data:[[0,16],[1,7],[4,3],[5,4],[8,4],[9,8],[10,9],[11,14],[12,23],[13,35],[14,15],[16,6],]},{
stack: 13,
data:[[0,16],[1,7],[4,2],[5,4],[8,4],[9,8],[10,9],[11,17],[12,25],[13,37],[14,22],[15,2],]},{
stack: 14,
data:[[0,16],[1,8],[4,3],[5,4],[7,1],[8,3],[9,8],[10,9],[11,18],[12,27],[13,41],[14,32],[15,2],[16,1],]},{
stack: 15,
data:[[0,16],[1,8],[4,3],[5,4],[7,1],[8,3],[9,6],[10,9],[11,20],[12,27],[13,41],[14,35],[15,2],[16,2],]},{
stack: 16,
data:[[0,16],[1,8],[4,3],[5,4],[7,1],[8,6],[9,6],[10,10],[11,23],[12,29],[13,43],[14,47],[15,3],]},{
stack: 17,
data:[[0,16],[1,8],[4,3],[5,4],[7,1],[8,6],[9,6],[10,12],[11,24],[12,29],[13,49],[14,42],[15,1],]},{
stack: 18,
data:[[0,15],[1,8],[4,3],[5,4],[7,1],[8,6],[9,6],[10,14],[11,29],[12,32],[13,52],[14,47],[15,2],[16,1],[17,1],[19,1],]},{
stack: 19,
data:[[0,15],[1,10],[4,2],[5,4],[7,1],[8,6],[9,9],[10,16],[11,29],[12,34],[13,53],[14,46],[15,7],[16,7],]},{
stack: 20,
data:[[0,15],[1,10],[4,2],[5,4],[7,1],[8,6],[9,10],[10,17],[11,36],[12,34],[13,60],[14,49],[15,8],[17,1],]},{
stack: 21,
data:[[0,15],[1,10],[4,2],[5,4],[7,2],[8,6],[9,17],[10,20],[11,35],[12,36],[13,66],[14,36],]},{
stack: 22,
data:[[0,15],[1,12],[3,3],[4,2],[5,4],[7,6],[8,9],[9,3],]},{
stack: 23,
data:[[0,13],[1,9],[3,1],[4,2],[6,1],[7,5],[8,6],[9,5],[10,3],[11,33],[12,14],[13,20],[14,29],[15,31],[16,29],[17,10],]},{
stack: 24,
data:[[0,13],[1,9],[3,1],[4,2],[6,1],[7,5],[8,6],[9,5],[10,3],[11,38],[12,27],[13,29],[14,35],[15,32],[16,16],]},{
stack: 25,
data:[[0,13],[1,10],[3,2],[4,2],[6,1],[7,6],[8,6],[9,3],]},{
stack: 26,
data:[[0,13],[1,8],[3,1],[4,2],[6,1],[7,6],[8,5],[9,8],[10,7],[11,45],[12,11],[13,34],[14,31],[15,21],[16,26],[17,11],]},{
stack: 27,
data:[[0,13],[1,8],[3,1],[4,2],[5,2],[6,1],[7,8],[8,5],[9,8],[10,8],[11,47],[12,16],[13,40],[14,51],[15,18],[16,4],[17,1],]},{
stack: 28,
data:[[0,13],[1,8],[3,1],[4,4],[5,2],[6,1],[7,8],[8,9],]},{
stack: 29,
data:[[0,12],[1,8],[3,1],[4,6],[5,2],[6,1],[7,6],[8,9],[9,1],[10,4],[11,3],[12,15],[13,14],[14,30],[15,21],[16,27],[17,4],]},{
stack: 30,
data:[[0,12],[1,8],[3,1],[4,6],[5,3],[6,1],[7,6],[8,12],[9,2],[10,11],[11,10],[12,26],[13,35],[14,24],]},{
stack: 31,
data:[[0,12],[1,8],[3,1],[4,10],[5,4],[6,3],[7,6],[8,9],[16,2],]},{
stack: 32,
data:[[0,12],[1,8],[4,4],[5,2],[6,3],[7,2],[8,10],[9,16],[10,24],[11,14],[12,17],[13,32],[14,41],[15,41],[16,19],[17,3],]},{
stack: 33,
data:[[0,12],[1,8],[4,2],[5,3],[6,3],[7,2],[8,11],[9,21],[10,34],[11,55],[12,20],[13,48],[14,53],[15,46],[16,3],]},{
stack: 34,
data:[[0,12],[1,8],[4,2],[5,3],[6,5],[7,2],[8,12],[9,22],[10,38],[11,56],[12,27],[13,61],[14,51],[15,20],]},{
stack: 35,
data:[[0,12],[1,10],[4,2],[5,4],[6,6],[7,5],[8,10],[9,20],[10,24],[11,26],]},{
stack: 36,
data:[[0,13],[1,8],[5,4],[6,6],[7,7],[8,10],[11,14],[12,16],[13,21],[14,31],[15,57],[16,31],[17,17],[18,1],]},{
stack: 37,
data:[[0,13],[1,10],[5,4],[6,6],[7,7],[8,10],[10,2],[11,22],[12,23],[13,26],[14,41],[15,63],[16,28],[17,4],[18,1],]},{
stack: 38,
data:[[0,13],[1,10],[5,5],[6,6],[7,9],[8,9],[9,3],[10,11],[11,55],[12,40],[13,51],[14,41],[15,1],]},{
stack: 39,
data:[[0,12],[1,10],[5,7],[6,9],[7,20],[8,5],]},{
stack: 40,
data:[[0,12],[1,10],[5,3],[6,6],[7,15],[8,5],[9,2],[10,5],[11,4],[12,16],[13,53],[14,58],[15,63],[16,37],]},{
stack: 41,
data:[[0,12],[1,10],[5,3],[6,6],[7,15],[8,7],[9,2],[10,7],[11,10],[12,19],[13,63],[14,70],[15,51],[16,2],]},{
stack: 42,
data:[[0,12],[1,12],[3,2],[4,2],[5,2],[6,7],[7,15],[8,5],[15,2],]},{
stack: 43,
data:[[0,14],[1,12],[3,2],[4,3],[5,1],[6,8],[7,11],[8,5],[9,12],[10,5],[11,25],[12,32],[13,45],[14,64],[15,52],[16,23],]},{
stack: 44,
data:[[0,14],[1,12],[3,2],[4,3],[5,1],[6,7],[7,11],[8,7],[9,13],[10,9],[11,29],[12,50],[13,60],[14,82],[15,18],]},{
stack: 45,
data:[[0,14],[1,12],[3,2],[4,3],[5,1],[6,6],[7,11],[8,9],[9,15],[10,10],[11,30],[12,50],[13,61],[14,78],[15,8],]},{
stack: 46,
data:[[0,14],[1,10],[3,2],[4,5],[5,1],[6,3],[7,8],[8,11],[9,30],[10,40],[11,47],[12,95],[13,49],[14,46],[15,59],[16,38],[17,3],]},{
stack: 47,
data:[[0,14],[1,9],[3,2],[4,5],[5,1],[6,3],[7,8],[8,12],[9,30],[10,43],[11,51],[12,97],[13,60],[14,53],[15,50],[16,5],]},{
stack: 48,
data:[[0,14],[1,9],[3,2],[4,5],[5,2],[6,3],[7,8],[8,14],[9,35],[10,54],[11,65],[12,58],]},{
stack: 49,
data:[[0,14],[1,7],[3,2],[4,5],[5,2],[6,5],[7,10],[8,14],[9,27],[10,43],[11,59],[12,40],[13,46],[14,57],[15,53],[16,16],]},{
stack: 50,
data:[[0,14],[1,7],[2,2],[3,2],[4,5],[5,2],[6,5],[7,12],[8,15],[9,29],[10,47],[11,56],[12,50],[13,55],[14,57],]},{
stack: 51,
data:[[0,14],[1,7],[2,6],[3,4],[4,5],[5,2],[6,7],[7,12],[8,10],]},{
stack: 52,
data:[[0,14],[1,7],[2,4],[3,2],[4,6],[5,3],[6,4],[7,10],[8,9],[9,3],[10,6],[11,2],[12,26],[13,30],[14,66],[15,62],[16,40],]},{
stack: 53,
data:[[0,14],[1,7],[2,4],[3,2],[4,5],[5,3],[6,4],[7,10],[8,10],[9,9],[10,13],[11,10],[12,27],[13,57],[14,74],[15,36],[16,1],]},{
stack: 54,
data:[[0,14],[1,7],[2,4],[3,2],[4,5],[5,3],[6,4],[7,12],[8,10],[9,10],[10,20],[11,16],[12,38],[13,61],[14,14],[15,1],]},{
stack: 55,
data:[[0,15],[1,7],[2,4],[4,4],[5,3],[6,5],[7,16],[8,10],[9,15],[10,34],[11,34],[12,33],[13,58],[14,70],[15,50],[16,19],]},{
stack: 56,
data:[[0,14],[1,7],[2,4],[4,4],[5,3],[6,5],[7,19],[8,11],[9,19],[10,34],[11,41],[12,54],[13,78],[14,69],[15,6],]},{
stack: 57,
data:[[0,14],[1,7],[2,6],[4,4],[5,5],[6,7],[7,17],[8,5],]},{
stack: 58,
data:[[0,14],[1,7],[2,4],[4,3],[5,6],[6,7],[7,15],[8,7],[9,1],[10,3],[11,7],[12,33],[13,37],[14,63],[15,76],[16,13],]},]
});


// Add mouse events for rotation
$(image_897_chart.container).on('mousedown.hc touchstart.hc', function(eStart) {
  eStart = image_897_chart.pointer.normalize(eStart);

  var posX = eStart.pageX,
    posY = eStart.pageY,
    alpha = image_897_chart.options.chart.options3d.alpha,
    beta = image_897_chart.options.chart.options3d.beta,
    newAlpha,
    newBeta,
    sensitivity = 5; // lower is more sensitive

  $(document).on({
    'mousemove.hc touchdrag.hc': function(e) {
      // Run beta
      newBeta = beta + (posX - e.pageX) / sensitivity;
      image_897_chart.options.chart.options3d.beta = newBeta;

      // Run alpha
      newAlpha = alpha + (e.pageY - posY) / sensitivity;
      image_897_chart.options.chart.options3d.alpha = newAlpha;

      image_897_chart.redraw(false);
    },
    'mouseup touchend': function() {
      $(document).off('.hc');
    }
  });

var image_897_button = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#image_897_button').click(function () {image_897.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });});
});

