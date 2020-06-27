document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            type: 'line'
            // bar, area, scatter, line ,column, arealine
        },
        title: {
            text: 'JavaScript Developers'
        },
        credits: {
            // enabled: false,
            text: 'Aman Bhardwaj',
            href: 'https://inblack67.netlify.app/',
            style: {
                color: 'red',
                fontSize: '0.8rem'
            }
            
        },
        yAxis: {
            title: {
                text: 'Skill Level'
            },
        },
        xAxis: {
            categories: ['JavaScript', 'Node.JS', 'React.JS', 'MERN Stack', 'HTML5-CSS3']
        },
        series: [
            {
                name: 'John Doe',
                data: [6,7,8]
            },
            {
                name: 'Smith',
                data: [5,9,10]
            },
            {
                name: 'Rupert',
                data: [10,5,8]
            },
        ]
    })
})