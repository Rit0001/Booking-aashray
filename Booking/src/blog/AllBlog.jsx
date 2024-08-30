import React, { useState } from 'react'
import BlogCard from './BlogCard'
import BlogData from './BlogData';
import Zoom from 'react-reveal/Zoom';

function AllBlog() {
    const [items,setItems]=useState(BlogData);
  return (
    <>
    <Zoom>
    <div className="heading">
                <h1>Our Blog</h1>
                <div className="line"></div>
    </div>
     <section className='blog top'>
        <div className="container">
            <div className="content grid">
                {items.map((item)=>{
                  return(
                    <BlogCard key={item.id} item={item}/>
                  )
                })}
                
            </div>
        </div>
     </section>
     </Zoom>
    </>
  )
}

export default AllBlog
