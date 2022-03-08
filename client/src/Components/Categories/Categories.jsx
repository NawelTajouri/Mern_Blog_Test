import React from "react";
import "./categories.css";

const Categories = () => {
  return (
    <div className="Category-Container">
      <div className="Title">
        <span>Top Categories</span>
        <hr />
      </div>

      <div className="Categories">
        <div className="box">
          <div className="img1"></div>
          <div className="overlay"></div>
          <div className="overlay2"></div>
          <div className="text">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h2>Bali Sunset</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="box">
          <div className="img2"></div>
          <div className="overlay"></div>
          <div className="overlay2"></div>
          <div className="text">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h2>Yummy Pizza</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="box">
          <div className="img3"></div>
          <div className="overlay"></div>
          <div className="overlay2"></div>
          <div className="text">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h2>Fuji Mountain</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
