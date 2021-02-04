// Importing leaflet maps
let singapore = [1.34, 103.81];
let map = L.map("map");
map.setView(singapore, 12);
// Setup tile layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
}).addTo(map);

//Importing data for locations of gyms in Singapore
window.addEventListener("DOMContentLoaded", async function () {

    let response = await axios.get("gyms-location.geojson")
    let data = response.data;
    let activeGym = data.features.filter(des => des.properties.Description.includes("ClubFITT"));
    console.log(activeGym)

    let layer = L.geoJson(data, {
        onEachFeature: function (feature, layer) {
            let divElement = document.createElement("div");
            divElement.innerHTML = feature.properties.Description;
        }
    })
    layer.addTo(map);
});
