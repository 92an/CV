    function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 9,
          center: {
              lat: 59.3293,
              lng: 18.0686
              }
        });

        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var locations = [
            {lat: 59.3445, lng: 18.0554},
            {lat: 59.2354, lng: 17.98134},
            {lat: 59.3231, lng: 18.0689}
        ];

        var markers = locations.map(function(location, i){
            return new google.maps.Marker({
                position: location,
                labels: labels[i % labels.length]
            });
        });
            var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});
    }