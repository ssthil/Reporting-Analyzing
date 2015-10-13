$(function () {
    $('#bytes_overtime').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 6.20,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Bytes Received',
            data: [ 216, 240, 332, 210, 235, 269, 240,232, 210, 235,211, 232, 270]
        }, {
            name: 'Bytes Sent',
            data: [180, 200, 250, 180, 210, 220, 226, 212, 190, 205, 150, 220, 210]
        }]
    });
});