import React from 'react';
import HighCharts from 'highcharts';
import ReactHighcharts from 'highcharts-react-official';

const Visualization = () => {

    const options = {
        chart: {
            type: 'column',
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'React And Highcharts'
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
            categories: ['React', 'Hooks', 'Context API']
        },
        series: [
            {
            name: 'Survey-1',
            data: [80, 90, 85]
            },
            {
            name: 'Survey-2',
            data: [90, 100, 70]
            },
            {
            name: 'Survey-3',
            data: [60, 70, 50]
            },
    ]
    }

    return (
        <ReactHighcharts highcharts={HighCharts} options={options} />
    )
}

export default Visualization
