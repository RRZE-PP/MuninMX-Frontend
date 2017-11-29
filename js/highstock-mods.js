Highcharts.getOptions().exporting.buttons.contextButton.menuItems.push({
    separator: true
});

Highcharts.getOptions().exporting.buttons.contextButton.menuItems.push({
    text: 'Disable all',
    onclick: function () {
        $(chart.series).each(function(){
            //this.hide();
            this.setVisible(false, false);
        });
        chart.redraw();
    }
});

