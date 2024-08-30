import React, { useEffect, useState } from 'react'
import { PiCaretCircleDoubleLeftLight } from "react-icons/pi";
import { PiCaretCircleDoubleRightLight } from "react-icons/pi";
import Data from './Data'
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

function Slide({ slides }) {
 
   const[current,setCurrent]=useState(0);
   const length=slides.length;
   const[city,setCity]=useState('');
   const[checkin,setCheckin]=useState('');
   const[checkout,setCheckout]=useState('');
   const[rooms,setRooms]=useState('');
   const[allvalue,setAllValue]=useState([]);
   useEffect(()=>{
    localStorage.getItem('enter');
   })

   const nextSlide=()=>{
    setCurrent(current === length-1 ? 0 : current +1)
   }
   const prevSlide=()=>{
    setCurrent(current === 0 ? length-1 : current -1)
   }
   if(!Array.isArray(slides) || slides.length<=0){
    return null;
   }

   const formSubmit=(e)=>{
    e.preventDefault()
 let newval={city,checkin,checkout,rooms};
 setAllValue([...allvalue,newval])
 setCity('')
 setCheckin('')
 setCheckout('')
 setRooms('')
}

   const submitData=async()=>{
    let result=await fetch("http://localhost:8000/enter",{
        method:"post",
        body:JSON.stringify({city,checkin,checkout,rooms}),
        headers:{
        "Content-Type":"application/json"
      }
    })
    result=await result.json()
    console.log(result);
    localStorage.setItem('enter',JSON.stringify(result));
    alert("Your rooms are confirmed,Please Click Book Now👉 to confirm your booking🙏")
  }
  return (
    <>
      <section className="slider">
        <div className="control-btn">
            <button className="prev" onClick={prevSlide}>
                <i><PiCaretCircleDoubleLeftLight/></i>
            </button>
            <button className="next" onClick={nextSlide}>
                <i><PiCaretCircleDoubleRightLight/></i>
            </button>
        </div>
      
      {Data.map((slide,index)=>{
        return(
            <div className={index === current? "slide active": "slide"} key={index}>
                {index === current && <img src={slide.images} alt='Home Image'/>}
            </div>
        )
      })}
      </section>
      <section className='slide-form'>
       <div className="container">
        <h2>Enjoy Your Holiday</h2>
        <span>Book Hotel</span>
<Zoom>
        <form onSubmit={formSubmit}>
         
          <input  type="search" placeholder='Enter your City' value={city} onChange={(e)=>setCity(e.target.value)}/>
            
          <div className="flex_space">
            <span><input type="date" value={checkin} onChange={(e)=>setCheckin(e.target.value)}/>Check In</span>
            <span><input type="date" value={checkout} onChange={(e)=>setCheckout(e.target.value)}/>Check Out</span>
          </div>
         
          <input type="number" placeholder='Rooms' value={rooms} onChange={(e)=>setRooms(e.target.value)}/>
          <span><input onClick={submitData}
          style={{cursor:"pointer",width:"170px",borderRadius:"5px"}} type="button" value='confirm rooms'/><Link to='/booking'> <input style={{cursor:"pointer",width:"160px",borderRadius:"5px"}} type="submit" value='Book now 👉' className='submit' /></Link></span>
        </form>
        </Zoom>
       </div>
      </section>
    </>
  )
}

export default Slide
