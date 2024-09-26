import { useNavigate } from 'react-router-dom';
import Navbaar from '../components/Navbaar'
import {gsap} from 'gsap';
import { useEffect,useRef,useLayoutEffect } from 'react';
const Home = () => {

  const colors = [ "black", "#557", "#000"];
  const containerRef = useRef(null);



  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    colors.forEach((color, index) => {
      tl.to(containerRef.current, {
        backgroundColor: color,
        duration: 1,
        ease: "power2.inOut",
      }, index * 0.5);
    });

    return () => {
      tl.kill();
    };
  }, []);

const navigate=useNavigate()
  const handleStart=(e:any)=>{
    e.preventDefault();
    navigate('/login');
  }
  useEffect(()=>{
    gsap.fromTo('#p',{duration:.8,x:-100,opacity:0,stagger:.2},
      {duration:.8,x:0,opacity:1,}
    )
    gsap.fromTo('#q',{duration:.8,y:100,opacity:0,stagger:.2},
      {duration:.8,y:0,opacity:1,}
    )
  },[])

  return (
    <div className='h-max w-screen'>
      <Navbaar />
      <div ref={containerRef}  className='w-screen h-[650px] bg-black text-white p-1 flex overflow-x-hidden  '>
        <div className='w-2/3 h-full text-black flex items-center justify-center '>
            <h1 id='p' className='text-[220px]  bg-clip-text text-transparent bg-gradient-to-r from-green-100 to-violet-900'>MINGLE</h1>
        </div>
        <div className='w-1/3 h-full flex flex-col mr-6 justify-center items-center'>
        <h2 id='q'  className='bg-clip-text text-transparent bg-gradient-to-r from-green-100 to-violet-900 text-[30px] '>Are you tired of the same old social media routine? Want to break free from the constraints of traditional online interactions? <span className='text-yellow-700'>Mingle</span> is here to shake things up! Our platform offers a unique opportunity to connect with strangers from diverse backgrounds and interests</h2>
        <button id='q' onClick={handleStart} className='w-max p-2 bg-white rounded-lg text-violet-700 mt-3 hover:text-green-700 transition-all ' >Get Started</button>
        </div>
       </div>
    </div>
  ) 
}

export default Home