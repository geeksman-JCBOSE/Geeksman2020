import React from 'react'
import ReactDom from 'react-dom'
import './css/about.css'
import Aboutsub from './aboutsub'

class About extends React.Component {
  componentDidMount() {
      
     
      
  }

      
    render() {
    return (
    
        <div className="aboutis">
        <div className="about">
        <div className="button_cont" align="center"><a className="example_b2" href="add-website-here" target="_blank" rel="nofollow noopener">our team</a>
        </div>
        </div>
        
        <div className="aboutsub">
        <Aboutsub />
        </div>
        
        
        </div>


     );}
}


export default About;