var figure_5303;
$(document).ready(function () {figure_5303= new Highcharts.Chart({
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
 renderTo: 'figure_5303'},
title: {text: 'Total througput using randwrite operation'},xAxis: [{categories: ['10', '20', '30', '40', '50', 'fresh', '10', '20', '30', '40', '50', ],title: {text: 'Percent of deleted volume'}}],
      yAxis: [{labels: { formatter: function () {return this.value;}},
      title: {text: 'Throughput [MB/s]'}}],
      tooltip: {shared: true},
      series: [
      {
      name: 'set1',
color: '#0000ff',
      type: 'boxplot',
      data: [ {low: 0.1, q1: 160.63, median: 177.85, q3: 188.32, high: 428.34 },
{low: 0.1, q1: 184.35, median: 188.59, q3: 193.61, high: 439.84 },
{low: 0.1, q1: 188.59, median: 193.61, q3: 202.59, high: 426.94 },
{low: 0.1, q1: 193.04, median: 195.92, q3: 202.9, high: 425.56 },
{low: 0.1, q1: 193.04, median: 197.4, q3: 202.9, high: 426.94 },
{low: 0.13, q1: 197.7, median: 198.9, q3: 203.84, high: 436.91 },
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

    $('#figure_5303_button').click(function () {figure_5303.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
