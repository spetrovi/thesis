var fs_8853;
$(document).ready(function () {fs_8853= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'fs_8853'},
title: {text: 'Histogram file sizes, Sum=1238'},xAxis: [{categories: ['50.0KiB', 'infYiB', 'infYiB', 'infYiB', 'infYiB', 'infYiB', 'infYiB', 'infYiB', 'infYiB', 'infYiB', 'infYiB', 'infYiB', 'infYiB', 'infYiB', 'infYiB', 'infYiB', 'infYiB', 'infYiB', 'infYiB', 'infYiB'],title: {text: 'Size'}}],
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
	data: [1238, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
}

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#fs_8853_button').click(function () {fs_8853.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
