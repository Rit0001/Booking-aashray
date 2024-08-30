import React from 'react'
import Cards from './Cards'
import '../popular/MostPopular.css';

function MostPopular() {
  return (
    <>
      <div className="popular top">
        <div className="full_container">
            <div className="heading">
                <h1>Most Popular Hotel</h1>
                <div className="line"></div>
            </div>
            <div className="content">
                <Cards/>
            </div>
        </div>
      </div>
    </>
  )
}

export default MostPopular
