var used_18;
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
used_18= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 600,
      height: 400,
      backgroundColor: '#F2F2F2',
 renderTo: 'used_18'},
title: {text: 'Histogram of used space fragmentation'},
subtitle: {text: 'extents: 151415, total files: 587011, optimal files: 98%'},
xAxis: [{categories: [' 16B- 32B', ' 32B- 64B', ' 64B-128B', '128B-256B', '256B-512B', '512B-  1KiB', '  1KiB-  2KiB', '  2KiB-  4KiB', '  4KiB-  8KiB', '  8KiB- 16KiB', ' 16KiB- 32KiB', ' 32KiB- 64KiB', ' 64KiB-128KiB', '128KiB-256KiB', '256KiB-512KiB', '512KiB-  1MiB', '  1MiB-  2MiB', '  2MiB-  4MiB', '  4MiB-  8MiB', '  8MiB- 16MiB', ' 16MiB- 32MiB', ' 32MiB- 64MiB', ' 64MiB-128MiB', '128MiB-256MiB', '256MiB-512MiB', '512MiB-  1GiB', '  1GiB-  2GiB', '  2GiB-  4GiB', '  4GiB-  8GiB', '  8GiB- 16GiB'],title: {text: 'Size'}}],
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
      name: 'extents',
color: 'rgba(0, 0, 255, 0.50)',
	type: 'column',
	data: [0, 0, 0, 0, 0, 0, 0, 27235, 27493, 29052, 24692, 16342, 8583, 2944, 2705, 4256, 4404, 1821, 1507, 272, 88, 16, 5, 0, 0, 0, 0, 0, 0, 0],visible: true,
	tooltip: {headerFormat: '<em>Extent size {point.key}</em><br/>'}
},
 {
	name: 'optimal files',
color:'rgba(0, 255, 0, 0.50)',
	type: 'column',
	data: [0, 0, 0, 0, 0, 0, 0, 321116, 56703, 51273, 43142, 34288, 26533, 19144, 12739, 7765, 4131, 1460, 623, 198, 49, 11, 4, 0, 0, 0, 0, 0, 0, 0],visible: true,
	tooltip: {headerFormat: '<em>File size {point.key}</em><br/>'}
},

]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#used_18_button').click(function () {used_18.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
