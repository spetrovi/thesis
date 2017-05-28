

// Set up the chart
var image_330_chart;
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

image_330_chart= new Highcharts.Chart({

  chart: {
    renderTo: 'image_330',
    margin: 100,
    type: 'column',
    width: 550,
    height: 550,
    options3d: {
      enabled: true,
      alpha: 10,
      beta: 30,
      depth: 217,
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
    text: 'Evolution of free space fragmentation'
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
    categories: ['  4-  4KiB', '  8- 12KiB', ' 16- 28KiB', ' 32- 60KiB', ' 64-124KiB', '128-252KiB', '256-508KiB', '512-1020KiB', '  1-  1MiB', '  2-  3MiB', '  4-  7MiB', '  8- 15MiB', ' 16- 31MiB', '  4-  7GiB', '  8- 15GiB', ' 16- 27GiB'],
    gridLineWidth: 1,
title: {text: 'Extent size'}
  },
  zAxis: {
title: {text: 'Time'},
categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    showFirstLabel: false

  },
  legend: {
    enabled: false
  },
  series: [{
stack: 0,
data:[[0,17],[15,4],]},{
stack: 1,
data:[[0,20],[1,1],[2,1],[6,1],[7,1],[10,1],[15,4],]},{
stack: 2,
data:[[0,20],[1,3],[2,1],[7,1],[15,4],]},{
stack: 3,
data:[[0,18],[1,3],[2,5],[6,1],[14,3],[15,1],]},{
stack: 4,
data:[[0,21],[1,1],[2,1],[3,1],[4,1],[6,1],[9,1],[12,1],[13,2],[14,1],[15,1],]},{
stack: 5,
data:[[0,22],[1,1],[2,3],[3,1],[9,1],[13,1],[15,1],]},{
stack: 6,
data:[[0,25],[1,1],[2,1],[3,1],[13,1],]},{
stack: 7,
data:[[0,25],[2,6],[3,1],[4,1],[5,1],[6,1],[12,1],]},{
stack: 8,
data:[[0,21252],[1,5943],[2,4382],[3,3684],[4,2874],[5,1937],[6,1312],[7,670],[8,284],[9,107],[10,35],[11,9],]},{
stack: 9,
data:[[0,36274],[1,12180],[2,8433],[3,6912],[4,5481],[5,3904],[6,2399],[7,1297],[8,469],[9,187],[10,78],[11,7],]},{
stack: 10,
data:[[0,45930],[1,18503],[2,12288],[3,10081],[4,7897],[5,5814],[6,3688],[7,1986],[8,779],[9,25],]},{
stack: 11,
data:[[0,50032],[1,23115],[2,14952],[3,12133],[4,9826],[5,7358],[6,4779],[7,2627],[8,754],[9,89],[10,2],[11,2],]},{
stack: 12,
data:[[0,50898],[1,26016],[2,17123],[3,13938],[4,11258],[5,8467],[6,5721],[7,2779],[8,119],]},{
stack: 13,
data:[[0,53419],[1,29183],[2,19876],[3,16144],[4,12931],[5,10079],[6,6786],[7,3153],[8,2],[9,1],]},{
stack: 14,
data:[[0,53397],[1,31301],[2,21703],[3,17651],[4,14367],[5,11281],[6,7526],[7,1499],]},{
stack: 15,
data:[[0,51785],[1,32556],[2,23045],[3,18707],[4,15490],[5,12327],[6,7376],]},{
stack: 16,
data:[[0,51108],[1,33317],[2,24092],[3,19670],[4,16507],[5,13091],[6,6492],]},{
stack: 17,
data:[[0,48982],[1,33013],[2,24608],[3,20147],[4,16966],[5,13733],[6,6685],]},{
stack: 18,
data:[[0,47320],[1,32792],[2,24896],[3,20552],[4,17495],[5,14349],[6,6482],]},{
stack: 19,
data:[[0,47481],[1,32839],[2,25555],[3,21135],[4,18262],[5,15023],[6,6103],]},{
stack: 20,
data:[[0,8163],]},{
stack: 21,
data:[[0,25973],[1,16030],[2,7289],[3,5387],[4,3642],[5,2818],[6,2140],[7,1110],[8,130],[9,3],]},{
stack: 22,
data:[[0,40545],[1,21224],[2,11892],[3,9878],[4,7654],[5,5588],[6,4050],[7,1928],[8,564],[9,55],]},{
stack: 23,
data:[[0,43719],[1,24231],[2,16546],[3,13866],[4,10141],[5,8003],[6,5441],[7,2078],[8,25],[9,6],]},{
stack: 24,
data:[[0,49713],[1,27306],[2,19186],[3,16186],[4,13070],[5,10716],[6,7127],[7,1301],[8,2],]},{
stack: 25,
data:[[0,50414],[1,29512],[2,21590],[3,18369],[4,14759],[5,12791],[6,8030],[7,357],[8,2],[9,1],]},{
stack: 26,
data:[[0,50538],[1,30359],[2,23759],[3,19500],[4,15969],[5,14041],[6,8103],]},{
stack: 27,
data:[[0,8161],]},{
stack: 28,
data:[[0,25451],[1,8660],[2,5966],[3,8393],[4,5972],[5,3669],[6,2440],[7,712],[8,15],]},{
stack: 29,
data:[[0,36865],[1,16803],[2,10605],[3,11430],[4,8772],[5,6729],[6,3642],[7,1001],[8,4],]},{
stack: 30,
data:[[0,44262],[1,23112],[2,14857],[3,14297],[4,11879],[5,9287],[6,5908],[7,2074],[8,52],]},]
});


// Add mouse events for rotation
$(image_330_chart.container).on('mousedown.hc touchstart.hc', function(eStart) {
  eStart = image_330_chart.pointer.normalize(eStart);

  var posX = eStart.pageX,
    posY = eStart.pageY,
    alpha = image_330_chart.options.chart.options3d.alpha,
    beta = image_330_chart.options.chart.options3d.beta,
    newAlpha,
    newBeta,
    sensitivity = 5; // lower is more sensitive

  $(document).on({
    'mousemove.hc touchdrag.hc': function(e) {
      // Run beta
      newBeta = beta + (posX - e.pageX) / sensitivity;
      image_330_chart.options.chart.options3d.beta = newBeta;

      // Run alpha
      newAlpha = alpha + (e.pageY - posY) / sensitivity;
      image_330_chart.options.chart.options3d.alpha = newAlpha;

      image_330_chart.redraw(false);
    },
    'mouseup touchend': function() {
      $(document).off('.hc');
    }
  });

var image_330_button = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#image_330_button').click(function () {image_330.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });});
});

