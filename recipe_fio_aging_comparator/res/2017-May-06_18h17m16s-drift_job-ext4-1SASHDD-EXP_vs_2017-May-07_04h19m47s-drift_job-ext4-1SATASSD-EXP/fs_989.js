var fs_989;
$(document).ready(function () {fs_989= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'fs_989'},
title: {text: 'Histogram file sizes, Sum=410'},xAxis: [{categories: ['43.5KiB', '48.4MiB', '96.9MiB', '145.3MiB', '193.7MiB', '242.1MiB', '290.5MiB', '338.9MiB', '387.3MiB', '435.7MiB', '484.1MiB', '532.5MiB', '580.9MiB', '629.3MiB', '677.7MiB', '726.1MiB', '774.5MiB', '822.9MiB', '871.3MiB', '919.8MiB', '968.2MiB'],title: {text: 'Size'}}],
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
	data: [62, 58, 57, 43, 28, 18, 20, 20, 11, 10, 7, 12, 7, 9, 11, 10, 8, 7, 7, 5],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
}

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#fs_989_button').click(function () {fs_989.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
