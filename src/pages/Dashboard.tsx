// import Navbaar from "../components/Navbaar"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const navigator=useNavigate()
  const[name,setName]=useState("")
  const handleSubmit=(e:any)=>{
    e.preventDefault()
    console.log(name);
    navigator('/room')
  }
  return (
    <div className='w-screen h-screen bg-black text-white p-1 flex items-center justify-center'>
        {/* <Navbaar/> */}
        <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col gap-4" >
          <video autoPlay ></video>
          <input name="name" onChange={(e)=>setName(e.target.value)} value={name} type="text" required placeholder="name" className="p-2 w-96 text-black rounded-xl"/>
          <button type="submit" className="bg-gray-500 rounded-md p-2">Mingle</button>
        </form>
    </div>
  )
}

export default Dashboard