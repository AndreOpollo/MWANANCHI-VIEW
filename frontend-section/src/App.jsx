import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className='text-black h-[100vh] flex justify-center items-center'>

      <Register/>
    </div>
  )
}

export default App
