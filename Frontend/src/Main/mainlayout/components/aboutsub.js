import React from 'react'
import ReactDom from 'react-dom'
import './css/about.css'
import {Link} from 'react-router-dom'
import image from './icons/learn-lab.svg'
import image2 from './icons/codechef.png'
class Aboutsub extends React.Component {
  componentDidMount() {
      
     
      
  }

      
    render() {
    return (
    
        <div className="aboutsub">
        <div className="row2 clearfix">
        <div className="col50a col50a1">
        <img src={image2} className="iconabout" />
        </div>
        
        <div className="col50a col50a2">
        
        <h1 className="subheading1a">geeksman is the official campus chapter of codechef</h1>
        <div className="button_cont" align="center"><Link className="example_bcode" to="/" rel="nofollow noopener">visit codechef</Link></div>
        
        </div>
        </div>
        <div className="row3">
        <div className="col50a col50a3">
        <h1 className="subheading1 subheading1row31">contact us <hr className="abouthr"/></h1>
        <h1 className="subheading1 subheading1row32">you can contact us on various social media platforms. We will reply your query in 2-3 working days.</h1>
        <div className="contacticons"> 
          <Link to="#"><i class="fab fa-facebook"></i></Link>
          <Link to="#"><i class="fab fa-instagram"></i></Link>
          <Link to="#"><i class="fab fa-github"></i></Link>
        </div>
        </div>
        <div className="col50a col50a4">
        <img src={image} className="iconabout2" />
        </div>
        </div>
        </div>
     );}
}


export default Aboutsub;