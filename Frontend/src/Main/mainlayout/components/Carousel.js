import React from 'react'
import ReactDom from 'react-dom'
import image from './icons/gksmn.PNG'
import './css/corousel.css'
import {Link} from 'react-router-dom'
class Corousel extends React.Component {
  componentDidMount() {
      
     
      
  }

      
    render() {
    return (
    
        <div className="corousal">
        <div className="row clearfix">
        <div className="col50 col501">
        <img src={image} className="icon1" id="custicon1" />
        </div>
        <div className="col50 col502">
       <h1 className="heading">Geeksman</h1>
        <hr className="gkmnhr" />
        <h1 className="subheading1">We code therefore we are</h1>
        <h1 className="subheading2">Geeksman is the official campus chapter of codechef of jcbust</h1>
        <div className="button_cont" align="center"><Link className="example_b" to="/" rel="nofollow noopener">why geeksman?</Link></div>
        </div>
        </div>
        </div>
     );}
}


export default Corousel;