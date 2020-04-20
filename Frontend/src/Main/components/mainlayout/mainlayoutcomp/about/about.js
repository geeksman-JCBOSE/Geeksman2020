import React from "react";
import "./about.css";

import { Link } from "react-router-dom";
class About extends React.Component {
  componentDidMount() {}
  handlemouseenter = (e) => {
    let btn = document.querySelector(".secondlistbtn");
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement("h6");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    btn.appendChild(ripples);
    setTimeout(() => {
      ripples.remove();
    }, 1000);
  };
  render() {
    return (
      <div>
        <div className="about">
          <div className="aboutopborder"></div>
          <ul className="firstlist">
            <li>
              <i class="fab fa-node-js"></i>
            </li>
            <li>
              <i class="fab fa-twitter"></i>
            </li>
            <li>
              <i class="fab fa-css3-alt"></i>
            </li>
            <li>
              <i class="fab fa-angular"></i>
            </li>
            <li>
              <i class="fab fa-html5"></i>
            </li>
          </ul>
          <div className="secondlist">
            <div className="second2">
              <li>
                <i class="fab fa-angular"></i>
              </li>

              <Link to="#" className="secondlistbtn">
                OUR TEAM
              </Link>
              <li>
                <i class="fab fa-html5"></i>
              </li>
            </div>
          </div>
          <ul className="thirdlist">
            <li>
              <i class="fab fa-python"></i>
            </li>
            <li>
              <i class="fab fa-react"></i>
            </li>
            <li>
              <i class="fab fa-android"></i>
            </li>
            <li>
              <i class="fab fa-js"></i>
            </li>
            <li>
              <i class="fab fa-apple"></i>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
