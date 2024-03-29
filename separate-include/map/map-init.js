   var mapElement = document.getElementById('map');
 if (mapElement) {
	// When the window has finished loading create our google map below
	google.maps.event.addDomListener(window, 'load', init);

	function init() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 18,

			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(38.915931701660156, -77.02112579345703), // Washington DC

			scrollwheel:  false,

			// How you would like to style the map.
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{
					"featureType":"water",
					"elementType":"geometry.fill","stylers":[{"color":"#abd0fa"}]},
					{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},
					{"featureType":"road.highway","elementType":"geometry.stroke",
					"stylers":[{"visibility":"on"},{"color":"#e1d9c6"}]},
					{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#eee9da"}]},
					{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},
					{"color":"000"},{"weight":1.8}]},
					{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},
					{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},
					{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#eee9da"}]},
					{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#fffbf8"}]},
					{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#fffbf8"}]},
					{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#fbf7ee"}]},
					{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#d6d6d6"}]},
					{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},
					{"color":"#3c3424"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
					{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},
					{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},
					{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
					{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#aee9c6"}
			]}]
		};

		// Get the HTML DOM element that will contain your map
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('map');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		var image = 'images/flag.png';

		 var marker = new google.maps.Marker({
				position: new google.maps.LatLng(38.915931701660156, -77.02112579345703),
				map: map,
				icon : image,
				title: 'Snazzy!'
			});
	}
}


