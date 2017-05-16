var used_7353;
$(document).ready(function () {used_7353= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'used_7353'},
title: {text: 'Histogram of used space fragmentation, extents=12476, optimal files=97/1145'},xAxis: [{categories: ['  7B', ' 89KiB', '179KiB', '268KiB', '358KiB', '448KiB', '537KiB', '627KiB', '716KiB', '806KiB', '896KiB', '985KiB', '  1MiB', '  1MiB', '  1MiB', '  1MiB', '  1MiB', '  1MiB', '  1MiB', '  1MiB', '  1MiB'],title: {text: 'Size'}}],
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

    $('#used_7353_button').click(function () {used_7353.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
