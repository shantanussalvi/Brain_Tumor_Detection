/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../images/logo.png";
import slide3 from "../images/slide3.png";
import "./Landing.css";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
const Landingpage = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt=" logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active ms-5 me-1"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5 me-1" href="#about">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5 me-1" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className=" ms-5 me-5 mt-5" href="/Upload" role="button">
                  <button className="button1">Upload</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slide1} class="d-block" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src={slide2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
       
      </div>
    </div>
    <div class="carousel-item">
      <img src={slide3} class="slide3" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
       
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<hr />
<section id="about">
    <div class="container">
      <h2>About Us</h2>
      <p>Welcome to our brain tumor detection website, dedicated to providing accurate and efficient diagnosis of brain tumors.</p>
    <p>Our mission is to utilize technology  to help healthcare professionals and patients in early detection and treatment planning.</p>
    <p>Whether you're a healthcare provider or an individual concerned about brain health, we are here to support you on your journey towards improved brain tumor detection.</p>
    </div>
  </section>
  <hr></hr>
  <section id="features">
    <div class="container">
      <h2>Features</h2>
      <ul>
        <li>Feature 1 : VGG MODEL </li>
        <li>Feature 2 : Training Accuracy : 94.69 Testing Accuracy : 86.57 </li>
        <li>Feature 3 : Classifies into 4 Classes :  Notumor, Glioma , Pituitory tumor , Meningioma </li>
       
      </ul>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>&copy; 2023 My Website. All rights reserved.</p>
    </div>
  </footer>
    </>
  );
};

export default Landingpage;
