


//create references to each div of interest 
var nighttimeResidenceDoubledUp = d3.select("#nighttimeResidenceDoubledUp").append('h6')
var nighttimeResidenceHotelsMotels = d3.select("#nighttimeResidenceHotelsMotels").append('h6')
var nighttimeResidenceShelters = d3.select("#nighttimeResidenceShelters").append('h6')
var nighttimeResidenceUnsheltered = d3.select("#nighttimeResidenceUnsheltered").append('h6')
var personsExperiencingChronicHomelessness = d3.select("#personsExperiencingChronicHomelessness").append('h6')
var totalFamilyHouseholdsExperiencingHomelessness = d3.select("#totalFamilyHouseholdsExperiencingHomelessness").append('h6')
var totalHomelessPopulation = d3.select("#totalHomelessPopulation").append('h6')
var totalNumberOfHomelessStudents = d3.select("#totalNumberOfHomelessStudents").append('h6')
var totalNumberOfUnaccompaniedHomelessStudents = d3.select("#totalNumberOfUnaccompaniedHomelessStudents").append('h6')
var UnaccompaniedYoungAdultsExperiencingHomelessness = d3.select("#UnaccompaniedYoungAdultsExperiencingHomelessness").append('h6')
var VeteransExperiencingHomelessness = d3.select("#VeteransExperiencingHomelessness").append('h6')
var PercentageOfNationalHomelessPopulation = d3.select("#PercentageOfNationalHomelessPopulation").append('h6')

// select dropdown menu text
var dropdown = d3.select('#States')
.on('change', onchange)


function onchange() {
    // filter the csv data based on state 

    d3.csv("../Yann/dataframes/2018_homeless_data.csv", function(error, lateststats) {
    if (error) return console.warn(error);

    var selectValue = dropdown.property('value')
        
    function selectedState(item) {
        return item.state == selectValue
    };

    filteredstate = lateststats.filter(selectedState);

    nighttimeResidenceDoubledUp.text(filteredstate[0].nighttimeResidenceDoubledUp);
    
    nighttimeResidenceHotelsMotels.text(filteredstate[0].nighttimeResidenceHotelsMotels)

    nighttimeResidenceShelters.text(filteredstate[0].nighttimeResidenceShelters)

    nighttimeResidenceUnsheltered.text(filteredstate[0].nighttimeResidenceUnsheltered)

    personsExperiencingChronicHomelessness.text(filteredstate[0].personsExperiencingChronicHomelessness)

    totalFamilyHouseholdsExperiencingHomelessness.text(filteredstate[0].totalFamilyHouseholdsExperiencingHomelessness) 

    totalHomelessPopulation.text(filteredstate[0].totalHomelessPopulation)

    totalNumberOfHomelessStudents.text(filteredstate[0].totalNumberOfHomelessStudents)

    totalNumberOfUnaccompaniedHomelessStudents.text(filteredstate[0].totalNumberOfUnaccompaniedHomelessStudents)

    UnaccompaniedYoungAdultsExperiencingHomelessness.text(filteredstate[0].UnaccompaniedYoungAdultsExperiencingHomelessness)

    VeteransExperiencingHomelessness.text(filteredstate[0].VeteransExperiencingHomelessness)
    
    PercentageOfNationalHomelessPopulation.text(filteredstate[0].PercentageOfNationalHomelessPopulation)

    console.log(dropdown.property('value'))
    });
};


