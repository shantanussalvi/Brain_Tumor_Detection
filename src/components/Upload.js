import React, { useState } from "react";
import "./Upload.css";
import axios from "axios";
import Swal from 'sweetalert2'



const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log(selectedImage);
    const formData = new FormData();
    formData.append("image", selectedImage);
    console.log("Hello");
    axios
      .post("http://127.0.0.1:5000/predict/", formData)
      .then((res) => {
        console.log(res);
        Swal.fire('Image Uploaded Successfully');
        setResult(res.data);
        
      })
      .catch((err) => alert("Image Upload Error"));
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {

    const file = event.target.files[0];
    setSelectedImage(file);
    setSelectedFile(URL.createObjectURL(file));
  };

  return (
    <>
     <div className="upload-form">
        <h1>Image Upload Form</h1>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {selectedFile && (
          <div className="preview-container">
            <h3>Preview:</h3>
            <img src={selectedFile} alt="Preview" className="preview-image" />
          </div>
        )}
         <button className="button2" onClick={submitForm}>Submit</button>
         <h1>{result}</h1>
      </div>
    </>
  );
};

export default Upload;
