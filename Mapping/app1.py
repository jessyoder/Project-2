# Import libraries
from flask import Flask, render_template, jsonify
from flask_pymongo import pymongo

# Create connection variable and pass to Pymongo
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# Connect to database; declare "USBeer_db" database in Mongo and the "breweries" collection
db = client.USbeer_db
breweries = db.breweries_db

# app.config["MONGO_URI"] = "mongodb://localhost:27017/craft_brewery_scrape"
# mongo = PyMongo(app)


#################################################
# Database Setup
#################################################
#engine = create_engine("sqlite:///titanic.sqlite")

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
            print(obj)

    # return 'Hello'
    return jsonify(results)


@app.route("/state")
def state():
    return render_template("state.html")


@app.route("/nc_breweries")
def find():
    return render_template("nc_breweries.html")


if __name__ == '__main__':
    app.run(debug=True)
