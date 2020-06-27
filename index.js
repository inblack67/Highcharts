document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            type: 'line',
            // bar, area, scatter, line ,column 
            zoomType: 'xy'
            // y, x, xy
        },

        title: {
            text: 'JavaScript Developers'
        },

        tooltip: {
            animation: true, // default - true  
            backgroundColor: 'black',
            borderRadius: 20,
            // followRadius: true,
            style: {
                color: 'white'
            },
            shared: true,
            // formatter(){
            //     return `<strong>X-Value: ${this.x}</strong>
            //     <strong>Y-Value: ${this.y}</strong>`
            // }
        },

        colors: ['green', 'yellow', 'blue'],

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
            alternateGridColor: '#ccc'
        },
        xAxis: {
            categories: ['React', 'Angular', 'Vue']
        },
        series: [{
            name: 'JavaScript Frameworks Survey',
            negativeColor: 'red',
            data: [10, 7, 8, -10, -7, 4, 6, 7, 8]
        }]
        // series: [
        //     {
        //         name: 'John',
        //         data: [8,9,10]
        //     },
        //     {
        //         name: 'Wick',
        //         data: [7,10,6]
        //     },
        //     {
        //         name: 'Doe',
        //         data: [6,10,5]
        //     },
        // ]
        // series: [{
        //     name: 'JavaScript Survey',
        //     data: [
        //         {
        //             name: 'John Doe',
        //             y: 10,
        //             x: 8
        //         },
        //         {
        //             name: 'Smith',
        //             y: 7,
        //             x: 9
        //         },
        //         {
        //             name: 'Rupert',
        //             y: 6,
        //             x: 8
        //         },
        //     ]
        // }
        // ]
    })
})