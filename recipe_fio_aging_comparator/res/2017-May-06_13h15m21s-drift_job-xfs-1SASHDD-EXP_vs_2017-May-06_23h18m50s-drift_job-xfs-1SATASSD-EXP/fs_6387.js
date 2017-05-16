var fs_6387;
$(document).ready(function () {fs_6387= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'fs_6387'},
title: {text: 'Histogram file sizes, Sum=304'},xAxis: [{categories: ['1.4MiB', '52.6MiB', '103.7MiB', '154.9MiB', '206.1MiB', '257.2MiB', '308.4MiB', '359.6MiB', '410.7MiB', '461.9MiB', '513.1MiB', '564.2MiB', '615.4MiB', '666.6MiB', '717.7MiB', '768.9MiB', '820.1MiB', '871.2MiB', '922.4MiB', '973.6MiB', '1.0GiB'],title: {text: 'Size'}}],
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
	data: [42, 31, 25, 19, 19, 26, 10, 15, 16, 11, 16, 10, 12, 11, 7, 10, 8, 7, 8, 1],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
}

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#fs_6387_button').click(function () {fs_6387.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
