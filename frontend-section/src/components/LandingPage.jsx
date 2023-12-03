import React from 'react'
import BgImage from '../assets/bgImage.jpg'
import Logo from '../assets/kenyan2.jpg'
import { useNavigate } from 'react-router'

function LandingPage() {
    const navigate = useNavigate()
  return (
    <div className='container min-h-screen bg-gray-200 bg-opacity-2 bg-center'>
        <nav className='flex items-center'>
        <div className='w-14 m-4 flex flex-row'> 
        <img src={Logo}
        className='object-contain'
        
        />
        <h1 className='font-medium'>Mwananchi View</h1>
        </div>    
        
        <ul className='flex-1 text-end'>
            <li className='list-none inline-block font-medium px-5 m-5'>
                <a href='#' className='px-2'>Home</a>
            </li>
            <li className='list-none inline-block font-medium px-5 m-5'>
                <a href='#' className='px-2'>About</a>
                </li>
            <li className='list-none inline-block font-medium px-5 m-5'>
                <a href='#' className='px-2'> Contacts</a>
                </li>
        </ul>
        </nav>
        <div className='container mx-auto text-black my-32 max-w-xl text-center'>
            <h1 className='text-4xl font-bold '>
                Post services affecting you and get real-time visualization 
            </h1>
            <button onClick= {()=>navigate('/register')}className='bg-black text-white rounded-md py-3 px-8 font-medium inline-block my-4 mr-4 item-start'>Get Started</button>
            <button onClick={()=>navigate('/login')}className='bg-black text-white rounded-md py-3 px-8 font-medium inline-block my-4 ml-4'>Login Now</button>
        </div>
        
      
    </div>
  )
}

export default LandingPage