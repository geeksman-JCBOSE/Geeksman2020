import React from "react";
import "./navbar.css";
import LoginForm from "./loginform/loginform";
import { Link, Navlink } from "react-router-dom";
import image from "./icons/logo.png";

function Navbar() {
  var userpanel;
  var navlinkclass;
  if (localStorage.getItem("loginstat") === "true") {
    navlinkclass = "nav-links-login";
   
    userpanel = <Link to="/usergallery">userpanel</Link>;
  } else {
    navlinkclass = "nav-links";
    
  }

  const handleClick = () => {
   
    
    const burger = document.querySelector(".burger");
    const nav1 = document.querySelector(".nav-links");
    const navm=document.querySelector(".nav-links-login")
    if(nav1){
      const navLinks1 = document.querySelectorAll(".nav-links li");
      navLinks1.forEach((link, index) => {
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
    }
    if(navm){
      const navLinks2 = document.querySelectorAll(".nav-links-login li");
      navLinks2.forEach((link, index) => {
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
    }
    if(nav1){
      nav1.classList.toggle("nav-active");
    }
    if(navm){
      navm.classList.toggle("nav-active");
    }
     
    const nav2 = document.querySelector(".nav");
    let navheight = nav2.getBoundingClientRect();
    if(nav1){
      nav1.style.top = `${navheight.height -6}` + "px";
    }
    if(navm){
      navm.style.top = `${navheight.height-6}` + "px";
    }
   
  };

  return (
    <div>
      <div className="nav">
        <div className="logo">
          <img src={image} className="nav-logo" />
        </div>
        <ul className={navlinkclass}>
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