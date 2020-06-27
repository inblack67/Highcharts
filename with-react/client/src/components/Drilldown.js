import React from 'react';
import HighCharts from 'highcharts';
import ReactHighcharts from 'highcharts-react-official';
import drilldown from 'highcharts/modules/drilldown'

drilldown(HighCharts);

const Drilldown = () => {

    const options = {
        chart: {
            type: 'column',
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Drilldown'
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
        series: [
            {
                name: 'JS',
                data: [
                    {
                    name: 'Survey-1',
                    y: 10,
                    drilldown: 'id-1'
                    },
                    {
                        name: 'Survey-2',
                        y: 9,
                        drilldown: 'id-2'
                    },
                    {
                            name: 'Survey-3',
                            y: 8,
                            drilldown: 'id-3'
                    },
                ]
            }
        ]
,
        drilldown: {
            series: [
                {
                    id: 'id-1',
                    data: [['React', 10], ['Angular', 6], ['Vue', 8]]
                },
                {
                    id: 'id-2',
                    data: [['React', 10], ['Angular', 6], ['Vue', 8]]
                },
                {
                    id: 'id-3',
                    data: [['React', 10], ['Angular', 6], ['Vue', 8]]
                },
            ]
        }
    }

    return (
        <ReactHighcharts highcharts={HighCharts} options={options} />
    )
}

export default Drilldown
