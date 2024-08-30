import React from 'react'
import { Link } from 'react-router-dom'
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import Zoom from 'react-reveal/Zoom';

function DCard({item:{id,image,title,desc,sidepara,paraImage_one,paraImage_two}}) {
  return (
    <>
    <Zoom>
      <div className="items">
        <div className="img">
            <img src={image} alt="" />
            <Link to={`/singlepage/${id}`} className='blogItem-link'>
                <i><FaExternalLinkSquareAlt/></i>
            </Link>
        </div>
        <div className="title">
            <h3>{title}</h3>
        </div>
      </div>
      </Zoom>
    </>
  )
}

export default DCard
