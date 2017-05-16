var used_5878;
$(document).ready(function () {used_5878= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'used_5878'},
title: {text: 'Histogram of used space fragmentation, extents=12476, optimal files=97/1145'},xAxis: [{categories: ['  3KiB', ' 44MiB', ' 89MiB', '134MiB', '179MiB', '224MiB', '268MiB', '313MiB', '358MiB', '403MiB', '448MiB', '492MiB', '537MiB', '582MiB', '627MiB', '671MiB', '716MiB', '761MiB', '806MiB', '851MiB', '895MiB'],title: {text: 'Size'}}],
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
	data: [8321, 3580, 182, 128, 87, 40, 44, 23, 20, 15, 9, 13, 3, 3, 4, 1, 2, 0, 0, 1],visible: true,
	tooltip: {headerFormat: '<em>Extent size {point.key}</em><br/>'}
},
 {
	name: 'optimal files',
color:'rgba(0, 255, 0, 0.50)',
	type: 'column',
	data: [41, 23, 6, 8, 4, 6, 2, 2, 0, 1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 1],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
},

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#used_5878_button').click(function () {used_5878.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
