//Getting JSON file from source when page is loaded. 
window.addEventListener("DOMContentLoaded", async function () {
    let response = await axios.get("https://gym-tracker.data.gov.sg/data/gym-formatted-data.json");
    let data = response.data;
    // console.log(data);
    // console.log("object keys",Object.keys(data));
    // Object.keys(data).map(location => console.log(data[location]))

    //Setting up function to slice from weekly json file
    function getLocationTimings(location) {
        let weekly = data[location].weekly_data;
        weekly = weekly.map(innerArray =>
            innerArray.slice(7, 21)
        )
        console.log(weekly)
    }
    getLocationTimings("yishun")
    // Chart One - Individual Outlet Chart
    // Defining the chart options. 
    const heatOneOptions = {
        chart: {
            type: "heatmap",
            height: "100%"
        },
        // each series represents one set of data, data should be array of 15 values inside
        series: [
            {
                name: "M",
                data: [10, 11, 20, 21, 30, 31, 34, 23, 55, 78, 44, 65, 23, 77, 70]
            },
            {
                name: "T",
                data: [10, 10, 30, 42, 75, 50, 21, 55, 8, 54, 29, 37, 78, 65, 15]
            },
            {
                name: "W",
                data: [10, 10, 10, 13, 15, 22, 34, 23, 55, 78, 44, 65, 23, 77, 70]
            },
            {
                name: "T",
                data: [10, 10, 30, 42, 75, 50, 21, 55, 8, 54, 29, 37, 78, 65, 15]
            },
            {
                name: "F",
                data: [10, 10, 10, 13, 15, 22, 34, 23, 55, 78, 44, 65, 23, 77, 70]
            },
            {
                name: "S",
                data: [10, 10, 30, 42, 75, 50, 21, 55, 8, 54, 29, 37, 78, 65, 15]
            },
            {
                name: "S",
                data: [10, 10, 10, 13, 15, 22, 34, 23, 55, 78, 44, 65, 23, 77, 70]
            },

        ],
        dataLabels: {
            enabled: false
        },
        // Timeslots from 7am to 9pm. 
        xaxis: {
            categories: ["7A", "8A", "9A", "10A", "11A", "12P", "1P", "2P", "3P", "4P", "5P", "6P", "7P", "8P", "9P"]
        },
        yaxis: {
            reversed: true,
        },
        //Color of plots
        plotOptions: {
            heatmap: {
                colorScale: {
                    ranges: [{
                        from: 0,
                        to: 10,
                        color: "#FFEDA0",
                    },
                    {
                        from: 11,
                        to: 20,
                        color: "#F7BE81",
                    },
                    {
                        from: 21,
                        to: 30,
                        color: "#E96747",
                    },
                    {
                        from: 31,
                        to: 40,
                        color: "#E13625",
                    }, 
                    {
                        from: 41,
                        to: 50,
                        color: "#DC1812",
                    },
                    {
                        from: 51,
                        to: 60,
                        color: "#B90303",
                    },
                    {
                        from: 61,
                        to: 70,
                        color: "#990303",
                    }, 
                    {
                        from: 71,
                        to: 80,
                        color: "#6F0202",
                    },
                    {
                        from: 81,
                        to: 90,
                        color: "#530202",
                    },
                    {
                        from: 91,
                        to: 100,
                        color: "#2E0101",
                    }
                    ]
                }
            }
        },
        legend: {
            show: false
        }

    }

    // create the chart
    const heatOne = new ApexCharts(document.querySelector("#heat-one"), heatOneOptions);

    // render the chart
    heatOne.render()

    // Chart Two - Comparision Outlet Chart
    // Defining the chart options. 
    const heatTwoOptions = {
        chart: {
            type: "heatmap",
            height: "100%"
        },
        // each series represents one set of data, data should be array of 15 values inside
        series: [
            {
                name: "Bedok",
                data: [10, 10, 10, 13, 15, 22, 34, 23, 55, 78, 44, 65, 23, 77, 70]
            },
            {
                name: "Yishun",
                data: [10, 10, 30, 42, 75, 50, 21, 55, 8, 54, 29, 37, 78, 65, 15]
            },
            {
                name: "Woodlands",
                data: [25, 10, 30, 99, 75, 50, 21, 55, 8, 54, 100, 82, 94, 99, 87]
            }
        ],
        dataLabels: {
            enabled: false
        },
        // Timeslots from 7am to 9pm. 
        xaxis: {
            categories: ["7A", "8A", "9A", "10A", "11A", "12P", "1P", "2P", "3P", "4P", "5P", "6P", "7P", "8P", "9P"]
        },

    }

    // create the chart
    const heatTwo = new ApexCharts(document.querySelector("#heat-two"), heatTwoOptions);

    // render the chart
    heatTwo.render()
})

