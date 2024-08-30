import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa"
import { Link } from 'react-router-dom'

function BlogCard({item:{id,date,category,title,cover,para,desc}}) {
  return (
    <>
     <div className="items">
       <div className="img">
        <img src={cover} alt="" />
       </div>
       <div className="category flex_space">
        <span>{date}</span>
        <label>{category}</label>
       </div>
       <div className="details">
        <h3>{title}</h3>
        <p>{para}</p>
       </div>
       <Link to={`/blogsingle/${id}`} className='blogItem-link'>
        READ MORE... [<i><FaLongArrowAltRight/></i>]
       </Link>
     </div> 
    </>
  )
}

export default BlogCard
