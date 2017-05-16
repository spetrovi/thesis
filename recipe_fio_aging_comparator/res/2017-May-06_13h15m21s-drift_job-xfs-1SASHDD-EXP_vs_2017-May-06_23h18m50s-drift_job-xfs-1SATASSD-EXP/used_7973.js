var used_7973;
$(document).ready(function () {used_7973= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'used_7973'},
title: {text: 'Histogram of used space fragmentation, extents=3375, optimal files=497/1238'},xAxis: [{categories: ['7.5KiB', '41.7MiB', '83.5MiB', '125.2MiB', '166.9MiB', '208.7MiB', '250.4MiB', '292.1MiB', '333.9MiB', '375.6MiB', '417.3MiB', '459.1MiB', '500.8MiB', '542.5MiB', '584.3MiB', '626.0MiB', '667.7MiB', '709.5MiB', '751.2MiB', '792.9MiB', '834.7MiB'],title: {text: 'Size'}}],
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
	data: [1177, 548, 364, 369, 191, 118, 191, 72, 73, 74, 64, 30, 80, 3, 6, 7, 6, 0, 0, 2],visible: true,
	tooltip: {headerFormat: '<em>Extent size {point.key}</em><br/>'}
},
 {
	name: 'optimal files',
color:'rgba(0, 255, 0, 0.50)',
	type: 'column',
	data: [66, 69, 74, 51, 50, 40, 32, 21, 13, 15, 15, 9, 10, 5, 6, 6, 4, 4, 6, 1],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
},

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#used_7973_button').click(function () {used_7973.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
