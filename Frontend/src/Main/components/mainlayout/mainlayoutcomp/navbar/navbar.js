import React from "react";
import "./navbar.css";
import LoginForm from "./loginform/loginform";
import { Link, Navlink } from "react-router-dom";
import image from "./icons/logo.png";

function Navbar() {
  var userpanel;
  if (localStorage.getItem("loginstat") === "true") {
    userpanel = <Link to="/usergallery">userpanel</Link>;
  } else {
  }

  const handleClick = () => {
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

  return (
    <div>
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
            <Link to="/developer">developers</Link>
          </li>
          <li>{userpanel}</li>
        </ul>
        <div>
          <LoginForm />
        </div>
        <div className="burger" onClick={handleClick}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
