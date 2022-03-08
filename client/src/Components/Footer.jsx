import React from "react";
import "./footer.css";
import Home from "./images/icon-home.png";
import map from "./images/icon-map.png";
import ma from "./images/icon-ma.png";
import tel from "./images/icon-tel.png";
import mail from "./images/icon-mail.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="Newsletter">
        <h3>GET IN TOUCH</h3>
        <p>
          Sign up for our newsletter below
          <br /> to find out about our latest news
        </p>

        <div className="form-mail">
          <input className="email-input" type="email" placeholder="Email" />

          <button className="btn" type="submit">
            Submit
          </button>
        </div>
        <div className="social-contact">
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/128/174/174863.png"
              style={{ width: "20px", height: "20px" }}
            ></img>
          </a>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/128/174/174848.png"
              style={{ width: "20px", height: "20px" }}
            ></img>
          </a>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
              style={{ width: "20px", height: "20px" }}
            ></img>
          </a>
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/128/174/174857.png"
              style={{ width: "20px", height: "20px" }}
            ></img>
          </a>
        </div>
      </div>

      <div className="contact">
        <h3>CONTACT ME</h3>

        <div className="infos-contact">
          <div className="address">
            <img src={Home} style={{ width: "20px", height: "20px" }} />
            <a>
              Echabeb City <br />
              Bizert Street <br />
              2100 Gafsa <br />
              Tunisia
            </a>
          </div>
          <div className="address">
            <img src={map} style={{ width: "20px", height: "20px" }} />
            <a href="#">access map</a>
          </div>
          <div className="address">
            <img src={mail} style={{ width: "15px", height: "15px" }} />
            <a> lewan.nawel95@gmail.com</a>
          </div>
          <div className="address">
            <img src={tel} style={{ width: "15px", height: "15px" }} />
            <a>+216 50 958 517</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
