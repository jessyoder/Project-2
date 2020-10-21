// Create the tile layer that will be the background of the map
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
  });

// Initialize all of the LayerGroups
var layers = {
    micro: new L.LayerGroup(),
    pub: new L.LayerGroup(),
    large: new L.LayerGroup(),
    regional: new L.LayerGroup(),
    contract: new L.LayerGroup()
  };

// Create the map object with layer options
var myMap = L.map("map-id", {
    center: [35.227085, -80.4744444],
    zoom: 8,
    layers: [
        layers.micro,
        layers.pub,
        layers.large,
        layers.regional,
        layers.contract
    ]
  });

// Add the base tile layer to the map
streetmap.addTo(myMap);

var overlays = {
    "Micro Breweries": layers.micro,
    "Brew Pubs": layers.pub,
    "Large Breweries": layers.large,
    "Regional Breweries": layers.regional,
    "Contract Breweries": layers.contract
}

// Create a control for our layers, add our overlay layers to it
L.control.layers(null, overlays, {
    collapsed: false
  }).addTo(myMap);

// Create a legend to display information about our map
var info = L.control({
    position: "bottomright"
  });
  
  // When the layer control is added, insert a div with the class of "legend"
  info.onAdd = function() {
    var div = L.DomUtil.create("div", "legend");
    return div;
  };
  // Add the info legend to the map
  info.addTo(myMap);

  // Initialize an object containing icons for each layer group
var icons = {
    micro: L.ExtraMarkers.icon({
      icon: "ion-minus-circled",
      iconColor: "white",
      markerColor: "purple",
      shape: "circle"
    }),
    pub: L.ExtraMarkers.icon({
      icon: "ion-minus-circled",
      iconColor: "white",
      markerColor: "red",
      shape: "circle"
    }),
    large: L.ExtraMarkers.icon({
      icon: "ion-minus-circled",
      iconColor: "white",
      markerColor: "blue",
      shape: "circle"
    }),
    regional: L.ExtraMarkers.icon({
      icon: "ion-minus-circled",
      iconColor: "white",
      markerColor: "orange",
      shape: "circle"
    }),
    contract: L.ExtraMarkers.icon({
      icon: "ion-minus-circled",
      iconColor: "white",
      markerColor: "green",
      shape: "circle"
    })
  };

// Perform an API call to the JSON file
d3.json("/api/data", function(brewInfo) {
    var breweryInfo = brewInfo
    // console.log(breweryInfo);

    var breweryCount = {
        micro: 0,
        pub: 0,
        large: 0,
        regional: 0,
        contract: 0
    };

    // Initialize brewStatusCode, which will be used as a key to access the appropriate layers, icons, and station count for layer group
    var brewStatusCode;

    // Loop through the breweries (they're the same size and have partially matching data)
    for (var i = 0; i < breweryInfo.length; i++) {

          // Create a new breweries object with properties of both station objects
          var brewery = Object.assign({}, breweryInfo[i]);
          // If a brewery has a brewery_type of micro, its status is micro
          if (brewery.brewery_type == "micro") {
              brewStatusCode = "micro";
          }
          // If a brewery has a brewery_type of pub, its status is pub
          else if (brewery.brewery_type == "pub") {
              brewStatusCode = "pub";
          }
          // If a brewery has a brewery_type of large, its status is large
          else if (brewery.brewery_type == "large") {
              brewStatusCode = "large";
          }
          // If a brewery has a brewery_type of regional, its status is regional
          else if (brewery.brewery_type == "regional") {
              brewStatusCode = "regional";
          }
          // Otherwise the station is contract
          else {
              brewStatusCode = "contract";
          }
        
        // Update the brewery count
        breweryCount[brewStatusCode]++;
        
        // Create a new marker with the appropriate icon and coordinates
        var newMarker = L.marker([parseFloat(brewery.lat), parseFloat(brewery.long)], {
            icon: icons[brewStatusCode]
        });

        // Add the new marker to the appropriate layer
        newMarker.addTo(layers[brewStatusCode]);

        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        // Bind a popup to the marker that will  display on click. This will be rendered as HTML
        newMarker.bindPopup("<h3>" + brewery.name + "</h3><hr><h4>" + brewery.street +", " + brewery.city + "</h4><h4>" + capitalize(brewery.brewery_type) + " Brewery</h4>");
    }
    
    // Call the updateLegend function, which will... update the legend!
    updateLegend(breweryCount);

    // Update the legend's innerHTML with the last updated time and station count
    function updateLegend(time, stationCount) {
        document.querySelector(".legend").innerHTML = [
        "<p class='micro'>Micro Breweries: " + breweryCount.micro + "</p>",
        "<p class='pub'>Pub Breweries: " + breweryCount.pub + "</p>",
        "<p class='large'>Large Breweries: " + breweryCount.large + "</p>",
        "<p class='regional'>Regional Breweries: " + breweryCount.regional + "</p>",
        "<p class='contract'>Contract Breweries: " + breweryCount.contract + "</p>"
        ].join("");
    }
});
