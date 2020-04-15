import React from "react";
import ReactDom from "react-dom";
import "./css/Navbar.css";
import image from "./icons/gksmn.PNG";
import { Link, Navlink } from "react-router-dom";
class Navbar extends React.Component {
  componentDidMount() {}

  handleclick = () => {
    const navLinks = document.querySelectorAll(".nav-links li");
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      //links animation
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.7
        }s`;
      }
      //burger animation
      burger.classList.toggle("toggle");
    });
    const nav2 = document.querySelector(".nav");
    let navheight = nav2.getBoundingClientRect();
    nav.style.top = `${navheight.height - 5}` + "px";
  };

  render() {
    return (
      <div className="navbar">
        <div className="nav">
          <div className="logo">
            <img src={image} className="nav-logo" />
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/events">events</Link>
            </li>
            <li>
              <Link to="/members">members</Link>
            </li>
            <li>
              <Link to="/members">members</Link>
            </li>
          </ul>
          <div className="burger" onClick={this.handleclick}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <div className="loginbtn">
            <Link to="#">Login</Link>
          </div>
          <div className="socialicons">
            <Link to="#">
              <i class="fab fa-instagram social"></i>
            </Link>
            <Link to="#">
              <i class="fab fa-github social"></i>
            </Link>
            <Link to="#">
              <i class="fab fa-facebook social"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
