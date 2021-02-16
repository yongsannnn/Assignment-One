// Importing leaflet maps
let singapore = [1.34, 103.81];
let map = L.map("map");
map.setView(singapore, 12);
// Setup tile layers
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
}).addTo(map);

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

//Creating a function to return ID based on the location name. 
function locationToID(location) {
    for (let i in gymValueToId) {
        if (location.includes(i) == true) {
            return (gymValueToId[i])
        }
    }
}

//Importing data for locations of gyms in Singapore
window.addEventListener("DOMContentLoaded", async function () {

    let response = await axios.get("gyms-location.geojson")
    let response2 = await axios.get("https://gym-tracker.data.gov.sg/api/gymcapall/")
    let data = response.data;
    let dailyData = response2.data;

    let activeGym = data.features.filter(des => des.properties.Description.includes("ClubFITT"));
    // console.log(activeGym)
    let layer = L.geoJson(activeGym, {
        onEachFeature: function (feature, layer) {
            let divElement = document.createElement("div");
            divElement.innerHTML = feature.properties.Description;
            let gymName = divElement.querySelectorAll("td")[13].innerHTML;
            let gymDescription = divElement.querySelectorAll("td")[10].innerHTML;
            let postalCode = divElement.querySelectorAll("td")[2].innerHTML;
            let teleNum = gymDescription.match(/Tel:(.*)/);
            // If telephone number does not exist, change it to --
            if (teleNum == null) {
                teleNum = "--"
            }
            let streetName = divElement.querySelectorAll("td")[8].innerHTML;
            let blockNum = divElement.querySelectorAll("td")[9].innerHTML;
            let operatingHours = gymDescription.match(/7(.*) Holiday\)/)[0];
            let locationId = locationToID(gymName.toLowerCase())


            layer.bindPopup(`
            <h5>${gymName}</h5>
            <p> Postal Code: ${postalCode}</p>
            <p> Tel: ${teleNum[1]}</p>
            <p> Address: ${blockNum} ${streetName}</p>
            <p> Operating Hours: ${operatingHours}</p>
            <p> Live Occupancy Rate: ${showLiveData(locationId, dailyData)}</p>
            `);
        }
    })
    layer.addTo(map);
});

