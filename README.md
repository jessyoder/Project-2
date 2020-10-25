# Project-2
## Project Conclusions
* As a result of this project, our team learned that while US beer production has declined overall during the last 10-years, consumers have not entirely lost their taste for beer.  Craft breweries, which are defined as breweries producing less than 6MM bbls per year, have exploded in popularity, more than doubling production in the last 10 years and increasing their market share from roughly 17.6% of the US beer market to 30% of the market.  So, while consumer tastes have shifted away from beer overall to other spirits, the decline has been entirely among large, national brands.  Craft breweries have experienced significant increases in production over the last 5, 10, and 15 years.  
* We started the project as a way to learn more about local craft breweries in the users local area and have created an interactive national map displaying information on craft breweries.  However, this project could easily be expanded to serve as a business development tool for entrepeneurs looking to start or back a craft brewery

## Overall Notes - Location of Key Programs and Data Sources
* The "Mapping Folder" is the primary folder containg our Python file ("app1.py") and the associated html and javascript files stored in the "templates" and "static" folder
* Two Jupyter Notebook programs were also used to scrape and load data.  "craft_breweries_scrape" scraped some of our data and in the case of our national brewbpub database ("breweries_db"), loaded into Mongo.  "mongo_load" loaded all of the other required CSV files into Mongo.  Those are located in the main folder  
* Raw and re-formatted data sources, all of which are CSV files, are saved in the main folder

## Project Objective
* Review trends in US beer production over the last 10 years and the rise of microbreweries or craft breweries.  Have craft beers really increased in popularity, or have changes in US consumption away from beer affected the craft beer industry as well.

## Basic Project Deliverables
* Analysis of US beer production trends for the last 10-years, looking at overall production, the number of breweries, and production by brewery size
* Analysis of microbreweries by state
* Interactive mapping function displaying markers at the location of the states' microbreweries - names, locations and types; initially, we limited our map to North Carolina ("logic_nc.js") but later expanded functionality to the entire United States (logic_bonus.js)

## Primary Datasets and Datasources:
* US Dept of the Treasury -- Alcohol and Tobacco Tax and Trade Bureau
    * https://www.ttb.gov/beer/statistics
    * For years 2008-2019, Annual production data and number of breweries by brewery size
* Brewers Association    
    * https://www.brewersassociation.org/statistics-and-data/state-craft-beer-stats
    * For 2019, information on number of craft breweries, breweries per capita, and craft barrels produced
* Github:  Openbrewrydb/data/us for brewery information by state
    * https://github.com/openbrewerydb/openbrewerydb/tree/master/data/us

## Project Architectures		
* Data gathering and storage:
    * Downloaded 10-year national production data by year as separate CSV files from Dept of Treasury; merged files into single national production file
    * Scraped state level data using Python and Beautiful Soup from the Brewers Association website; cleaned and saved as CSV files
    * Downloaded the Openbrewerydb national database; saved as CSV file 
* Database:
    * Used Mongo as primary database (Usbeer_db); created five separate collections
    * Data uploaded to Mongo using PyMongo module and Jupyter Notebook ("craft_breweries_scrape" and "mongo_load"); the team discovered that while importing data directly into Mongo through the Mongo CompassDB application was easy, it was not an efficient way to jointly push data to a common database shared by the entire team when files were shared through GitHub; as a result, we standardized all file uploads within Jupyter Notebook
* Website:
    * Deploy information to website using Python / Flask API; data pulled from Mongo and converted to JSON file appropriate for graphing and mapping sites; data location for graph JSON data is "api/data1" and location for map JSON data is "api/data"
    * Data graphing and deployment using Javascript / D3 / Plotly
    * Interactive mapping using JavaScript / D3 / Mapbox for geo-mapping information

## Web Site Layout:
* Introduction – US Beer Consumption or Production Trends
    * Total US Beer Production, last 10-years; craft beer production last 15 years
* Current State Level Detail of Current Production
    * Number of breweries by state bar chart
    * Breweries per Capita by state bar chart
    * Total Barrels produced by state bar chart
* State Level Directory
    * Mapbox plot of breweries in NC
    * Clickable popups of breweries in NC with selected information - Name, city, state and type of brewery - data from Openbrewerydb site on github
    * Initial focus on North Carolina, but eventually expanded to national directory

