
// Set up the chart
var ferko_chart;
$(document).ready(function () {ferko_chart= new Highcharts.Chart({

  chart: {
    renderTo: 'ferko',
    margin: 100,
    type: 'column',
    width: 700,
    height: 700,
    options3d: {
      enabled: true,
      alpha: 10,
      beta: 30,
      depth: 329,
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
categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    showFirstLabel: false

  },
  legend: {
    enabled: false
  },
  series: [{
stack: 0,
data:[[3,2],[14,6],[15,5],[16,2],[17,7],[18,278],]},{
stack: 1,
data:[[3,2],[5,2],[6,2],[7,5],[8,12],[9,35],[10,37],[14,29],[17,5],[18,259],]},{
stack: 2,
data:[[3,2],[4,2],[5,3],[6,6],[7,8],[8,25],[9,56],[10,73],[14,48],[17,4],[18,239],]},{
stack: 3,
data:[[3,2],[4,2],[5,6],[6,9],[7,11],[8,32],[9,76],[10,105],[14,68],[17,3],[18,219],]},{
stack: 4,
data:[[3,3],[4,2],[5,7],[6,12],[7,13],[8,39],[9,96],[10,141],[14,87],[17,4],[18,199],]},{
stack: 5,
data:[[3,3],[4,3],[5,7],[6,16],[7,17],[8,52],[9,113],[10,180],[14,105],[17,3],[18,181],]},{
stack: 6,
data:[[2,1],[3,3],[4,3],[5,8],[6,17],[7,23],[8,61],[9,139],[10,215],[14,124],[17,3],[18,162],]},{
stack: 7,
data:[[2,1],[3,3],[4,4],[5,12],[6,18],[7,29],[8,66],[9,156],[10,253],[13,2],[14,143],[17,4],[18,142],]},{
stack: 8,
data:[[2,1],[3,3],[4,4],[5,12],[6,23],[7,34],[8,71],[9,175],[10,292],[13,2],[14,159],[17,2],[18,125],]},{
stack: 9,
data:[[2,1],[3,5],[4,4],[5,13],[6,24],[7,40],[8,79],[9,190],[10,325],[13,2],[14,177],[16,1],[17,2],[18,106],]},{
stack: 10,
data:[[2,2],[3,5],[4,4],[5,15],[6,29],[7,42],[8,90],[9,207],[10,352],[13,2],[14,194],[16,1],[17,2],[18,88],]},{
stack: 11,
data:[[2,2],[3,5],[4,5],[5,17],[6,31],[7,47],[8,98],[9,231],[10,373],[13,2],[14,210],[17,1],[18,72],]},{
stack: 12,
data:[[2,2],[3,6],[4,6],[5,19],[6,33],[7,49],[8,106],[9,250],[10,398],[13,2],[14,227],[16,1],[17,1],[18,54],]},{
stack: 13,
data:[[2,2],[3,6],[4,6],[5,20],[6,35],[7,53],[8,115],[9,270],[10,425],[13,2],[14,243],[17,1],[18,38],]},{
stack: 14,
data:[[2,2],[3,6],[4,6],[5,23],[6,35],[7,55],[8,121],[9,287],[10,458],[13,2],[14,260],[17,1],[18,21],]},{
stack: 15,
data:[[2,2],[3,6],[4,7],[5,23],[6,38],[7,58],[8,132],[9,301],[10,484],[13,2],[14,274],[17,2],[18,5],]},{
stack: 16,
data:[[2,2],[3,6],[4,7],[5,25],[6,40],[7,60],[8,144],[9,316],[10,706],[14,50],]},{
stack: 17,
data:[[6,2],[9,4],[10,1],]},{
stack: 18,
data:[[7,1],[9,3],[10,1],]},{
stack: 19,
data:[[8,1],[9,1],[10,2],]},{
stack: 20,
data:[[1,1],[6,1],[7,1],[9,1],[11,1],]},{
stack: 21,
data:[[4,1],[9,2],[10,2],]},{
stack: 22,
data:[[7,1],[8,1],[10,2],]},{
stack: 23,
data:[[4,1],[7,1],[10,1],[11,1],]},{
stack: 24,
data:[[6,1],[7,1],[9,1],[11,1],]},{
stack: 25,
data:[[10,3],]},{
stack: 26,
data:[[8,1],[9,1],[12,1],]},{
stack: 27,
data:[[0,1],[8,1],[10,1],[11,1],]},{
stack: 28,
data:[[1,3],[2,2],[3,1],[4,6],[5,6],[6,8],[7,13],[8,2],]},{
stack: 29,
data:[[10,3],]},{
stack: 30,
data:[[7,2],[9,1],[10,2],]},{
stack: 31,
data:[[5,1],[10,1],[11,1],]},{
stack: 32,
data:[[10,3],]},{
stack: 33,
data:[[3,1],[8,1],[10,2],]},{
stack: 34,
data:[[7,1],[11,1],]},{
stack: 35,
data:[[1,1],[8,1],[9,3],[10,1],]},{
stack: 36,
data:[[5,1],[7,2],[8,3],[10,2],]},{
stack: 37,
data:[[0,1],[8,1],[10,1],[11,1],]},{
stack: 38,
data:[[12,1],]},{
stack: 39,
data:[[6,1],[7,1],[8,2],[9,2],[10,1],]},{
stack: 40,
data:[[8,1],[10,3],]},{
stack: 41,
data:[[0,1],[7,1],[9,1],[10,2],]},{
stack: 42,
data:[[1,1],[2,1],[10,1],[11,1],]},{
stack: 43,
data:[[8,1],[9,1],[10,2],]},{
stack: 44,
data:[[9,1],[10,2],]},{
stack: 45,
data:[[9,1],[10,2],]},{
stack: 46,
data:[[9,1],[10,2],]},]
});


// Add mouse events for rotation
$(ferko_chart.container).on('mousedown.hc touchstart.hc', function(eStart) {
  eStart = ferko_chart.pointer.normalize(eStart);

  var posX = eStart.pageX,
    posY = eStart.pageY,
    alpha = ferko_chart.options.chart.options3d.alpha,
    beta = ferko_chart.options.chart.options3d.beta,
    newAlpha,
    newBeta,
    sensitivity = 5; // lower is more sensitive

  $(document).on({
    'mousemove.hc touchdrag.hc': function(e) {
      // Run beta
      newBeta = beta + (posX - e.pageX) / sensitivity;
      ferko_chart.options.chart.options3d.beta = newBeta;

      // Run alpha
      newAlpha = alpha + (e.pageY - posY) / sensitivity;
      ferko_chart.options.chart.options3d.alpha = newAlpha;

      ferko_chart.redraw(false);
    },
    'mouseup touchend': function() {
      $(document).off('.hc');
    }
  });

var ferko_button = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#ferko_button').click(function () {ferko.yAxis.update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });});
});

