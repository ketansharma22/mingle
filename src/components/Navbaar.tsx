import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../fonts.css'
import './Navbaar.css'
import {useAuth} from '../context/AuthContext.jsx'
import  mingle from './mingle.png'
const Navbaar = () => {
const auth=useAuth()

  
  const[dark,setDark]=useState<Boolean>(false)
  return (
    <div className='w-screen h-[20vh] pr-[200px] flex items-center justify-center text-[18px]  text-black gap-[50px]  '  style={{fontFamily:"sf",background:`${auth.dark ? "black" :""}`,color:`${auth.dark ? "white" :""}`}} id='navbaar'>
      <img src={mingle} className='w-40 ' style={{filter: `${auth.dark ? "grayscale(0%) invert(0%)" : "grayscale(100%) invert(100%)"}`}} />
      <Link to='/'>Home</Link>
      <Link to='/About-us'>About us</Link>
      {/* <div className='flex items-center justify-center gap-2 ml-20'>
        <p>Light</p>
        <label id="switch">
            <input type="checkbox" onClick={auth.toggleTheme}   />
            <span id="slider"></span>
          </label>
        <p>Dark</p>
      </div> */}
    </div>
  )
}

export default Navbaar