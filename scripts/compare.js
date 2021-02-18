//Getting JSON file from source when page is loaded. 
window.addEventListener("DOMContentLoaded", async function () {
    // Getting data for weekly
    let response = await axios.get("https://gym-tracker.data.gov.sg/data/gym-formatted-data.json");
    let response2 = await axios.get("https://gym-tracker.data.gov.sg/api/gymcapall/")
    let data = response.data
    let dailyData = response2.data
    // console.log(dailyData)
    // console.log(data);
    // console.log("object keys",Object.keys(data));
    // Object.keys(data).map(location => console.log(data[location]))

    //Setting up function to slice from weekly json file
    function getWeeklyTimings(location) {
        let weekly = data[location].weekly_data
        weekly = weekly.map(innerArray =>
            innerArray.slice(7, 22)
        )
        return (weekly)
    }

    //Setting up a function to return an object that can be used for updateSeries
    function getNewUpdateSeries(slicedTiming) {
        let slicedArray = [{
            name: "M",
            data: slicedTiming[0]
        },
        {
            name: "T",
            data: slicedTiming[1]
        },
        {
            name: "W",
            data: slicedTiming[2]
        },
        {
            name: "T",
            data: slicedTiming[3]
        },
        {
            name: "F",
            data: slicedTiming[4]
        },
        {
            name: "S",
            data: slicedTiming[5]
        },
        {
            name: "S",
            data: slicedTiming[6]

        }]
        return slicedArray
    }
    //Setting up function to slice from weekly file with location and specific time when selected
    function getSlicedTiming(location, time) {
        let weekly = data[location].weekly_data;
        let slicedTiming;
        if (time == "seven-to-eleven") {
            slicedTiming = weekly.map(innerArray => innerArray.slice(7, 11))
            heatOne.updateOptions({
                xaxis: {
                    categories: ["7A", "8A", "9A", "10A"]
                }
            })
            // console.log(getNewUpdateSeries(slicedTiming));
            heatOne.updateSeries(getNewUpdateSeries(slicedTiming))
        } else if (time == "eleven-to-three") {
            slicedTiming = weekly.map(innerArray => innerArray.slice(11, 15))
            heatOne.updateOptions({
                xaxis: {
                    categories: ["11A", "12P", "1P", "2P"]
                }
            })
            heatOne.updateSeries(getNewUpdateSeries(slicedTiming))
        } else if (time == "three-to-seven") {
            slicedTiming = weekly.map(innerArray => innerArray.slice(15, 19))
            heatOne.updateOptions({
                xaxis: {
                    categories: ["3P", "4P", "5P", "6P"]
                }
            })
            heatOne.updateSeries(getNewUpdateSeries(slicedTiming))
        } else if (time == "seven-to-ten") {
            slicedTiming = weekly.map(innerArray => innerArray.slice(19, 22))
            heatOne.updateOptions({
                xaxis: {
                    categories: ["7P", "8P", "9P"]
                }
            })
            heatOne.updateSeries(getNewUpdateSeries(slicedTiming))
        } else {
            slicedTiming = getWeeklyTimings(location)
            heatOne.updateOptions({
                xaxis: {
                    categories: ["7A", "8A", "9A", "10A", "11A", "12P", "1P", "2P", "3P", "4P", "5P", "6P", "7P", "8P", "9P"]
                }
            })
            heatOne.updateSeries(getNewUpdateSeries(slicedTiming))
        }
        return (slicedTiming)
    };

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
                data: getWeeklyTimings("bedok")[0]
            },
            {
                name: "T",
                data: getWeeklyTimings("bedok")[1]
            },
            {
                name: "W",
                data: getWeeklyTimings("bedok")[2]
            },
            {
                name: "T",
                data: getWeeklyTimings("bedok")[3]
            },
            {
                name: "F",
                data: getWeeklyTimings("bedok")[4]
            },
            {
                name: "S",
                data: getWeeklyTimings("bedok")[5]
            },
            {
                name: "S",
                data: getWeeklyTimings("bedok")[6]
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
                        from: 10.01,
                        to: 20,
                        color: "#F7BE81",
                    },
                    {
                        from: 20.01,
                        to: 30,
                        color: "#E96747",
                    },
                    {
                        from: 30.01,
                        to: 40,
                        color: "#E13625",
                    },
                    {
                        from: 40.01,
                        to: 50,
                        color: "#DC1812",
                    },
                    {
                        from: 50.01,
                        to: 60,
                        color: "#B90303",
                    },
                    {
                        from: 60.01,
                        to: 70,
                        color: "#990303",
                    },
                    {
                        from: 70.01,
                        to: 80,
                        color: "#6F0202",
                    },
                    {
                        from: 80.01,
                        to: 90,
                        color: "#530202",
                    },
                    {
                        from: 90.01,
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

    // create the chart 1 
    const heatOne = new ApexCharts(document.querySelector("#heat-one"), heatOneOptions)

    // render the chart 1
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

    // create the chart 2
    const heatTwo = new ApexCharts(document.querySelector("#heat-two"), heatTwoOptions)

    // render the chart 2
    heatTwo.render()

    //Enable changes when selecting different gyms for Heatmap one
    let btn = document.querySelector("#single-gyms");
    btn.addEventListener("change", function () {
        //using value to project the new weekly data from weekly data
        let newWeekly = getWeeklyTimings(btn.value)
        //using data-id and getAttribute tag to associate the option with the daily data 
        let newId = btn.querySelector(":checked").getAttribute("data-id")
        // console.log(newId)
        //Reset value of single time back to all when change gym. 
        document.querySelector("#single-time").value = "all"
        heatOne.updateSeries([{
            name: "M",
            data: newWeekly[0]
        },
        {
            name: "T",
            data: newWeekly[1]
        },
        {
            name: "W",
            data: newWeekly[2]
        },
        {
            name: "T",
            data: newWeekly[3]
        },
        {
            name: "F",
            data: newWeekly[4]
        },
        {
            name: "S",
            data: newWeekly[5]
        },
        {
            name: "S",
            data: newWeekly[6]

        }])
        heatOne.updateOptions({
            xaxis: {
                categories: ["7A", "8A", "9A", "10A", "11A", "12P", "1P", "2P", "3P", "4P", "5P", "6P", "7P", "8P", "9P"]
            }
        })
        //Setting up on change to reflect correct occupancy.
        let locationName = document.querySelector("#single-gyms").querySelector(":checked").value
        let newLive = document.querySelector("#single-gyms").querySelector(":checked").getAttribute("data-id")
        let newText = document.querySelector(".live-text");
        newText.innerHTML = `
        <h2 class="title">${locationName.toUpperCase()}</h2>
        <h1>${showLiveData(newLive, dailyData)}%</h1>
        <p>Occupied</p>
        `
    })

    //Set up Bedok Live data on the webpage as default
    //Need to counter check with option value data-id, add in function to replace this and the one inside event listener
    let bedokLiveData = dailyData[8].percentage
    let locationName = document.querySelector("#single-gyms").querySelector(":checked").value
    let newText = document.querySelector(".live-text");
    newText.innerHTML = (`
    <h2 class="title">${locationName.toUpperCase()}</h2>
    <h1>${bedokLiveData}%</h1>
    <p>Occupied</p>
    `)

    //Set up for sliced timing if chosen
    let timeBtn = document.querySelector("#single-time");
    timeBtn.addEventListener("change", function () {
        let locationName = document.querySelector("#single-gyms").querySelector(":checked").value
        let newTime = timeBtn.querySelector(":checked").value;
        getSlicedTiming(locationName, newTime)
    })
})
