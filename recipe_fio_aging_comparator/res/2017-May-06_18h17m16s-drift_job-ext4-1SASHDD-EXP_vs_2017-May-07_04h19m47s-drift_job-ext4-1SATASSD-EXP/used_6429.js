var used_6429;
$(document).ready(function () {used_6429= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'used_6429'},
title: {text: 'Histogram of used space fragmentation, extents=25903, optimal files=15/410'},xAxis: [{categories: ['  7B', ' 19KiB', ' 39KiB', ' 59KiB', ' 79KiB', ' 99KiB', '119KiB', '139KiB', '159KiB', '179KiB', '199KiB', '219KiB', '239KiB', '259KiB', '279KiB', '299KiB', '319KiB', '339KiB', '359KiB', '379KiB', '399KiB'],title: {text: 'Size'}}],
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0,
            grouping: false,
            shadow: false
        }
    },
      yAxis: [{labels: { formatter: function () {return this.value;}},
      title: {text: 'Frequency'}}],
      tooltip: {shared: true},
      series: [
      {
      name: 'fragments',
color: 'rgba(0, 0, 255, 0.50)',
	type: 'column',
	data: [23723, 1458, 326, 258, 104, 12, 14, 2, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],visible: true,
	tooltip: {headerFormat: '<em>Extent size {point.key}</em><br/>'}
},
 {
	name: 'optimal files',
color:'rgba(0, 255, 0, 0.50)',
	type: 'column',
	data: [13, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
},

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#used_6429_button').click(function () {used_6429.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
