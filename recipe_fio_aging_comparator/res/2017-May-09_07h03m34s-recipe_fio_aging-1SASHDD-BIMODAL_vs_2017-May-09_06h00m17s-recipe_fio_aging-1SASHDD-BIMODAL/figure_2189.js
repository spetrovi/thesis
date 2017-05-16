var figure_2189;
$(document).ready(function () {figure_2189= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 880,
 backgroundColor: '#F2F2F2',
spacingBottom: 280,
events: {
                    load: function () {
                        var label = this.renderer.label("rw=write<br>bs=128k<br>runtime=10m<br>fsync=1<br>direct=1<br>ioengine=libaio<br>thread<br>group_reporting<br>size=1g<br>time_based=1<br>filesystem=ext4<br>kernel=3.10.0-514.el7.x86_64_RHEL-7.3<br>depth=5<br>compared:<br>tar1<br>tar2")
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
 renderTo: 'figure_2189'},
title: {text: 'Total througput using randwrite operation'},xAxis: [{categories: ['10', '20', '30', '40', '50', 'fresh', '10', '20', '30', '40', '50', ],title: {text: 'Percent of deleted volume'}}],
      yAxis: [{labels: { formatter: function () {return this.value;}},
      title: {text: 'Throughput [MB/s]'}}],
      tooltip: {shared: true},
      series: [
      {
      name: 'set1',
color: '#0000ff',
      type: 'boxplot',
      data: [ {low: 0.51, q1: 2.42, median: 2.42, q3: 2.72, high: 26.63 },
{low: 0.66, q1: 2.42, median: 2.72, q3: 3.11, high: 24.72 },
{low: 0.91, q1: 2.72, median: 2.72, q3: 3.11, high: 50.12 },
{low: 0.62, q1: 2.42, median: 2.72, q3: 3.11, high: 24.07 },
{low: 0.8, q1: 2.42, median: 2.72, q3: 3.11, high: 24.17 },
{low: 0.99, q1: 2.72, median: 3.11, q3: 3.62, high: 33.08 },
],visible: true,
	tooltip: {headerFormat: '<em>Percent of deleted volume {point.key}</em><br/>'}
},
{
	name: 'set2',
color: '#89F54E',
	type: 'boxplot',
	data: [{low: 0.21, q1: 1.91, median: 3.35, q3: 7.28, high: 40.22 },
{low: 0.48, q1: 4.55, median: 6.64, q3: 10.15, high: 25.51 },
{low: 0.56, q1: 4.04, median: 6.14, q3: 9.63, high: 24.8 },
{low: 0.43, q1: 4.07, median: 6.22, q3: 9.69, high: 24.96 },
{low: 0.8, q1: 4.19, median: 6.31, q3: 9.73, high: 24.55 },
{low: 1.23, q1: 4.68, median: 6.58, q3: 9.97, high: 23.78 },
],visible: true,
	tooltip: {headerFormat: '<em>Percent of deleted volume {point.key}</em><br/>'}
}]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#figure_2189_button').click(function () {figure_2189.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
