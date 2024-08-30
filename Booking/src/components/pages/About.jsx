import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import AboutCard from './AboutCard'
import HeadTitle from '../../HeadTitle/HeadTitle';

function About() {
  return (
    <>
    <HeadTitle/>
      <section className='about top'>
       <div className='container'>
        <AboutCard/>
       </div>
      </section>
      <section className='features top'>
       <div className="conatiner aboutCard flex_space">
        <div className="row row1">
          <h1>
            Our<span>Features</span>
          </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis mollitia error earum, dolor odio provident libero repellendus cupiditate unde perspiciatis harum iure similique esse, facilis voluptatem saepe, iusto maxime ex!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis mollitia error earum, dolor odio provident libero repellendus cupiditate unde perspiciatis harum iure similique esse, facilis voluptatem saepe, iusto maxime ex!</p>
            <button className='secondary-btn'>Explore More <i><FaLongArrowAltRight/></i></button>
        </div>
        
        <div className="row image">
          <img src="/images/feature-img-1.jpg" alt="" />
          <div className="control-btn">
            <div className="prev">
              <i><FaPlayCircle/></i>
            </div>
          </div>
        </div>
       </div>
      
      </section>
    </>
  )
}

export default About
