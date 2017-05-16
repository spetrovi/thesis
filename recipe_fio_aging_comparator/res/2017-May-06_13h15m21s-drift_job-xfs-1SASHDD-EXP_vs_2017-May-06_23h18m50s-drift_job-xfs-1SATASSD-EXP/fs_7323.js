var fs_7323;
$(document).ready(function () {fs_7323= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'fs_7323'},
title: {text: 'Histogram file sizes, Sum=304'},xAxis: [{categories: ['256.0KiB', '512.0KiB', '1.0MiB', '2.0MiB', '4.0MiB', '8.0MiB', '16.0MiB', '32.0MiB', '64.0MiB', '128.0MiB', '256.0MiB', '512.0MiB', '1.0GiB', '2.0GiB', '4.0GiB', '8.0GiB', '16.0GiB', '32.0GiB', '64.0GiB', '128.0GiB'],title: {text: 'Size'}}],
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
	data: [0, 0, 1, 6, 2, 7, 12, 21, 34, 53, 78, 89, 1, 0, 0, 0, 0, 0, 0],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
}

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#fs_7323_button').click(function () {fs_7323.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
