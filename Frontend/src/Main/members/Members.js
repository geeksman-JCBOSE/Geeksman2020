import React from 'react'
import ReactDom from 'react-dom'
import './members.css'
import image from './IMG_1010.JPG'
class Members extends React.Component {
  componentDidMount() {
  }
  handleload=()=>{
    const d=document.querySelector('.d')
    const heightd=d.getBoundingClientRect()
    const body=document.querySelector('body')
    const heighbody=body.getBoundingClientRect()
    const m=document.querySelector('body')
  }
    render() {
    return (
    
        <div className="navbar" >
          <div className='md' onLoad={this.handleload}>
            <div className='d'>
              <div className='dh'>
                <h1>Our Developers</h1>
              </div>
              <div className='dcards'>
              <div className='dcard'>
              <div className='dimg'>
                     <img src={image} className='dimgstyle'/>
                   </div>
                   <div className='abooutd'>
                       <h3 className='dname'>Name</h3>
                       <h6 className='dskill'>Front End Developer</h6>
                   </div>
              </div>
              </div>
            </div>
            <div className='m'>
               <div className="mh">
                     <h1>Our Team</h1>
               </div>
               <div className='mcards'>
               <div className='mcard'>
                       <div className='mimg'>
                          <img src={image} className='mimgstyle'/>
                       </div>
                       <div className="aboutm">
                         <h3 className='mname'>
                               Name
                         </h3>
                         <h5 className='mdesignation'>
                                Jsec
                         </h5>
                         <p className='mabout'>
                                hey! i am the jsec and you all will follow my sayings no one can complain me.
                         </p>
                       </div>
                   </div>
               </div>
            </div>
          </div>
        </div>


     );}
}


export default Members;