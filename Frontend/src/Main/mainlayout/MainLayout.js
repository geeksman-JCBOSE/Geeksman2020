import React from 'react'
import ReactDom from 'react-dom'
import Navbar from './components/Navbar'
import Corousel from './components/Carousel'
import About from './components/About'

class MainLayout extends React.Component {
  componentDidMount() {
      
     
      
  }

      
    render() {
    return (
    
        <div className="navbar">
        
        <Navbar />
        <Corousel />
        <About />
        </div>


     );}
}


export default MainLayout;