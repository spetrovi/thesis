

// Set up the chart
var image_955_chart;
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

image_955_chart= new Highcharts.Chart({

  chart: {
    renderTo: 'image_955',
    margin: 100,
    type: 'column',
    width: 550,
    height: 550,
    options3d: {
      enabled: true,
      alpha: 10,
      beta: 30,
      depth: 602,
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
    categories: ['  4-  4KiB', '  8- 12KiB', ' 16- 28KiB', ' 32- 60KiB', ' 64-124KiB', '128-252KiB', '256-508KiB', '512-1020KiB', '  1-  1MiB', '  2-  3MiB', '  4-  7MiB', '  8- 15MiB', ' 16- 31MiB', ' 32- 63MiB', ' 64-127MiB', '128-255MiB', '256-511MiB', '512-1023MiB', '  1-  1GiB', '  2-  3GiB', '  4-  7GiB', '  8- 15GiB', ' 16- 31GiB'],
    gridLineWidth: 1,
title: {text: 'Extent size'}
  },
  zAxis: {
title: {text: 'Time'},
categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85],
    showFirstLabel: false

  },
  legend: {
    enabled: false
  },
  series: [{
stack: 0,
data:[[0,23],[1,7],[2,5],[3,3],[4,1],[6,1],[19,1],[20,1],[21,1],[22,1],]},{
stack: 1,
data:[[0,31],[1,2],[2,1],[4,2],[5,3],[6,2],[7,1],[9,1],[18,1],[20,1],[21,1],[22,1],]},{
stack: 2,
data:[[0,27],[1,7],[2,8],[3,3],[4,3],[5,2],[6,1],[9,2],[18,1],[20,1],[21,1],[22,1],]},{
stack: 3,
data:[[0,28],[1,4],[2,3],[3,3],[4,1],[5,1],[6,3],[7,1],[8,1],[9,2],[13,1],[18,1],[19,1],[21,1],[22,1],]},{
stack: 4,
data:[[0,31],[1,5],[2,1],[3,1],[4,1],[5,3],[17,1],[19,1],[21,1],[22,1],]},{
stack: 5,
data:[[0,26],[1,2],[2,1],[6,1],[9,3],[16,1],[19,1],[21,1],[22,1],]},{
stack: 6,
data:[[0,30],[1,4],[2,4],[3,3],[4,4],[5,1],[6,4],[8,2],[9,1],[10,1],[11,1],[18,1],[21,1],[22,1],]},{
stack: 7,
data:[[0,36],[1,9],[2,3],[3,4],[4,3],[5,3],[6,2],[8,2],[11,1],[17,1],[21,1],[22,1],]},{
stack: 8,
data:[[0,23],[1,1],[2,1],[4,2],[5,2],[6,1],[16,1],[21,1],[22,1],]},{
stack: 9,
data:[[0,30],[1,4],[2,7],[3,4],[4,2],[5,1],[7,1],[8,1],[11,1],[21,1],[22,1],]},{
stack: 10,
data:[[0,20],[2,7],[3,2],[4,3],[5,1],[6,1],[7,1],[8,1],[21,1],[22,1],]},{
stack: 11,
data:[[0,20],[1,4],[2,2],[3,2],[5,3],[6,3],[7,1],[8,2],[21,1],[22,1],]},{
stack: 12,
data:[[0,26],[1,1],[2,1],[4,1],[5,2],[21,1],[22,1],]},{
stack: 13,
data:[[0,25],[1,2],[2,1],[4,3],[5,1],[7,1],[20,1],[22,1],]},{
stack: 14,
data:[[0,29],[1,3],[2,3],[6,1],[10,1],[20,1],[22,1],]},{
stack: 15,
data:[[0,30],[1,2],[2,4],[3,3],[5,2],[6,2],[8,1],[20,1],[22,1],]},{
stack: 16,
data:[[0,27],[1,5],[5,1],[8,1],[20,1],[22,1],]},{
stack: 17,
data:[[0,29],[1,2],[2,2],[3,2],[4,1],[5,2],[20,1],[22,1],]},{
stack: 18,
data:[[0,22],[1,2],[2,1],[3,1],[4,2],[19,1],[22,1],]},{
stack: 19,
data:[[0,23],[1,3],[2,3],[3,1],[5,2],[6,1],[11,1],[19,1],[22,1],]},{
stack: 20,
data:[[0,26],[1,6],[2,5],[3,1],[8,2],[18,1],[22,1],]},{
stack: 21,
data:[[0,32],[1,7],[2,2],[3,8],[4,2],[5,3],[7,3],[9,1],[17,1],[22,1],]},{
stack: 22,
data:[[0,27],[1,6],[2,6],[3,5],[4,3],[6,2],[7,1],[8,1],[15,1],[22,1],]},{
stack: 23,
data:[[0,29],[1,9],[3,1],[4,3],[5,1],[7,1],[9,1],[12,3],[22,1],]},{
stack: 24,
data:[[0,36],[1,4],[2,2],[3,1],[4,1],[5,3],[6,1],[8,1],[9,1],[22,1],]},{
stack: 25,
data:[[0,21],[1,3],[2,2],[3,1],[4,3],[6,1],[7,2],[22,1],]},{
stack: 26,
data:[[0,23],[1,1],[2,1],[3,4],[8,1],[22,1],]},{
stack: 27,
data:[[0,42],[1,13],[2,7],[3,9],[4,9],[5,3],[6,1],[7,1],[8,1],[9,1],[22,1],]},{
stack: 28,
data:[[0,32],[1,5],[2,9],[3,7],[4,3],[6,2],[7,2],[21,1],]},{
stack: 29,
data:[[0,27],[1,6],[2,5],[21,1],]},{
stack: 30,
data:[[0,33],[1,2],[2,4],[3,3],[4,1],[21,1],]},{
stack: 31,
data:[[0,19],[1,5],[2,3],[3,1],[21,1],]},{
stack: 32,
data:[[0,23],[1,5],[2,1],[5,1],[7,1],[21,1],]},{
stack: 33,
data:[[0,31],[1,6],[2,4],[3,3],[5,1],[7,1],[21,1],]},{
stack: 34,
data:[[0,27],[1,3],[2,3],[3,1],[4,2],[6,1],[20,1],]},{
stack: 35,
data:[[0,28],[1,1],[2,2],[3,2],[4,1],[5,2],[6,1],[7,2],[20,1],]},{
stack: 36,
data:[[0,34659],[1,8144],[2,6514],[3,5405],[4,4371],[5,3305],[6,2325],[7,1524],[8,944],[9,570],[10,294],[11,148],[12,65],[13,36],[14,23],[15,2],[20,1],]},{
stack: 37,
data:[[0,31944],[1,7638],[2,6164],[3,5121],[4,4147],[5,3157],[6,2191],[7,1444],[8,859],[9,502],[10,255],[11,129],[12,53],[13,36],[14,13],[15,2],[20,1],]},{
stack: 38,
data:[[0,29949],[1,7287],[2,5865],[3,4913],[4,4046],[5,3017],[6,2129],[7,1345],[8,795],[9,457],[10,235],[11,117],[12,56],[13,27],[14,5],[15,1],[20,1],]},{
stack: 39,
data:[[0,27169],[1,6688],[2,5402],[3,4535],[4,3662],[5,2691],[6,1910],[7,1213],[8,741],[9,418],[10,195],[11,105],[12,48],[13,20],[14,2],[20,1],]},{
stack: 40,
data:[[0,25361],[1,6301],[2,5118],[3,4239],[4,3411],[5,2489],[6,1781],[7,1148],[8,681],[9,368],[10,190],[11,87],[12,37],[13,13],[14,2],[20,1],]},{
stack: 41,
data:[[0,23822],[1,5906],[2,4728],[3,3915],[4,3126],[5,2305],[6,1622],[7,1040],[8,628],[9,323],[10,161],[11,87],[12,28],[13,9],[20,1],]},{
stack: 42,
data:[[0,22663],[1,5735],[2,4356],[3,3637],[4,2854],[5,2121],[6,1467],[7,942],[8,582],[9,278],[10,136],[11,81],[12,16],[13,2],[14,1],[19,1],]},{
stack: 43,
data:[[0,21624],[1,5524],[2,4091],[3,3271],[4,2516],[5,1856],[6,1343],[7,837],[8,499],[9,245],[10,109],[11,61],[12,9],[19,1],]},{
stack: 44,
data:[[0,20793],[1,5433],[2,3936],[3,2937],[4,2154],[5,1595],[6,1169],[7,700],[8,437],[9,190],[10,81],[11,44],[12,2],[19,1],]},{
stack: 45,
data:[[0,20196],[1,5460],[2,3836],[3,2758],[4,1828],[5,1385],[6,1003],[7,586],[8,351],[9,148],[10,46],[11,28],[19,1],]},{
stack: 46,
data:[[0,19429],[1,5422],[2,3782],[3,2615],[4,1686],[5,1185],[6,785],[7,474],[8,262],[9,100],[10,21],[11,11],[19,1],]},{
stack: 47,
data:[[0,52538],[1,14227],[2,10324],[3,8248],[4,6146],[5,4721],[6,3179],[7,2083],[8,1237],[9,683],[10,329],[11,170],[12,70],[13,33],[14,11],[15,2],[19,1],]},{
stack: 48,
data:[[0,50199],[1,13785],[2,10066],[3,7988],[4,5960],[5,4586],[6,3040],[7,2005],[8,1162],[9,614],[10,299],[11,147],[12,56],[13,26],[14,7],[15,1],[19,1],]},{
stack: 49,
data:[[0,47290],[1,13218],[2,9644],[3,7683],[4,5741],[5,4452],[6,2928],[7,1869],[8,1092],[9,555],[10,270],[11,129],[12,46],[13,20],[14,6],[15,1],[19,1],]},{
stack: 50,
data:[[0,44720],[1,12687],[2,9264],[3,7368],[4,5446],[5,4119],[6,2745],[7,1742],[8,1044],[9,510],[10,237],[11,110],[12,39],[13,13],[14,4],[19,1],]},{
stack: 51,
data:[[0,43017],[1,12248],[2,8909],[3,7109],[4,5160],[5,3905],[6,2596],[7,1657],[8,957],[9,476],[10,202],[11,91],[12,29],[13,6],[14,5],[19,1],]},{
stack: 52,
data:[[0,41449],[1,11923],[2,8505],[3,6707],[4,4867],[5,3669],[6,2455],[7,1561],[8,906],[9,424],[10,173],[11,78],[12,21],[13,2],[14,3],[19,1],]},{
stack: 53,
data:[[0,40341],[1,11726],[2,8173],[3,6283],[4,4576],[5,3450],[6,2294],[7,1440],[8,832],[9,383],[10,147],[11,62],[12,9],[19,1],]},{
stack: 54,
data:[[0,39394],[1,11497],[2,7842],[3,5831],[4,4279],[5,3221],[6,2136],[7,1328],[8,764],[9,321],[10,109],[11,42],[12,1],[18,1],]},{
stack: 55,
data:[[0,38595],[1,11335],[2,7636],[3,5459],[4,3925],[5,3018],[6,1989],[7,1191],[8,685],[9,265],[10,77],[11,15],[18,1],]},{
stack: 56,
data:[[0,37879],[1,11162],[2,7477],[3,5226],[4,3636],[5,2736],[6,1845],[7,1071],[8,621],[9,232],[10,48],[17,1],]},{
stack: 57,
data:[[0,68138],[1,20339],[2,13955],[3,10701],[4,7907],[5,6083],[6,4136],[7,2671],[8,1571],[9,822],[10,385],[11,146],[12,68],[13,30],[14,17],[15,3],[17,1],]},{
stack: 58,
data:[[0,66037],[1,20014],[2,13712],[3,10501],[4,7790],[5,5917],[6,3988],[7,2544],[8,1495],[9,781],[10,339],[11,130],[12,55],[13,24],[14,11],[15,2],[17,1],]},{
stack: 59,
data:[[0,63216],[1,19517],[2,13297],[3,10122],[4,7529],[5,5725],[6,3864],[7,2428],[8,1404],[9,732],[10,290],[11,115],[12,44],[13,18],[14,9],[17,1],]},{
stack: 60,
data:[[0,61093],[1,19049],[2,12913],[3,9736],[4,7179],[5,5437],[6,3662],[7,2338],[8,1332],[9,674],[10,268],[11,102],[12,36],[13,14],[14,6],[16,1],]},{
stack: 61,
data:[[0,59492],[1,18658],[2,12555],[3,9467],[4,6957],[5,5224],[6,3529],[7,2232],[8,1269],[9,643],[10,247],[11,89],[12,28],[13,7],[14,5],[16,1],]},{
stack: 62,
data:[[0,58440],[1,18343],[2,12184],[3,9194],[4,6687],[5,5022],[6,3403],[7,2144],[8,1194],[9,573],[10,212],[11,69],[12,18],[13,4],[14,2],[16,1],]},{
stack: 63,
data:[[0,57093],[1,17971],[2,11822],[3,8809],[4,6417],[5,4801],[6,3238],[7,2055],[8,1137],[9,532],[10,184],[11,57],[12,10],[14,1],[15,1],]},{
stack: 64,
data:[[0,56254],[1,17809],[2,11577],[3,8438],[4,6117],[5,4628],[6,3093],[7,1945],[8,1054],[9,479],[10,141],[11,30],]},{
stack: 65,
data:[[0,55293],[1,17644],[2,11287],[3,8089],[4,5749],[5,4430],[6,2928],[7,1833],[8,981],[9,423],[10,76],]},{
stack: 66,
data:[[0,54336],[1,17513],[2,11103],[3,7840],[4,5402],[5,4115],[6,2775],[7,1692],[8,885],[9,246],[10,1],]},{
stack: 67,
data:[[0,82522],[1,26813],[2,17722],[3,13409],[4,9947],[5,7578],[6,5191],[7,3359],[8,1867],[9,885],[10,340],[11,184],[12,63],[13,39],[14,12],]},{
stack: 68,
data:[[0,80002],[1,26354],[2,17284],[3,13085],[4,9750],[5,7458],[6,5030],[7,3224],[8,1775],[9,830],[10,311],[11,164],[12,52],[13,32],[14,4],]},{
stack: 69,
data:[[0,78000],[1,25929],[2,16832],[3,12780],[4,9520],[5,7273],[6,4887],[7,3102],[8,1691],[9,777],[10,295],[11,147],[12,45],[13,22],[14,1],]},{
stack: 70,
data:[[0,76365],[1,25595],[2,16435],[3,12498],[4,9205],[5,6937],[6,4704],[7,2987],[8,1593],[9,733],[10,276],[11,116],[12,39],[13,15],[14,1],]},{
stack: 71,
data:[[0,74922],[1,25277],[2,16130],[3,12176],[4,8927],[5,6685],[6,4532],[7,2858],[8,1525],[9,706],[10,243],[11,100],[12,24],]},{
stack: 72,
data:[[0,73487],[1,24914],[2,15700],[3,11728],[4,8606],[5,6465],[6,4371],[7,2743],[8,1455],[9,661],[10,217],[11,77],[12,12],[14,1],]},{
stack: 73,
data:[[0,72194],[1,24528],[2,15255],[3,11284],[4,8315],[5,6211],[6,4178],[7,2643],[8,1392],[9,593],[10,188],[11,53],]},{
stack: 74,
data:[[0,71103],[1,24291],[2,14880],[3,10920],[4,7957],[5,6044],[6,4030],[7,2568],[8,1318],[9,542],[10,141],[11,4],]},{
stack: 75,
data:[[0,70293],[1,24122],[2,14639],[3,10536],[4,7577],[5,5801],[6,3887],[7,2479],[8,1255],[9,494],[10,22],]},{
stack: 76,
data:[[0,69539],[1,23969],[2,14438],[3,10225],[4,7168],[5,5516],[6,3718],[7,2369],[8,1147],[9,169],]},{
stack: 77,
data:[[0,68949],[1,23782],[2,14248],[3,10003],[4,6889],[5,5267],[6,3527],[7,2222],[8,656],]},{
stack: 78,
data:[[0,91378],[1,31896],[2,19763],[3,14831],[4,10705],[5,8100],[6,5642],[7,3666],[8,1574],[9,581],[10,282],[11,156],[12,85],[13,40],[14,13],[15,4],]},{
stack: 79,
data:[[0,89811],[1,31558],[2,19552],[3,14596],[4,10538],[5,7987],[6,5491],[7,3576],[8,1511],[9,527],[10,270],[11,143],[12,72],[13,30],[14,11],]},{
stack: 80,
data:[[0,87666],[1,31193],[2,19250],[3,14210],[4,10286],[5,7765],[6,5359],[7,3447],[8,1446],[9,481],[10,254],[11,124],[12,60],[13,23],[14,2],]},{
stack: 81,
data:[[0,86372],[1,30975],[2,18997],[3,13860],[4,9975],[5,7521],[6,5218],[7,3305],[8,1386],[9,418],[10,244],[11,110],[12,48],[13,15],]},{
stack: 82,
data:[[0,85140],[1,30665],[2,18657],[3,13550],[4,9731],[5,7273],[6,5085],[7,3202],[8,1321],[9,395],[10,208],[11,96],[12,42],[13,5],]},{
stack: 83,
data:[[0,83832],[1,30424],[2,18356],[3,13161],[4,9449],[5,7053],[6,4908],[7,3062],[8,1256],[9,364],[10,166],[11,86],[12,24],]},{
stack: 84,
data:[[0,82853],[1,30239],[2,18064],[3,12877],[4,9192],[5,6794],[6,4727],[7,2973],[8,1189],[9,314],[10,146],[11,61],[12,4],]},{
stack: 85,
data:[[0,81959],[1,30078],[2,17846],[3,12503],[4,8855],[5,6553],[6,4545],[7,2860],[8,1118],[9,261],[10,108],]},]
});


// Add mouse events for rotation
$(image_955_chart.container).on('mousedown.hc touchstart.hc', function(eStart) {
  eStart = image_955_chart.pointer.normalize(eStart);

  var posX = eStart.pageX,
    posY = eStart.pageY,
    alpha = image_955_chart.options.chart.options3d.alpha,
    beta = image_955_chart.options.chart.options3d.beta,
    newAlpha,
    newBeta,
    sensitivity = 5; // lower is more sensitive

  $(document).on({
    'mousemove.hc touchdrag.hc': function(e) {
      // Run beta
      newBeta = beta + (posX - e.pageX) / sensitivity;
      image_955_chart.options.chart.options3d.beta = newBeta;

      // Run alpha
      newAlpha = alpha + (e.pageY - posY) / sensitivity;
      image_955_chart.options.chart.options3d.alpha = newAlpha;

      image_955_chart.redraw(false);
    },
    'mouseup touchend': function() {
      $(document).off('.hc');
    }
  });

var image_955_button = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#image_955_button').click(function () {image_955.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });});
});

