import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1 style={{color:"teal", padding:"20px"}}>Hello! User Welcome To the BookStore</h1>
        <Link href="#" style={{fontSize:"20px"}}>Know more</Link>
    </div>
  )
}

export default Home