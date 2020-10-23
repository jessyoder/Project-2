// set the dimensions and margins of the graph
var margin = { top: 20, right: 30, bottom: 30, left: 55 },
    width = 1060 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


// Chart 1 - Total US Beer Production by Size of Brewery
// --------------------------------------------------------------------------------
// append the svg object to the body of the page
var svg1 = d3.select("#my_dataviz1")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.json("/api/data1", function (data) {

    console.log("Hello")
    //console.log(data.Chart1)

});
