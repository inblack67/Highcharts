document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container2', {
        credits: {
            enabled: false
        },
        chart: {
            type: 'area',
            zoomType: 'xy'
        },
        title: {
            text: 'React Angular or Vue?'
        },
        colors: ['blue', 'yellow', 'green'],
        yAxis: {
            title: {
                text: 'Creators'
            },
        },
        xAxis: {
            title: {
                text: 'Frameworks'
            },
            categories: ['React, Angular', 'Vue']
        },
        series: [{
            name: 'JavaScript Frameworks',
            negativeColor: 'red',
            data: [10, 7, 8, -10, -7, 4, 6, 7, 8],
            zones: [
                {
                value: 0,
                color: 'red'
                },
                {
                value: 10,
                color: 'green'
                },
                {
                color: 'black'
                },
        ]
        }]
    })
})