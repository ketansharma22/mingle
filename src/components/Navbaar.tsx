import React from 'react'
import { Link } from 'react-router-dom'
import '../fonts.css'
import  mingle from './mingle.png'
const Navbaar = () => {
  return (
    <div className='w-screen h-[20vh] pr-[200px] flex items-center justify-center text-black gap-[50px] ' style={{fontFamily:"sf"}} id='navbaar'>
      <img src={mingle} className='w-40 ' style={{filter: 'grayscale(100%) invert(100%)'}} />
      <Link to='/'>Home</Link>
      <Link to='/About-us'>About us</Link>
    </div>
  )
}

export default Navbaar