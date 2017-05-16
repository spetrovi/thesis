var used_6132;
$(document).ready(function () {used_6132= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'used_6132'},
title: {text: 'Histogram of used space fragmentation, extents=1674, optimal files=66/304'},xAxis: [{categories: ['  3KiB', ' 22MiB', ' 44MiB', ' 67MiB', ' 89MiB', '112MiB', '134MiB', '157MiB', '179MiB', '202MiB', '224MiB', '247MiB', '269MiB', '292MiB', '314MiB', '337MiB', '359MiB', '382MiB', '404MiB', '426MiB', '449MiB'],title: {text: 'Size'}}],
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

    $('#used_6132_button').click(function () {used_6132.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
