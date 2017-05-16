var fs_4644;
$(document).ready(function () {fs_4644= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'fs_4644'},
title: {text: 'Histogram file sizes, Sum=0'},xAxis: [{categories: ['1.0B', '2.0B', '4.0B', '8.0B', '16.0B', '32.0B', '64.0B', '128.0B', '256.0B', '512.0B', '1.0KiB', '2.0KiB', '4.0KiB', '8.0KiB', '16.0KiB', '32.0KiB', '64.0KiB', '128.0KiB', '256.0KiB', '512.0KiB'],title: {text: 'Size'}}],
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
	data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
}

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#fs_4644_button').click(function () {fs_4644.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
