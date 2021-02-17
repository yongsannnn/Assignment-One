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


//Importing data for locations of gyms in Singapore
window.addEventListener("DOMContentLoaded", async function () {

    let response = await axios.get("gyms-location.geojson")
    let response2 = await axios.get("https://gym-tracker.data.gov.sg/api/gymcapall/")
    let data = response.data;
    let dailyData = response2.data;

    let activeGym = data.features.filter(des => des.properties.Description.includes("ClubFITT"));
    // console.log(activeGym)
    //Plotting each location into the map
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
            //Function when click will zoom into the outlet and show bindPopup
            layer.on("click", function (e) {
                map.setView(e.latlng, 16)
            });

        }// end of onEachFeature
    }) // end of L.geoJson
    layer.addTo(map);

    //Getting Coordinates for each location
    getCoor(activeGym,"Bedok",bedokCoor)
    getCoor(activeGym,"Bishan",bishanCoor)
    getCoor(activeGym,"Bukit Gombak",bukitGombakCoor)
    getCoor(activeGym,"Choa Chu Kang",choaChuKangCoor)
    getCoor(activeGym,"Clementi",clementiCoor)
    getCoor(activeGym,"Delta",deltaCoor)
    getCoor(activeGym,"Hougang",hougangCoor)
    getCoor(activeGym,"Jurong East",jurongEastCoor)
    getCoor(activeGym,"Jurong West",jurongWestCoor)
    getCoor(activeGym,"Pasir Ris",pasirRisCoor)
    getCoor(activeGym,"Sengkang",sengkangCoor)
    getCoor(activeGym,"Tampines",tampinesCoor)
    getCoor(activeGym,"Toa Payoh",toaPayohCoor)
    getCoor(activeGym,"Woodlands",woodlandsCoor)
    getCoor(activeGym,"Yio Chu Kang",yioChuKangCoor)
    getCoor(activeGym,"Yishun",yishunCoor)
    


    console.log(bedokCoor,bishanCoor)
    // Setting up event listener to enable zoom on click of button.
    let bedokBtn = document.querySelector("#bedok-clicked")
    zoomOnClick(bedokBtn, bedokCoor)

    let bishanBtn = document.querySelector("#bishan-clicked")
    zoomOnClick(bishanBtn,bishanCoor)
    // let bedokBtn = document.querySelector("#bedok-clicked").addEventListener("click", function () {
    //     map.setView(bedokCoor, 16);
    // })
    // let bishanBtn = document.querySelector("#bishan-clicked").addEventListener("click", function () {
    //     map.setView(bishanCoor, 16);
    // })

});

