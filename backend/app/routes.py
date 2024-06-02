from flask import Blueprint, jsonify
import dask.dataframe as dd

main = Blueprint('main', __name__)
ddf = dd.read_csv('C:\Users\jinis\Documents\Academics\Advance Data Visualization\social-determinants-health-analysis\backend\datasets\Income\ACSST1Y2016.S2001-2024-05-31T100037.csv')

@main.route('/data', methods=['GET'])
def get_data():
    data = ddf.compute().to_dict(orient='records')
    return jsonify(data)
