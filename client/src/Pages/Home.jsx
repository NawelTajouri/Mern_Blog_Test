import React, { useEffect } from "react";
import Categories from "../Components/Categories/Categories";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import Slider from "../Components/Slider/Slider";
import "./Home.css";
import RecentPosts from './../Components/RecentPosts/RecentPosts';
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
}, [])
  return (
    <div>
      <Navbar />
      <Slider />
      <div className="Welcome">
        <div className="Image" data-aos="fade-right">
          <img src="https://c0.wallpaperflare.com/preview/144/977/100/cook-cooking-food-cooker.jpg" />
        </div>
        <div className="Me" data-aos="fade-left">
          <div className="Title">
            <span className="firsttitle">Welcome To </span>
            <span className="secondtitle">My Blog</span>
          </div>
          <div className="Cont">
            
              <span>
                Passionate by Travelling and Cooking.
                 Here I share All My Travel Experiences and My Recipes.
              </span>
              <span>
                Register And Join Me to Find More Informations about Places to
                visit, And To try My Delecious Food
              </span>
           
          </div>
        </div>
      </div>

      <Categories/>
      <RecentPosts/>





      <Footer />
    </div>
  );
};

export default Home;
