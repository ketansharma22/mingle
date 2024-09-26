import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useEffect } from 'react'
import logo from './mingle.png'
const Navbaar = () => {

  useEffect(()=>{
     gsap.fromTo('#io',{duration:1,x:-100,opacity:0,stagger:.2},{duration:1,x:0,opacity:1,stagger:.2})
  },[])

  

  return (
    <div className='w-screen border-b-2 border-black h-[20%] bg-gradient-to-r from-green-300 to-violet-900 flex justify-center items-center text-white'  id='navmain'>

      <div className='w-1/3 h-full flex items-center justify-center gap-20'>
      <Link id='io' className='w-max p-2  rounded-2xl text-black' to='/'>Home</Link>
      <Link id='io' className='w-max p-2  rounded-2xl text-black' to='/contact'>Contact</Link>
      </div>
      <div className=' flex items-center justify-center h-full w-1/3'><img className='w-28' src={logo} /></div>
      <div className=' h-full w-1/3 flex items-center justify-center gap-12'>
          <Link id='io' className='w-max p-2 rounded-2xl' to='/login'>Login</Link>
          <Link id='io' className='w-max p-2 rounded-2xl' to='/signup'>Signup</Link>
      </div>  
      

    </div>
  )
}

export default Navbaar