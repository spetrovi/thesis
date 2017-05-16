
// Set up the chart
var image_486_chart;
$(document).ready(function () {image_486_chart= new Highcharts.Chart({

  chart: {
    renderTo: 'image_486',
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
    categories: ['4K-8K', '8K-16K', '16K-32K', '32K-64K', '64K-128K', '128K-256K', '256K-512K', '512K-1024K', '1M-2M', '2M-4M', '4M-8M', '8M-16M', '16M-32M', '32M-64M', '64M-128M', '128M-256M', '256M-512M', '512M-1024M', '1G-2G'],
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
data:[[3,2],[14,6],[15,5],[16,2],[17,7],[18,278],]},{
stack: 1,
data:[[3,2],[6,3],[7,6],[8,11],[9,19],[10,30],[11,1],[13,2],[14,34],[16,1],[17,6],[18,260],]},{
stack: 2,
data:[[2,2],[3,2],[4,1],[6,5],[7,11],[8,21],[9,42],[10,63],[11,1],[13,2],[14,53],[16,1],[17,5],[18,241],]},{
stack: 3,
data:[[2,2],[3,2],[4,1],[5,2],[6,9],[7,17],[8,30],[9,56],[10,102],[11,1],[13,3],[14,73],[15,2],[16,4],[17,5],[18,222],]},{
stack: 4,
data:[[2,2],[3,2],[4,3],[5,3],[6,13],[7,20],[8,45],[9,69],[10,134],[12,1],[13,4],[14,95],[15,2],[16,6],[17,6],[18,204],]},{
stack: 5,
data:[[2,2],[3,3],[4,3],[5,3],[6,19],[7,23],[8,52],[9,87],[10,158],[11,1],[13,7],[14,122],[15,5],[16,8],[17,5],[18,188],]},{
stack: 6,
data:[[0,2],[2,2],[3,3],[4,4],[5,5],[6,18],[7,33],[8,64],[9,104],[10,189],[12,1],[13,10],[14,133],[15,4],[16,7],[17,6],[18,172],]},{
stack: 7,
data:[[0,1],[2,2],[3,3],[4,5],[5,7],[6,22],[7,39],[8,71],[9,116],[10,215],[11,4],[12,3],[13,11],[14,156],[15,6],[16,7],[17,8],[18,155],]},{
stack: 8,
data:[[0,4],[2,2],[3,3],[4,5],[5,7],[6,23],[7,43],[8,79],[9,130],[10,242],[11,7],[12,8],[13,14],[14,180],[15,7],[16,10],[17,8],[18,139],]},{
stack: 9,
data:[[0,3],[2,2],[3,3],[4,5],[5,9],[6,24],[7,44],[8,87],[9,147],[10,265],[11,7],[12,8],[13,17],[14,201],[15,9],[16,10],[17,8],[18,124],]},{
stack: 10,
data:[[0,2],[2,2],[3,3],[4,4],[5,10],[6,24],[7,48],[8,99],[9,164],[10,305],[11,4],[12,5],[13,14],[14,224],[15,9],[16,10],[17,8],[18,111],]},{
stack: 11,
data:[[0,2],[2,3],[3,2],[4,4],[5,10],[6,26],[7,51],[8,102],[9,179],[10,313],[11,11],[12,10],[13,24],[14,254],[15,13],[16,11],[17,9],[18,96],]},{
stack: 12,
data:[[0,4],[2,3],[3,3],[4,3],[5,11],[6,25],[7,60],[8,104],[9,187],[10,333],[11,14],[12,14],[13,35],[14,288],[15,15],[16,11],[17,10],[18,80],]},{
stack: 13,
data:[[0,4],[2,3],[3,4],[4,3],[5,11],[6,27],[7,66],[8,112],[9,208],[10,380],[11,5],[12,5],[13,15],[14,251],[15,10],[16,8],[17,5],[18,71],]},{
stack: 14,
data:[[0,12],[2,4],[3,4],[4,4],[5,14],[6,29],[7,69],[8,109],[9,211],[10,402],[11,8],[12,6],[13,14],[14,277],[15,14],[16,9],[17,6],[18,62],]},{
stack: 15,
data:[[0,8],[2,4],[3,4],[4,5],[5,13],[6,28],[7,74],[8,116],[9,214],[10,406],[11,9],[12,11],[13,22],[14,311],[15,17],[16,16],[17,11],[18,47],]},{
stack: 16,
data:[[0,5],[2,4],[3,3],[4,5],[5,13],[6,28],[7,77],[8,123],[9,227],[10,433],[11,9],[12,14],[13,24],[14,344],[15,19],[16,17],[17,9],[18,34],]},{
stack: 17,
data:[[0,7],[2,4],[3,3],[4,6],[5,14],[6,34],[7,79],[8,134],[9,246],[10,474],[11,5],[12,6],[13,9],[14,276],[15,11],[16,8],[17,6],[18,30],]},{
stack: 18,
data:[[0,9],[2,4],[3,3],[4,6],[5,15],[6,35],[7,77],[8,144],[9,250],[10,484],[11,12],[12,19],[13,24],[14,317],[15,15],[16,10],[17,4],[18,19],]},{
stack: 19,
data:[[0,11],[2,4],[3,3],[4,6],[5,17],[6,36],[7,80],[8,152],[9,254],[10,502],[11,7],[12,13],[13,26],[14,336],[15,18],[16,16],[17,7],[18,7],]},{
stack: 20,
data:[[0,13],[1,1],[2,4],[3,3],[4,7],[5,17],[6,39],[7,81],[8,155],[9,273],[10,538],[11,7],[12,12],[13,19],[14,328],[15,10],[16,5],[17,6],[18,1],]},{
stack: 21,
data:[[0,11],[2,4],[3,3],[4,8],[5,19],[6,39],[7,85],[8,164],[9,305],[10,679],[11,1],[12,2],[13,1],[14,150],[15,1],]},{
stack: 22,
data:[[0,55],[1,6],[2,4],[3,3],[4,7],[5,16],[6,29],[7,64],[8,153],[9,279],[10,607],[11,27],[12,52],[13,63],[14,281],[15,22],[16,15],[17,10],[18,1],]},{
stack: 23,
data:[[0,59],[1,6],[2,3],[3,4],[4,7],[5,17],[6,32],[7,70],[8,174],[9,298],[10,650],[11,10],[12,28],[13,39],[14,210],[15,12],[16,4],[17,2],]},{
stack: 24,
data:[[0,82],[1,14],[2,3],[3,5],[4,7],[5,20],[6,34],[7,62],[8,156],[9,268],[10,592],[11,35],[12,45],[13,89],[14,299],[15,22],[16,25],[17,11],[18,1],]},{
stack: 25,
data:[[0,74],[1,15],[2,4],[3,5],[4,7],[5,20],[6,33],[7,72],[8,170],[9,299],[10,625],[11,18],[12,23],[13,44],[14,240],[15,13],[16,11],[17,5],[18,1],]},{
stack: 26,
data:[[0,68],[1,17],[2,3],[3,5],[4,8],[5,21],[6,32],[7,84],[8,177],[9,316],[10,650],[11,6],[12,15],[13,20],[14,169],]},{
stack: 27,
data:[[0,88],[1,31],[2,5],[3,4],[4,8],[5,17],[6,30],[7,83],[8,148],[9,291],[10,570],[11,32],[12,46],[13,88],[14,306],[15,21],[16,18],[17,12],[18,1],]},{
stack: 28,
data:[[0,80],[1,30],[2,5],[3,4],[4,9],[5,17],[6,33],[7,94],[8,162],[9,311],[10,609],[11,14],[12,30],[13,38],[14,218],[15,5],[16,7],[17,2],]},{
stack: 29,
data:[[0,94],[1,49],[2,4],[3,4],[4,7],[5,16],[6,24],[7,84],[8,157],[9,289],[10,540],[11,51],[12,71],[13,142],[14,354],[15,51],[16,13],[17,7],[18,1],]},{
stack: 30,
data:[[0,86],[1,48],[2,5],[3,5],[4,7],[5,19],[6,32],[7,92],[8,169],[9,305],[10,566],[11,34],[12,46],[13,79],[14,285],[15,20],[16,14],[17,3],]},{
stack: 31,
data:[[0,78],[1,48],[2,5],[3,6],[4,8],[5,24],[6,34],[7,99],[8,180],[9,328],[10,646],[11,4],[12,9],[13,11],[14,167],]},{
stack: 32,
data:[[0,84],[1,59],[2,9],[3,6],[4,7],[5,21],[6,28],[7,86],[8,163],[9,299],[10,572],[11,78],[12,66],[13,95],[14,314],[15,33],[16,20],[17,6],]},{
stack: 33,
data:[[0,77],[1,59],[2,9],[3,7],[4,9],[5,23],[6,27],[7,89],[8,179],[9,320],[10,623],[11,31],[12,40],[13,66],[14,217],[15,8],[16,4],]},{
stack: 34,
data:[[0,91],[1,65],[2,15],[3,7],[4,11],[5,19],[6,25],[7,80],[8,159],[9,288],[10,575],[11,67],[12,89],[13,135],[14,335],[15,36],[16,15],[17,11],]},{
stack: 35,
data:[[0,86],[1,66],[2,14],[3,8],[4,12],[5,21],[6,27],[7,87],[8,168],[9,309],[10,609],[11,46],[12,52],[13,84],[14,261],[15,15],[16,5],[17,5],]},{
stack: 36,
data:[[0,75],[1,67],[2,14],[3,8],[4,12],[5,25],[6,30],[7,92],[8,182],[9,335],[10,652],[11,6],[12,13],[13,17],[14,163],]},{
stack: 37,
data:[[0,85],[1,66],[2,20],[3,7],[4,12],[5,23],[6,27],[7,79],[8,166],[9,287],[10,581],[11,100],[12,102],[13,119],[14,325],[15,28],[16,13],[17,11],]},{
stack: 38,
data:[[0,76],[1,67],[2,19],[3,8],[4,13],[5,27],[6,34],[7,81],[8,174],[9,314],[10,626],[11,34],[12,45],[13,55],[14,221],[15,10],[16,6],[17,2],]},{
stack: 39,
data:[[0,93],[1,71],[2,20],[3,10],[4,9],[5,22],[6,31],[7,74],[8,158],[9,295],[10,553],[11,79],[12,104],[13,124],[14,375],[15,32],[16,19],[17,7],]},{
stack: 40,
data:[[0,87],[1,70],[2,20],[3,10],[4,10],[5,22],[6,36],[7,82],[8,171],[9,313],[10,602],[11,33],[12,53],[13,70],[14,256],[15,18],[16,5],[17,3],]},{
stack: 41,
data:[[0,78],[1,70],[2,22],[3,11],[4,9],[5,28],[6,38],[7,92],[8,181],[9,342],[10,664],[11,11],[12,19],[13,23],[14,151],[15,2],]},{
stack: 42,
data:[[0,80],[1,68],[2,25],[3,14],[4,8],[5,26],[6,35],[7,83],[8,174],[9,302],[10,617],[11,53],[12,56],[13,102],[14,279],[15,16],[16,12],[17,9],]},{
stack: 43,
data:[[0,74],[1,68],[2,24],[3,15],[4,10],[5,28],[6,38],[7,88],[8,172],[9,314],[10,647],[11,44],[12,36],[13,73],[14,206],[15,7],[16,6],[17,5],]},{
stack: 44,
data:[[0,67],[1,64],[2,24],[3,15],[4,11],[5,35],[6,43],[7,92],[8,188],[9,346],[10,739],[11,12],[12,11],[13,13],[14,85],]},{
stack: 45,
data:[[0,90],[1,72],[2,27],[3,14],[4,9],[5,31],[6,33],[7,78],[8,162],[9,315],[10,671],[11,96],[12,88],[13,151],[14,241],[15,21],[16,13],[17,6],]},{
stack: 46,
data:[[0,80],[1,72],[2,27],[3,16],[4,11],[5,34],[6,37],[7,86],[8,168],[9,342],[10,705],[11,39],[12,50],[13,87],[14,133],[15,11],[16,7],[17,2],]},{
stack: 47,
data:[[0,84],[1,75],[2,27],[3,18],[4,10],[5,28],[6,37],[7,71],[8,160],[9,308],[10,638],[11,128],[12,125],[13,203],[14,291],[15,32],[16,22],[17,3],]},{
stack: 48,
data:[[0,75],[1,72],[2,29],[3,18],[4,10],[5,31],[6,40],[7,77],[8,166],[9,326],[10,671],[11,91],[12,95],[13,133],[14,226],[15,11],[16,9],[17,2],]},{
stack: 49,
data:[[0,66],[1,73],[2,26],[3,20],[4,11],[5,32],[6,42],[7,84],[8,179],[9,343],[10,717],[11,23],[12,21],[13,45],[14,134],[15,3],]},{
stack: 50,
data:[[0,82],[1,79],[2,25],[3,20],[4,12],[5,27],[6,36],[7,72],[8,163],[9,307],[10,606],[11,147],[12,144],[13,207],[14,323],[15,26],[16,11],[17,3],]},{
stack: 51,
data:[[0,70],[1,80],[2,24],[3,21],[4,11],[5,29],[6,43],[7,78],[8,172],[9,329],[10,653],[11,80],[12,72],[13,122],[14,230],[15,11],[16,10],[17,3],]},{
stack: 52,
data:[[0,63],[1,79],[2,24],[3,21],[4,12],[5,30],[6,46],[7,82],[8,189],[9,357],[10,716],[11,21],[12,20],[13,53],[14,129],]},{
stack: 53,
data:[[0,86],[1,76],[2,20],[3,19],[4,11],[5,28],[6,40],[7,73],[8,177],[9,326],[10,637],[11,107],[12,141],[13,206],[14,278],[15,18],[16,12],[17,2],]},{
stack: 54,
data:[[0,71],[1,75],[2,19],[3,21],[4,9],[5,29],[6,45],[7,80],[8,194],[9,358],[10,685],[11,40],[12,54],[13,87],[14,173],[15,8],[16,3],]},{
stack: 55,
data:[[0,92],[1,75],[2,21],[3,22],[4,10],[5,28],[6,36],[7,68],[8,177],[9,335],[10,615],[11,129],[12,141],[13,235],[14,324],[15,28],[16,8],[17,1],]},{
stack: 56,
data:[[0,82],[1,72],[2,22],[3,21],[4,10],[5,31],[6,42],[7,75],[8,192],[9,357],[10,657],[11,53],[12,65],[13,132],[14,218],[15,12],[16,4],[17,1],]},{
stack: 57,
data:[[0,78],[1,68],[2,22],[3,20],[4,11],[5,59],[6,52],[7,83],[8,208],[9,391],[10,830],[11,12],[12,5],[13,9],[14,45],]},{
stack: 58,
data:[[0,92],[1,68],[2,28],[3,24],[4,12],[5,49],[6,43],[7,78],[8,180],[9,347],[10,729],[11,150],[12,183],[13,204],[14,206],[15,25],[16,8],[17,5],]},]
});


// Add mouse events for rotation
$(image_486_chart.container).on('mousedown.hc touchstart.hc', function(eStart) {
  eStart = image_486_chart.pointer.normalize(eStart);

  var posX = eStart.pageX,
    posY = eStart.pageY,
    alpha = image_486_chart.options.chart.options3d.alpha,
    beta = image_486_chart.options.chart.options3d.beta,
    newAlpha,
    newBeta,
    sensitivity = 5; // lower is more sensitive

  $(document).on({
    'mousemove.hc touchdrag.hc': function(e) {
      // Run beta
      newBeta = beta + (posX - e.pageX) / sensitivity;
      image_486_chart.options.chart.options3d.beta = newBeta;

      // Run alpha
      newAlpha = alpha + (e.pageY - posY) / sensitivity;
      image_486_chart.options.chart.options3d.alpha = newAlpha;

      image_486_chart.redraw(false);
    },
    'mouseup touchend': function() {
      $(document).off('.hc');
    }
  });

var image_486_button = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#image_486_button').click(function () {image_486.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });});
});

