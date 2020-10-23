var chart = d3.select('#chart2');


d3.csv('/state_data.csv').then(data => {
  var states = data.map(obj => obj.States)
  var barrelsData = data.map(obj => +obj.Barrels)
  //breweryData = breweryData.sort((a, b) => b - a)

  var xValue = states;

  var yValue = barrelsData;

  var trace1 = {
    x: xValue,
    y: yValue,
    type: 'bar',
   // orientation: 'h',
    text: xValue.map(String),
    textposition: 'auto',
    hoverinfo: 'x+y',
    marker: {
      color: 'yellow',
      opacity: 0.6,
      line: {
        color: 'rgb(8,48,107)',
        width: 1.5
      }
    }
  };

  var data = [trace1];

  var layout = {
   // title: 'Craft Barrels by State',
    barmode: 'stack'
  };

  Plotly.newPlot('chart2', data, layout);


  











});



// var chart = {
//     const svg = d3.create("svg")
//         .attr("viewBox", [0, 0, width, height]);

//     const bar = svg.append("g")
//         .attr("fill", "steelblue"),
//       .selectAll("rect"),
//       .data(data),
//       .join("rect"),
//         .style("mix-blend-mode", "multiply"),
//         .attr("x", d => x(d.States)),
//         .attr("y", d => y(d.Breweries)),
//         .attr("height", d => y(0) - y(d.Breweries)),
//         .attr("width", x.bandwidth());

//     const gx = svg.append("g")
//         .call(xAxis);

//     const gy = svg.append("g")
//         .call(yAxis);

//     return Object.assign(svg.node(), {
//       update(order) {
//         x.domain(data.sort(order).map(d => d.States));

//         const t = svg.transition()
//             .duration(750);

//         bar.data(data, d => d.States)
//             .order()
//           .transition(t)
//             .delay((d, i) => i * 20)
//             .attr("x", d => x(d.States));

//         gx.transition(t)
//             .call(xAxis)
//           .selectAll(".tick")
//             .delay((d, i) => i * 20);
//       }
//     });
//   }

//   update = chart.update(order)

//   data = d3.csvParse(await FileAttachment("state_data.csv").text(), ({letter, frequency}) => ({States: letter, Breweries: +frequency}))

//   x = d3.scaleBand()
//     .domain(data.map(d => d.name))
//     .range([margin.left, width - margin.right])
//     .padding(0.1)

//     y = d3.scaleLinear()
//     .domain([0, d3.max(data, d => d.value)]).nice()
//     .range([height - margin.bottom, margin.top])

//     xAxis = g => g
//     .attr("transform", `translate(0,${height - margin.bottom})`)
//     .call(d3.axisBottom(x).tickSizeOuter(0))

//     yAxis = g => g
//     .attr("transform", `translate(${margin.left},0)`)
//     .call(d3.axisLeft(y))
//     .call(g => g.select(".domain").remove())

//     height = 500

//     margin = ({top: 20, right: 0, bottom: 30, left: 40})

//     d3 = require("d3@6")




