// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//   center: [40.7, -94.5],
//   zoom: 4
// });

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// // Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

//  create the tile layer that will be the background of map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',
  
  {attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: api_Key
});


// create the dark view tile layer that will be an option for the map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', 
  {attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: api_Key
  });

let sat = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: api_Key
  });

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: api_Key
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark,
  Gray: light,
  Satellite: sat
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [30, 30],
	zoom: 2,
	layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/TrentBrunson/Earthquake_Maps/master/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, 
    {
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h2> Airport ICAO: " + feature.properties.icao +  
      "</h2> <hr> <h3> Airport name: " + feature.properties.name + "</h3>");
    }}
  ).addTo(map);
});

//  add map tile layer to the map.
streets.addTo(map);


// ***********************************************************


// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790]
];

// Coordinates for each point to be used in the polyline.
let line2 = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

let line3 = [
  [37.62,-122.39],
  [30.19,-97.67],
  [43.68, -79.63],
  [40.64,-73.78]
];

// Get data from cities.js
let cityData = cities;

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "red",
  weight: 10
}).addTo(map);

L.polyline(line2, {
  color: "cyan"
}).addTo(map);

L.polyline(line3, {
  color: "blue",
  weight: 4,
  dashArray: "2 8",
  opacity: 0.5
}).addTo(map);

// // Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng).bindPopup("<h2>" + feature.properties.city + ", CA, " 
//     + feature.properties.country + 
//     "</h2> <hr> <h3>" 
//     + feature.properties.name + "</h3>");
//   }

// }).addTo(map);

// swithing from pointToLayer f(x) to onEachFeature f(x)
// Grabbing our GeoJSON data.
L.geoJson(sanFranAirport, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2> Airport ICAO: " + feature.properties.icao +  
    "</h2> <hr> <h3> Airport name: " + feature.properties.name + "</h3>");
  //   return L.marker(latlng).bindPopup("<h2>" + feature.properties.city + ", CA, " 
  //   + feature.properties.country + 
  //   "</h2> <hr> <h3>" 
  //   + feature.properties.name + "</h3>");
  }
}).addTo(map);

  // Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
      radius: city.population/200000,
      color: 'orange',
      fillColor: 'orange',
      fillOpacity: 0.5,
      weight: 4
    })
      .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
      .addTo(map);
   });