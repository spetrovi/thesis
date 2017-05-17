var fs_6422;
$(document).ready(function () {fs_6422= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'fs_6422'},
title: {text: 'Histogram file sizes, Sum=1238'},xAxis: [{categories: ['1.000000KiB-2.000000KiB', '2.000000KiB-4.000000KiB', '4.000000KiB-8.000000KiB', '8.000000KiB-16.000000KiB', '16.000000KiB-32.000000KiB', '32.000000KiB-64.000000KiB', '64.000000KiB-128.000000KiB', '128.000000KiB-256.000000KiB', '256.000000KiB-512.000000KiB', '512.000000KiB-1.000000MiB', '1.000000MiB-2.000000MiB', '2.000000MiB-4.000000MiB', '4.000000MiB-8.000000MiB', '8.000000MiB-16.000000MiB', '16.000000MiB-32.000000MiB', '32.000000MiB-64.000000MiB', '64.000000MiB-128.000000MiB', '128.000000MiB-256.000000MiB', '256.000000MiB-512.000000MiB', '512.000000MiB-1.000000GiB', '1.000000GiB-2.000000GiB'],title: {text: 'Size'}}],
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
	data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 6, 12, 29, 64, 121, 201, 274, 529, 0],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
}

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#fs_6422_button').click(function () {fs_6422.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})