import React from 'react'
import {useForm} from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

function Login() {
    const form = useForm()
    const{register,formState,handleSubmit,control} = form
    const{errors} = formState

    const onSubmit = data =>{
        console.log('Form submitted',data)
    }
  return (
    <div>
        <div className='bg-slate-800 border border-slate-600  rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200'>
            <h1 className='text-4xl text-white font-bold text-center mb-6' >Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className='relative my-4'>
                
               <input type='text' id='username' {...register('username',{
                required:"Username is required!!"
               })} className='block w-72 py-2.5 px-0  text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'placeholder=''/>
               <label htmlFor='username' className='absolute text-sm text-white duration-300  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Enter Username</label>
               <p className='text-red-600 text-[10px]'>{errors.username?.message}</p>
            </div>
       
            <div className='relative my-4'>
               <input type='password' id='password' {...register('password',{
                required:"Password is required"
               })} className='block w-72 py-2.5 px-0  text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'placeholder=''/>
               <label htmlFor='password' className='absolute text-sm text-white duration-300  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Enter Password</label>
               <p className='text-red-600 text-[10px]'>{errors.password?.message}</p>
            </div>

            <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit">Login</button>
            </form>
           
       
        </div>
        <DevTool control={control}/>

        
        
    </div>
  )
}

export default Login