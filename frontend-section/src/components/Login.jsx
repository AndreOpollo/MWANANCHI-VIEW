import React from 'react'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import {toast} from 'react-toastify';
import axios from 'axios'

function Login() {
    const form = useForm()
    const{register,formState,handleSubmit,control,reset} = form
   
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    const{errors} = formState
    const URL = ('http://127.0.0.1:8000/login/')/*PASTE URL HERE*/
    const navigate = useNavigate()
    const onSubmit = async (data) =>{
      try {
      const response= await axios.post(URL,data)
       if(response.data.status === 'success'){
       
        alert('Login successful!');
        reset()        
        navigate('/home')
        console.log('Login submitted successfully',response.data)
        }
         else{
          console.log(response.error);
          alert('Login failed. Please check your username or password!.');
       }
      } catch (error) {
        
        console.log('Error',error.message)
        
      }
       
        
    }
  return (
    <div className='container mx-auto bg-white'>
    <div className='flex h-screen items-center justify-center'>
        <div className=' bg-slate-900 border border-slate-600  rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200'>
            <h1 className='text-4xl text-white font-bold text-center mb-6' >Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className='relative my-4'>
                
               <input autoComplete='off'type='text' id='username' {...register('username',{
                required:"Username is required!!"
               })} className='block w-72 py-2.5 px-0  text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'placeholder=''/>
               <label htmlFor='username' className='absolute text-sm text-white duration-300  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Enter Username</label>
               <p className='text-red-600 text-[10px]'>{errors.username?.message}</p>
            </div>
       
            <div className='relative my-4'>
               <input type={showPassword ? 'text' : 'password'}
                id='password' {...register('password',{
                required:"Password is required"
               })} className='block w-72 py-2.5 px-0  text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'placeholder=''/>
               
               <label htmlFor='password' className='absolute text-sm text-white duration-300  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Enter Password</label>
               <p className='text-red-600 text-[10px]'>{errors.password?.message}</p>
            </div>
            <div className="flex gap-2 items-center">
                        <input type="checkbox" name="" id="" onClick={handleTogglePasswordVisibility}/>
                        <label htmlFor="Show Password">Show Password</label>
                    </div>
           

            <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit">Login</button>
            </form>
               
              <div className="flex justify-between items-center">
              <Link to='' className="text-blue-500">Forgot Password?</Link>
              <Link to='/register' className="text-blue-500">Create Account</Link>
               </div>
           
       
        </div>
        <DevTool control={control}/>
        </div>
        
        
    </div>
  )
}

export default Login