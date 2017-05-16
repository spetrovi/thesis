var used_5880;
$(document).ready(function () {used_5880= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'used_5880'},
title: {text: 'Histogram of used space fragmentation, extents=1674, optimal files=66/304'},xAxis: [{categories: ['3.500000KiB', '22.475684MiB', '44.947949MiB', '67.420215MiB', '89.892480MiB', '112.364746MiB', '134.837012MiB', '157.309277MiB', '179.781543MiB', '202.253809MiB', '224.726074MiB', '247.198340MiB', '269.670605MiB', '292.142871MiB', '314.615137MiB', '337.087402MiB', '359.559668MiB', '382.031934MiB', '404.504199MiB', '426.976465MiB', '449.448730MiB'],title: {text: 'Size'}}],
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

    $('#used_5880_button').click(function () {used_5880.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
