import React from 'react'
import HeadTitle from '../../HeadTitle/HeadTitle'
import Card from './Card'
import GalleryData from './GalleryData'
import '../gallery/Gallery.css'


function Gallery() {
  return (
    <>
     <HeadTitle/> 
     <div className="gallery top">
        <div className="container grid">
            {
                GalleryData.map((value)=>{
                    return(
                        <Card images={value.img} title={value.title}/>
                    )
                })
            }
         <Card/>   
        </div>
     </div>
    </>
  )
}

export default Gallery
