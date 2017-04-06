var ext_dist_histogram;
$(document).ready(function () {ext_dist_histogram= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'ext_dist_histogram'},
title: {text: 'Histogram of extent distribution'},xAxis: [{categories: ['1', ],title: {text: 'Throughput [MB/s]'}}],
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
      name: 'extents of file',
color: 'rgba(0, 0, 255, 0.50)',
	type: 'column',
	data: [
43609,
],visible: true,
	tooltip: {headerFormat: '<em>Extent size {point.key}</em><br/>'}
},
 ]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#ext_dist_histogram_button').click(function () {ext_dist_histogram.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})