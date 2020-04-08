import React from 'react'
import ReactDom from 'react-dom'
import image from './icons/gksmn.PNG'
import './css/footer.css'
import {Link} from 'react-router-dom'

class Footer extends React.Component {
  componentDidMount() {
      
     
      
  }

      
    render() {
    return (
    
        <div className="footer">
        
        
        <footer className="footer">
        <div className="footer__addr">

        <img src={image} className="ficon" id="fcusticon1" />
        
    <h2>Contact</h2>
    
    <address>
      JCBUST, Sector-6, Faridabad, Haryana, India<br/>
      7206233857<br />
        aayushtyagionline@gmail.com

    </address>
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
        <h1 className="footer__logo">Suscribe Us</h1>
           <Link to="#" className="footer__btn">Email Us</Link>
        <div className="fcontacticons"> 
          <Link to="#"><i class="fab fa-facebook"></i></Link>
          <Link to="#"><i class="fab fa-instagram"></i></Link>
          <Link to="#"><i class="fab fa-github"></i></Link>
        </div>
    </li>
    
   
        
      
    
    <li className="nav__item">
      <h2 className="nav__title">Links</h2>
      
      <ul className="nav__ul">
        <li>
          <a href="#">Home</a>
        </li>
        
        <li>
          <a href="#">Events</a>
        </li>
        
        <li>
          <a href="#">Members</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div className="legal">
    <p>&copy; 2020 Geeksman. All rights reserved.</p>
    
  </div>
</footer>
        
        
        
        </div>
     );}
}


export default Footer;