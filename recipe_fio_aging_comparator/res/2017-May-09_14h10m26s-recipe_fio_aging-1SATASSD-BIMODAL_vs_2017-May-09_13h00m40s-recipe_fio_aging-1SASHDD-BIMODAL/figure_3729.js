var figure_3729;
$(document).ready(function () {figure_3729= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 880,
 backgroundColor: '#F2F2F2',
spacingBottom: 280,
events: {
                    load: function () {
                        var label = this.renderer.label("rw=read<br>bs=128k<br>runtime=10m<br>fsync=1<br>direct=1<br>ioengine=libaio<br>thread<br>group_reporting<br>size=1g<br>time_based=1<br>filesystem=xfs<br>kernel=3.10.0-514.el7.x86_64_RHEL-7.3<br>depth=5<br>compared:<br>tar1<br>tar2")
                        .css({
                            width: '450px',
                            color: '#222',
                            fontSize: '16px'
                        })
                        
                        .add();
                
                        label.align(Highcharts.extend(label.getBBox(), {
                            align: 'left',
                            x: 0, // offset
                            verticalAlign: 'bottom',
                            y: 280 // offset
                        }), null, 'spacingBox');
                
                    }
                },
 renderTo: 'figure_3729'},
title: {text: 'Total througput using randwrite operation'},xAxis: [{categories: ['10', '20', '30', '40', '50', 'fresh', '10', '20', '30', '40', '50', ],title: {text: 'Percent of deleted volume'}}],
      yAxis: [{labels: { formatter: function () {return this.value;}},
      title: {text: 'Throughput [MB/s]'}}],
      tooltip: {shared: true},
      series: [
      {
      name: 'set1',
color: '#0000ff',
      type: 'boxplot',
      data: [ {low: 8.9, q1: 46.74, median: 49.54, q3: 53.74, high: 172.01 },
{low: 9.09, q1: 46.45, median: 49.09, q3: 52.32, high: 195.63 },
{low: 9.88, q1: 45.96, median: 48.76, q3: 52.07, high: 157.92 },
{low: 9.65, q1: 46.3, median: 49.0, q3: 52.47, high: 166.97 },
{low: 9.76, q1: 46.14, median: 48.87, q3: 52.28, high: 163.64 },
{low: 9.0, q1: 46.91, median: 49.54, q3: 52.53, high: 184.87 },
],visible: true,
	tooltip: {headerFormat: '<em>Percent of deleted volume {point.key}</em><br/>'}
},
{
	name: 'set2',
color: '#89F54E',
	type: 'boxplot',
	data: [{low: 0.1, q1: 186.18, median: 195.34, q3: 202.9, high: 442.81 },
{low: 0.1, q1: 193.32, median: 198.59, q3: 202.59, high: 426.94 },
{low: 0.1, q1: 197.4, median: 198.9, q3: 203.84, high: 425.56 },
{low: 0.11, q1: 197.4, median: 198.9, q3: 203.53, high: 447.34 },
{low: 0.11, q1: 197.4, median: 198.9, q3: 203.53, high: 426.94 },
{low: 0.15, q1: 197.7, median: 198.9, q3: 203.84, high: 425.56 },
],visible: true,
	tooltip: {headerFormat: '<em>Percent of deleted volume {point.key}</em><br/>'}
}]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#figure_3729_button').click(function () {figure_3729.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
