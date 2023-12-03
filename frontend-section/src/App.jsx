import { useState,useEffect } from 'react'
import React from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Submission from './components/Submission'
import Sidebar from './components/Sidebar'
import { Outlet, Route, Routes } from 'react-router-dom'
import Distribution from './components/Distribution'


import Report from './components/Report'
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'




function App() {
  

  return (
    <div  className='flex'>
      {/* <NavBar/> */}
      
     
      
      <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route
          path="login"
          element={
            <Login/>
          } />
       
         <Route
          path="home" 
          element={<NavBar/>}>
        <Route path='distribution' element={<Distribution/>}/>
        <Route path='submission' element={<Submission/>}/>
        <Route path='report' element={<Report/>}/>
             
        </Route>
       
        <Route path='register' element={<Register/>}/>
       
        
      </Routes>
    </div>
  )
}

export default App
