import numpy as np
from flask import Flask, jsonify, request
import numpy as np
import pandas as pd
import json
#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"<a href=\"/api/v1.0/dataset1\">Dataset 1</a><br/>"
        f"<a href=\"/api/v1.0/annualhomlessness\">Annual Homlessness</a><br/>"
        f"<a href=\"/api/v1.0/annual_unemployment_average\">Annual Unemployment Average</a><br/>"
        f"<a href=\"/api/v1.0/house_price_homelessness\">Median house price vs homelessness</a><br/>"
        f"<a href=\"/api/v1.0/cities_homelessness_data\">Major Cities Homelessness</a><br/>"    
    )
@app.route("/api/v1.0/dataset1")
def dataset1():
   #Todo: load the first sample data set and return it in json format
   shelterLocations = pd.read_csv("Resources/shelters-dummy-date.csv")
   return  shelterLocations.to_json(orient='records', lines=False)   

@app.route("/api/v1.0/annualhomlessness")
def dataset2():
    annualhomlessness = pd.read_csv("Resources/annual_homelessness.csv")
    return  annualhomlessness.to_json(orient='records', lines=False)

@app.route("/api/v1.0/annual_unemployment_average")
def dataset3():
    annual_unemployment_average = pd.read_csv("Resources/Annual_Average_Unemployment_Rates_By_State.csv")
    return  annual_unemployment_average.to_json(orient='records', lines=False)

@app.route("/api/v1.0/house_price_homelessness")
def dataset4():
    house_price_homelessness = pd.read_csv("Resources/Price_to_Homelessness.csv")
    return  house_price_homelessness.to_json(orient='records', lines=False)    

@app.route("/api/v1.0/cities_homelessness_data")
def dataset5():
    house_price_homelessness = pd.read_csv("Resources/cities_homelessness_heat_map_data.csv")
    return  house_price_homelessness.to_json(orient='records', lines=False)        
if __name__ == '__main__':
    app.run(debug=True)
