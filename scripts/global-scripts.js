// Creating objects to store key/value pair for Location and ID
const gymValueToId = {
    "bedok": "127",
    "bishan": "137",
    "bukit gombak": "145",
    "choa chu kang": "154",
    "clementi": "160",
    "delta": "166",
    "hougang": "185",
    "jurong east": "196",
    "jurong west": "200",
    "pasir ris": "544",
    "sengkang": "239",
    "tampines": "257",
    "toa payoh": "268",
    "woodlands": "274",
    "yio chu kang": "279",
    "yishun": "284",
}

//Declaring global coordinates for each location to be an empty array
const bedokCoor = []
const bishanCoor = []
const bukitGombakCoor = []
const choaChuKangCoor = []
const clementiCoor = []
const deltaCoor = []
const hougangCoor = []
const jurongEastCoor = []
const jurongWestCoor = []
const pasirRisCoor = []
const sengkangCoor = []
const tampinesCoor = []
const toaPayohCoor = []
const woodlandsCoor = []
const yioChuKangCoor = []
const yishunCoor = []

//Declaring global homepage url
const gymHomepage = {
    "bedok": "https://www.myactivesg.com/Facilities/heartbeat-bedok-activesg-gymnasium",
    "bishan": "https://www.myactivesg.com/Facilities/bishan-activesg-gym",
    "bukit gombak": "https://www.myactivesg.com/Facilities/bukit-gombak-activesg-gym",
    "choa chu kang": "https://www.myactivesg.com/Facilities/choa-chu-kang-activesg-gym",
    "clementi": "https://www.myactivesg.com/Facilities/clementi-activesg-gym",
    "delta": "https://www.myactivesg.com/Facilities/delta-activesg-gym",
    "hougang": "https://www.myactivesg.com/Facilities/hougang-activesg-gym",
    "jurong east": "https://www.myactivesg.com/Facilities/jurong-east-activesg-gym",
    "jurong west": "https://www.myactivesg.com/Facilities/jurong-west-activesg-gym",
    "pasir ris": "https://www.myactivesg.com/Facilities/pasir-ris-activesg-gym",
    "sengkang": "https://www.myactivesg.com/Facilities/sengkang-activesg-gym",
    "tampines": "https://www.myactivesg.com/Facilities/tampines-activesg-gym",
    "toa payoh": "https://www.myactivesg.com/Facilities/toa-payoh-activesg-gym",
    "woodlands": "https://www.myactivesg.com/Facilities/woodlands-activesg-gym",
    "yio chu kang": "https://www.myactivesg.com/Facilities/yio-chu-kang-activesg-gym",
    "yishun": "https://www.myactivesg.com/Facilities/yishun-activesg-gym",
}


//Creating a function to get Coordinates for each location
function getCoor(data, name, coorName) {
    for (i = 0; i < data.length; i++) {
        // console.log(data[i])
        if (data[i].properties.Description.includes(name) == true) {
            coorName.push(data[i].geometry.coordinates[1])
            coorName.push(data[i].geometry.coordinates[0])
        }
    }
    return coorName
}

//Creating a function to return ID based on the location name. 
function locationToID(location) {
    for (let i in gymValueToId) {
        if (location.includes(i) == true) {
            return (gymValueToId[i])
        }
    }
}

//Setting up a function to show the correct percentage from daily
function showLiveData(locationId, dailyData) {
    for (let i in dailyData) {
        if (locationId == dailyData[i].id) {
            return dailyData[i].percentage
        }
    }
}
