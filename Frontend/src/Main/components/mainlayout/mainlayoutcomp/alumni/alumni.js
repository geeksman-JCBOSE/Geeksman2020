import React from "react";
import "./alumni.css";
import alu from './IMG_1010.JPG'
import samsung from './samsung.png'
import amazon from './amazon.png'
class Alumni extends React.Component {
  componentDidMount() {}

  render() {
    return (
    <div>
    <div className="alumnihead"><h1>Our Alumni's</h1></div>
      <div className="alumni">

        <div className="firstcard">
         <div className="alumniimage">
           <img src={alu} className="alumniimagestyle" />
         </div>
         <div className="alumnides">
          <div className="quotes"><i class="fas fa-quote-left"></i></div>
          <div className="alumnilife">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur in dolorum impedit illum quia officia nam dolor est iste 
          dolorem qui nulla optio neque, ex similique eaque quas obcaecati saepe.</p>
         </div>
         <hr className="alumnihr"/>
         <div className="workarea">
         <h1>Name</h1>
         <span>Work post</span>
         <span>Work area</span>
         </div>
         <div>
         </div>
         </div>
         </div>
       
         <div className="secondcard">
         <div className="alumniimage">
           <img src={alu} className="alumniimagestyle" />
         </div>
         <div className="alumnides">
          <div className="quotes"><i class="fas fa-quote-left"></i></div>
          <div className="alumnilife">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur in dolorum impedit illum quia officia nam dolor est iste 
          dolorem qui nulla optio neque, ex similique eaque quas obcaecati saepe.</p>
         </div>
         <hr className="alumnihr"/>
         <div className="workarea">
         <h1>Name</h1>
         <span>Work post</span>
         <span>Work area</span>
         </div>
         <div>
         </div>
         </div>
        </div>

        <div className="thirdcard">
         <div className="alumniimage">
           <img src={alu} className="alumniimagestyle" />
         </div>
         <div className="alumnides">
          <div className="quotes"><i class="fas fa-quote-left"></i></div>
          <div className="alumnilife">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur in dolorum impedit illum quia officia nam dolor est iste 
          dolorem qui nulla optio neque, ex similique eaque quas obcaecati saepe.</p>
         </div>
         <hr className="alumnihr"/>
         <div className="workarea">
         <h1>Name</h1>
         <span>Work post</span>
         <span>Work area</span>
         </div>
         <div>
         </div>
         </div>
        </div>
       </div>

       <div className="alumniworkingcompany">
          <div className="alumniheader"><h1>Our alumni's work here</h1></div>
          <div className="awesomecompanys">
            <img src={samsung} className="samsung"/>
            <img src={amazon} className="amazon"/>
          </div>
       </div>
      </div>
    );
  }
}

export default Alumni;
