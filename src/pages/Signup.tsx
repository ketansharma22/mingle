import { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
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
<div className='w-screen h-screen flex justify-center items-center  bg-blue-200'>
    <form onSubmit={handleSubmit} className=' border-solid border-2 border-gray flex flex-col justify-center items-center bg-blue-100 w-1/3 h-3/5 rounded-xl p-4 text-black gap-8 '>
        <div className='w-full flex-col flex gap-1 justify-center '>
          <label>Name</label>
          <input type='text' placeholder='Name' className='p-1 rounded-lg text-black'/>
        </div>
        <div className='w-full flex-col flex gap-1 justify-center '>
        <label>Email</label>
        <input type='email' placeholder='Email' className='p-1 rounded-lg text-black'/>
        </div>
        <div className=' w-full flex-col flex gap-2 justify-center '><label>Password</label>
        <input type={showw? `text`:`password`} placeholder='Password' className=' rounded-lg p-1 text-black'/>
        <button onClick={handleShow} className='text-xs flex justify-end items-center pr-2'>{showw ? 'hide' :'show' }</button>
        </div>
        <button  className='bg-black p-2 pr-10 pl-10 w-max rounded-xl text-white'>Signup</button>
        
    </form>
</div>
)
}

export default Signup