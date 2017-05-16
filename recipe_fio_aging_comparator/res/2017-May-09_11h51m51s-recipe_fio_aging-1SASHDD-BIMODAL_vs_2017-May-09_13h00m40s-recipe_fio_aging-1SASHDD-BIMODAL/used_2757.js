var used_2757;
$(document).ready(function () {used_2757= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'used_2757'},
title: {text: 'Histogram of used space fragmentation, extents=5131, optimal files=1072/1470'},xAxis: [{categories: ['  1KiB-  2KiB', '  2KiB-  4KiB', '  4KiB-  8KiB', '  8KiB- 16KiB', ' 16KiB- 32KiB', ' 32KiB- 64KiB', ' 64KiB-128KiB', '128KiB-256KiB', '256KiB-512KiB', '512KiB-  1MiB', '  1MiB-  2MiB', '  2MiB-  4MiB', '  4MiB-  8MiB', '  8MiB- 16MiB', ' 16MiB- 32MiB', ' 32MiB- 64MiB', ' 64MiB-128MiB', '128MiB-256MiB', '256MiB-512MiB', '512MiB-  1GiB', '  1GiB-  2GiB', '  2GiB-  4GiB', '  4GiB-  8GiB', '  8GiB- 16GiB'],title: {text: 'Size'}}],
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
	data: [0, 0, 0, 1, 1, 1, 0, 1, 1, 2, 4, 12, 1190, 630, 567, 1058, 1060, 219, 169, 137, 78, 0, 0, 0],visible: true,
	tooltip: {headerFormat: '<em>Extent size {point.key}</em><br/>'}
},
 {
	name: 'optimal files',
color:'rgba(0, 255, 0, 0.50)',
	type: 'column',
	data: [0, 8, 11, 25, 42, 43, 54, 84, 92, 127, 125, 142, 128, 77, 55, 36, 10, 3, 5, 5, 0, 0, 0, 0],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
},

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#used_2757_button').click(function () {used_2757.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
