var fs_555;
$(document).ready(function () {fs_555= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'fs_555'},
title: {text: 'Histogram file sizes, Sum=1238'},xAxis: [{categories: ['1.5MiB', '50.2MiB', '98.9MiB', '147.7MiB', '196.4MiB', '245.2MiB', '293.9MiB', '342.7MiB', '391.4MiB', '440.2MiB', '488.9MiB', '537.7MiB', '586.4MiB', '635.2MiB', '683.9MiB', '732.6MiB', '781.4MiB', '830.1MiB', '878.9MiB', '927.6MiB', '976.4MiB'],title: {text: 'Size'}}],
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
	data: [81, 99, 82, 89, 71, 71, 48, 44, 54, 48, 47, 52, 62, 47, 67, 59, 54, 40, 66, 57],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
}

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#fs_555_button').click(function () {fs_555.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
