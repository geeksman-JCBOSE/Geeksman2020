import React from "react";
import "./carousal.css";
// import cover from './cover.mp4'
class Carousal extends React.Component {
  componentDidMount() {}



  render() {
    return (
    <div className="carousel">
    <div className="carouswr">
    <div className="videobox">
   <video src="" muted loop="true" autoplay="true" type="mp4" >
   </video>
   <div className="textBox">
     Geeksman <span>Video Text</span>
   </div>

   </div> 

    </div>

    
    
    </div>);
  }
}

export default Carousal;
