import React from 'react'
import ReactDom from 'react-dom'
import './events.css'
import {Link} from 'react-router-dom'
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
        <div>
           <Navbar />
        </div>
         <div className="eventstop">
          <img src={eventop} className="eventstopstyle" />
          <div className="eventmessage">
             <span className="eventheader">Events</span>
             <span className="eventtag">Learn,Compete & Grow</span>
          </div>
         </div>
         <div className="eventscards">
           <div className='upcomingcards'>
               <div className="upcomingheading">
                  <h1 >Upcoming Events </h1>
               </div>
               <div className="ucardsblock"> 
                 <div className="ucardblock">
                 <div className="uimgblock">
                       <img src={eventop} className="uimgstyle" />
                    </div>
                    <div className="ucontent">
                    <div className="relativewrapper">
                    <div className="ucontenttext">
                         <div className="ucontentheading">The heading of the content</div>
                         <div className="ucontenttiming">
                             <div>Date:19 Aug 2020</div>
                             <div>Venue:Online</div>
                             <div>Entry Fee:Free</div>
                         </div>
                         </div>
                            <div className="ucontentbtn">
                             <Link to='#' className="ucontentbtnstyle">Register Now!</Link>
                            </div>
                   

                    </div>
                  
                    </div>

                 </div>
               </div>
           </div>
           <div className="pastcards">


           <div className="upcomingheading">
                  <h1 >Past Events
                       </h1>
               </div>
               <div className="ucardsblock"> 
                 <div className="ucardblock">
                 <div className="uimgblock">
                       <img src={eventop} className="uimgstyle" />
                    </div>
                    <div className="ucontent">
                    <div className="relativewrapper">
                    <div className="ucontenttext">
                         <div className="ucontentheading">The heading of the content</div>
                         <div className="ucontenttiming">
                             <div>Date:19 Aug 2020</div>
                             <div>Venue:Online</div>
                             <div>Entry Fee:Free</div>
                         </div>
                         </div>
                   

                    </div>
                  
                    </div>

                 </div>
               </div>



           </div>
         </div>       
        </div>
     );}
}


export default Events;