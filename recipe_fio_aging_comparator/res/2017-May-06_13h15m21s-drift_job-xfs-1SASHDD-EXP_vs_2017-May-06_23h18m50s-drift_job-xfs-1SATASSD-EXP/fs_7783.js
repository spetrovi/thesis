var fs_7783;
$(document).ready(function () {fs_7783= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'fs_7783'},
title: {text: 'Histogram file sizes, Sum=221'},xAxis: [{categories: ['512.0B', '1.0KiB', '2.0KiB', '4.0KiB', '8.0KiB', '16.0KiB', '32.0KiB', '64.0KiB', '128.0KiB', '256.0KiB', '512.0KiB', '1.0MiB', '2.0MiB', '4.0MiB', '8.0MiB', '16.0MiB', '32.0MiB', '64.0MiB', '128.0MiB', '256.0MiB'],title: {text: 'Size'}}],
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
	data: [53, 78, 89, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
}

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#fs_7783_button').click(function () {fs_7783.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})