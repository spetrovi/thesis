var used_2274;
$(document).ready(function () {used_2274= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'used_2274'},
title: {text: 'Histogram of used space fragmentation, extents=12476, optimal files=97/1145'},xAxis: [{categories: ['3.500000KiB', '44.803076MiB', '89.602734MiB', '134.402393MiB', '179.202051MiB', '224.001709MiB', '268.801367MiB', '313.601025MiB', '358.400684MiB', '403.200342MiB', '448.000000MiB', '492.799658MiB', '537.599316MiB', '582.398975MiB', '627.198633MiB', '671.998291MiB', '716.797949MiB', '761.597607MiB', '806.397266MiB', '851.196924MiB', '895.996582MiB'],title: {text: 'Size'}}],
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

    $('#used_2274_button').click(function () {used_2274.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
