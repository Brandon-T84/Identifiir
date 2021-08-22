from flask import Flask, render_template, request, redirect
from flask_cors import CORS

CORS(app)
app = Flask(__name__)


@app.route("/", methods=["POST"])
def predict():
    image_file = request.files['imageFile']
    image_path = './images' + image_file.filename
    image_file.save(image_path)
    return
