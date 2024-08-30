import React, { useState,useEffect } from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import { LuLinkedin } from "react-icons/lu";
import { FaPinterest } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import './Contact.css'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

function ContactForm() {
    const[fname,setFname]=useState('');
    const[lname,setLname]=useState('');
    const[phone,setPhone]=useState('');
    const[email,setEmail]=useState('');
    const[account,setAccount]=useState('');
    const[adhaar,setAdhaar]=useState('');
    const[message,setMessage]=useState('');
    const[allvalue,setAllValue]=useState([]);
    useEffect(()=>{
        localStorage.getItem('user');
     })
    const formSubmit=(e)=>{
        e.preventDefault()
     let newval={fname,lname,phone,email,account,adhaar,message};
     setAllValue([...allvalue,newval])
     setFname('')
     setLname('')
     setPhone('')
     setEmail('')
     setAccount('')
     setAdhaar('')
     setMessage('')
    }
    const submitData=async()=>{
        let result=await fetch("http://localhost:8000/booking",{
            method:"post",
            body:JSON.stringify({fname,lname,phone,email,account,adhaar,message}),
            headers:{
            "Content-Type":"application/json"
          }
        })
        result=await result.json()
        console.log(result);
        localStorage.setItem('user',JSON.stringify(result));
        alert("Your Booking Cofirmed Successfully🙌 & send to Aashary💚")
      }
return (
    <>
    <section className="contact mtop">
        <div className="container flex">
            <div className="main-content">
                <h2>Booking Details</h2>
                <p>Fill out the form below,for booking submit details</p>
                <Fade>
                <form onSubmit={formSubmit}>
                    <div className="grid">
                        <div className="input">
                            <span>Enter First Name <label>*</label></span>
                            <input type="text" name='fname' value={fname} onChange={(e)=>setFname(e.target.value)}/>
                        </div>
                        <div className="input">
                            <span>Enter Last Name <label>*</label></span>
                            <input type="text" name='lname' value={lname} onChange={(e)=>setLname(e.target.value)}/>
                        </div>
                        <div className="input">
                            <span>Enter Phone Number <label>*</label></span>
                            <input type="text" name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                        <div className="input">
                            <span>Enter Email Address<label>*</label></span>
                            <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="input">
                            <span>Enter Account Details<label>*</label></span>
                            <input type="number" name='account' value={account} onChange={(e)=>setAccount(e.target.value)}/>
                        </div>
                        <div className="input">
                            <span>Enter Adhaar Number<label>*</label></span>
                            <input type="number" name='adhaar' value={adhaar} onChange={(e)=>setAdhaar(e.target.value)}/>
                        </div>
                  
                        </div>
                        <div className="input inputlast">
                            <span>Write Your Message <label>*</label></span>
                            <textarea name="message" value={message} cols="30" rows="10" onChange={(e)=>setMessage(e.target.value)}></textarea>
                        </div>
                    <button className='primary-btn' onClick={submitData}>Submit Now</button>
                </form>
                </Fade>
            </div>
            <div className="side-content">
                <h3>Visit Our Location</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius praesentium culpa beatae enim minus, tempora vitae quasi maxime tempore ipsum excepturi vel laboriosam officiis iste quis doloremque velit alias! Deleniti.</p>
                <br />
                <h3>Message Us</h3>
                <span>info@example.com</span>
                <br />
                <span>+012 456 7898</span>
                <br />

                <div className="icon">
                    <h3>Follow Us</h3>
                    <div className="flex_space">
                        <i><Link to="https://facebook.com"><FaFacebookSquare/></Link></i>
                        <i><Link to="https://twitter.com"><SiTwitter/></Link></i>
                        <i><Link to="https://linkedin.com"><LuLinkedin/></Link></i>
                        <i><Link to="https://pinterest.com"><FaPinterest/></Link></i>
                        <i><Link to="https://instagram.com"><IoLogoInstagram/></Link></i>
                        <i><Link to="https://youtube.com"><FaYoutube/></Link></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContactForm
