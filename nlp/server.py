from flask import Flask, request, jsonify
from main import animation_view
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=["GET",'POST'])
@cross_origin()
def generate_urls():
    if request.method == 'POST':
        content = request.json
        sentence = content['sentence']
        response  = animation_view(sentence)
        return jsonify({"cdn_urls": response}), 200

if __name__ == '__main__':
	app.run(port=8080)



