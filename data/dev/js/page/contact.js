var ContactController = (function ($) {

    return {
        map: function () {
            ContactController.Map.init();
        }
    };

}(jQuery));


ContactController.Map = (function ($) {

    var attachEvents = function () {
        var elem = $('#map');
        var lat = elem.data('lat');
        var lng = elem.data('lng');
        var address = elem.data('address');

        google.maps.event.addDomListener(window, 'load', initContactMap);
        function initContactMap() {

            var myCenter = new google.maps.LatLng(parseFloat(lat), parseFloat(lng));

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: myCenter
            });

            var marker = new google.maps.Marker({
                position: {
                    lat: lat,
                    lng: lng
                },
                map: map
            });

            var message = address;
            contactAddress(marker, message);

        }
        function contactAddress(marker, message) {
            var infowindow = new google.maps.InfoWindow({
                content: message
            });

            marker.addListener('click', function () {
                infowindow.open(marker.get('map'), marker);
            });
        }
    };
    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));

