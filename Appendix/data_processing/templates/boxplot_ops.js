var XXX_NAME_XXX;
$(document).ready(function () {
    Highcharts.setOptions({ // Apply to all charts
        chart: {
            events: {
                beforePrint: function () {
                    this.oldhasUserSize = this.hasUserSize;
                    this.resetParams = [this.chartWidth, this.chartHeight, false];
                    this.setSize(600, 400, false);
                },
                afterPrint: function () {
                    this.setSize.apply(this, this.resetParams);
                    this.hasUserSize = this.oldhasUserSize;
                }
            }
        }
    });
XXX_NAME_XXX = new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 880,
 backgroundColor: '#F2F2F2',
 renderTo: 'XXX_NAME_XXX'},
title: {text: 'Performance'},xAxis: [{categories: [XXX_TICKS_XXX],title: {text: 'Percentage of file system utilization'}}],
      yAxis: [{labels: { formatter: function () {return this.value;}},
      title: {text: 'XXX_YLABEL_XXX'}}],
      tooltip: {shared: true},
      series: [
XXX_SET_XXX
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
