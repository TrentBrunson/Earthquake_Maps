// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// // Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

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
  color: "red"
}).addTo(map);

L.polyline(line3, {
  color: "blue",
  weight: 4,
  dashArray: "2 8",
  opacity: 0.5
}).addTo(map);

//   // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//       radius: city.population/200000,
//       color: 'orange',
//       fillColor: 'orange',
//       fillOpacity: 0.5,
//       weight: 4
//     })
//       .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//       .addTo(map);
//    });

// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}',
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',  {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: api_Key
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

