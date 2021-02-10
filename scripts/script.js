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
    let data = response.data;
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
            if (teleNum == null){
                teleNum = "--"
            }
            let streetName = divElement.querySelectorAll("td")[8].innerHTML;
            let blockNum = divElement.querySelectorAll("td")[9].innerHTML;
            let operatingHours = gymDescription.match(/7(.*) Holiday\)/)[0];
            layer.bindPopup(`
            <h5>${gymName}</h5>
            <p> Postal Code: ${postalCode}</p>
            <p> Telephone Number: ${teleNum[1]}</p>
            <p> Address: ${blockNum} ${streetName}</p>
            <p> Operating Hours: ${operatingHours}</p>
            `);
        }
    })
    layer.addTo(map);
});