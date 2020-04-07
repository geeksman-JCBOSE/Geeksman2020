import React from 'react'
import ReactDom from 'react-dom'
import './css/about.css'
import image from './icons/learn-lab.svg'
import image2 from './icons/codechef.png'
class Aboutsub extends React.Component {
  componentDidMount() {
      
     
      
  }

      
    render() {
    return (
    
        <div className="aboutsub">
        <div className="row">
        <div className="col50">
        <img src={image2} className="iconabout" />
        </div>
        
        <div className="col50">
        <h1 className="subheading1">geeksman is the official campus chapter of codechef</h1>
        </div>
        </div>
        <div className="row">
        <div className="col50">
        <h1 className="subheading1">contact us</h1>
        <h1 className="subheading1">you can contact us on various social media platforms. We will reply your query in 2-3 working days.</h1>
        </div>
        
        <div className="col50">
        <img src={image} className="iconabout2" />
        </div>
        </div>
        </div>


     );}
}


export default Aboutsub;