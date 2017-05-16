var image_66_rsp;
$(document).ready(function () {image_66_rsp= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 600,
      backgroundColor: '#F2F2F2',
 renderTo: 'image_66_rsp'},
title: {text: 'Evolution of latency'},xAxis: [{categories: [   753.643,        770.89267668,    788.14235335,    805.39203003
],title: {text: 'Size'}}],
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

	{name: 'random_write',
	type: 'line',
	data: [ 0.62342924,  0.61888332,  0.61435511,  0.60984461],visible: true,
	tooltip: {headerFormat: '<em>Operation {point.key}</em><br/>'}
        },


]});var chart = $('#container').highcharts(),
        type = 1,
        types = ['linear', 'logarithmic'],
        lineColor = 'red';

    $('#image_66_rsp_button').click(function () {image_66_rsp.yAxis[0].update({
            type: types[type]
        });
type += 1;
        if (type === types.length) {
            type = 0;
        }
    });
})
