var XXX_NAME_XXX;
$(document).ready(function () {XXX_NAME_XXX= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'XXX_NAME_XXX'},
title: {text: 'Evolution of latency'},xAxis: [{categories: XXX_BINS_XXX,title: {text: 'time'}}],
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
      title: {text: 'Latency [ms]'}}],
      tooltip: {shared: true},
      series: [

XXX_LINE_XXX

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#XXX_NAME_XXX_button').click(function () {XXX_NAME_XXX.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
