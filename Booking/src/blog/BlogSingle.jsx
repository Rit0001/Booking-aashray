import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegPlayCircle } from "react-icons/fa";
import HeadTitle from '../HeadTitle/HeadTitle'
import { Link, useParams } from 'react-router-dom'
import BlogData from './BlogData';
import EmptyFile from '../singlePages/EmptyFile';


function BlogSingle() {
  const{id}=useParams();
  const[item,setItem]=useState(null);

  useEffect(()=>{
   let item = BlogData.find((item)=>item.id===parseInt(id))
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
        <Link to='/blog' className='primary-btn back'>
          <i><FaArrowLeftLong/></i>Go Back
        </Link>

        <article className='content flex'>
          <div className="main-content">
            <img src={item.cover} alt="" />

            <div className="category flex_space">
              <span>{item.date}</span>
              <label>{item.category}</label>
            </div>

            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <p>{item.desc}</p>
            <h2>Two Column Text Sample</h2>

            <div className="para flex_space">
            <p>{item.para}</p>
            <p>{item.para}</p>
            </div>
          </div>

          <div className="side-content">
            <div className="category-list">
                <h2>Category</h2>
                <hr />
                <ul>
                    {
                        BlogData.map((item,index)=>{
                           return(
                            <li key={index}>
                            <i><FaRegPlayCircle/></i>
                            {item.category}
                            
                            </li>
                           )
                        })
                    }
                </ul>
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

export default BlogSingle
