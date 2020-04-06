import React from 'react'
import ReactDom from 'react-dom'
import image from './learn-lab.svg'
import './corousel.css'

class Corousel extends React.Component {
  componentDidMount() {
      
     
      
  }

      
    render() {
    return (
    
        <div className="corousal">
        <div className="row">
        <div className="col50">
        <img src={image} className="icon1" />
        </div>
        <div className="col50">
        <h1 className="heading">Geeksman</h1>
        </div>
        </div>
        </div>
     );}
}


export default Corousel;