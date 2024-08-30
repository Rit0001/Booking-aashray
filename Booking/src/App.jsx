import React from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Gallery from './components/gallery/Gallery'
import Destination from './components/destinations/Destination'
import SinglePage from './singlePages/SinglePage'
import Blog from './blog/Blog'
import BlogSingle from './blog/BlogSingle'
import Book from './contact/Book'


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/gallery' element={<Gallery/>}/>
     <Route path='/destination' element={<Destination/>}/>
     <Route path='/singlepage/:id' element={<SinglePage/>}/>
     <Route path='/blog' element={<Blog/>}/>
     <Route path='/blogsingle/:id' element={<BlogSingle/>}/>
     <Route path='/booking' element={<Book/>}/>
    </Routes>
    </>
  )
}
export default App
