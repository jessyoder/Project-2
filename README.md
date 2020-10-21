# Project-2

## Project Objective
* Our team will review trends in US beer production over the last 10 years and rise of microbreweries or craft breweries

## Basic Project Deliverables
* Analysis of US beer production trends for the last 10-years, looking at overall production, the number of breweries, and production by brewery size
* Analysis of microbreweries by state
* Interactive mapping function displaying location states' microbreweries; initially, we limited our map to North Carolina but plan to expand functionality to the continental states.

## Primary Datasets and Datasources:
* US Dept of the Treasury -- Alcohol and Tobacco Tax and Trade Bureau
    * https://www.ttb.gov/beer/statistics
    * For years 2008-2019, Annual production data and number of breweries  by brewery size
    
* Brewers Association    
    * https://www.brewersassociation.org/statistics-and-data/state-craft-beer-stats
    * For 2019, information on number of craft breweries, breweries per capita, and craft barrels produced

* Github:  Openbrewrydb/data/us for brewery information by state
    * https://github.com/openbrewerydb/openbrewerydb/tree/master/data/us

## Project Architectures		
* Data gathering and storage:
    * Downloaded national production data by year as separate CSV files
    * Scraped state level data using Python and Beautiful Soup
    * Cleaned and joined data into state level database
* Database:
    * Developed data tables for national level data using SQL.
        * Cleaned and joined key fields into single national database
    * Developed data tables for state level data using Mongo.
    * Utilized flask to read in data for Plotly and Leaflet.
* Website:
    * Deploy information to website using Python / Flask API
    * Data graphing and deployment using Javascript
    * Interactive mapping using JavaScript / D3 and Mapbox for geo-mapping information

## Web Site Layout:
* Introduction – US Beer Consumption or Production Trends
    * Graphs of the following:
        * Total US Beer Production, last 10-years
            * Compilation of annual data from US Dept of Treasury
            * https://www.ttb.gov/beer/statistics
        * Historical Craft Brewery Production Category
            * Data from Brewers Association
            * https://www.brewersassociation.org/statistics-and-data/national-beer-stats	
        * Number of Craft Breweries by Production Category
* Current State Level Detail of Current Production
    * Number of breweries by state bar chart
    * Breweries per Capita by state bar chart
    * Total Barrels produced by state bar chart
    * All data scraped form Brewers Association
* State Level Directory
    * Mapbox plot of breweries in NC
    * List of breweries in NC with selected information - Name, city and type of brewery - data from Openbrewerydb site on github
    * Initial focus on North Carolina, but time permitting expanded to national directory

