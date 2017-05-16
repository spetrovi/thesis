

// Set up the chart
var image_703_chart;
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

image_703_chart= new Highcharts.Chart({

  chart: {
    renderTo: 'image_703',
    margin: 100,
    type: 'column',
    width: 900,
    height: 900,
    options3d: {
      enabled: true,
      alpha: 10,
      beta: 30,
      depth: 224,
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
    categories: ['1K-1K', '2K-3K', '4K-7K', '8K-15K', '16K-31K', '32K-63K', '64K-127K', '128K-255K', '256K-511K', '512K-1023K', '1M-2M', '2M-4M', '4M-8M', '8M-16M', '16M-32M', '262M-524M', '524M-1048M'],
    gridLineWidth: 1,
title: {text: 'Extent size'}
  },
  zAxis: {
title: {text: 'Time'},
categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    showFirstLabel: false

  },
  legend: {
    enabled: false
  },
  series: [{
stack: 0,
data:[[0,14],]},{
stack: 1,
data:[[0,14],[1,2],[2,1],[3,1],[4,2],[8,1],]},{
stack: 2,
data:[[0,15],[6,1],[8,1],]},{
stack: 3,
data:[[0,17],[6,2],]},{
stack: 4,
data:[[0,18],[1,2],[3,1],]},{
stack: 5,
data:[[0,12],[3,2],[5,1],[10,2],]},{
stack: 6,
data:[[0,17],[4,2],]},{
stack: 7,
data:[[0,6213],[1,1647],[2,1361],[3,966],[4,791],[5,545],[6,266],[7,177],[16,2],]},{
stack: 8,
data:[[0,18834],[1,5586],[2,4134],[3,3357],[4,2649],[5,1954],[6,1250],[7,733],[8,291],[9,187],[10,101],[11,33],[12,8],[13,2],[14,3],[16,2],]},{
stack: 9,
data:[[0,26253],[1,9680],[2,6625],[3,5437],[4,4310],[5,3324],[6,2115],[7,1206],[8,512],[9,246],[10,126],[11,50],[12,2],[15,2],]},{
stack: 10,
data:[[0,32324],[1,13746],[2,9268],[3,7487],[4,6047],[5,4661],[6,3048],[7,1816],[8,808],[9,427],[10,171],[11,78],[12,8],]},{
stack: 11,
data:[[0,33875],[1,16486],[2,11147],[3,8862],[4,7374],[5,5763],[6,3874],[7,2229],[8,1002],[9,448],[10,192],]},{
stack: 12,
data:[[0,34623],[1,18800],[2,12774],[3,10231],[4,8554],[5,6791],[6,4502],[7,2736],[8,1172],[9,517],]},{
stack: 13,
data:[[0,34301],[1,19904],[2,14054],[3,11230],[4,9365],[5,7465],[6,5080],[7,3106],[8,1272],[9,212],]},{
stack: 14,
data:[[0,33459],[1,20769],[2,15081],[3,11921],[4,10166],[5,8106],[6,5543],[7,3431],[8,1289],]},{
stack: 15,
data:[[0,32301],[1,21220],[2,15534],[3,12735],[4,10677],[5,8648],[6,6050],[7,3715],[8,636],]},{
stack: 16,
data:[[0,31245],[1,21426],[2,16089],[3,13175],[4,11327],[5,9240],[6,6657],[7,3934],[8,151],]},{
stack: 17,
data:[[0,29926],[1,21669],[2,16367],[3,13621],[4,11692],[5,9825],[6,7186],[7,3941],]},{
stack: 18,
data:[[0,28756],[1,21371],[2,16406],[3,13650],[4,11931],[5,10077],[6,7434],[7,3561],]},{
stack: 19,
data:[[0,28100],[1,20800],[2,16326],[3,13727],[4,11968],[5,10318],[6,7540],[7,3551],]},{
stack: 20,
data:[[0,27310],[1,20333],[2,16209],[3,13982],[4,12152],[5,10617],[6,7847],[7,3493],]},{
stack: 21,
data:[[0,26599],[1,20135],[2,16301],[3,13831],[4,12296],[5,10868],[6,8088],[7,3623],]},{
stack: 22,
data:[[0,26080],[1,19729],[2,16382],[3,13897],[4,12337],[5,11072],[6,8283],[7,3391],]},{
stack: 23,
data:[[0,25928],[1,19656],[2,16101],[3,13816],[4,12172],[5,11326],[6,8553],[7,3283],]},{
stack: 24,
data:[[0,24963],[1,19233],[2,15931],[3,13601],[4,12074],[5,11263],[6,8722],[7,3435],]},{
stack: 25,
data:[[0,24552],[1,18738],[2,15648],[3,13346],[4,11914],[5,11346],[6,8778],[7,2983],]},{
stack: 26,
data:[[0,24586],[1,18704],[2,15627],[3,13383],[4,11975],[5,11362],[6,8894],[7,2775],]},{
stack: 27,
data:[[0,23634],[1,18205],[2,15323],[3,13064],[4,11733],[5,11311],[6,8953],[7,3443],]},{
stack: 28,
data:[[0,23250],[1,17892],[2,14978],[3,12784],[4,11624],[5,11247],[6,8900],[7,3493],]},{
stack: 29,
data:[[0,22630],[1,17410],[2,14617],[3,12588],[4,11403],[5,10934],[6,8903],[7,3503],]},{
stack: 30,
data:[[0,22799],[1,17463],[2,14855],[3,12236],[4,11385],[5,10799],[6,9027],[7,3417],]},{
stack: 31,
data:[[0,22170],[1,17008],[2,14532],[3,11955],[4,11137],[5,10778],[6,8989],[7,3826],]},]
});


// Add mouse events for rotation
$(image_703_chart.container).on('mousedown.hc touchstart.hc', function(eStart) {
  eStart = image_703_chart.pointer.normalize(eStart);

  var posX = eStart.pageX,
    posY = eStart.pageY,
    alpha = image_703_chart.options.chart.options3d.alpha,
    beta = image_703_chart.options.chart.options3d.beta,
    newAlpha,
    newBeta,
    sensitivity = 5; // lower is more sensitive

  $(document).on({
    'mousemove.hc touchdrag.hc': function(e) {
      // Run beta
      newBeta = beta + (posX - e.pageX) / sensitivity;
      image_703_chart.options.chart.options3d.beta = newBeta;

      // Run alpha
      newAlpha = alpha + (e.pageY - posY) / sensitivity;
      image_703_chart.options.chart.options3d.alpha = newAlpha;

      image_703_chart.redraw(false);
    },
    'mouseup touchend': function() {
      $(document).off('.hc');
    }
  });

var image_703_button = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#image_703_button').click(function () {image_703.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });});
});

