
function createPlot (selectedYear){
  Plotly.d3.json(
    "http://127.0.0.1:5000/api/v1.0/annualhomlessness",
    function(err, rows) {
      function unpack(rows, key) {
        return rows.map(function(row) {
          return row[key];
        });
      }
  
      var data = [
        {
          type: "choropleth",
          locationmode: "USA-states",
          locations: unpack(rows, "code"),
          z: unpack(rows, selectedYear),
          text: unpack(rows, "state"),
          zmin: 0,
          zmax: 17000,
          colorscale: [
            [0, "rgb(242,240,247)"],
            [0.2, "rgb(218,218,235)"],
            [0.4, "rgb(188,189,220)"],
            [0.6, "rgb(158,154,200)"],
            [0.8, "rgb(117,107,177)"],
            [1, "rgb(84,39,143)"]
          ],
          colorbar: {
            title: "Legend Label ",
            thickness: 0.2
          },
          marker: {
            line: {
              color: "rgb(255,255,255)",
              width: 2
            }
          }
        }
      ];
  
      var layout = {
        title: selectedYear+" Homelessness Data by State",
        geo: {
          scope: "usa",
          showlakes: true,
          lakecolor: "rgb(255,255,255)"
        }
      };
  
      Plotly.plot(plot, data, layout, { showLink: false });
    }
  );
  
}

var data = ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];

var select = d3.select('body')
  .append('select')
  	.attr('class','select')
    .on('change',onchange)

var options = select
  .selectAll('option')
	.data(data).enter()
	.append('option')
		.text(function (d) { return d; });

function onchange() {
	selectValue = d3.select('select').property('value')
  createPlot(selectValue)
};
