"use strict";

var map; // GoogleMaps Object
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {});
}

function updateMap(lat, lng, txt) {
    var latLng = {lat: lat, lng: lng};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: latLng
    });

    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: txt
    }); 
}

window.onload = function() {
    var theForm = document.getElementById('theForm');
    var zip = document.getElementById('zip');
    var lat = document.getElementById('lat');
    var lng = document.getElementById('lng');
    var output = document.getElementById('output');

    var mapBtn = document.getElementById('mapBtn');
    var mapDiv = document.getElementById('map');
    
    theForm.addEventListener('submit', getlatLng);
    theForm.addEventListener('reset', reset);
    mapBtn.addEventListener('click', displayMap);

    function getlatLng(e) {
        e.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://maps.googleapis.com/maps/api/geocode/json?address=' + zip.value, true);
        xhr.send();

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var resp = this.response;
                output.innerHTML = resp;

                var latLng = JSON.parse(this.response).results[0].geometry.location;
                if (latLng.lat) {
                    lat.innerHTML = latLng.lat;
                } 
                if (latLng.lng) {
                    lng.innerHTML = latLng.lng;
                }

                mapBtn.className = 'visible';
            }
        }
    }

    function reset() {
        lat.innerHTML = '';
        lng.innerHTML = '';
        output.innerHTML = '';

        mapBtn.className = 'hidden';
        mapDiv.className = 'hidden';

        zip.focus();
    }

    function displayMap() {
        updateMap(parseFloat(lat.innerHTML), parseFloat(lng.innerHTML), zip.value);
        mapDiv.className = 'visible';
    }
}
