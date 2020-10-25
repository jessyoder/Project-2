// var chart = d3.select('#chart1');
// Plot Number of Craft Breweries in each State

d3.json("/api/data1", function (data) {

  // Select object from JSON file
  chartdata = data[3].Chart4

  // Confirm dataset and review order
  console.log(chartdata)

  // Select States
  var states = chartdata.map(obj => obj["State"])
  console.log(states)

  // Select Number of Breweries
  var breweryData = chartdata.map(obj => +obj["# Breweries"])
  // breweryData = breweryData.sort((a, b) => b - a)
  console.log(breweryData)

  var xValue = states;

  var yValue = breweryData;

  var trace1 = {
    x: xValue,
    y: yValue,
    type: 'bar',
    // text: yValue.map(String),
    // textposition: 'auto',
    // hoverinfo: 'x+y',
    marker: {
      color: 'yellow',
      opacity: 0.6,
      line: {
        color: 'rgb(8,48,107)',
        width: 1.25
      }
    }
  };

  var data = [trace1];
  console.log(data)

  var layout = {
    title: 'Craft Breweries by State',
    autosize: false,
    width: 1200,
    height: 500,
    yaxis: { title: "# Craft Breweries" }
    // barmode: 'stack'
  };

  Plotly.newPlot("statechart1", data, layout);

});

// ------------------------------------------
// Plot Number of Craft Barrels in each State

d3.json("/api/data1", function (data) {

  // Select object from JSON file
  chartdata = data[3].Chart4

  // Confirm dataset and review order
  // console.log(chartdata)

  // Select States
  var states = chartdata.map(obj => obj["State"])
  console.log(states)

  // Select Number of Breweries
  var breweryData = chartdata.map(obj => +obj["Barrels"])
  // breweryData = breweryData.sort((a, b) => b - a)
  console.log(breweryData)

  var xValue = states;

  var yValue = breweryData;

  var trace1 = {
    x: xValue,
    y: yValue,
    type: 'bar',
    // text: yValue.map(String),
    // textposition: 'auto',
    // hoverinfo: 'x+y',
    marker: {
      color: 'yellow',
      opacity: 0.6,
      line: {
        color: 'rgb(8,48,107)',
        width: 1.25
      }
    }
  };

  var data = [trace1];
  console.log(data)

  var layout = {
    title: "Craft Barrels by State",
    autosize: false,
    width: 1200,
    height: 500,
    yaxis: { title: "Barrles Produced" }
    // barmode: 'stack'
  };

  Plotly.newPlot("statechart2", data, layout);

});

// ------------------------------------------
// Plot Craft Breweries Per Capita in each State

d3.json("/api/data1", function (data) {

  // Select object from JSON file
  // chartdata = data[3].Chart4

  // Confirm dataset and review order
  console.log(chartdata)

  // Select States
  var states = chartdata.map(obj => obj["State"])
  console.log(states)

  // Select Number of Breweries
  var breweryData = chartdata.map(obj => +obj["Breweries per Capita"])
  // breweryData = breweryData.sort((a, b) => b - a)

  var xValue = states;

  var yValue = breweryData;

  var trace1 = {
    x: xValue,
    y: yValue,
    type: 'bar',
    // text: yValue.map(String),
    // textposition: 'auto',
    // hoverinfo: 'x+y',
    marker: {
      color: 'yellow',
      opacity: 0.6,
      line: {
        color: 'rgb(8,48,107)',
        width: 1.25
      }
    }
  };

  var data = [trace1];
  console.log(data)

  var layout = {
    title: "Per Capita Craft Breweries by State",
    autosize: false,
    width: 1200,
    height: 500,
    yaxis: { title: "Per Capita Number of Breweries" }
    // barmode: 'stack'
  };

  Plotly.newPlot("statechart3", data, layout);

});
