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
d3.csv("../production_merged1.csv", function (data) {


    // List of groups = header of the csv files
    var keys = data.columns.slice(1)

    // Add X axis
    var x = d3.scaleLinear()
        .domain(d3.extent(data, function (d) { return d.Year; }))
        .range([0, width]);
    svg1.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(5));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 200000000])

        .range([height, 0]);
    svg1.append("g")
        .call(d3.axisLeft(y));

    // color palette
    var color = d3.scaleOrdinal()
        .domain(keys)
        .range(['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf'])

    //stack the data?
    var stackedData = d3.stack()
        .keys(keys)
        (data)
    //console.log("This is the stack result: ", stackedData)

    // Show the areas
    svg1
        .selectAll("mylayers")
        .data(stackedData)
        .enter()
        .append("path")
        .style("fill", function (d) { console.log(d.key); return color(d.key); })
        .attr("d", d3.area()
            .x(function (d, i) { return x(d.data.Year); })
            .y0(function (d) { return y(d[0]); })
            .y1(function (d) { return y(d[1]); })
        )

})

// Chart 2 - Craft Barrels Produced by Year 
// --------------------------------------------------------------------------------
// append the svg object to the body of the page
var svg2 = d3.select("#my_dataviz2")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("../craft_barrels.csv", function (data) {


    // List of groups = header of the csv files
    var keys = data.columns.slice(1)

    // Add X axis
    var x = d3.scaleLinear()
        .domain(d3.extent(data, function (d) { return d.Year; }))
        .range([0, width]);
    svg2.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(5));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 30000000])

        .range([height, 0]);
    svg2.append("g")
        .call(d3.axisLeft(y));

    // color palette
    var color = d3.scaleOrdinal()
        .domain(keys)
        .range(['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf'])

    //stack the data?
    var stackedData = d3.stack()
        .keys(keys)
        (data)
    //console.log("This is the stack result: ", stackedData)

    // Show the areas
    svg2
        .selectAll("mylayers")
        .data(stackedData)
        .enter()
        .append("path")
        .style("fill", function (d) { console.log(d.key); return color(d.key); })
        .attr("d", d3.area()
            .x(function (d, i) { return x(d.data.Year); })
            .y0(function (d) { return y(d[0]); })
            .y1(function (d) { return y(d[1]); })
        )

})

// Chart 3 - Total Number of Craft Breweries
// --------------------------------------------------------------------------------
// append the svg object to the body of the page
var svg3 = d3.select("#my_dataviz3")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("../craft_numbers.csv", function (data) {


    // List of groups = header of the csv files
    var keys = data.columns.slice(1)

    // Add X axis
    var x = d3.scaleLinear()
        .domain(d3.extent(data, function (d) { return d.Year; }))
        .range([0, width]);
    svg3.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(5));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 10000])

        .range([height, 0]);
    svg3.append("g")
        .call(d3.axisLeft(y));

    // color palette
    var color = d3.scaleOrdinal()
        .domain(keys)
        .range(['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf'])

    //stack the data?
    var stackedData = d3.stack()
        .keys(keys)
        (data)
    //console.log("This is the stack result: ", stackedData)

    // Show the areas
    svg3
        .selectAll("mylayers")
        .data(stackedData)
        .enter()
        .append("path")
        .style("fill", function (d) { console.log(d.key); return color(d.key); })
        .attr("d", d3.area()
            .x(function (d, i) { return x(d.data.Year); })
            .y0(function (d) { return y(d[0]); })
            .y1(function (d) { return y(d[1]); })
        )

})