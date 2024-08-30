import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import PopularData from './PopularData';

const SampleNextArrow=(props)=>{
     const{onClick}=props
     return(
      <div className="control-btn" onClick={onClick}>
        <button className='next'>
          <i><FaLongArrowAltRight/></i>
        </button>
      </div>
     )
}
const SamplePrevArrow=(props)=>{
  const{onClick}=props
  return(
   <div className="control-btn" onClick={onClick}>
     <button className='prev'>
       <i><FaLongArrowAltLeft/></i>
     </button>
   </div>
  )
}
function Cards() {
  var settings = {
    nextArrow:<SampleNextArrow />,
    prevArrow:<SamplePrevArrow />,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
    ]
  };
  return (
    <>
    <Slider {...settings}>
    {
     PopularData.map((value)=>{
       return(
      <div className="cards">
        <div className="item">
            <div className="imgae">
                <img src={value.image} alt="" />
                <i><FaMapMarkerAlt/>
                <label>{value.country}</label>
                </i>
            </div>
            <div className="rate">
                <i><IoStarHalf/></i>
                <i><IoStarHalf/></i>
                <i><IoStarHalf/></i>
                <i><IoStarHalf/></i>
                <i><IoStarHalf/></i>
            </div>
            <div className="details">
                <h2>{value.name}</h2>
                <div className="boarder">
                <h3>
                {value.price} / <span>Pre Night</span>
                </h3>
                </div>
            </div>
        </div>
      </div>
       )
      })
    }
    </Slider>
    </>
  )
}

export default Cards
