var fs_7585;
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
fs_7585= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'fs_7585'},
title: {text: 'Histogram file sizes, Sum=543021'},xAxis: [{categories: ['  4B-  8B', '  8B- 16B', ' 16B- 32B', ' 32B- 64B', ' 64B-128B', '128B-256B', '256B-512B', '512B-  1KiB', '  1KiB-  2KiB', '  2KiB-  4KiB', '  4KiB-  8KiB', '  8KiB- 16KiB', ' 16KiB- 32KiB', ' 32KiB- 64KiB', ' 64KiB-128KiB', '128KiB-256KiB', '256KiB-512KiB', '512KiB-  1MiB', '  1MiB-  2MiB', '  2MiB-  4MiB', '  4MiB-  8MiB', '  8MiB- 16MiB', ' 16MiB- 32MiB', ' 32MiB- 64MiB', ' 64MiB-128MiB', '128MiB-256MiB', '256MiB-512MiB', '512MiB-  1GiB', '  1GiB-  2GiB', '  2GiB-  4GiB', '  4GiB-  8GiB', '  8GiB- 16GiB'],title: {text: 'Size'}}],
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
	data: [2348, 4299, 7214, 11951, 17475, 24892, 32661, 41293, 47677, 52750, 54272, 52775, 48088, 41220, 33155, 25116, 17830, 11743, 7261, 4321, 2390, 1216, 605, 296, 125, 48, 0, 0, 0, 0, 0, 0],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
}

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#fs_7585_button').click(function () {fs_7585.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
