import React from 'react'
import { useState } from 'react'
import { Link} from 'react-router-dom'
import Logo from '../assets/logo.png'
import Control from '../assets/control.png'
import kenyan from '../assets/kenyan2.jpg'




function Sidebar() {
    const [open, setOpen] = useState(true);
   
  return (
    <div
    className={` ${
      open ? "w-71" : "w-20 "
    } bg-slate-900 h-screen p-5  pt-8 relative duration-300`}
  >
    <img
      src={Control}
      className={`absolute cursor-pointer -right-3 top-0 w-7 m-1 border-purple-600
       border-2 rounded-full  ${!open && "rotate-180"}`}
      onClick={() => setOpen(!open)}
    />
    <div className="flex gap-x-4 items-center">
      <img
        src={kenyan}
        className={`cursor-pointer duration-500 object-fit h-10 w-15 ${
          open && "rotate-[360deg]"
        }`}
      />
      <h1
        className={`text-white origin-left font-medium text-xl duration-200 ${
          !open && "scale-0"
        }`}
      >
        MwananchiView
      </h1>
    </div>
    <ul className="pt-6">
      
        <Link to='distribution'className= 'flex  rounded-md mt-4 p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm font-semibold items-center gap-x-4'>
          <img src={Logo}/>
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            View Distribution                        
          </span>
        </Link>
        <Link to='submission'className= 'flex  rounded-md mt-4 p-2 cursor-pointer hover:bg-light-white text-gray-300 font-semibold text-sm items-center gap-x-4'>
          <img src={Logo} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Submit Grievance                       
          </span>
        </Link>
        <Link to='bookmarks' className= 'flex  rounded-md mt-4 p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm font-semibold items-center gap-x-4'>
          <img src={Logo} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Bookmarks                      
          </span>
        </Link>
        <Link to = 'download-history' className= 'flex  rounded-md mt-4 p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm font-semibold items-center gap-x-4'>
          <img src={Logo} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Download History                  
          </span>
        </Link>
        <Link to = 'report-problem' className= 'flex  rounded-md mt-4 p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm font-semibold items-center gap-x-4'>
          <img src={Logo} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Report Problem                  
          </span>
        </Link>
    
    </ul>
   
    
  </div>
  )
}

export default Sidebar