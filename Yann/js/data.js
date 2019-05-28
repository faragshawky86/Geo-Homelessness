
  var states = []
  var homelessnessPercentage2010 = []
  var homelessnessPercentage2011 = []
  var homelessnessPercentage2012 = []
  var homelessnessPercentage2013 = []
  var homelessnessPercentage2014 = []
  var homelessnessPercentage2015 = []
  var homelessnessPercentage2016 = []
  var homelessnessPercentage2017 = []

//################################################################################################################

  var medianHousePrice2010 = []
  var medianHousePrice2011 = []
  var medianHousePrice2012 = []
  var medianHousePrice2013 = []
  var medianHousePrice2014 = []
  var medianHousePrice2015 = []
  var medianHousePrice2016 = []
  var medianHousePrice2017 = []



// Load data from Homeless_Percentage_by_Year.csv
d3.csv("../dataframes/Price_to_Homelessness.csv", function(error, percentageData) {
    if (error) return console.warn(error);

    percentageData.forEach(row => {
      states.push(row.State)
      homelessnessPercentage2010.push(row.homelessnessPercentage2010)
      homelessnessPercentage2011.push(row.homelessnessPercentage2011)
      homelessnessPercentage2012.push(row.homelessnessPercentage2012)
      homelessnessPercentage2013.push(row.homelessnessPercentage2013)
      homelessnessPercentage2014.push(row.homelessnessPercentage2014)
      homelessnessPercentage2015.push(row.homelessnessPercentage2015)
      homelessnessPercentage2016.push(row.homelessnessPercentage2016)
      homelessnessPercentage2017.push(row.homelessnessPercentage2017)


      medianHousePrice2010.push(row.medianHousePrice2010)
      medianHousePrice2011.push(row.medianHousePrice2011)
      medianHousePrice2012.push(row.medianHousePrice2012)
      medianHousePrice2013.push(row.medianHousePrice2013)
      medianHousePrice2014.push(row.medianHousePrice2014)
      medianHousePrice2015.push(row.medianHousePrice2015)
      medianHousePrice2016.push(row.medianHousePrice2016) 
      medianHousePrice2017.push(row.medianHousePrice2017) 
    });
  });
  

//   console.log(states)
//   console.log(homelessnessPercentage2010)
//   console.log(homelessnessPercentage2011)
//   console.log(homelessnessPercentage2012)
//   console.log(homelessnessPercentage2013)
//   console.log(homelessnessPercentage2014)
//   console.log(homelessnessPercentage2015)
//   console.log(homelessnessPercentage2016)
//   console.log(homelessnessPercentage2017)

// // #################################################################################################################################################################################################################################

//   console.log(medianHousePrice2010)
//   console.log(medianHousePrice2011)
//   console.log(medianHousePrice2012)
//   console.log(medianHousePrice2013)
//   console.log(medianHousePrice2014)
//   console.log(medianHousePrice2015)
//   console.log(medianHousePrice2016)
//   console.log(medianHousePrice2017)

// #################################################################################################################################################################################################################################

var states2 = []
var homelessnessPercentages2010 = []
var homelessnessPercentages2011 = []
var homelessnessPercentages2012 = []
var homelessnessPercentages2013 = []
var homelessnessPercentages2014 = []
var homelessnessPercentages2015 = []
var homelessnessPercentages2016 = []
var homelessnessPercentages2017 = []

var unemployementRate2010 = []
var unemployementRate2011 = []
var unemployementRate2012 = []
var unemployementRate2013 = []
var unemployementRate2014 = []
var unemployementRate2015 = []
var unemployementRate2016 = []
var unemployementRate2017 = []

d3.csv("../dataframes/Unemployment_vs_Homelessness.csv", function(error, unemployData) {
  if (error) return console.warn(error);

  unemployData.forEach(row => {
    states2.push(row.State)  
    homelessnessPercentages2010.push(row.homelessnessPercentage2010)
    homelessnessPercentages2011.push(row.homelessnessPercentage2011)
    homelessnessPercentages2012.push(row.homelessnessPercentage2012)
    homelessnessPercentages2013.push(row.homelessnessPercentage2013)
    homelessnessPercentages2014.push(row.homelessnessPercentage2014)
    homelessnessPercentages2015.push(row.homelessnessPercentage2015)
    homelessnessPercentages2016.push(row.homelessnessPercentage2016)
    homelessnessPercentages2017.push(row.homelessnessPercentage2017)


    unemployementRate2010.push(row.unemployementRate2010)
    unemployementRate2011.push(row.unemployementRate2011)
    unemployementRate2012.push(row.unemployementRate2012)
    unemployementRate2013.push(row.unemployementRate2013)
    unemployementRate2014.push(row.unemployementRate2014)
    unemployementRate2015.push(row.unemployementRate2015)
    unemployementRate2016.push(row.unemployementRate2016) 
    unemployementRate2017.push(row.unemployementRate2017) 
  });
});



console.log(unemployementRate2017)
console.log(homelessnessPercentages2017)