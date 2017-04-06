var free_hist_histogram;
$(document).ready(function () {free_hist_histogram= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'free_hist_histogram'},
title: {text: 'Histogram of free space'},xAxis: [{categories: ['1K-1K', '32M-65M', '16G-18G', ],title: {text: 'Extent size [MB/s]'}}],
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0,
            grouping: false,
            shadow: false
        }
    },
      yAxis: [
{labels: { formatter: function () {return this.value;}},
      title: {text: 'Frequency'}}],
      tooltip: {shared: true},
      series: [
      {
      name: 'free extents',
color: 'rgba(0, 0, 255, 0.50)',
	type: 'column',
	data: [
34,
2,
8,
],
visible: true,
	tooltip: {headerFormat: '<em>Extent size {point.key}</em><br/>'}
},
 {
	name: 'free blocks',
color:'rgba(0, 255, 0, 0.50)',
	type: 'column',
	data: [
34,
90218,
144286220,
],visible: true,
	tooltip: {headerFormat: '<em>Extent size {point.key}</em><br/>'}
},

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#free_hist_histogram_button').click(function () {free_hist_histogram.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
