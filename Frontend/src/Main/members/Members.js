import React from 'react'
import ReactDom from 'react-dom'
import './members.css'
import back from './memtop.png';
import image from './IMG_1010.JPG'
import Navbar from '../mainlayout/components/Navbar'
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
        <div>
          <Navbar />
        </div>
         <div className="memtopback">
           <img src={back} className="memtopbackstyle"/>
           <div className='memtop-text'>
            <span className="memtop-header">Our Team</span>
            <span className="memtop-tagline">Our dedicated and hardwording team</span>
         </div>
        </div>
          <div className='md' onLoad={this.handleload}>
            <div className='d'>
              <div className='dh'>
                <h1>Our Secretaries</h1>
                <hr className="hr1"  />
              </div>
              <div className='dcards'>
              <div className='dcard'>
              <div className='dimg'>
                     <img src={image} className='dimgstyle'/>
                   </div>
                   <div className='aboutd'>
                       <span className='dname'>Name</span>
                       <span className='dskill'>Secratary</span>
                   </div>
                   <div className="hovermaterial">
                   <div className='aboutd'>
                       <span className='dname'>Name</span>
                       <span className='dskill'>Secratary</span>
                   </div>
                   <div className="contenthover">
                      <span className="tagline">"Tagline"</span>
                      <span className="otherdetails">otherdetails</span>
                   </div>
                   </div>
              </div>
              </div>
            </div>


            <div className='d'>
              <div className='dh'>
                <h1>Our Joint-Secretaries</h1>
                <hr className="hr1"  />
              </div>
              <div className='dcards'>
              <div className='dcard'>
              <div className='dimg'>
                     <img src={image} className='dimgstyle'/>
                   </div>
                   <div className='aboutd'>
                       <span className='dname'>Name</span>
                       <span className='dskill'>Joint-Secratary</span>
                   </div>
                   <div className="hovermaterial">
                   <div className='aboutd'>
                       <span className='dname'>Name</span>
                       <span className='dskill'>Joint-Secratary</span>
                   </div>
                   <div className="contenthover">
                      <span className="tagline">"Tagline"</span>
                      <span className="otherdetails">otherdetails</span>
                   </div>
                   </div>
              </div>
              </div>
            </div>

            <div className='d'>
              <div className='dh'>
                <h1>Our Members</h1>
                <hr className="hr1"  />
              </div>
              <div className='dcards'>
              <div className='dcard'>
              <div className='dimg'>
                     <img src={image} className='dimgstyle'/>
                   </div>
                   <div className='aboutd'>
                       <span className='dname'>Name</span>
                       <span className='dskill'>Members</span>
                   </div>
                   <div className="hovermaterial">
                   <div className='aboutd'>
                       <span className='dname'>Name</span>
                       <span className='dskill'>Members</span>
                   </div>
                   <div className="contenthover">
                      <span className="tagline">"Tagline"</span>
                      <span className="otherdetails">otherdetails</span>
                   </div>
                   </div>
              </div>
              </div>
            </div>


           

          </div>
        </div>


     );}
}


export default Members;