from flask import Flask
from flask_cors import CORS
import pandas as pd
import json  
# Initializing flask app
app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})  
  
# Route for seeing a data
@app.route('/data')
def table():
    dataodoo = pd.read_csv('https://gitlab.com/eespinozape/odoo/-/raw/main/datadetails.csv')
    result = dataodoo.to_json(orient="table")
    dataodoofix=json.loads(result)
    json.dumps(dataodoofix, indent=4) 
    # Returning an api for showing in  reactjs
    return dataodoofix

@app.route('/kmeans')
def kmeans():
    datakmeans = pd.read_csv("https://gitlab.com/eespinozape/odoo/-/raw/main/dataclusters.csv")
    result = datakmeans.to_json(orient="records")    
    datakmeans = json.loads(result)
    json.dumps(datakmeans, indent=4)
    return datakmeans

@app.route('/kmeansf')
def kmeasf():
    datakmeans = pd.read_csv("https://gitlab.com/eespinozape/odoo/-/raw/main/dataclusters.csv")
    result = datakmeans.to_json(orient="split")  
    datakmeans = json.loads(result)
    json.dumps(datakmeans, indent=4)
    return datakmeans

# Running app
if __name__ == '__main__':
    app.run(debug=True)