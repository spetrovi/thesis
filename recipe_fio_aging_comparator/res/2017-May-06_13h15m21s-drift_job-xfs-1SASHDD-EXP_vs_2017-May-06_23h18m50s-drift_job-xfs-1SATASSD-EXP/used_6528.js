var used_6528;
$(document).ready(function () {used_6528= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'used_6528'},
title: {text: 'Histogram of used space fragmentation, extents=3375, optimal files=497/1238'},xAxis: [{categories: ['7.500000KiB', '41.740918MiB', '83.474512MiB', '125.208105MiB', '166.941699MiB', '208.675293MiB', '250.408887MiB', '292.142480MiB', '333.876074MiB', '375.609668MiB', '417.343262MiB', '459.076855MiB', '500.810449MiB', '542.544043MiB', '584.277637MiB', '626.011230MiB', '667.744824MiB', '709.478418MiB', '751.212012MiB', '792.945605MiB', '834.679199MiB'],title: {text: 'Size'}}],
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
	data: [1177, 548, 364, 369, 191, 118, 191, 72, 73, 74, 64, 30, 80, 3, 6, 7, 6, 0, 0, 2],visible: true,
	tooltip: {headerFormat: '<em>Extent size {point.key}</em><br/>'}
},
 {
	name: 'optimal files',
color:'rgba(0, 255, 0, 0.50)',
	type: 'column',
	data: [66, 69, 74, 51, 50, 40, 32, 21, 13, 15, 15, 9, 10, 5, 6, 6, 4, 4, 6, 1],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
},

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#used_6528_button').click(function () {used_6528.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
