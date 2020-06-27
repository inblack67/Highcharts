document.addEventListener('DOMContentLoaded', () => {
    const options = {
        chart: {
            type: 'column',
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'CSV Data'
        },
        yAxis: {
            title: {
                text: 'Tech Giants'
            },
        },
        xAxis: {
            title: {
                text: 'Frameworks'
            },
        },
        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 500,
                        // minHeight/width max...
                        callback(){
                            return false;
                            // check some condition if needed, if false is returned - mediaqueries wont be applied
                        }
                    },
                    chartOptions: {
                        legend: {
                            enabled: false
                        },
                        yAxis: {
                            title: {
                                text: ''
                            }
                        },
                    }
                }
            ]
        }
    }

    // fetch('data.csv', {
    //     'Content-Type': 'text/csv'
    // })
    // .then(res => res.text())
    // .then(csv => {
    //         options.data = { csv };
    //         Highcharts.chart('container3', options)
    // });

    // REAL TIME

    options.data = {
        csvURL: 'http://127.0.0.1:5500/data.csv',
        enablePolling: true,
        dataRefreshRate: 2
    }

    Highcharts.chart('container3', options);
})