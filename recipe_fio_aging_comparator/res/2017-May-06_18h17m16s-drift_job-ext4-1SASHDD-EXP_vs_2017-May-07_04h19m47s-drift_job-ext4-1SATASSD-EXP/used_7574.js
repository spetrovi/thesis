var used_7574;
$(document).ready(function () {used_7574= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'used_7574'},
title: {text: 'Histogram of used space fragmentation, extents=25903, optimal files=15/410'},xAxis: [{categories: ['3.500000KiB', '9.989722MiB', '19.976025MiB', '29.962329MiB', '39.948633MiB', '49.934937MiB', '59.921240MiB', '69.907544MiB', '79.893848MiB', '89.880151MiB', '99.866455MiB', '109.852759MiB', '119.839063MiB', '129.825366MiB', '139.811670MiB', '149.797974MiB', '159.784277MiB', '169.770581MiB', '179.756885MiB', '189.743188MiB', '199.729492MiB'],title: {text: 'Size'}}],
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

    $('#used_7574_button').click(function () {used_7574.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
