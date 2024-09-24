import { useNavigate } from 'react-router-dom';
import Navbaar from '../components/Navbaar'
const Home = () => {

const navigate=useNavigate()
  const handleStart=(e:any)=>{
    e.preventDefault();
    navigate('/login');
  }

  return (
    <div className='h-screen w-screen'>
      <Navbaar />
      <div className='w-screen bg-blue-100 h-4/5 p-2 flex items-center justify-center'>
        <div className='w-3/5 bg-white h-5/6 p-3 flex items-center flex-col justify-center'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi beatae nam perspiciatis. Ut assumenda quisquam, exercitationem illum natus voluptas sit doloribus rem expedita quibusdam non tenetur sequi debitis atque. Earum?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio at quas quo magni inventore nam quod magnam, sed aliquid ea ratione in iusto quis dolorem eveniet praesentium repudiandae incidunt.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus nam quas odit veniam nulla et perspiciatis accusamus eius voluptatem. Deleniti, ea. Dolore, ratione? Perspiciatis facilis quidem nam modi assumenda atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempore quaerat molestiae aut beatae officia quidem eaque! Neque dolorem, ipsam animi sapiente blanditiis cum, ex ea, repudiandae repellat consequuntur iste!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, pariatur fugit. Minima et sint odit tenetur quae eum eius reiciendis. Laboriosam hic magnam iste! Alias, distinctio! Ratione possimus recusandae autem?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum voluptatem placeat distinctio nemo debitis unde, ex provident eum at, magnam cupiditate quaerat magni hic inventore, veniam vel voluptates beatae illum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aspernatur aperiam ullam nam quidem deserunt non voluptate quisquam beatae iste, officiis eligendi reprehenderit tempora expedita exercitationem sit vero cum nemo!
          </p>
          <button onClick={handleStart} className='w-max p-2 bg-blue-400 rounded-lg text-white mt-3 ' >Get Started</button>
        </div>
        
      </div>
    </div>
  ) 
}

export default Home