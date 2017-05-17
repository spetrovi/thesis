

// Set up the chart
var image_216_chart;
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

image_216_chart= new Highcharts.Chart({

  chart: {
    renderTo: 'image_216',
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
    categories: ['1K-1K', '2K-3K', '4K-7K', '8K-15K', '16K-31K', '32K-63K', '64K-127K', '128K-255K', '256K-511K', '512K-1023K', '1M-2M', '2M-4M', '4M-8M', '8M-16M', '16M-32M', '131M-262M', '262M-524M', '524M-1048M'],
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
data:[[0,14],[1,3],[2,6],[4,1],]},{
stack: 2,
data:[[0,15],[1,3],[2,2],[3,2],[7,1],[13,2],]},{
stack: 3,
data:[[0,12],[5,2],]},{
stack: 4,
data:[[0,12],[1,2],[9,1],]},{
stack: 5,
data:[[0,16],[1,4],]},{
stack: 6,
data:[[0,12],[1,2],[6,2],[10,1],[17,1],]},{
stack: 7,
data:[[0,10333],[1,2886],[2,2117],[3,1677],[4,1313],[5,926],[6,515],[7,201],[8,6],[17,2],]},{
stack: 8,
data:[[0,22376],[1,7282],[2,4988],[3,4191],[4,3377],[5,2448],[6,1625],[7,869],[8,433],[9,202],[10,83],[11,41],[12,26],[13,4],[14,3],[17,2],]},{
stack: 9,
data:[[0,29875],[1,11302],[2,7633],[3,6246],[4,5029],[5,3836],[6,2629],[7,1454],[8,773],[9,320],[10,159],[11,83],[12,51],[13,27],[16,2],]},{
stack: 10,
data:[[0,34686],[1,15116],[2,9906],[3,8102],[4,6667],[5,5171],[6,3551],[7,2127],[8,1101],[9,516],[10,249],[11,127],[12,67],[13,29],[15,2],]},{
stack: 11,
data:[[0,36661],[1,17986],[2,11994],[3,9796],[4,8089],[5,6381],[6,4398],[7,2644],[8,1443],[9,665],[10,353],[11,146],[12,96],[13,34],[15,2],]},{
stack: 12,
data:[[0,36525],[1,20021],[2,13562],[3,11031],[4,9143],[5,7330],[6,5118],[7,3079],[8,1748],[9,801],[10,429],[11,177],[12,93],[13,48],]},{
stack: 13,
data:[[0,36271],[1,21189],[2,14707],[3,12063],[4,9915],[5,8099],[6,5628],[7,3580],[8,2032],[9,943],[10,468],[11,227],[12,97],[13,21],]},{
stack: 14,
data:[[0,34423],[1,21668],[2,15493],[3,12569],[4,10703],[5,8607],[6,6248],[7,3930],[8,2170],[9,1061],[10,541],[11,260],[12,115],[13,19],[14,4],]},{
stack: 15,
data:[[0,32870],[1,20778],[2,14846],[3,12050],[4,10273],[5,8261],[6,5891],[7,3696],[8,1857],[9,883],[10,465],[11,159],]},{
stack: 16,
data:[[0,33193],[1,21659],[2,15745],[3,13010],[4,11084],[5,8973],[6,6511],[7,4100],[8,2190],[9,981],[10,500],[11,198],[12,4],]},{
stack: 17,
data:[[0,31979],[1,21729],[2,16258],[3,13473],[4,11712],[5,9590],[6,7050],[7,4506],[8,2400],[9,1118],[10,570],[11,233],[12,51],]},{
stack: 18,
data:[[0,29564],[1,20773],[2,15701],[3,12910],[4,11194],[5,9334],[6,6846],[7,4221],[8,2170],[9,952],[10,489],[11,14],]},{
stack: 19,
data:[[0,31562],[1,21743],[2,16440],[3,13581],[4,11978],[5,9878],[6,7436],[7,4667],[8,2519],[9,1123],[10,529],[11,98],[12,12],]},{
stack: 20,
data:[[0,29996],[1,21529],[2,16423],[3,13741],[4,12299],[5,10149],[6,7751],[7,5018],[8,2748],[9,1181],[10,565],[11,124],[12,18],]},{
stack: 21,
data:[[0,26810],[1,20227],[2,15746],[3,13247],[4,11766],[5,9777],[6,7408],[7,4753],[8,2527],[9,1046],[10,110],]},{
stack: 22,
data:[[0,29208],[1,20542],[2,16402],[3,13770],[4,12326],[5,10355],[6,7879],[7,5140],[8,2825],[9,1232],[10,175],[11,10],]},{
stack: 23,
data:[[0,29738],[1,20987],[2,16386],[3,14145],[4,12707],[5,10704],[6,8278],[7,5509],[8,3202],[9,1350],[10,279],[11,43],]},{
stack: 24,
data:[[0,25425],[1,19363],[2,15605],[3,13357],[4,12129],[5,10382],[6,8023],[7,5341],[8,2945],[9,732],]},{
stack: 25,
data:[[0,26331],[1,19416],[2,15606],[3,13628],[4,12261],[5,10557],[6,8333],[7,5601],[8,3180],[9,814],[10,148],[11,23],]},{
stack: 26,
data:[[0,27267],[1,19604],[2,15609],[3,13666],[4,12411],[5,10647],[6,8708],[7,5857],[8,3407],[9,1072],[10,261],[11,61],]},{
stack: 27,
data:[[0,23559],[1,18404],[2,14897],[3,13014],[4,11927],[5,10502],[6,8508],[7,5677],[8,3268],[9,203],]},{
stack: 28,
data:[[0,25423],[1,18618],[2,14931],[3,13031],[4,11931],[5,10667],[6,8799],[7,5875],[8,3398],[9,456],[10,152],[11,26],]},{
stack: 29,
data:[[0,25631],[1,18720],[2,15178],[3,13046],[4,11895],[5,10675],[6,8951],[7,6036],[8,3630],[9,827],[10,284],[11,27],]},{
stack: 30,
data:[[0,21007],[1,16976],[2,14289],[3,12290],[4,11393],[5,10435],[6,8608],[7,5877],[8,3300],]},{
stack: 31,
data:[[0,24356],[1,17778],[2,14459],[3,12508],[4,11575],[5,10438],[6,8822],[7,6114],[8,3467],[9,435],[10,158],[11,33],]},{
stack: 32,
data:[[0,24455],[1,17750],[2,14501],[3,12306],[4,11561],[5,10501],[6,8765],[7,6190],[8,3727],[9,770],[10,241],[11,69],]},{
stack: 33,
data:[[0,20040],[1,16202],[2,13619],[3,11689],[4,11033],[5,10202],[6,8465],[7,6062],[8,3523],[9,70],]},{
stack: 34,
data:[[0,22317],[1,16379],[2,13706],[3,11692],[4,11073],[5,10285],[6,8341],[7,6344],[8,3458],[9,503],[10,103],[11,64],]},{
stack: 35,
data:[[0,23845],[1,16745],[2,13951],[3,11730],[4,10949],[5,10220],[6,8379],[7,6425],[8,3764],[9,800],[10,257],[11,133],]},{
stack: 36,
data:[[0,19213],[1,15244],[2,13070],[3,11108],[4,10497],[5,9928],[6,8201],[7,6330],[8,3563],[9,197],]},{
stack: 37,
data:[[0,23070],[1,16021],[2,13210],[3,11196],[4,10659],[5,9855],[6,8184],[7,6331],[8,3821],[9,498],[10,127],]},{
stack: 38,
data:[[0,24248],[1,16818],[2,13328],[3,11363],[4,10584],[5,9673],[6,8218],[7,6488],[8,3960],[9,958],[10,224],[11,16],]},{
stack: 39,
data:[[0,20204],[1,15408],[2,12615],[3,10666],[4,10168],[5,9377],[6,8095],[7,6336],[8,3750],[9,4],]},]
});


// Add mouse events for rotation
$(image_216_chart.container).on('mousedown.hc touchstart.hc', function(eStart) {
  eStart = image_216_chart.pointer.normalize(eStart);

  var posX = eStart.pageX,
    posY = eStart.pageY,
    alpha = image_216_chart.options.chart.options3d.alpha,
    beta = image_216_chart.options.chart.options3d.beta,
    newAlpha,
    newBeta,
    sensitivity = 5; // lower is more sensitive

  $(document).on({
    'mousemove.hc touchdrag.hc': function(e) {
      // Run beta
      newBeta = beta + (posX - e.pageX) / sensitivity;
      image_216_chart.options.chart.options3d.beta = newBeta;

      // Run alpha
      newAlpha = alpha + (e.pageY - posY) / sensitivity;
      image_216_chart.options.chart.options3d.alpha = newAlpha;

      image_216_chart.redraw(false);
    },
    'mouseup touchend': function() {
      $(document).off('.hc');
    }
  });

var image_216_button = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#image_216_button').click(function () {image_216.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });});
});
