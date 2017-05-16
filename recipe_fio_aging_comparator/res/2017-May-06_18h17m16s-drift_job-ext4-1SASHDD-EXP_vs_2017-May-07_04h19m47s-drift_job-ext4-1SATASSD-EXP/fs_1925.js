var fs_1925;
$(document).ready(function () {fs_1925= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'fs_1925'},
title: {text: 'Histogram file sizes, Sum=1145'},xAxis: [{categories: ['467.5KiB', '49.1MiB', '97.7MiB', '146.4MiB', '195.0MiB', '243.7MiB', '292.3MiB', '341.0MiB', '389.6MiB', '438.2MiB', '486.9MiB', '535.5MiB', '584.2MiB', '632.8MiB', '681.4MiB', '730.1MiB', '778.7MiB', '827.4MiB', '876.0MiB', '924.7MiB', '973.3MiB'],title: {text: 'Size'}}],
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
	data: [76, 71, 67, 70, 67, 65, 58, 63, 50, 60, 43, 44, 54, 44, 53, 49, 53, 48, 53, 57],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
}

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#fs_1925_button').click(function () {fs_1925.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
