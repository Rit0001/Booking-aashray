import React from 'react'
import '../HeadTitle/HeadTitle.css'
import { Link, useLocation } from 'react-router-dom'

function HeadTitle() {
    const location=useLocation();
  return (
    <>
      <section className='image-heading'>
        <div className="container">
            <h1>{location.pathname.split("/")[1]}</h1>
            <button>
                <Link to='/'>Home / </Link>
                <span>{location.pathname.split("/")[1]}</span>
            </button>
        </div>
      </section>
    </>
  )
}

export default HeadTitle
