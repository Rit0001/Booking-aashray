import React, { useState } from 'react'
import DCard from './DCard'
import SData from './SData'

function AllItem() {
    const[items,setItem]=useState(SData)
  return (
    <>
    <div className="gallery desi mtop">
        <div className="container">
            <div className="content grid">
                {
                    items.map((item)=>{
                        return <DCard key={item.id} item={item}/>
                    })
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default AllItem
