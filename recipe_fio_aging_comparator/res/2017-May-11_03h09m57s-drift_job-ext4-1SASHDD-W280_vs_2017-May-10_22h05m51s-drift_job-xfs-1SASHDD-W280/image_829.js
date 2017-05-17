
// Set up the chart
var image_829_chart;
$(document).ready(function () {image_829_chart= new Highcharts.Chart({

  chart: {
    renderTo: 'image_829',
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
    categories: ['1K-1K', '2K-3K', '4K-7K', '8K-15K', '16K-31K', '32K-63K', '64K-127K', '128K-255K', '256K-511K', '512K-1023K', '1M-2M', '2M-4M', '4M-8M', '8M-16M', '16M-32M', '32M-65M', '16G-33G', '33G-36G'],
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
data:[[0,12],[17,3],]},{
stack: 1,
data:[[0,59],[1,6],[2,6],[3,3],[4,3],[5,3],[6,4],[7,2],[8,2],[16,6],]},{
stack: 2,
data:[[0,396],[1,133],[2,102],[3,77],[4,47],[5,26],[6,22],[7,12],[8,3],[11,2],[16,6],]},{
stack: 3,
data:[[0,1136],[1,517],[2,263],[3,225],[4,131],[5,104],[6,93],[7,56],[8,38],[9,25],[10,12],[11,6],[12,9],[14,3],[16,6],]},{
stack: 4,
data:[[0,1362],[1,646],[2,364],[3,297],[4,192],[5,153],[6,117],[7,78],[8,41],[9,26],[10,10],[11,8],[12,6],[13,2],[16,6],]},{
stack: 5,
data:[[0,1643],[1,823],[2,469],[3,339],[4,230],[5,188],[6,144],[7,81],[8,33],[9,25],[10,14],[11,4],[12,1],[13,1],[15,1],[16,6],]},{
stack: 6,
data:[[0,1835],[1,951],[2,548],[3,353],[4,268],[5,226],[6,157],[7,103],[8,50],[9,33],[10,17],[11,9],[12,3],[13,1],[16,6],]},{
stack: 7,
data:[[0,1984],[1,973],[2,539],[3,376],[4,282],[5,241],[6,154],[7,109],[8,43],[9,28],[10,25],[11,1],[12,4],[15,2],[16,6],]},{
stack: 8,
data:[[0,2118],[1,1039],[2,629],[3,402],[4,337],[5,244],[6,170],[7,92],[8,57],[9,29],[10,12],[11,8],[12,1],[14,1],[16,6],]},{
stack: 9,
data:[[0,2148],[1,1133],[2,656],[3,429],[4,367],[5,217],[6,152],[7,111],[8,46],[9,39],[10,19],[11,5],[12,3],[15,1],[16,6],]},{
stack: 10,
data:[[0,2113],[1,1195],[2,741],[3,474],[4,342],[5,203],[6,169],[7,111],[8,39],[9,43],[10,21],[11,10],[12,2],[13,1],[16,6],]},{
stack: 11,
data:[[0,2205],[1,1252],[2,725],[3,455],[4,358],[5,233],[6,193],[7,103],[8,54],[9,44],[10,18],[11,18],[12,4],[13,1],[15,1],[16,6],]},{
stack: 12,
data:[[0,2175],[1,1286],[2,749],[3,515],[4,382],[5,222],[6,180],[7,125],[8,63],[9,28],[10,22],[11,23],[12,1],[13,4],[16,6],]},{
stack: 13,
data:[[0,2229],[1,1345],[2,734],[3,504],[4,420],[5,244],[6,182],[7,131],[8,49],[9,36],[10,23],[11,19],[12,9],[16,6],]},{
stack: 14,
data:[[0,2221],[1,1370],[2,736],[3,539],[4,411],[5,259],[6,193],[7,133],[8,55],[9,26],[10,25],[11,9],[12,10],[13,3],[14,1],[16,6],]},{
stack: 15,
data:[[0,2239],[1,1323],[2,741],[3,562],[4,426],[5,272],[6,210],[7,139],[8,54],[9,40],[10,12],[11,22],[12,3],[13,3],[16,6],]},{
stack: 16,
data:[[0,2278],[1,1348],[2,778],[3,553],[4,417],[5,288],[6,189],[7,132],[8,57],[9,45],[10,13],[11,18],[12,2],[13,4],[14,1],[16,6],]},{
stack: 17,
data:[[0,2315],[1,1374],[2,762],[3,554],[4,444],[5,282],[6,207],[7,127],[8,73],[9,35],[10,23],[11,8],[12,5],[13,3],[14,1],[16,6],]},{
stack: 18,
data:[[0,2289],[1,1344],[2,786],[3,561],[4,473],[5,291],[6,206],[7,122],[8,79],[9,37],[10,24],[11,11],[12,7],[13,2],[15,1],[16,6],]},{
stack: 19,
data:[[0,2322],[1,1468],[2,818],[3,570],[4,461],[5,288],[6,198],[7,111],[8,73],[9,38],[10,13],[11,9],[12,7],[13,6],[14,1],[15,1],[16,6],]},{
stack: 20,
data:[[0,2409],[1,1434],[2,804],[3,532],[4,474],[5,289],[6,231],[7,135],[8,72],[9,49],[10,20],[11,5],[12,2],[13,2],[14,2],[15,1],[16,6],]},{
stack: 21,
data:[[0,2370],[1,1470],[2,822],[3,587],[4,479],[5,284],[6,219],[7,136],[8,80],[9,60],[10,34],[11,9],[12,11],[13,1],[14,1],[15,1],[16,6],]},{
stack: 22,
data:[[0,2355],[1,1441],[2,854],[3,583],[4,497],[5,300],[6,210],[7,123],[8,74],[9,48],[10,20],[11,16],[12,5],[13,3],[14,2],[16,6],]},{
stack: 23,
data:[[0,2347],[1,1480],[2,860],[3,588],[4,478],[5,313],[6,231],[7,133],[8,91],[9,45],[10,20],[11,7],[12,1],[13,2],[14,3],[15,1],[16,6],]},{
stack: 24,
data:[[0,2371],[1,1446],[2,814],[3,611],[4,481],[5,315],[6,235],[7,144],[8,72],[9,49],[10,22],[11,9],[12,6],[14,2],[16,6],]},{
stack: 25,
data:[[0,2385],[1,1515],[2,834],[3,600],[4,482],[5,318],[6,217],[7,134],[8,97],[9,48],[10,19],[11,6],[12,8],[13,6],[16,6],]},{
stack: 26,
data:[[0,2422],[1,1479],[2,808],[3,590],[4,503],[5,325],[6,228],[7,143],[8,81],[9,44],[10,18],[11,3],[12,11],[13,3],[16,6],]},{
stack: 27,
data:[[0,2449],[1,1492],[2,840],[3,598],[4,475],[5,342],[6,234],[7,142],[8,78],[9,48],[10,18],[11,12],[12,7],[13,3],[14,2],[16,6],]},{
stack: 28,
data:[[0,2438],[1,1505],[2,849],[3,556],[4,471],[5,333],[6,240],[7,161],[8,81],[9,52],[10,14],[11,4],[12,7],[13,3],[14,1],[16,6],]},{
stack: 29,
data:[[0,2448],[1,1498],[2,840],[3,585],[4,499],[5,351],[6,218],[7,144],[8,71],[9,59],[10,20],[11,5],[12,6],[14,2],[16,6],]},{
stack: 30,
data:[[0,2502],[1,1471],[2,842],[3,611],[4,489],[5,330],[6,249],[7,167],[8,67],[9,52],[10,17],[11,6],[12,4],[14,3],[16,6],]},{
stack: 31,
data:[[0,2438],[1,1485],[2,928],[3,641],[4,471],[5,338],[6,243],[7,162],[8,52],[9,39],[10,25],[11,6],[12,3],[13,2],[14,3],[16,6],]},{
stack: 32,
data:[[0,2472],[1,1521],[2,932],[3,574],[4,519],[5,310],[6,241],[7,159],[8,79],[9,52],[10,11],[11,12],[12,1],[13,4],[14,1],[16,6],]},{
stack: 33,
data:[[0,2493],[1,1530],[2,827],[3,587],[4,512],[5,338],[6,246],[7,151],[8,69],[9,57],[10,28],[11,11],[12,1],[13,3],[14,2],[15,1],[16,6],]},{
stack: 34,
data:[[0,2498],[1,1524],[2,834],[3,608],[4,488],[5,352],[6,226],[7,150],[8,96],[9,62],[10,29],[11,10],[12,2],[13,1],[16,6],]},{
stack: 35,
data:[[0,2507],[1,1539],[2,843],[3,612],[4,515],[5,317],[6,237],[7,135],[8,97],[9,57],[10,30],[11,6],[12,6],[13,3],[14,1],[16,6],]},{
stack: 36,
data:[[0,2474],[1,1557],[2,827],[3,620],[4,511],[5,331],[6,225],[7,141],[8,117],[9,53],[10,29],[11,7],[12,2],[13,4],[14,3],[16,6],]},{
stack: 37,
data:[[0,2551],[1,1556],[2,854],[3,632],[4,501],[5,342],[6,245],[7,149],[8,96],[9,63],[10,29],[11,9],[12,7],[13,4],[14,3],[16,6],]},{
stack: 38,
data:[[0,2619],[1,1621],[2,819],[3,646],[4,485],[5,341],[6,257],[7,163],[8,98],[9,62],[10,24],[11,11],[12,1],[13,2],[14,4],[16,6],]},{
stack: 39,
data:[[0,2631],[1,1607],[2,822],[3,597],[4,505],[5,342],[6,251],[7,159],[8,104],[9,59],[10,32],[11,10],[12,5],[13,1],[14,5],[16,6],]},{
stack: 40,
data:[[0,2582],[1,1577],[2,864],[3,590],[4,508],[5,354],[6,250],[7,162],[8,116],[9,50],[10,32],[11,6],[12,3],[13,3],[14,3],[15,1],[16,6],]},{
stack: 41,
data:[[0,2585],[1,1622],[2,878],[3,641],[4,526],[5,318],[6,250],[7,154],[8,106],[9,51],[10,31],[11,2],[12,8],[13,5],[14,3],[16,6],]},{
stack: 42,
data:[[0,2592],[1,1698],[2,915],[3,640],[4,491],[5,336],[6,219],[7,151],[8,120],[9,73],[10,21],[11,9],[12,8],[13,5],[14,1],[16,6],]},{
stack: 43,
data:[[0,2548],[1,1674],[2,886],[3,669],[4,510],[5,365],[6,255],[7,153],[8,116],[9,53],[10,21],[11,9],[12,4],[13,7],[14,1],[15,1],[16,6],]},{
stack: 44,
data:[[0,2552],[1,1663],[2,933],[3,680],[4,508],[5,345],[6,247],[7,175],[8,112],[9,47],[10,25],[11,7],[12,5],[13,1],[14,2],[16,6],]},{
stack: 45,
data:[[0,2527],[1,1646],[2,921],[3,622],[4,512],[5,378],[6,238],[7,148],[8,116],[9,55],[10,20],[11,8],[12,6],[13,3],[14,1],[16,6],]},{
stack: 46,
data:[[0,2565],[1,1637],[2,868],[3,668],[4,531],[5,359],[6,220],[7,149],[8,129],[9,46],[10,28],[11,13],[12,7],[13,1],[14,1],[16,6],]},{
stack: 47,
data:[[0,2599],[1,1656],[2,889],[3,631],[4,510],[5,390],[6,234],[7,149],[8,122],[9,47],[10,34],[11,3],[12,13],[13,2],[16,6],]},{
stack: 48,
data:[[0,2599],[1,1646],[2,877],[3,675],[4,510],[5,359],[6,247],[7,172],[8,120],[9,56],[10,32],[11,13],[12,7],[13,2],[14,2],[16,6],]},{
stack: 49,
data:[[0,2495],[1,1608],[2,954],[3,676],[4,542],[5,336],[6,240],[7,169],[8,115],[9,76],[10,26],[11,10],[12,4],[14,3],[16,6],]},{
stack: 50,
data:[[0,2508],[1,1559],[2,921],[3,666],[4,556],[5,341],[6,239],[7,144],[8,131],[9,58],[10,33],[11,10],[12,3],[13,1],[14,3],[16,6],]},{
stack: 51,
data:[[0,2579],[1,1611],[2,969],[3,645],[4,557],[5,316],[6,223],[7,157],[8,128],[9,55],[10,36],[11,9],[12,3],[13,3],[14,1],[16,6],]},{
stack: 52,
data:[[0,2631],[1,1600],[2,988],[3,663],[4,560],[5,325],[6,242],[7,148],[8,119],[9,63],[10,29],[11,14],[12,3],[13,2],[14,1],[16,6],]},{
stack: 53,
data:[[0,2624],[1,1592],[2,976],[3,684],[4,540],[5,363],[6,224],[7,120],[8,133],[9,57],[10,24],[11,14],[13,2],[14,1],[16,6],]},{
stack: 54,
data:[[0,2592],[1,1559],[2,937],[3,681],[4,557],[5,362],[6,237],[7,151],[8,127],[9,71],[10,21],[11,10],[12,8],[13,2],[14,1],[16,6],]},{
stack: 55,
data:[[0,2520],[1,1545],[2,958],[3,691],[4,585],[5,363],[6,237],[7,138],[8,131],[9,59],[10,21],[11,9],[12,7],[14,2],[16,6],]},{
stack: 56,
data:[[0,2664],[1,1600],[2,954],[3,699],[4,565],[5,377],[6,234],[7,131],[8,126],[9,57],[10,17],[11,13],[12,11],[14,2],[16,6],]},{
stack: 57,
data:[[0,2650],[1,1580],[2,950],[3,672],[4,540],[5,389],[6,223],[7,165],[8,114],[9,69],[10,22],[11,15],[12,6],[13,2],[14,2],[15,1],[16,6],]},{
stack: 58,
data:[[0,2680],[1,1596],[2,977],[3,667],[4,563],[5,357],[6,230],[7,153],[8,124],[9,70],[10,19],[11,17],[12,3],[13,5],[16,6],]},{
stack: 59,
data:[[0,2670],[1,1663],[2,966],[3,667],[4,527],[5,392],[6,237],[7,159],[8,121],[9,54],[10,19],[11,16],[12,6],[13,3],[16,6],]},]
});


// Add mouse events for rotation
$(image_829_chart.container).on('mousedown.hc touchstart.hc', function(eStart) {
  eStart = image_829_chart.pointer.normalize(eStart);

  var posX = eStart.pageX,
    posY = eStart.pageY,
    alpha = image_829_chart.options.chart.options3d.alpha,
    beta = image_829_chart.options.chart.options3d.beta,
    newAlpha,
    newBeta,
    sensitivity = 5; // lower is more sensitive

  $(document).on({
    'mousemove.hc touchdrag.hc': function(e) {
      // Run beta
      newBeta = beta + (posX - e.pageX) / sensitivity;
      image_829_chart.options.chart.options3d.beta = newBeta;

      // Run alpha
      newAlpha = alpha + (e.pageY - posY) / sensitivity;
      image_829_chart.options.chart.options3d.alpha = newAlpha;

      image_829_chart.redraw(false);
    },
    'mouseup touchend': function() {
      $(document).off('.hc');
    }
  });

var image_829_button = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#image_829_button').click(function () {image_829.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });});
});
