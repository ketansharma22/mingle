import { useEffect, useState, } from 'react';
import logo from '../components/mingle.png'
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
const Signup = () => {
        useEffect(()=>{
            gsap.fromTo('#main',{duration:0.5,y:100,opacity:0,stagger:.2},
                {duration:.5,y:0,opacity:1,})
        },[])

  interface myobj{
    name:string,
    email:string,
    password:string,
}
const navigate=useNavigate()
const[showw,setShoww]=useState<boolean>(false);
const[data,setData]=useState<myobj>({
    name:"",
    email:"",
    password:"",
})
const handleShow=(e:any)=>{
    e.preventDefault();
    setShoww(!showw);
}

const handleSubmit=(e:any)=>{
    e.preventDefault();
    navigate('/dashboard')
}

return (
<div id='main' className='w-screen h-screen flex justify-center items-center  bg-neutral-900 flex-col'>
    <img className='w-60' src={logo} />
    <form id='main' onSubmit={handleSubmit} className=' border-solid border-2 border-gray flex flex-col justify-center items-center bg-blue-100 w-1/3 h-3/5 rounded-xl p-4 text-black gap-8 '>
        <div className='w-full flex-col flex gap-1 justify-center '>
          <label>Name</label>
          <input type='text' required placeholder='Name' className='p-1 rounded-lg text-black'/>
        </div>
        <div className='w-full flex-col flex gap-1 justify-center '>
        <label>Email</label>
        <input required type='email' placeholder='Email' className='p-1 rounded-lg text-black'/>
        </div>
        <div className=' w-full flex-col flex gap-2 justify-center '><label>Password</label>
        <input required type={showw? `text`:`password`} placeholder='Password' className=' rounded-lg p-1 text-black'/>
        <button onClick={handleShow} className='text-xs flex justify-end items-center pr-2'>{showw ? 'hide' :'show' }</button>
        </div>
        <div className='flex justify-center items-center gap-20'>
            <button  className= '  hover:bg-yellow-800 hover:translate-y-1  transition-all duration-200 bg-black p-2 pr-10 pl-10 w-max rounded-xl text-white'>Signup</button>
            <Link className='text-xs' to='/login' >Already have an account!!!</Link>
        </div>
        
        
    </form>
</div>
)
}

export default Signup