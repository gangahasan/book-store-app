import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BookDeatails from './pages/BookDeatails'
import Home from './pages/Home'
import Books from './pages/Books'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<Books />} />
        <Route path="/bookdetails/:id" element={<BookDeatails />} />
      </Routes>
    </>
  )
}

export default App
