var used_3197;
$(document).ready(function () {used_3197= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'used_3197'},
title: {text: 'Histogram of used space fragmentation, extents=1674, optimal files=66/304'},xAxis: [{categories: ['3.5KiB', '22.5MiB', '44.9MiB', '67.4MiB', '89.9MiB', '112.4MiB', '134.8MiB', '157.3MiB', '179.8MiB', '202.3MiB', '224.7MiB', '247.2MiB', '269.7MiB', '292.1MiB', '314.6MiB', '337.1MiB', '359.6MiB', '382.0MiB', '404.5MiB', '427.0MiB', '449.4MiB'],title: {text: 'Size'}}],
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

    $('#used_3197_button').click(function () {used_3197.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
