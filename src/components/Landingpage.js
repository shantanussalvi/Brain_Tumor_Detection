/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../images/logo.png";
import "./Landing.css";
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
                <a className="nav-link ms-5 me-1" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5 me-1" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className=" ms-5 me-5 mt-5" href="/Upload" role="button">
                  <button className="button">Upload</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Landingpage;
