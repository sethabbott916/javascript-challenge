
var sightings = data;


// Variable for the table body
var tbody = d3.select("tbody");


data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the button and form
var button = d3.select("#filter-btn");
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  

  // Select the input element and get the raw HTML node
  var dateElement = d3.select("#datetime");
  var cityElement = d3.select("#city");
  var stateElement = d3.select("#state");
  var countryElement = d3.select("#country");
  var shapeElement = d3.select("#shape");
  var durElement = d3.select("#duration");



  // Get the value property of the input element
  var dateValue = dateElement.property("value");
  var cityValue = cityElement.property("value");
  var stateValue = stateElement.property("value");
  var countryValue = countryElement.property("value");
  var shapeValue = shapeElement.property("value");
  var durValue = durElement.property("value");
  var filteredData = data;



  if (dateValue !== "") {
    var filteredData = filteredData.filter(sighting => sighting.datetime === dateValue)
  };
  
  if (cityValue !== "") {
    filteredData = filteredData.filter(sighting => sighting.city === cityValue)
  };

  if (stateValue !== "") {
    filteredData = filteredData.filter(sighting => sighting.state === stateValue)
  };

  if (countryValue !== "") {
    filteredData = filteredData.filter(sighting => sighting.country === countryValue)
  };

  if (shapeValue !== "") {
    filteredData = filteredData.filter(sighting => sighting.shape === shapeValue)
  };

  if (durValue !== "") {
    filteredData = filteredData.filter(sighting => sighting.durationMinutes === durValue)
  };

  console.log(dateValue);
  console.log(cityValue);
  console.log(stateValue);
  console.log(countryValue);
  console.log(shapeValue);
  console.log(durValue);
  console.log(filteredData);

  tbody.html("");



  
  filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

  



