


//create references to each div of interest 
var nighttimeResidenceDoubledUp = d3.select()
var nighttimeResidenceHotelsMotels = d3.select()
var nighttimeResidenceShelters = d3.select()
var nighttimeResidenceUnsheltered = d3.select()
var personsExperiencingChronicHomelessness = d3.select()
var totalFamilyHouseholdsExperiencingHomelessness = d3.select()
var totalHomelessPopulation = d3.select()
var totalNumberOfHomelessStudents = d3.select()
var totalNumberOfUnaccompaniedHomelessStudents = d3.select()
var UnaccompaniedYoungAdultsExperiencingHomelessness = d3.select()
var VeteransExperiencingHomelessness = d3.select()
var PercentageOfNationalHomelessPopulation = d3.select()





// select dropdown menu text
var dropdown = d3.select('#dropdown')


// grab select drop down menu item text in a variable 

var stateText = 

// create a filter function that will filter out the matching state
function selectedState(item) {
    return item.State == stateText
}


// Load in the csv data 
d3.csv("../dataframes/2018_homeless_data.csv", function(error, lateststats) {
    if (error) return console.warn(error);

// filter the csv data based on state 
    var filteredstate = lateststats.filter(selectedState)


// attach corresponding data to appropiate divs 

  });
