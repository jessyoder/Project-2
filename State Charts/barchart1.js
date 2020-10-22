var chart = d3.select('#chart1');


d3.csv('/state_data.csv').then(data => {
  var states = data.map(obj => obj.States)
  var breweryData = data.map(obj => +obj.Breweries)
  //breweryData = breweryData.sort((a, b) => b - a)

  var xValue = states;

  var yValue = breweryData;

  var trace1 = {
    x: xValue,
    y: yValue,
    type: 'bar',
    text: yValue.map(String),
    textposition: 'auto',
    hoverinfo: 'x+y',
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

  var layout = {
   // title: 'Craft Breweries by State',
    barmode: 'stack'
  };

  Plotly.newPlot('chart1', data, layout);

});




