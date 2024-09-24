import { useNavigate } from 'react-router-dom';
import Navbaar from '../components/Navbaar'
import {gsap} from 'gsap';
import { useEffect } from 'react';
const Home = () => {

const navigate=useNavigate()
  const handleStart=(e:any)=>{
    e.preventDefault();
    navigate('/login');
  }
  useEffect(()=>{
    gsap.fromTo('#p',{duration:1,x:-100,opacity:0,stagger:.2},
      {duration:1,x:0,opacity:1,}
    )
    gsap.fromTo('#q',{duration:1,y:100,opacity:0,stagger:.2},
      {duration:1,y:0,opacity:1,}
    )
  },[])

  return (
    <div className='h-screen w-screen'>
      <Navbaar />
      <div  className='w-screen bg-neutral-700 h-4/5 p-2 flex items-center justify-center'>
        <div id='p' className=' opacity-100 rounded-lg w-3/5 bg-violet-100 h-5/6 p-3 flex items-center flex-col justify-center'>
        <p id='q'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi beatae nam perspiciatis. Ut assumenda quisquam, exercitationem illum natus voluptas sit doloribus rem expedita quibusdam non tenetur sequi debitis atque. Earum?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio at quas quo magni inventore nam quod magnam, sed aliquid ea ratione in iusto quis dolorem eveniet praesentium repudiandae incidunt.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nam quas odit veniam nulla et perspiciatis accusamus eius voluptatem. Deleniti, ea. Dolore, ratione? Perspiciatis facilis quidem nam modi assumenda atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempore quaerat molestiae aut beatae officia quidem eaque! Neque dolorem, ipsam animi sapiente blanditiis cum, ex ea, repudiandae repellat consequuntur iste!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, pariatur fugit. Minima et sint odit tenetur quae eum eius reiciendis. Laboriosam hic magnam iste! Alias, distinctio! Ratione possimus recusandae autem?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum voluptatem placeat distinctio nemo debitis unde, ex provident eum at, magnam cupiditate quaerat magni hic inventore, veniam vel voluptates beatae illum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aspernatur aperiam ullam nam quidem deserunt non voluptate quisquam beatae iste, officiis eligendi reprehenderit tempora expedita exercitationem sit vero cum nemo!
          </p>
          <button id='q' onClick={handleStart} className='w-max p-2 bg-blue-400 rounded-lg text-white mt-3 ' >Get Started</button>
        </div>
        
      </div>
    </div>
  ) 
}

export default Home