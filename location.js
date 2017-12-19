var x = document.getElementById('val');
var y = document.getElementById('s');
var z = document.getElementById('v');

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        y.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {

    var lat1 = position.coords.latitude;
    var long1 = position.coords.longitude;

    var lat2 = "-6.188179";
    var long2 = "106.792130";

    var r = 6371;
    var dlat = (lat2-lat1) * Math.PI / 180;
    var dlon = (long2-long1) * Math.PI / 180;

    var a = Math.sin(dlat / 2) * Math.sin(dlat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dlon / 2) * Math.sin(dlon / 2);

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = r * c;

    var g = Math.round(d * 1000);

    if(g > 500){
        x.innerHTML = "failed ! your location is " + g + "far away from center"
    }else{
        z.value = g
        console.log(g);
    }
};