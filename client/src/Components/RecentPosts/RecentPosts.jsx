import React, { useEffect } from "react";
import "./recentPosts.css";
import Aos from "aos";
import "aos/dist/aos.css";

const RecentPosts = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
}, [])
  return (
    <div className="postsContatiner">
      <div className="Title">
        <span>Recent Posts...</span>
      </div>
      <div className="posts">
        <div className="card" data-aos="zoom-out-right">
          <div className="imgBx">
            <img src="https://i.pinimg.com/564x/a2/34/71/a23471cb372e6b594f3deab09833458d.jpg" />
          </div>
          <div className="content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              recusandae excepturi voluptate nobis temporibus odio ab dolorem
              corrupti minus officia assumenda error culpa asperiores. Excepturi
              at impedit rerum ipsa quia!
            </p>
          </div>
        </div>
        <div className="card" data-aos="zoom-out-left">
          <div className="imgBx">
            <img src="https://i.pinimg.com/236x/c8/1a/7f/c81a7f2e970423faeaafe51db377c656.jpg" />
          </div>
          <div className="content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              recusandae excepturi voluptate nobis temporibus odio ab dolorem
              corrupti minus officia assumenda error culpa asperiores. Excepturi
              at impedit rerum ipsa quia!
            </p>
          </div>
        </div>
        <div className="card" data-aos="zoom-out-right">
          <div className="imgBx">
            <img src="https://i.pinimg.com/564x/f8/d8/f8/f8d8f8590dd0eb9f33446e2ff888fc33.jpg" />
          </div>
          <div className="content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              recusandae excepturi voluptate nobis temporibus odio ab dolorem
              corrupti minus officia assumenda error culpa asperiores. Excepturi
              at impedit rerum ipsa quia!
            </p>
          </div>
        </div>
        <div className="card" data-aos="zoom-out-left">
          <div className="imgBx">
            <img src="https://i.pinimg.com/564x/f4/26/9d/f4269d7d58d1a62454efb894e6dd652e.jpg" />
          </div>
          <div className="content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              recusandae excepturi voluptate nobis temporibus odio ab dolorem
              corrupti minus officia assumenda error culpa asperiores. Excepturi
              at impedit rerum ipsa quia!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
