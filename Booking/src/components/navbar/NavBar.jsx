import React, { useState } from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaChartBar } from "react-icons/fa6";
import {Link} from 'react-router-dom';
import '../navbar/NavBar.css';
import Flip from 'react-reveal/Flip';


function NavBar() {
    const[click,setClick]=useState(false);
    const handleClick=()=>setClick(!click)
    const closeMobileMenu=()=>setClick(false)
  return (
    <>
     <div className="navbar">
        <div className="container flex_space" >
          <div className="meni_icon" onClick={handleClick} >
            <i className='cross'>{click?<RxCross2/>:<FaChartBar/>}</i>  
          </div>
          <Flip>
          <ul className={click? "nav-menu active":"nav-menu"} >
            <li ><Link to='/' onClick={closeMobileMenu}>Home💒</Link></li>
            <li><Link to='/about' onClick={closeMobileMenu}>About📄</Link></li>
            <li><Link to='/gallery' onClick={closeMobileMenu} >Gallery📸</Link></li>
            <li><Link to='/destination' onClick={closeMobileMenu}>Destination🛣</Link></li>
            <li><Link to='/blog' onClick={closeMobileMenu}>Blog🌆</Link></li>
            {/* <li><Link to='/testimonial' onClick={closeMobileMenu}>Testimonial</Link></li> */}
            <li><Link to='/booking' onClick={closeMobileMenu}>Book Now✋</Link></li>
          </ul>
          </Flip>
          <div className="login-area flex">
            <li>
            {/* <button className='primary-btn'>Request a Quote</button> */}
            </li>
          </div>
        </div>
     </div> 

     <header>
      <div className="container flex_space">
        <div className="logo">
          <img src="./images/logo-color.png" alt="" className="logo-img" style={{borderRadius:"100%",height:"6em",width:"9em",position:"absolute",top:70,boxShadow:"3px 4px 3px green"}}/>
        </div>
      
      <div className="contact flex_space">
        <div className="box flex_space">
          <div className="icons">
          <i><FaClock/></i>
          </div>
        </div>
        <div className="text">
          <h4>Working Hours</h4>
          <Link to='/contact'>Monday - Sunday : 9.00am to 6.00pm</Link>
        </div>
     
      
        {/* <div className="box flex_space">
          <div className="icons">
          <i><FaPhoneVolume/></i>
          </div>
        </div> */}
        {/* <div className="text">
          <h4>Contact Us</h4>
          <Link to='/contact'>+011 123 4567</Link>
        </div> */}
      
        <div className="box flex_space">
          <div className="icons">
          <i><FaEnvelope/></i>
          </div>
        </div>
        <div className="text">
          <h4>Mail Us</h4>
          <Link to='/contact'>aashary@example.com</Link>
        </div>
      </div>
      </div>
     </header>
    </>
  )
}

export default NavBar
