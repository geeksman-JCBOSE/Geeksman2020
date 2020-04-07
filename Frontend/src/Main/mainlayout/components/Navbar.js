import React from 'react'
import ReactDom from 'react-dom'
import './Navbar.css'
import {Link,Navlink}  from 'react-router-dom'
class Navbar extends React.Component {
  componentDidMount() {
      
     
      
  }
   
  handleclick=()=>{
    const navLinks=document.querySelectorAll('.nav-links li')
    const burger=document.querySelector('.burger')
    const nav=document.querySelector('.nav-links')
    nav.classList.toggle('nav-active');
    navLinks.forEach((link,index)=>{
    //links animation
      if(link.style.animation){
       link.style.animation=''
     }else{
      link.style.animation=`navLinkFade 0.5s ease forwards ${index/7+.7}s`  
     }
    //burger animation
     burger.classList.toggle('toggle');
    })
    const nav2=document.querySelector('.nav')
    let navheight=nav2.getBoundingClientRect();
    nav.style.top=`${navheight.height-20}`+'px';
  

  }

    render() {
    return (
      <div className="navbar">
 <div className="nav">
         <div className="logo">
        <img src="#" className="nav-logo"/>
        <h4 className="whygeek">why geeksman?</h4>
         </div>
         <ul className="nav-links">
           <li><Link to="/">home</Link></li>
           <li><Link to="#">contact us</Link></li>
           <li><Link to="/members">our team</Link></li>
           <li><Link to="#">events</Link></li>
         </ul>
         <div className="burger" onClick={this.handleclick}>
           <div className="line1"></div>
           <div className="line2"></div>
           <div className="line3"></div>
         </div>
  </div>
      </div>
     );}
}


export default Navbar;