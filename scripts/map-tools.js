const currentLocationIcon = L.icon({
    iconUrl: "../images/pin.png",
    iconSize: [40, 40],
    iconAnchor: [20, 25],
})

const gymHighIcon = L.icon({
    iconUrl:"../images/gym-high.png",
    iconSize:[40,40],
    iconAnchor: [20,25]
})

const gymMediumIcon = L.icon({
    iconUrl:"../images/gym-medium.png",
    iconSize:[40,40],
    iconAnchor: [20,25]
})

const gymLowIcon = L.icon({
    iconUrl:"../images/gym-low.png",
    iconSize:[40,40],
    iconAnchor: [20,25]
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

function zoomOnChange(selectedValue) {
    if (selectedValue == "bedok") {
        map.setView(bedokCoor, 16);
    }
    if (selectedValue == "bishan") {
        map.setView(bishanCoor, 16);
    }
    if (selectedValue == "bukit_gombak") {
        map.setView(bukitGombakCoor, 16);
    }
    if (selectedValue == "cck") {
        map.setView(choaChuKangCoor, 16);
    }
    if (selectedValue == "clementi") {
        map.setView(clementiCoor, 16);
    }
    if (selectedValue == "delta") {
        map.setView(deltaCoor, 16);
    }
    if (selectedValue == "hougang") {
        map.setView(hougangCoor, 16);
    }
    if (selectedValue == "jurong_east") {
        map.setView(jurongEastCoor, 16);
    }
    if (selectedValue == "jurong_west") {
        map.setView(jurongWestCoor, 16);
    }
    if (selectedValue == "pasir_ris") {
        map.setView(pasirRisCoor, 16);
    }
    if (selectedValue == "sengkang") {
        map.setView(sengkangCoor, 16);
    }
    if (selectedValue == "tampines") {
        map.setView(tampinesCoor, 16);
    }
    if (selectedValue == "toa_payoh") {
        map.setView(toaPayohCoor, 16);
    }
    if (selectedValue == "woodlands") {
        map.setView(woodlandsCoor, 16);
    }
    if (selectedValue == "yck") {
        map.setView(yioChuKangCoor, 16);
    }
    if (selectedValue == "yishun") {
        map.setView(yishunCoor, 16);
    }
    if (selectedValue == "show-all"){
        map.setView(singapore,12);
    }
}