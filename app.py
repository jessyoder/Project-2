import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, render_template

from flask_pymongo import PyMongo

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/craft_brewery_scrape"
mongo = PyMongo(app)


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

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    Breweries = mongo.db.breweries_db.find()
    return render_template("index.html", Breweries=Breweries)


@app.route("/state")
def state():
    return render_template("state.html")


@app.route("/find")
def find():
    return render_template("find.html")


if __name__ == '__main__':
    app.run(debug=True)
