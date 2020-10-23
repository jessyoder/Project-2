# Import libraries
from flask import(Flask, render_template, jsonify)
from flask_pymongo import pymongo
import pandas as pd

# Create connection variable and pass to Pymongo
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# Connect to database; declare "USBeer_db" database in Mongo and the "breweries" collection
db = client.USbeer_db
# breweries = db.breweries_db


# app.config["MONGO_URI"] = "mongodb://localhost:27017/craft_brewery_scrape"
# mongo = PyMongo(app)


#################################################
# Database Setup
#################################################
# engine = create_engine("sqlite:///titanic.sqlite")

# # reflect an existing database into a new model
# Base = automap_base()
# # reflect the tables
# Base.prepare(engine, reflect=True)

# # Save reference to the table
# brewers = Base.classes.brewers


# Flask Setup
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    locations = db.breweries_db.find()
    return render_template("index.html", locations=locations)


@app.route("/api/data")
def data():
    locations1 = db.breweries_db.find()
    results = []
    for loc in locations1:
        if loc["latitude"] != "":
            obj = {
                'name': loc["name"],
                'brewery_type':  loc["brewery_type"],
                'street': loc["street"],
                'city': loc["city"],
                'state': loc["state"],
                'lat': loc["latitude"],
                'long': loc["longitude"]
            }
            results.append(obj)
            # print(obj)

    # return 'Hello'
    return jsonify(results)


@app.route("/api/data1")
def data1():
    production = db.production_db.find()
    craftbarrels = db.craftbarrels_db.find()
    brewnum = db.brewnum_db.find()
    statedata = db.statedata_db.find()

    chart1 = []
    chart2 = []
    chart3 = []
    chart4 = []

    chartdata = [{"Chart1": chart1}, {"Chart2": chart2},
                 {"Chart3": chart3}, {"Chart4": chart4}]

    for item in production:
        obj = {
            "Year": int(item["Year"]),
            "6MM bbls and over": float(item["6,000,001 Barrels and Over"]),
            "2-6MM bbls": float(item["2,000,000 to 6,000,000 Barrels"]),
            "1-2MM bbls": float(item["1,000,001 to 1,999,999 Barrels"]),
            "0.5-1MM bbls": float(item["500,001 to 1,000,000 Barrels"]),
            "100-500M bbls": float(item["100,001 to 500,000 Barrels"]),
            "60-100M bbls": float(item["60,001 to 100,000 Barrels"]),
            "30-60M bbls": float(item["30,001 to 60,000 Barrels"]),
            "15-30M bbls": float(item["15,001 to 30,000 Barrels"]),
            "7.5-15M bbls": float(item["7,501 to 15,000 Barrels"]),
            "1-7.5M bbls": float(item["1,001 to 7,500 Barrels"]),
            "<1M bbls": float(item["1 to 1,000 Barrels"])
        }
        chart1.append(obj)

    for item in craftbarrels:
        obj = {
            "Year": int(item["Year"]),
            "Regional": int(item["Regional"]),
            "Micro Brewery": int(item["Micro Brewery"]),
            "Brewpub": int(item["Brewpub"]),
            "Contract": int(item["Contract"])
        }
        chart2.append(obj)

    for item in brewnum:
        obj = {
            "Year": int(item["Year"]),
            "6MM bbls and over": float(item["6,000,001 Barrels and Over"]),
            "2-6MM bbls": float(item["2,000,000 to 6,000,000 Barrels"]),
            "1-2MM bbls": float(item["1,000,001 to 1,999,999 Barrels"]),
            "0.5-1MM bbls": float(item["500,001 to 1,000,000 Barrels"]),
            "100-500M bbls": float(item["100,001 to 500,000 Barrels"]),
            "60-100M bbls": float(item["60,001 to 100,000 Barrels"]),
            "30-60M bbls": float(item["30,001 to 60,000 Barrels"]),
            "15-30M bbls": float(item["15,001 to 30,000 Barrels"]),
            "7.5-15M bbls": float(item["7,501 to 15,000 Barrels"]),
            "1-7.5M bbls": float(item["1,001 to 7,500 Barrels"]),
            "<1M bbls": float(item["1 to 1,000 Barrels"])
        }
        chart3.append(obj)

    for item in statedata:
        obj = {
            "State": item["States"],
            "# Breweries": item["# Breweries"],
            "Breweries per Capita": item["Breweries Per Capita"],
            "Barrels": item["Barrels"]
        }
        chart4.append(obj)

    return jsonify(chartdata)


@app.route("/state")
def state():
    return render_template("state.html")


@app.route("/nc_breweries")
def find():
    return render_template("nc_breweries.html")


if __name__ == '__main__':
    app.run(debug=True)
