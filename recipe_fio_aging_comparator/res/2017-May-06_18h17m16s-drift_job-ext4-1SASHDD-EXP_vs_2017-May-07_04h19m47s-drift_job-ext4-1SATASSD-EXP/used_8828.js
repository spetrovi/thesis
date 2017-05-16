var used_8828;
$(document).ready(function () {used_8828= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'used_8828'},
title: {text: 'Histogram of used space fragmentation, extents=25903, optimal files=15/410'},xAxis: [{categories: ['3.5KiB', '10.0MiB', '20.0MiB', '30.0MiB', '39.9MiB', '49.9MiB', '59.9MiB', '69.9MiB', '79.9MiB', '89.9MiB', '99.9MiB', '109.9MiB', '119.8MiB', '129.8MiB', '139.8MiB', '149.8MiB', '159.8MiB', '169.8MiB', '179.8MiB', '189.7MiB', '199.7MiB'],title: {text: 'Size'}}],
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
	data: [23723, 1458, 326, 258, 104, 12, 14, 2, 4, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],visible: true,
	tooltip: {headerFormat: '<em>Extent size {point.key}</em><br/>'}
},
 {
	name: 'optimal files',
color:'rgba(0, 255, 0, 0.50)',
	type: 'column',
	data: [13, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
},

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#used_8828_button').click(function () {used_8828.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
