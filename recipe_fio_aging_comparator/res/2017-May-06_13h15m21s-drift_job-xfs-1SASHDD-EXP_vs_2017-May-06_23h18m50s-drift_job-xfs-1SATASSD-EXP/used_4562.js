var used_4562;
$(document).ready(function () {used_4562= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'used_4562'},
title: {text: 'Histogram of used space fragmentation, extents=1674, optimal files=66/304'},xAxis: [{categories: ['  7B', ' 44KiB', ' 89KiB', '134KiB', '179KiB', '224KiB', '269KiB', '314KiB', '359KiB', '404KiB', '449KiB', '494KiB', '539KiB', '584KiB', '629KiB', '674KiB', '719KiB', '764KiB', '809KiB', '853KiB', '898KiB'],title: {text: 'Size'}}],
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
	data: [644, 297, 210, 114, 113, 84, 50, 40, 35, 30, 16, 21, 5, 1, 0, 2, 5, 4, 0, 3],visible: true,
	tooltip: {headerFormat: '<em>Extent size {point.key}</em><br/>'}
},
 {
	name: 'optimal files',
color:'rgba(0, 255, 0, 0.50)',
	type: 'column',
	data: [19, 7, 9, 10, 0, 5, 5, 3, 2, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
},

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#used_4562_button').click(function () {used_4562.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
