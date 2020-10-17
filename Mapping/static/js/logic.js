function createMap(breweries) {

  // Create the tile layer that will be the background of our map
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
  });

  // Create a baseMaps object to hold the lightmap layer
  var baseMaps = {
    "Street Map": streetmap
  };

  // Create an overlayMaps object to hold the bikeStations layer
  var overlayMaps = {
    "Breweries": breweries
  };

  // Create the map object with options
  var myMap = L.map("map-id", {
    center: [35.227085, -80.4744444],
    zoom: 8,
    layers: [streetmap, breweries]
  });

  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}

function createMarkers(data) {

  // Pull the breweries data out of the response
  var breweries = data;

  // Initialize an array to hold bike markers
  var breweryMarkers = [];

  // Loop through the stations array
  for (var i = 0; i < breweries.length; i++) {
    var brewery = breweries[i];

    // For each station, create a marker and bind a popup with the station's name
    var breweryMarker = L.marker([brewery.latitude, brewery.longitude])
      .bindPopup("<h2>" + brewery.name + "</h2><hr><h3>" + brewery.street + ", " + brewery.city + "</h3><h3> " + brewery.brewery_type +  "</h3>");

    // Add the marker to the bikeMarkers array
    console.log(breweryMarkers)

    breweryMarkers.push(breweryMarker);
  }

  // Create a layer group made from the bike markers array, pass it into the createMap function
  createMap(L.layerGroup(breweryMarkers));
}

// Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
d3.json("static/data/nc_breweries.json", createMarkers);