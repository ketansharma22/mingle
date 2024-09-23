import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Contact from './pages/Contact.tsx'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
function App() {
  return(
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default App
