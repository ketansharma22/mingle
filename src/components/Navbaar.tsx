import { Link } from 'react-router-dom'

const Navbaar = () => {
  return (
    <div className='w-screen border-b-2 border-black h-1/5 bg-blue-100 flex justify-center items-center '  id='navmain'>

      <div className='w-1/3 h-full flex items-center justify-center gap-20'>
      <Link className='w-max p-2 bg-blue-300 rounded-2xl' to='/'>Home</Link>
      <Link className='w-max p-2 bg-blue-300 rounded-2xl' to='/contact'>Contact</Link>
      </div>
      <div className=' flex items-center justify-center h-full w-1/3'>logo</div>
      <div className=' h-full w-1/3 flex items-center justify-center gap-12'>
          <Link className='w-max p-2 bg-blue-300 rounded-2xl' to='/login'>Login</Link>
          <Link className='w-max p-2 bg-blue-300 rounded-2xl' to='/signup'>Signup</Link>
      </div>  
      

    </div>
  )
}

export default Navbaar