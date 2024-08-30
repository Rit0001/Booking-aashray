import React from 'react'
import Hero from '../homeSection/Hero'
import HomeAbout from '../homeSection/HomeAbout'
import DestinationHome from '../homeSection/DestinationHome'
import MostPopular from '../../popular/MostPopular'
import AllBlog from '../../blog/AllBlog'
import ContactForm from '../../contact/ContactForm'

function Home() {
  return (
    <>
    <Hero/>
    <HomeAbout/>
    <MostPopular/>
    <DestinationHome/>
    <AllBlog/>
    <ContactForm/>
    
    </>
  )
}

export default Home
