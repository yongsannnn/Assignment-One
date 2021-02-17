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
const toaPaYohCoor = []
const woodlandsCoor = []
const yioChuKangCoor = []
const yishunCoor = []

function getCoor(data){
    
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
