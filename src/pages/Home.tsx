import React, { useEffect, useState } from 'react'
import Navbaar from '../components/Navbaar'
import { Link } from 'react-router-dom'
import person from './person.png'
import warning from './warning.jpg'
import uandr from './uandr.jpg'
import cam from  './cam.webp'
import samay from './samay.jpg'
import ajeeb from './ajeeb.jpeg'
import nathu from './nathu.jpg'
 import nawaj from  './nawaj.jpeg'
 import kalo from './kalo.jpeg'
import unkil from './unkil.jpeg'
import {useAuth} from '../context/AuthContext.jsx'
const Home = () => {
  const auth =useAuth()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event:any) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  const calculateTransform = (x:any, y:any) => {
    const moveX = (x / window.innerWidth - 0.5) * 30; 
    const moveY = (y / window.innerHeight - 0.5) * 30;
    return `translate(${moveX}px, ${moveY}px)`;
  };


  

  return (
    <div id='home' className='w-screen overflow-hidden h-screen m-0 p-0'>
      <Navbaar/>
      <div className='h-[80vh] w-screen gap-8 overflow-hidden text-black flex flex-col items-center justify-center p-2 '>

        <img src={unkil} className='w-20 rounded-full' style={{position:"absolute", transition:"transform .1s ease-out", padding:"10px", top:150 ,transform: calculateTransform(mousePosition.x, mousePosition.y)}} />
        <img src={samay} className='w-20 rounded-full' style={{position:"absolute", transition:"transform .1s ease-out", padding:"10px", top:250, left:500,rotate:"50deg" ,transform: calculateTransform(mousePosition.x, mousePosition.y)}} />
        <img src={ajeeb} className='w-20 rounded-full' style={{position:"absolute", transition:"transform .1s ease-out", padding:"10px" ,top:400,right:350,rotate:"-40deg" ,transform: calculateTransform(mousePosition.x, mousePosition.y)}} />
        <img src={nathu} className='w-20 rounded-full' style={{position:"absolute", transition:"transform .1s ease-out", padding:"10px",top:380 ,transform: calculateTransform(mousePosition.x, mousePosition.y)}} />
        <img src={nawaj} className='w-20 rounded-full' style={{position:"absolute", transition:"transform .1s ease-out", padding:"10px",right:450,bottom:350,rotate:"-30deg" ,transform: calculateTransform(mousePosition.x, mousePosition.y)}} />
        <img src={kalo} className='w-20 rounded-full' style={{position:"absolute", transition:"transform .1s ease-out", padding:"10px",top:380,left:400,rotate:"10deg" ,transform: calculateTransform(mousePosition.x, mousePosition.y)}} />


        <h1 style={{color:`${auth.dark ? "white":"black"}`}} className=' flex flex-col items-center justify-center   text-[70px]'>TALK TO 
        <span style={{marginTop:"-30px",color:`${auth.dark ? "white":"black"}` }}> STRANGERS</span></h1>

        <h2 style={{fontFamily:"sf",color:`${auth.dark ? "white":"black"}`}}>Use Mingle to get paired randomly with another person online  to talk <span>one-on-one</span> </h2>

        <Link to='/dashboard' style={{fontFamily:"redis",color:`${auth.dark ? "black":"white"}`,background:`${auth.dark ? "white":"black"}`}} className='text-[30px] bg-black text-white p-2 rounded-3xl'>Let's Mingle</Link>

        <div id='info' className='flex w-full ' style={{fontFamily:"sf"}}>
        <div className='w-[25%] gap-4 h-[50px] p-2 flex items-center justify-center' style={{borderRadius:"40px"}}>
          <img style={{filter: `${auth.dark ? "grayscale(100%) invert(100%)" : "grayscale(0%) invert(0%)"}`}} src={person} className='w-8' />
          <p style={{color:`${auth.dark ? "white":"black"}`}}>Chat anonymously</p></div>
        <div className='w-[25%] gap-4 h-[50px] p-2 flex items-center justify-center' style={{borderRadius:"40px"}}>
          <img src={warning} className='w-8' />
          <p style={{color:`${auth.dark ? "white":"black"}`}}>Must be 16+</p></div>
        <div className='w-[25%] gap-4 h-[50px] p-2 flex items-center justify-center' style={{borderRadius:"40px"}}>
          <img src={uandr} className='w-8' /> 
          <p style={{color:`${auth.dark ? "white":"black"}`}}>Use and repeat</p></div>
        <div className='w-[25%] gap-4 h-[50px] p-2 flex items-center justify-center' style={{borderRadius:"40px"}}>
          <img src={cam}  className='w-8'/>
          <p style={{color:`${auth.dark ? "white":"black"}`}}>Videos are not monitored yet</p></div>
        </div>
      </div>
    </div>
  )
}

export default Home