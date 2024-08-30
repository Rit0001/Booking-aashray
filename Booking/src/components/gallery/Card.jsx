import React, { useState } from 'react'
import { FaImages } from "react-icons/fa6";

function Card(props) {
  const[popup,setPopup]=useState(false);
  const toggleModel=()=>{
    setPopup(!popup)
  }
  return (
    <>
      <div className="items">
        <div className="img">
            <img src={props.images} alt="" />
            <i onClick={toggleModel}><FaImages/></i>
        </div>
        <div className="title">
            <h3>{props.title}</h3>
        </div>
      </div>

      {popup && (
      <div className="popup">
        <div className="hide">
            <div className="popup-content">
                <button onClick={toggleModel}>Close</button>
            <img src={props.images} alt="" />
            </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Card
