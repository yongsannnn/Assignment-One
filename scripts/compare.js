// Defining the chart options. 
const options = {
    chart: {
        type: 'heatmap',
        height: "100%"
    },
    // each series represents one set of data, data should be array of 15 values inside
    series: [
        {
            name: 'Bedok',
            data: [0, 0, 10, 13, 15, 22, 34, 23, 55, 78, 44, 65, 23, 77, 70]
        },
        {
            name: 'Yishun',
            data: [0, 10, 30, 42, 75, 50, 21, 55, 8, 54, 29, 37, 78, 65, 15]
        }
    ],
    dataLabels: {
        enabled: false
    },
    // Timeslots
    xaxis: {
        categories: ["7A", "8A", "9A", "10A", "11A", "12P", "1P", "2P", "3P", "4P", "5P", "6P", "7P", "8P", "9P"]
    },

}

// create the chart
const chart = new ApexCharts(document.querySelector('#chart'), options);

// render the chart
chart.render()