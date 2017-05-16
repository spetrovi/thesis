

// Set up the chart
var image_196_chart;
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

image_196_chart= new Highcharts.Chart({

  chart: {
    renderTo: 'image_196',
    margin: 100,
    type: 'column',
    width: 900,
    height: 900,
    options3d: {
      enabled: true,
      alpha: 10,
      beta: 30,
      depth: 280,
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
    categories: ['1K-1K', '2K-3K', '4K-7K', '8K-15K', '16K-31K', '32K-63K', '64K-127K', '128K-255K', '256K-511K', '512K-1023K', '1M-2M', '2M-4M', '4M-8M', '8M-16M', '16M-32M', '32M-65M', '65M-131M', '131M-262M', '262M-524M', '524M-1048M'],
    gridLineWidth: 1,
title: {text: 'Extent size'}
  },
  zAxis: {
title: {text: 'Time'},
categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
    showFirstLabel: false

  },
  legend: {
    enabled: false
  },
  series: [{
stack: 0,
data:[[0,14],]},{
stack: 1,
data:[[0,15],[2,2],[3,2],[5,2],]},{
stack: 2,
data:[[0,12],[2,1],[6,2],]},{
stack: 3,
data:[[0,17],[1,2],[7,2],]},{
stack: 4,
data:[[0,20],[1,8],[6,1],]},{
stack: 5,
data:[[0,19],]},{
stack: 6,
data:[[0,16],[2,1],[6,1],]},{
stack: 7,
data:[[0,5598],[1,1519],[2,1118],[3,938],[4,791],[5,543],[6,337],[7,38],[18,1],[19,2],]},{
stack: 8,
data:[[0,17878],[1,5533],[2,3998],[3,3325],[4,2852],[5,2077],[6,1394],[7,662],[8,306],[9,131],[10,84],[11,23],[12,6],[13,1],[14,2],[18,1],[19,2],]},{
stack: 9,
data:[[0,26474],[1,9790],[2,6546],[3,5482],[4,4647],[5,3476],[6,2278],[7,1149],[8,501],[9,278],[10,143],[11,60],[12,28],[13,14],[14,4],[17,1],[19,2],]},{
stack: 10,
data:[[0,31569],[1,13639],[2,8892],[3,7455],[4,6053],[5,4833],[6,3178],[7,1761],[8,837],[9,429],[10,229],[11,119],[12,40],[13,27],[14,4],[18,2],]},{
stack: 11,
data:[[0,28418],[1,12457],[2,8257],[3,6864],[4,5582],[5,4370],[6,2851],[7,1433],[8,586],[9,216],[10,107],[11,65],[16,2],]},{
stack: 12,
data:[[0,33100],[1,15545],[2,10324],[3,8512],[4,6995],[5,5448],[6,3569],[7,1976],[8,943],[9,401],[10,208],[11,125],[12,28],[13,20],[14,10],[15,2],]},{
stack: 13,
data:[[0,35781],[1,18270],[2,12440],[3,9985],[4,8400],[5,6461],[6,4430],[7,2579],[8,1286],[9,531],[10,253],[11,177],[12,66],[13,20],]},{
stack: 14,
data:[[0,32186],[1,17109],[2,11568],[3,9304],[4,7898],[5,6038],[6,4091],[7,2401],[8,1047],[9,337],[10,20],]},{
stack: 15,
data:[[0,35484],[1,19448],[2,13328],[3,10809],[4,9110],[5,6980],[6,4999],[7,2880],[8,1376],[9,505],[10,149],[11,51],[12,35],[13,6],]},{
stack: 16,
data:[[0,31927],[1,18401],[2,12598],[3,10194],[4,8495],[5,6605],[6,4652],[7,2493],[8,62],]},{
stack: 17,
data:[[0,35094],[1,20243],[2,14303],[3,11647],[4,9898],[5,7582],[6,5527],[7,2872],[8,569],[9,219],[10,117],[11,67],[12,29],[13,4],]},{
stack: 18,
data:[[0,36297],[1,21704],[2,15677],[3,12620],[4,10863],[5,8356],[6,6194],[7,3445],[8,1010],[9,431],[10,183],[11,122],[12,41],[13,8],]},{
stack: 19,
data:[[0,32558],[1,20417],[2,14964],[3,11959],[4,10292],[5,8023],[6,5938],[7,3172],[8,472],]},{
stack: 20,
data:[[0,34634],[1,21863],[2,16041],[3,12994],[4,11331],[5,8839],[6,6601],[7,3773],[8,868],[9,247],[10,103],[11,52],[12,29],]},{
stack: 21,
data:[[0,30690],[1,20529],[2,15250],[3,12362],[4,10840],[5,8652],[6,6441],[7,2478],]},{
stack: 22,
data:[[0,34449],[1,21836],[2,16469],[3,13406],[4,11865],[5,9439],[6,7013],[7,2614],[8,687],[9,233],[10,128],[11,68],]},{
stack: 23,
data:[[0,29795],[1,20593],[2,15763],[3,12709],[4,11432],[5,9154],[6,6116],]},{
stack: 24,
data:[[0,32430],[1,21971],[2,16491],[3,13610],[4,12218],[5,9872],[6,6282],[7,1240],[8,524],[9,221],[10,120],[11,53],[12,30],]},{
stack: 25,
data:[[0,32670],[1,22363],[2,16934],[3,14139],[4,12607],[5,10409],[6,6982],[7,2215],[8,983],[9,352],[10,195],[11,108],[12,30],[13,5],]},{
stack: 26,
data:[[0,28727],[1,21030],[2,16200],[3,13587],[4,12124],[5,10055],[6,6746],[7,1977],[8,333],]},{
stack: 27,
data:[[0,31328],[1,21636],[2,16879],[3,14190],[4,12774],[5,10518],[6,7479],[7,2927],[8,702],[9,257],[10,112],[11,57],[12,20],]},{
stack: 28,
data:[[0,27055],[1,20414],[2,16186],[3,13634],[4,12175],[5,10374],[6,7232],[7,818],]},{
stack: 29,
data:[[0,29397],[1,20877],[2,16490],[3,13906],[4,12547],[5,10749],[6,7464],[7,1506],[8,579],[9,167],[10,96],[11,95],[12,2],]},{
stack: 30,
data:[[0,25784],[1,19716],[2,15881],[3,13120],[4,12027],[5,10540],[6,4940],]},{
stack: 31,
data:[[0,30183],[1,20764],[2,16674],[3,13861],[4,12395],[5,10903],[6,5748],[7,1357],[8,544],[9,251],[10,116],[11,29],]},{
stack: 32,
data:[[0,31752],[1,21647],[2,17181],[3,14163],[4,12807],[5,11158],[6,6451],[7,2369],[8,1055],[9,448],[10,207],[11,45],[12,46],]},{
stack: 33,
data:[[0,27199],[1,20017],[2,16414],[3,13451],[4,12247],[5,10763],[6,6182],[7,2221],[8,159],]},{
stack: 34,
data:[[0,30030],[1,20897],[2,16725],[3,13970],[4,12538],[5,11063],[6,7075],[7,3136],[8,706],[9,289],[10,127],[11,62],]},{
stack: 35,
data:[[0,25321],[1,19366],[2,15861],[3,13386],[4,11969],[5,10800],[6,6781],[7,735],]},{
stack: 36,
data:[[0,28972],[1,20063],[2,16224],[3,13661],[4,12487],[5,10951],[6,7445],[7,2213],[8,640],[9,234],[10,95],[11,33],[12,9],]},{
stack: 37,
data:[[0,24082],[1,18731],[2,15374],[3,12933],[4,11774],[5,10630],[6,6050],]},{
stack: 38,
data:[[0,28941],[1,19823],[2,15999],[3,13494],[4,12169],[5,10968],[6,6610],[7,1839],[8,670],[9,217],[10,144],[11,33],]},{
stack: 39,
data:[[0,30582],[1,21042],[2,16273],[3,13878],[4,12301],[5,11164],[6,7395],[7,2885],[8,1362],[9,507],[10,187],[11,20],]},]
});


// Add mouse events for rotation
$(image_196_chart.container).on('mousedown.hc touchstart.hc', function(eStart) {
  eStart = image_196_chart.pointer.normalize(eStart);

  var posX = eStart.pageX,
    posY = eStart.pageY,
    alpha = image_196_chart.options.chart.options3d.alpha,
    beta = image_196_chart.options.chart.options3d.beta,
    newAlpha,
    newBeta,
    sensitivity = 5; // lower is more sensitive

  $(document).on({
    'mousemove.hc touchdrag.hc': function(e) {
      // Run beta
      newBeta = beta + (posX - e.pageX) / sensitivity;
      image_196_chart.options.chart.options3d.beta = newBeta;

      // Run alpha
      newAlpha = alpha + (e.pageY - posY) / sensitivity;
      image_196_chart.options.chart.options3d.alpha = newAlpha;

      image_196_chart.redraw(false);
    },
    'mouseup touchend': function() {
      $(document).off('.hc');
    }
  });

var image_196_button = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#image_196_button').click(function () {image_196.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });});
});

