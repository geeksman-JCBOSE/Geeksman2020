import React from "react";
import "./carousal.css";
import video from './video.mp4'
class Carousal extends React.Component {
  componentDidMount() {}

  render() {
    return (
    <div className="carousel">
   <div className="videotext">
   <video autoplay loop muted controls="auto" >
     <source type="video/mp4" src={video}></source>
   </video>
   <h2 className="videohead">
     GEEKSMAN
   </h2>

   </div> 
    
    
    </div>);
  }
}

export default Carousal;
