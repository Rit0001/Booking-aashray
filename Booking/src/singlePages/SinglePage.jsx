import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";
import './SinglePage.css'
import HeadTitle from '../HeadTitle/HeadTitle'
import { Link, useParams } from 'react-router-dom'
import SData from '../components/destinations/SData';
import EmptyFile from './EmptyFile';


function SinglePage() {
  const{id}=useParams();
  const[item,setItem]=useState(null);

  useEffect(()=>{
   let item = SData.find((item)=>item.id===parseInt(id))
   if(item)
   {
    setItem(item)
   }
  },[id])

  return (
    <>
      <HeadTitle/>
      {item ? (
      <section className="single-page top">
       <div className="container">
        <Link to='/destination' className='primary-btn back'>
          <i><FaArrowLeftLong/></i>Go Back
        </Link>

        <article className='content flex'>
          <div className="main-content">
            <img src={item.image} alt="" />
            <p>{item.desc}</p>
            <p>{item.desc}</p>

            <div className="para flex_space">
              <p>{item.sidepara}</p>
              <p>{item.sidepara}</p>
            </div>
            <h1>What is The {item.title} City?</h1>
            <p>{item.desc}</p>

            <div className="image grid1">
              <img src={item.paraImageone} alt="" />
              <img src={item.paraImagetwo} alt="" />
            </div>
            <p>{item.desc}</p>
          </div>

          <div className="side-content">
            <div className="box">
              <h2>How can we help you?</h2>
              <p>{item.sidepara}</p>
              <button className='outline-btn'>
                <i><FaPhoneVolume/></i>
                Contact Us
              </button>
            </div>
            <div className="box2">
              <p>{item.sidepara}</p>
            </div>
          </div>
        </article>
       </div>
      </section>
      ):(
        <EmptyFile/>
      )}
    </>
  )
}

export default SinglePage
