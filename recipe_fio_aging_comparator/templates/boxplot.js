var XXX_NAME_XXX;
$(document).ready(function () {XXX_NAME_XXX= new Highcharts.Chart({
      chart: {zoomType: 'xy',
      width: 900,
      height: 880,
 backgroundColor: '#F2F2F2',
spacingBottom: 280,
events: {
                    load: function () {
                        var label = this.renderer.label("XXX_RENDER_LABEL_XXX")
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
 renderTo: 'XXX_NAME_XXX'},
title: {text: 'Total througput using randwrite operation'},xAxis: [{categories: [XXX_TICKS_XXX],title: {text: 'Percent of deleted volume'}}],
      yAxis: [{labels: { formatter: function () {return this.value;}},
      title: {text: 'XXX_YLABEL_XXX'}}],
      tooltip: {shared: true},
      series: [
      {
      name: 'set1',
color: '#0000ff',
      type: 'boxplot',
      data: [ XXX_DATA_SET1_XXX],visible: true,
	tooltip: {headerFormat: '<em>Percent of deleted volume {point.key}</em><br/>'}
},
{
	name: 'set2',
color: '#89F54E',
	type: 'boxplot',
	data: [XXX_DATA_SET2_XXX],visible: true,
	tooltip: {headerFormat: '<em>Percent of deleted volume {point.key}</em><br/>'}
}]});var chart = $('#container').highcharts(),
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
