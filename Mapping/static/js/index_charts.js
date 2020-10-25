
// Chart 2 - Total National and Craft  Beer Production 
// --------------------------------------------------------------------------------


d3.json("/api/data1", function (data) {

    // Select object from JSON file
    chartdata = data[0].Chart1

    // Confirm dataset and review order
    // console.log(chartdata)

    // // Select Year
    var year = chartdata.map(obj => obj["Year"])
    console.log(year)

    // // Select Production Data
    var largeBrew = chartdata.map(obj => +obj["6MM bbls and over"])
    console.log(largeBrew)
    var craftBrew = chartdata.map(obj => +obj["Total Craft"])

    var trace1 = {
        x: year,
        y: largeBrew,
        name: "Large National Breweries",
        type: 'bar',
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

    var trace2 = {
        x: year,
        y: craftBrew,
        name: "Craft Breweries",
        type: 'bar',
        // textposition: 'auto',
        // hoverinfo: 'x+y',
        marker: {
            color: 'light green',
            opacity: 0.6,
            line: {
                color: 'rgb(8,48,107)',
                width: 1.25
            }
        }
    };

    var data = [trace1, trace2];

    var layout = {
        title: 'Total US Beer Production',
        legend: {
            x: 1,
            xanchor: 'right',
            y: 1.1
        },
        autosize: false,
        width: 1200,
        height: 500,
        // yaxis: { title: "" }
        barmode: 'stack'
    };

    Plotly.newPlot("my_dataviz1", data, layout);

});

// Chart 2 -  Craft Barrel Production by Type 
// --------------------------------------------------------------------------------


d3.json("/api/data1", function (data) {

    // Select object from JSON file
    chartdata = data[1].Chart2

    // Confirm dataset and review order
    console.log(chartdata)

    // // Select Year
    var year = chartdata.map(obj => obj["Year"])
    console.log(year)

    // // Select Production Data
    var regional = chartdata.map(obj => +obj["Regional"])
    var micro = chartdata.map(obj => +obj["Micro Brewery"])
    var contract = chartdata.map(obj => +obj["Contract"])
    var brewpub = chartdata.map(obj => +obj["Brewpub"])

    console.log(regional)

    var trace1 = {
        x: year,
        y: regional,
        name: "Regional Brewery",
        type: 'bar',
        // textposition: 'auto',
        // hoverinfo: 'x+y',
        marker: {
            color: 'yellow',
            opacity: 0.6
            // line: {
            //     color: 'rgb(8,48,107)',
            //     width: 1.25
            // }
        }
    };

    var trace2 = {
        x: year,
        y: micro,
        name: "Micro Brewery",
        type: 'bar',
        // textposition: 'auto',
        // hoverinfo: 'x+y',
        marker: {
            color: 'light green',
            opacity: 0.6
            // line: {
            //     color: 'rgb(8,48,107)',
            //     width: 1.25
            // }
        }
    };

    var trace3 = {
        x: year,
        y: contract,
        name: "Contract Brewery",
        type: 'bar',
        // textposition: 'auto',
        // hoverinfo: 'x+y',
        marker: {
            color: 'green',
            opacity: 0.6
            // line: {
            //     color: 'rgb(8,48,107)',
            //     width: 1.25
            // }
        }
    };

    var trace4 = {
        x: year,
        y: brewpub,
        name: "Brewpub",
        type: 'bar',
        // textposition: 'auto',
        // hoverinfo: 'x+y',
        marker: {
            color: 'blue',
            opacity: 0.6
            // line: {
            //     color: 'rgb(8,48,107)',
            //     width: 1.25
            // }
        }
    };

    var data = [trace1, trace2, trace3, trace4];

    var layout = {
        title: 'Craft Beer Production by Brewery Type',
        legend: {
            x: 0.25,
            xanchor: 'right',
            y: 1.1
        },
        autosize: false,
        width: 1200,
        height: 500,
        // yaxis: { title: "" }
        barmode: 'stack'
    };

    Plotly.newPlot("my_dataviz2", data, layout);

});

// Chart  - Total US Beer Production (Note:  Curerently not being used)
// --------------------------------------------------------------------------------

// d3.json("/api/data1", function (data) {

//     // Select object from JSON file
//     chartdata = data[0].Chart1

//     // Confirm dataset and review order
//     console.log(chartdata)

//     // // Select Year
//     var year = chartdata.map(obj => obj["Year"])
//     console.log(year)

//     // // Select Total Production
//     var totalProd = chartdata.map(obj => +obj["Total"])
//     console.log(totalProd)

//     var xValue = year;

//     var yValue = totalProd;

//     var trace1 = {
//         x: xValue,
//         y: yValue,
//         type: 'bar',
//         // text: yValue.map(String),
//         // textposition: 'auto',
//         // hoverinfo: 'x+y',
//         marker: {
//             color: 'yellow',
//             opacity: 0.6,
//             line: {
//                 color: 'rgb(8,48,107)',
//                 width: 1.25
//             }
//         }
//     };


//     var data = [trace1];
//     console.log(data)

//     var layout = {
//         title: 'Total US Beer Production',
//         autosize: false,
//         width: 1200,
//         height: 500,
//         // yaxis: { title: "" }
//         // barmode: 'stack'
//     };

//     Plotly.newPlot("my_dataviz1", data, layout);

// });
