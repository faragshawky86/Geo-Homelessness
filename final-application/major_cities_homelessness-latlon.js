Plotly.d3.json(
  "http://127.0.0.1:5000/api/v1.0/cities_homelessness_data",
  function(err, rows) {
    function unpack(rows, key) {
      return rows.map(function(row) {
        return row[key];
      });
    }

    var cityName = unpack(rows, "name"),
      cityPop = unpack(rows, "pop"),
      cityLat = unpack(rows, "lat"),
      cityLon = unpack(rows, "lon"),
      color = [
        ,
        "rgb(255,65,54)",
        "rgb(133,20,75)",
        "rgb(255,133,27)",
        "lightgrey"
      ],
      citySize = [],
      hoverText = [],
      scale = 500;

    for (var i = 0; i < cityPop.length; i++) {
      var currentSize = cityPop[i] / scale;
      var currentText = cityName[i] + " pop: " + cityPop[i];
      citySize.push(currentSize);
      hoverText.push(currentText);
    }

    var data = [
      {
        type: "scattergeo",
        locationmode: "USA-states",
        lat: cityLat,
        lon: cityLon,
        hoverinfo: "text",
        text: hoverText,
        marker: {
          size: citySize,
          line: {
            color: "black",
            width: 2
          }
        }
      }
    ];

    var layout = {
      title: "2018 Major US Cities Homeless Populations",
      showlegend: false,
      geo: {
        scope: "usa",
        projection: {
          type: "albers usa"
        },
        showland: true,
        landcolor: "rgb(217, 217, 217)",
        subunitwidth: 1,
        countrywidth: 1,
        subunitcolor: "rgb(255,255,255)",
        countrycolor: "rgb(255,255,255)"
      }
    };

    Plotly.plot(myDiv, data, layout, { showLink: false });
  }
);
