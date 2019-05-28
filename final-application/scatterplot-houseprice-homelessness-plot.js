createPlot(2010)

//################################################################
//             2010
//################################################################


function housePriceTrend2010() {

    var trace1 = {
        x: medianHousePrice2010,
        y: homelessnessPercentage2010,
        mode: 'markers',
        type: 'scatter',
        name: 'Team A',
        text: states,
        marker: { size: 12 }
      };
    
    
      var data = [trace1];

      var layout = {
        title: "Median House Price vs Percentage Homelessness (2010)",
        xaxis: { title: "Median House Price" },
        yaxis: { title: "Percentage Homelessness" }
      };
    
      Plotly.newPlot('myDiv', data, layout);
};

//################################################################
//                 2011
//################################################################

function housePriceTrend2011() {

    var trace1 = {
        x: medianHousePrice2011,
        y: homelessnessPercentage2011,
        mode: 'markers',
        type: 'scatter',
        name: 'Team A',
        text: states,
        marker: { size: 12 }
      };
    
    
      var data = [trace1];

      var layout = {
        title: "Median House Price vs Percentage Homelessness (2011)",
        xaxis: { title: "Median House Price" },
        yaxis: { title: "Percentage Homelessness" }
      };
    
      Plotly.newPlot('myDiv', data, layout);
};



//################################################################
//             2012
//################################################################

function housePriceTrend2012() {

    var trace1 = {
        x: medianHousePrice2012,
        y: homelessnessPercentage2012,
        mode: 'markers',
        type: 'scatter',
        name: 'Team A',
        text: states,
        marker: { size: 12 }
      };
    
    
      var data = [trace1];

      var layout = {
        title: "Median House Price vs Percentage Homelessness (2012)",
        xaxis: { title: "Median House Price" },
        yaxis: { title: "Percentage Homelessness" }
      };
    
      Plotly.newPlot('myDiv', data, layout);
};

//################################################################
//             2013
//################################################################

function housePriceTrend2013() {

    var trace1 = {
        x: medianHousePrice2013,
        y: homelessnessPercentage2013,
        mode: 'markers',
        type: 'scatter',
        name: 'Team A',
        text: states,
        marker: { size: 12 }
      };
    
    
      var data = [trace1];

      var layout = {
        title: "Median House Price vs Percentage Homelessness (2013)",
        xaxis: { title: "Median House Price" },
        yaxis: { title: "Percentage Homelessness" }
      };
    
      Plotly.newPlot('myDiv', data, layout);
};

//################################################################
//             2014
//################################################################

function housePriceTrend2014() {

    var trace1 = {
        x: medianHousePrice2014,
        y: homelessnessPercentage2014,
        mode: 'markers',
        type: 'scatter',
        name: 'Team A',
        text: states,
        marker: { size: 12 }
      };
    
    
      var data = [trace1];

      var layout = {
        title: "Median House Price vs Percentage Homelessness (2014)",
        xaxis: { title: "Median House Price" },
        yaxis: { title: "Percentage Homelessness" }
      };
    
      Plotly.newPlot('myDiv', data, layout);
};

//################################################################
//             2015
//################################################################


function housePriceTrend2015() {

    var trace1 = {
        x: medianHousePrice2015,
        y: homelessnessPercentage2015,
        mode: 'markers',
        type: 'scatter',
        name: 'Team A',
        text: states,
        marker: { size: 12 }
      };
    
    
      var data = [trace1];

      var layout = {
        title: "Median House Price vs Percentage Homelessness (2015)",
        xaxis: { title: "Median House Price" },
        yaxis: { title: "Percentage Homelessness" }
      };
    
      Plotly.newPlot('myDiv', data, layout);
};





//################################################################
//             2016
//################################################################

function housePriceTrend2016() {

    var trace1 = {
        x: medianHousePrice2016,
        y: homelessnessPercentage2016,
        mode: 'markers',
        type: 'scatter',
        name: 'Team A',
        text: states,
        marker: { size: 12 }
      };
    
    
      var data = [trace1];

      var layout = {
        title: "Median House Price vs Percentage Homelessness (2016)",
        xaxis: { title: "Median House Price" },
        yaxis: { title: "Percentage Homelessness" }
      };
    
      Plotly.newPlot('myDiv', data, layout);
};







//################################################################
//             2017
//################################################################


function housePriceTrend2017() {

    var trace1 = {
        x: medianHousePrice2017,
        y: homelessnessPercentage2017,
        mode: 'markers',
        type: 'scatter',
        name: 'Team A',
        text: states,
        marker: { size: 12 }
      };
    
    
      var data = [trace1];

      var layout = {
        title: "Median House Price vs Percentage Homelessness (2017)",
        xaxis: { title: "Median House Price" },
        yaxis: { title: "Percentage Homelessness" }
      };
    
      Plotly.newPlot('myDiv', data, layout);
};


var data = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"];

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

function createPlot(selectYear)
{
switch (selectYear){
  case "2010":
      housePriceTrend2010();
      break;
  case "2011":
      housePriceTrend2011();
      console.log("you selected 2011")
      break;
  case "2012":
      housePriceTrend2012();
       break;   
  case "2013":
      housePriceTrend2013();
      break;   
      
  case 2014:
      housePriceTrend2014();
      break;   
       
  case "2015":
      housePriceTrend2015();
      break;
  case "2016":
       housePriceTrend2016();
       break; 
  case "2017":
       housePriceTrend2017();
      break;
  default:
      housePriceTrend2010();                 
  };
};

//housePriceTrend2010()