var used_1590;
$(document).ready(function () {used_1590= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'used_1590'},
title: {text: 'Histogram of used space fragmentation, extents=12476, optimal files=97/1145'},xAxis: [{categories: ['3.5KiB', '44.8MiB', '89.6MiB', '134.4MiB', '179.2MiB', '224.0MiB', '268.8MiB', '313.6MiB', '358.4MiB', '403.2MiB', '448.0MiB', '492.8MiB', '537.6MiB', '582.4MiB', '627.2MiB', '672.0MiB', '716.8MiB', '761.6MiB', '806.4MiB', '851.2MiB', '896.0MiB'],title: {text: 'Size'}}],
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

    $('#used_1590_button').click(function () {used_1590.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
