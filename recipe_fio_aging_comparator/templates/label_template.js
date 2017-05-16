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
