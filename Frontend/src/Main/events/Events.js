import React from 'react'
import ReactDom from 'react-dom'
import './events.css'
import eventop from '../members/memtop.png'
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
         <div className="eventstop">
          <img src={eventop} className="eventstopstyle" />
          <div className="eventmessage">
             <span className="eventheader">Events</span>
             <span className="eventtag">Learn,Compete & Grow</span>
          </div>
         </div>       
        </div>
     );}
}


export default Events;