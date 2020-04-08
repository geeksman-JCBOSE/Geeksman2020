import React from 'react'
import ReactDom from 'react-dom'
import image from './icons/gksmn.PNG'
import './css/corousel.css'

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
        <div class="button_cont" align="center"><a class="example_b" href="add-website-here" target="_blank" rel="nofollow noopener">why geeksman?</a></div>
        </div>
        </div>
        </div>
     );}
}


export default Corousel;