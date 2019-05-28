//Coordinates for New York City
var myMap = L.map("map", {
  center: [40.736202, -73.993500],
  zoom: 13
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

var newtry = "http://127.0.0.1:5000/api/v1.0/dataset1";

d3.json(newtry, function(response) {

  console.log(response);

  for (var i = 0; i < response.length; i++) {
  L.marker([response[i].latitude, response[i].longitude]).addTo(myMap);
  }
});
