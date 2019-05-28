



.on('change',onchange)

var yearData = [
    { year: 2010, x: medianHousePrice2010, y: homelessnessPercentage2010}, 
{ year: 2011, x: medianHousePrice2011, y: homelessnessPercentage2011},
{ year: 2012, x: medianHousePrice2012, y: homelessnessPercentage2012},
{ year: 2013, x: medianHousePrice2013, y: homelessnessPercentage2013},
{ year: 2014, x: medianHousePrice2014, y: homelessnessPercentage2014},
{ year: 2015, x: medianHousePrice2015, y: homelessnessPercentage2015},
{ year: 2016, x: medianHousePrice2016, y: homelessnessPercentage2016},
{ year: 2017, x: medianHousePrice2017, y: homelessnessPercentage2017}
] 


function onChange(){
    var dateText = d3.select('select').property('value');
    function selectDate(item) {
        return item.year == dateText
    }
    var currentyear = yearData.filter(selectDate)

    
    var trace1 = {
        x: currentyear.x,
        y: currentyear.y,
        mode: 'markers',
        type: 'scatter',
        name: 'Team A',
        text: states,
        marker: { size: 12 }
      };
    
    
      var data = [trace1];

      var layout = {
        title: `Median House Price vs Percentage Homelessness {currentyear.year}`,
        xaxis: { title: "Median House Price" },
        yaxis: { title: "Percentage Homelessness" }
      };
    
      Plotly.newPlot('myDiv', data, layout);
}










// //create references to each div of interest 
// var nighttimeResidenceDoubledUp = d3.select()
// var nighttimeResidenceHotelsMotels = d3.select()
// var nighttimeResidenceShelters = d3.select()
// var nighttimeResidenceUnsheltered = d3.select()
// var personsExperiencingChronicHomelessness = d3.select()
// var totalFamilyHouseholdsExperiencingHomelessness = d3.select()
// var totalHomelessPopulation = d3.select()
// var totalNumberOfHomelessStudents = d3.select()
// var totalNumberOfUnaccompaniedHomelessStudents = d3.select()
// var UnaccompaniedYoungAdultsExperiencingHomelessness = d3.select()
// var VeteransExperiencingHomelessness = d3.select()
// var PercentageOfNationalHomelessPopulation = d3.select()





// // select dropdown menu text
// var dropdown = d3.select('#dropdown')


// // grab select drop down menu item text in a variable 

// var stateText = 

// // create a filter function that will filter out the matching state
// function selectedState(item) {
//     return item.State == stateText
// }


// // Load in the csv data 
// d3.csv("../dataframes/2018_homeless_data.csv", function(error, lateststats) {
//     if (error) return console.warn(error);

// // filter the csv data based on state 
//     var filteredstate = lateststats.filter(selectedState)


// // attach corresponding data to appropiate divs 

//   });




// function createMarkers(response) {
//     response
// }


// var dateText = d3.select("#objectID").node().value;

// var yearData = [
//     { year: 2010, x: medianHousePrice2010, y: homelessnessPercentage2010}, 
// { year: 2011, x: medianHousePrice2011, y: homelessnessPercentage2011},
// { year: 2012, x: medianHousePrice2012, y: homelessnessPercentage2012},
// { year: 2013, x: medianHousePrice2013, y: homelessnessPercentage2013},
// { year: 2014, x: medianHousePrice2014, y: homelessnessPercentage2014},
// { year: 2015, x: medianHousePrice2015, y: homelessnessPercentage2015},
// { year: 2016, x: medianHousePrice2016, y: homelessnessPercentage2016},
// { year: 2017, x: medianHousePrice2017, y: homelessnessPercentage2017}
// ] 

// function selectDate() {
//     return item.year == dateText
// }

