
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
d3.json("http://127.0.0.1:5000/api/v1.0/house_price_homelessness", function(error, percentageData) {
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
  

  console.log(states)
  console.log(homelessnessPercentage2010)
  console.log(homelessnessPercentage2011)
  console.log(homelessnessPercentage2012)
  console.log(homelessnessPercentage2013)
  console.log(homelessnessPercentage2014)
  console.log(homelessnessPercentage2015)
  console.log(homelessnessPercentage2016)
  console.log(homelessnessPercentage2017)

// #################################################################################################################################################################################################################################

  console.log(medianHousePrice2010)
  console.log(medianHousePrice2011)
  console.log(medianHousePrice2012)
  console.log(medianHousePrice2013)
  console.log(medianHousePrice2014)
  console.log(medianHousePrice2015)
  console.log(medianHousePrice2016)
  console.log(medianHousePrice2017)

// #################################################################################################################################################################################################################################