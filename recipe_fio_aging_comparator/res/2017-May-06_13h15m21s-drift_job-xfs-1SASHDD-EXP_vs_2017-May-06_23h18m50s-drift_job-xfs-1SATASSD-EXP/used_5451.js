var used_5451;
$(document).ready(function () {used_5451= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'used_5451'},
title: {text: 'Histogram of used space fragmentation, extents=3375, optimal files=497/1238'},xAxis: [{categories: [' 15B', ' 83KiB', '166KiB', '250KiB', '333KiB', '417KiB', '500KiB', '584KiB', '667KiB', '751KiB', '834KiB', '918KiB', '1001KiB', '  1MiB', '  1MiB', '  1MiB', '  1MiB', '  1MiB', '  1MiB', '  1MiB', '  1MiB'],title: {text: 'Size'}}],
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

    $('#used_5451_button').click(function () {used_5451.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
