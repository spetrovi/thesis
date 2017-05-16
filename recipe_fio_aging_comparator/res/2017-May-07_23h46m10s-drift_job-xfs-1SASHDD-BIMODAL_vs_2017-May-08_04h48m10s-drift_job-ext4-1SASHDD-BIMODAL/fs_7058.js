var fs_7058;
$(document).ready(function () {fs_7058= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'fs_7058'},
title: {text: 'Histogram file sizes, Sum=1876'},xAxis: [{categories: ['  1KiB-  2KiB', '  2KiB-  4KiB', '  4KiB-  8KiB', '  8KiB- 16KiB', ' 16KiB- 32KiB', ' 32KiB- 64KiB', ' 64KiB-128KiB', '128KiB-256KiB', '256KiB-512KiB', '512KiB-  1MiB', '  1MiB-  2MiB', '  2MiB-  4MiB', '  4MiB-  8MiB', '  8MiB- 16MiB', ' 16MiB- 32MiB', ' 32MiB- 64MiB', ' 64MiB-128MiB', '128MiB-256MiB', '256MiB-512MiB', '512MiB-  1GiB', '  1GiB-  2GiB', '  2GiB-  4GiB', '  4GiB-  8GiB', '  8GiB- 16GiB'],title: {text: 'Size'}}],
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
	data: [0, 21, 18, 30, 49, 62, 99, 129, 114, 179, 166, 183, 148, 126, 90, 80, 55, 69, 95, 72, 49, 23, 15, 4],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
}

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#fs_7058_button').click(function () {fs_7058.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
