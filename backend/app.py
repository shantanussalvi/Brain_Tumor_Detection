from flask import Flask, request
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from keras.models import load_model
from keras.applications.vgg16 import preprocess_input
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def hello_world():
    return "Hello World"

@app.route('/predict/', methods=['POST'])
def predict():
    imagefile = request.files['image']
    image_path = "./images/" + imagefile.filename
    imagefile.save(image_path)

    model = load_model('../model/medical_trial.h5')
    
    img = load_img(image_path, target_size=[256,256])
    img_arr = img_to_array(img)
    img_arr = np.expand_dims(img_arr, axis=0)
    finalImg = preprocess_input(img_arr)

    predictions = model.predict(finalImg)

    pred = predictions.tolist()
    if(pred[0]):
        return "No Tumor"
    if(pred[1]):
        return "Glioma"
    if(pred[2]):
        return "Meningioma"
    if(pred[3]):
        return "Pituitary Tumor"
    return "Error processing image"

if __name__ == '__main__':
    app.run(port=5000)

