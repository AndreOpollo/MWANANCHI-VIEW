import { useState } from 'react'
import React from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Submission from './components/Submission'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Distribution from './components/Distribution'
import Downloads from './components/Downloads'
import Bookmarks from './components/Bookmarks'
import Report from './components/Report'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className='flex'>
     
      
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='sidebar'element={<Sidebar/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='sidebar/distribution' element={<Distribution/>}/>
        <Route path='download-history' element={<Downloads/>}/>
        <Route path='submission' element={<Submission/>}/>
        <Route path='bookmarks' element={<Bookmarks/>}/>
        <Route path='report-problem' element={<Report/>}/>
        
      </Routes>
    </div>
  )
}

export default App
