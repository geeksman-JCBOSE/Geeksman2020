import React from 'react'
import ReactDom from 'react-dom'
import './events.css'
import Navbar from '../mainlayout/components/Navbar'
class Events extends React.Component {
  componentDidMount() {
      
     
      
  }
  handleclick2=()=>{
     let clickon=document.querySelector('.clickon');
     clickon.style.display='block';
  }
    render() {
    return (
        <div className="navbar">
        <div className="eventspage">
        <div>
        <Navbar />
        </div>
        <div className="eventsheading">
         Upcoming Events
        </div>
        <div className='eventscards'>
        <div className="eventscard">
           <div className='picture'>
             <img src="#" className="picturedesign"/> 
           </div>
           <div className="moreinfo">
               <button className="buttonstyle" onClick={this.handleclick2}>More info</button>&rarr;
           </div>
           <div className="clickon" >
               content
           </div>
        </div>
         </div>
        </div>
        </div>
     );}
}


export default Events;