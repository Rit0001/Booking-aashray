import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import '../pages/About.css'
import Count from './Count';
import Zoom from 'react-reveal/Zoom';

function AboutCard() {
  return (
    <>
     <div className="aboutCard mtop flex_space">
        <div className="row row1">
            <h4>About Us</h4>
            <h1>
            We <span>provide Solution</span> to grow your business
            </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis mollitia error earum, dolor odio provident libero repellendus cupiditate unde perspiciatis harum iure similique esse, facilis voluptatem saepe, iusto maxime ex!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis mollitia error earum, dolor odio provident libero repellendus cupiditate unde perspiciatis harum iure similique esse, facilis voluptatem saepe, iusto maxime ex!</p>
            <button className='secondary-btn'>Explore More <i><FaLongArrowAltRight/></i></button>
        </div>
        <Zoom>
        <div className="row image">
          <img src="/images/about-img-1.jpg" alt="" />
          <div className="control-btn">
            <div className="prev">
              <i><FaPlayCircle/></i>
            </div>
          </div>
        </div>
        </Zoom>
     </div>
     <Count/>
    </>
  )
}

export default AboutCard
