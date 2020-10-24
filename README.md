# Project-2
## Overall Notes
* The team created and successfully deployed a fully functioning website using live server and met all of the Project Deliverables.  Once the deployment was converted from live server to Flask, we had difficulty pushing the data through Flask in a JSON format to get all of the charts and the interactive map functioning 
* The "Mapping Folder" is the primary folder containg our Python file ("app1.py") and the associated html and javascript files 
* Two Jupyter Notebook programs were also used to scrape and load data.  "craft_breweries_scrape" scraped some of our data and in teh case of our national brewbpub database, loaded into Mongo.  "mongo_load" loaded some of other csv files into Mongo.  Those are located in the main folder

## Project Objective
* Our team reviewed trends in US beer production over the last 10 years and rise of microbreweries or craft breweries.

## Basic Project Deliverables
* Analysis of US beer production trends for the last 10-years, looking at overall production, the number of breweries, and production by brewery size
* Analysis of microbreweries by state, including top 10 states.
* Interactive mapping function displaying markers at the location of the states' microbreweries - names, locations and types; initially, we limited our map to North Carolina ("logic_nc.js") but later expanded functionality to the entire United States (logic_bonus.js).

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
    * Downloaded 10-year national production data by year as separate CSV files
    * Scraped state level data using Python and Beautiful Soup
    * Cleaned and joined data into state level files
* Database:
    * Deployed data files to Mongo using PyMongo to upload from Jupyter Notebook ("craft_breweries_scrape" and "mongo_load").  
    * Also used Mongo shell to simply import a CSV file into the database
    * Pushed all key collections onto server using Flask
* Website:
    * Deploy information to website using Python / Flask API
    * Data graphing and deployment using Javascript
    * Interactive mapping using JavaScript / D3 and Mapbox for geo-mapping information

## Web Site Layout:
* Introduction – US Beer Consumption or Production Trends
    * Graphs of the following (Unable to deploy graphs, but data was pushed to support graphs)
        * Total US Beer Production, last 10-years
            * Compilation of annual data from US Dept of Treasury
            * https://www.ttb.gov/beer/statistics
        * Historical Craft Brewery Production Category
            * Data from Brewers Association
            * https://www.brewersassociation.org/statistics-and-data/national-beer-stats	
        * Number of Craft Breweries by Production Category
* Current State Level Detail of Current Production (Unable to deploy graphs, but data pas pushed to support)
    * Number of breweries by state bar chart
    * Breweries per Capita by state bar chart
    * Total Barrels produced by state bar chart
    * All data scraped form Brewers Association
* State Level Directory
    * Mapbox plot of breweries in NC
    * Clickable popups of breweries in NC with selected information - Name, city, state and type of brewery - data from Openbrewerydb site on github
    * Initial focus on North Carolina, but eventually expanded to national directory

