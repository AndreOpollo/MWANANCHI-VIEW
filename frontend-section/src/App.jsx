import { useState,useEffect } from 'react'
import React from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Submission from './components/Submission'
import Sidebar from './components/Sidebar'
import { Outlet, Route, Routes } from 'react-router-dom'
import Distribution from './components/Distribution'
import Downloads from './components/Downloads'
import Bookmarks from './components/Bookmarks'
import Report from './components/Report'
import ProtectedRoute from './auth/ProtectedRoute'



function App() {
  const[isLoggedIn,setIsLoggedIn] = useState(true)
  useEffect(() => {
    // Check if the user is logged in based on cookies or session storage
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLoginSuccess = () => {
    // Update the isLoggedIn state based on the login attempt result
    setIsLoggedIn(true);
  };

  return (
    <div  className='flex'>
      {/* {isLoggedIn && <Sidebar/>} */}
      
     
      
      <Routes>
      <Route
          path="/login"
          element={
            <Login
              handleLoginAttempt={Login}
              handleLoginSuccess={handleLoginSuccess}
            />
          }
        />
       
         <Route
          path="sidebar"
          
              
          element={<ProtectedRoute element={<><Sidebar/>
          <div className='main-content'>
          <Outlet />
        </div></>} isLoggedIn={isLoggedIn} />}
        >
         <Route path='distribution' element={<Distribution/>}/>
        <Route path='download-history' element={<Downloads/>}/>
        <Route path='submission' element={<Submission/>}/>
        <Route path='bookmark' element={<Bookmarks/>}/>
        <Route path='report' element={<Report/>}/>
        </Route>
       
        <Route path='register' element={<Register/>}/>
       
        
      </Routes>
    </div>
  )
}

export default App
