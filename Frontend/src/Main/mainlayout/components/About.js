import React from 'react'
import ReactDom from 'react-dom'
import './css/about.css'
import Aboutsub from './aboutsub'
import {Link} from 'react-router-dom'
class About extends React.Component {
  componentDidMount() {
      
     
      
  }

      
    render() {
    return (
    
        <div className="aboutis">
        <div className="about">
        <div className="iconslist">
        <ul className="about-linksf hidemob">
           <li className="firstli"><i class="fa fa-address-book"></i></li>
           <li className="secondli1"><i class="fa fa-calendar-times-o"></i></li>
           <li className="thirdli"><i class="fa fa-snowflake-o"></i></li>
         </ul>
        <ul className="about-linksf">
           <li className="firstli2 hidemob"><i class="fa fa-handshake-o"></i></li>
           <li className="secondli2"><div className="button_cont" align="center"><Link className="example_b2" to="./members"  rel="nofollow noopener">our team</Link>
        </div></li>
           <li className="thirdli2 hidemob"><i class="fa fa-anchor"></i></li>
         </ul>
        
        <ul className="about-linksf hidemob">
           <li className="firstli"><i class="fa fa-gift"></i></li>
           <li className="secondli"><i class="fa fa-cogs"></i></li>
           <li className="thirdli"><i class="fa fa-code"></i></li>
         </ul>
        </div>
        </div>
        
        <div className="aboutsub">
        <Aboutsub />
        </div>
        
        
        </div>


     );}
}


export default About;