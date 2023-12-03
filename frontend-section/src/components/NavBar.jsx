import React from 'react'
import Logo from '../assets/kenyan2.jpg'
import { NavLink, Outlet } from 'react-router-dom'


function NavBar() {
  return (
    
      <div className='container min-h-screen bg-gray-200 bg-opacity-2 bg-center'>
        <nav className='flex items-center'>
        <div className='w-14 m-4 flex flex-row'> 
        <img src={Logo}
        className='object-contain'
        
        />
        <h1 className='font-medium'>Mwananchi View</h1>
        </div>    
        
        <ul className='flex-1 text-center'>
            <li className='list-none inline-block font-medium px-5 m-5'>
              <NavLink to='distribution' className='p-2  hover:bg-slate-300 hover:rounded-md'>View Distribution Report</NavLink>
            </li>
            <li className='list-none inline-block font-medium px-5 m-5'>
            <NavLink to='submission'className='p-2  hover:bg-slate-300 hover:rounded-md'>Submit Grievance</NavLink>
                </li>
            <li className='list-none inline-block font-medium px-5 m-5'>
            <NavLink to='report' className='p-2 hover:bg-slate-300 hover:rounded-md'>Report System Problem</NavLink>
            </li>
            <li className='list-none inline-block font-medium px-5 m-5'>
            <button onClick={()=>navigate('/login')}className=' text-black rounded-md  font-medium inline-block my-4 ml-4'>Logout</button>
            </li>

        </ul>
        </nav>
        <Outlet/>
      
        
      
    </div>
    
  )
}

export default NavBar