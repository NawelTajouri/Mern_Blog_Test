import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Posts from "../Components/Posts";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
      <div className="Title">
          <h1>Welcome To my Blog</h1>
        </div>
      <div className="Cont">

        <div className="About-Me">
          
          <p>
            Passionate by Travelling and Cooking. Here I share All My
            Experiences, My Recipes.
          </p>
          <p>
            Register And Join Me to Find More Informations about Places to
            visit, And To try My Delecious Food
          </p>

        

        </div>
      </div>

      </div>


      <div class="gallery">
  <a target="_blank" href="#">
    <img src="https://i.pinimg.com/564x/c5/59/84/c5598425ece6d53abfb32ae4c5c46bf0.jpg" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <div class="desc">Grenade, Espagne</div>
</div>

<div class="gallery">
  <a target="_blank" href="#">
    <img src="https://i.pinimg.com/736x/95/5d/04/955d04a83a465a683d97b89a8f5f68eb.jpg" alt="Forest" width="600" height="400"/>
  </a>
  <div class="desc">Pyramid, Egypt</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_lights.jpg">
    <img src="https://i.pinimg.com/564x/1b/60/78/1b6078b5bd51521860a43103b0a6cae5.jpg" alt="Northern Lights" width="600" height="400"/>
  </a>
  <div class="desc">Yummy Pizza</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_mountains.jpg">
    <img src="https://i.pinimg.com/564x/db/91/46/db9146bc55e962b0c97882d365f64ca4.jpg" alt="Mountains" width="600" height="400"/>
  </a>
  <div class="desc">Yummy Pasta</div>
</div>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
