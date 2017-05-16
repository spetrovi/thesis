
// Set up the chart
var image_777_chart;
$(document).ready(function () {image_777_chart= new Highcharts.Chart({

  chart: {
    renderTo: 'image_777',
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
    categories: ['1K-1K', '2K-3K', '4K-7K', '8K-15K', '16K-31K', '32K-63K', '64K-127K', '128K-255K', '256K-511K', '512K-1023K', '1M-2M', '2M-4M', '4M-8M', '8M-16M', '16M-32M', '32M-65M', '65M-131M', '131M-262M', '262M-524M'],
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
data:[[0,14],]},{
stack: 1,
data:[[0,13],[8,1],[10,2],[13,1],]},{
stack: 2,
data:[[0,13],[1,3],[2,1],[6,1],[7,1],[8,1],[9,2],[10,1],[12,1],]},{
stack: 3,
data:[[0,13],[1,3],[2,1],[3,1],[4,1],[6,2],[7,2],[8,4],]},{
stack: 4,
data:[[0,13],[1,5],[2,2],[4,5],[5,3],[6,1],[7,5],[8,2],[9,2],[10,2],[11,2],[13,1],[18,2],]},{
stack: 5,
data:[[0,13],[1,6],[2,8],[3,4],[4,17],[5,11],[6,12],[7,8],[9,2],[18,1],]},{
stack: 6,
data:[[0,13],[1,8],[2,10],[3,9],[4,22],[5,9],[6,13],[7,9],[8,2],[9,2],]},{
stack: 7,
data:[[0,15],[1,10],[2,13],[3,12],[4,28],[5,11],[6,9],[7,15],[8,5],[9,2],[16,2],]},{
stack: 8,
data:[[0,20],[1,9],[2,15],[3,20],[4,24],[5,17],[6,15],[7,16],]},{
stack: 9,
data:[[0,22],[1,7],[2,6],[3,21],[4,25],[5,22],[6,19],[7,12],[15,2],]},{
stack: 10,
data:[[0,23],[1,5],[2,22],[3,29],[4,34],[5,37],[6,30],[7,12],]},{
stack: 11,
data:[[0,24],[1,9],[2,22],[3,28],[4,41],[5,43],[6,26],[7,6],]},{
stack: 12,
data:[[0,25],[1,14],[2,24],[3,23],[4,42],[5,38],[6,26],[7,9],]},{
stack: 13,
data:[[0,29],[1,16],[2,25],[3,30],[4,56],[5,43],[6,21],]},{
stack: 14,
data:[[0,37],[1,21],[2,20],[3,40],[4,64],[5,47],[6,17],[7,4],[8,7],[11,1],[15,1],]},{
stack: 15,
data:[[0,38],[1,19],[2,22],[3,36],[4,61],[5,43],[6,20],[7,8],[8,1],]},{
stack: 16,
data:[[0,38],[1,21],[2,24],[3,38],[4,59],[5,53],[6,32],[7,7],[8,1],[12,1],[14,1],[16,2],]},{
stack: 17,
data:[[0,31],[1,28],[2,25],[3,51],[4,54],[5,46],[6,31],[7,6],[8,1],]},{
stack: 18,
data:[[0,31],[1,24],[2,20],[3,45],[4,56],[5,41],[6,27],[7,3],[8,1],]},{
stack: 19,
data:[[0,34],[1,24],[2,22],[3,54],[4,62],[5,44],[6,19],[8,1],]},{
stack: 20,
data:[[0,32],[1,38],[2,24],[3,53],[4,63],[5,33],[6,38],]},{
stack: 21,
data:[[0,35],[1,39],[2,21],[3,46],[4,65],[5,33],[6,39],[7,2],]},{
stack: 22,
data:[[0,44],[1,39],[2,32],[3,54],[4,68],[5,33],[6,31],[7,2],[17,2],[18,2],]},{
stack: 23,
data:[[0,49],[1,38],[2,39],[3,54],[4,55],[5,31],[6,26],[12,1],]},{
stack: 24,
data:[[0,49],[1,34],[2,41],[3,51],[4,34],[5,39],[6,44],[7,2],[14,1],[17,2],]},{
stack: 25,
data:[[0,44],[1,47],[2,39],[3,58],[4,54],[5,58],[6,20],[7,4],[16,1],]},{
stack: 26,
data:[[0,41],[1,53],[2,42],[3,63],[4,63],[5,60],[6,22],[7,1],[14,4],[15,3],]},{
stack: 27,
data:[[0,44],[1,51],[2,61],[3,63],[4,65],[5,54],[6,14],[7,2],]},{
stack: 28,
data:[[0,50],[1,56],[2,60],[3,58],[4,72],[5,52],[6,18],[7,4],[10,2],[14,2],]},{
stack: 29,
data:[[0,62],[1,63],[2,62],[3,73],[4,67],[5,61],[6,21],]},{
stack: 30,
data:[[0,59],[1,67],[2,56],[3,74],[4,72],[5,73],[6,15],[14,2],[17,1],]},{
stack: 31,
data:[[0,64],[1,67],[2,55],[3,72],[4,80],[5,83],[6,8],]},{
stack: 32,
data:[[0,68],[1,56],[2,72],[3,73],[4,86],[5,75],[6,10],[14,1],[16,2],]},{
stack: 33,
data:[[0,73],[1,61],[2,80],[3,88],[4,105],[5,52],]},{
stack: 34,
data:[[0,71],[1,67],[2,87],[3,83],[4,108],[5,55],[6,7],]},{
stack: 35,
data:[[0,80],[1,83],[2,79],[3,93],[4,84],[5,46],]},{
stack: 36,
data:[[0,79],[1,86],[2,91],[3,80],[4,86],[5,53],[6,3],[8,1],[14,1],[15,1],[16,2],]},{
stack: 37,
data:[[0,70],[1,62],[2,98],[3,84],[4,98],[5,54],[6,2],]},{
stack: 38,
data:[[0,70],[1,64],[2,85],[3,76],[4,104],[5,64],[6,4],[12,2],[15,2],[16,2],]},{
stack: 39,
data:[[0,59],[1,61],[2,89],[3,78],[4,96],[5,60],[6,5],]},{
stack: 40,
data:[[0,55],[1,79],[2,100],[3,80],[4,110],[5,52],]},{
stack: 41,
data:[[0,64],[1,95],[2,105],[3,87],[4,102],[5,47],[6,1],[7,1],[10,1],[13,1],]},{
stack: 42,
data:[[0,56],[1,120],[2,96],[3,84],[4,98],[5,49],[6,3],]},{
stack: 43,
data:[[0,61],[1,118],[2,100],[3,78],[4,102],[5,51],[6,3],]},{
stack: 44,
data:[[0,69],[1,109],[2,105],[3,80],[4,106],[5,48],[6,2],[12,1],[13,1],]},{
stack: 45,
data:[[0,85],[1,135],[2,100],[3,89],[4,112],[5,47],[6,2],[8,3],[10,2],]},{
stack: 46,
data:[[0,93],[1,122],[2,112],[3,74],[4,109],[5,27],[6,3],[8,1],[9,2],[10,1],[14,2],]},{
stack: 47,
data:[[0,98],[1,137],[2,135],[3,99],[4,116],[5,36],[7,1],]},{
stack: 48,
data:[[0,97],[1,123],[2,140],[3,96],[4,124],[5,30],[6,1],]},{
stack: 49,
data:[[0,97],[1,130],[2,136],[3,110],[4,120],[5,47],[6,2],[15,2],]},{
stack: 50,
data:[[0,103],[1,125],[2,141],[3,119],[4,117],[5,34],[6,7],[7,1],[10,1],[14,1],[15,4],]},{
stack: 51,
data:[[0,82],[1,112],[2,124],[3,116],[4,104],[5,38],[6,4],[7,2],[8,3],[9,2],[11,1],[12,2],[14,1],]},{
stack: 52,
data:[[0,80],[1,114],[2,120],[3,98],[4,81],[5,43],[6,2],]},{
stack: 53,
data:[[0,86],[1,119],[2,126],[3,113],[4,91],[5,37],]},{
stack: 54,
data:[[0,93],[1,125],[2,122],[3,138],[4,76],[5,26],]},{
stack: 55,
data:[[0,106],[1,131],[2,125],[3,156],[4,86],[5,28],]},{
stack: 56,
data:[[0,111],[1,151],[2,172],[3,136],[4,83],[5,29],[6,1],]},{
stack: 57,
data:[[0,112],[1,158],[2,153],[3,139],[4,96],[5,31],[7,1],[9,1],[12,1],[15,3],]},{
stack: 58,
data:[[0,103],[1,165],[2,152],[3,137],[4,115],[5,31],[12,5],[13,12],]},]
});


// Add mouse events for rotation
$(image_777_chart.container).on('mousedown.hc touchstart.hc', function(eStart) {
  eStart = image_777_chart.pointer.normalize(eStart);

  var posX = eStart.pageX,
    posY = eStart.pageY,
    alpha = image_777_chart.options.chart.options3d.alpha,
    beta = image_777_chart.options.chart.options3d.beta,
    newAlpha,
    newBeta,
    sensitivity = 5; // lower is more sensitive

  $(document).on({
    'mousemove.hc touchdrag.hc': function(e) {
      // Run beta
      newBeta = beta + (posX - e.pageX) / sensitivity;
      image_777_chart.options.chart.options3d.beta = newBeta;

      // Run alpha
      newAlpha = alpha + (e.pageY - posY) / sensitivity;
      image_777_chart.options.chart.options3d.alpha = newAlpha;

      image_777_chart.redraw(false);
    },
    'mouseup touchend': function() {
      $(document).off('.hc');
    }
  });

var image_777_button = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#image_777_button').click(function () {image_777.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });});
});

