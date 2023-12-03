import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Control from '../assets/control.png'
import kenyan from '../assets/kenyan2.jpg'
import { GoGraph } from "react-icons/go";
import { BiErrorCircle } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";







function Sidebar() {
    const [open, setOpen] = useState(true);

  return (
    <div
    className={` ${
      open ? "w-72" : "w-20 "
    } bg-slate-200 h-screen p-5  pt-8 relative duration-300`}
  >
    <img
      src={Control}
      className={`absolute cursor-pointer -right-3 top-9 w-7 border-purple-600
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
        className={`text-black origin-left font-medium text-xl duration-200 ${
          !open && "scale-0"
        }`}
      >
        MwananchiView
      </h1>
    </div>
    <ul className="pt-6">
      
        <Link to='distribution'className= 'flex  rounded-md mt-4 p-2 cursor-pointer hover:bg-slate-300 hover:rounded-full text-black text-sm font-semibold items-center gap-x-4'>
          <GoGraph size={35} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            View Distribution                        
          </span>
        </Link>
        <Link to='submission' className= 'flex  rounded-md mt-4 p-2 cursor-pointer hover:bg-slate-300 hover:rounded-full  text-black font-semibold text-sm items-center gap-x-4'>
          <BiErrorCircle size={32}/>
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Submit Grievance                       
          </span>
        </Link>
        <Link to='download'className= 'flex  rounded-md mt-4 py-1 px-2 cursor-pointer hover:bg-slate-300 hover:rounded-full text-black text-sm font-semibold items-center gap-x-4'>
          <FaRegBookmark size={32}/>
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Download History                     
          </span>
        </Link>
        <Link to='report' className= 'flex  rounded-md mt-4 p-2 cursor-pointer hover:bg-slate-300 text-black text-sm font-semibold items-center gap-x-4'>
          <BiErrorCircle size={35} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Report Problem                  
          </span>
        </Link>

        
    </ul>
    
  </div>
  )
}

export default Sidebar