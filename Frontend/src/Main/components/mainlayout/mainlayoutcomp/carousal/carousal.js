import React from "react";
import "./carousal.css";
import pexels from "./Welcome.mp4";
import { Link } from "react-router-dom";
import back from "../navbar/icons/logoblack.png";
class Carousal extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="carouselx7">
        <div className="carouswr">
          <div className="videobox">
            <video
              src={pexels}
              muted
              loop="true"
              autoplay="true"
              type="mp4"
            ></video>
            <div className="textBox">
              <img src={back} className="backimg" />
              Geeksman <span>We Code Therefore We Are</span>
              <Link to="#" className="secondbtn">
                OUR TEAM
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousal;
