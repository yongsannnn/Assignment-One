const currentLocationIcon = L.icon({
    iconUrl: "../images/pin.png",
    iconSize:[40,40],
    iconAnchor: [20, 25],
})

//Get and show current Location
var myLocation = document.getElementById("my-location");

function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
    new L.Marker([position.coords.latitude, position.coords.longitude], {
        icon: currentLocationIcon,
    })
        .bindPopup("You are here!")
        .addTo(map)
    // myLocation.innerHTML = "Latitude: " + position.coords.latitude +
    //     "<br>Longitude: " + position.coords.longitude;
}