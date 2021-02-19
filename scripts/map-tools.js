const currentLocationIcon = L.icon({
    iconUrl: "../images/pin-red.png",
    iconSize: [40, 40],
    iconAnchor: [20, 25],
})

const gymHighIcon = L.icon({
    iconUrl: "../images/gym-high.png",
    iconSize: [40, 40],
    iconAnchor: [20, 25]
})

const gymMediumIcon = L.icon({
    iconUrl: "../images/gym-medium.png",
    iconSize: [40, 40],
    iconAnchor: [20, 25]
})

const gymLowIcon = L.icon({
    iconUrl: "../images/gym-low.png",
    iconSize: [40, 40],
    iconAnchor: [20, 25]
})

//Get and show current Location
let allCoorLayers = [];

function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
    new L.Marker([position.coords.latitude, position.coords.longitude], {
        icon: currentLocationIcon,
    })
        .bindPopup("You are here!")
        .addTo(map);
    console.log(allCoorLayers)
    let myCurrCoor = [position.coords.latitude, position.coords.longitude]
    let closestGym = L.GeometryUtil.closestLayer(map, allCoorLayers, myCurrCoor);
    console.log(closestGym)
    map.fitBounds([
        [myCurrCoor[0], myCurrCoor[1]],
        [closestGym.latlng.lat, closestGym.latlng.lng],
    ])
}

//Creating a function to store zoom on change for dropdown menu
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
    if (selectedValue == "show-all") {
        map.setView(singapore, 12);
    }
}

//Creating a function to store details 
function updateOptions(locationId) {
    if (locationId == "127") {
        return "bedok"
    }
    if (locationId == "137") {
        return "bishan"
    }
    if (locationId == "145") {
        return "bukit_gombak"
    }
    if (locationId == "154") {
        return "cck"
    }
    if (locationId == "160") {
        return "clementi"
    }
    if (locationId == "185") {
        return "hougang"
    }
    if (locationId == "196") {
        return "jurong_east"
    }
    if (locationId == "166") {
        return "delta"
    }
    if (locationId == "200") {
        return "jurong_west"
    }
    if (locationId == "544") {
        return "pasir_ris"
    }
    if (locationId == "239") {
        return "sengkang"
    }
    if (locationId == "257") {
        return "tampines"
    }
    if (locationId == "268") {
        return "toa_payoh"
    }
    if (locationId == "274") {
        return "woodlands"
    }
    if (locationId == "279") {
        return "yck"
    }
    if (locationId == "284") {
        return "yishun"
    }

}