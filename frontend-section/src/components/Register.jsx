import React from 'react'
import { useForm} from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { Axios } from 'axios'

function Register() {
    const form = useForm()
    const{register,formState,handleSubmit,watch,control,reset} = form
    const{errors}=formState
    const onSubmit = (data)=>{
        console.log('Form submitted',data)
        reset()
    }
  return (
    <div>
        <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
      <h1 className="text-4xl font-bold text-center mb-8">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="relative my-4">
            <input type="text" id='password' {...register('username',{
                required:'Username is required!'
            })}className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=" " />
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Username</label>
            <p className='text-red-600 text-[10px]'>{errors.username?.message}</p>
        </div>
        <div className="relative my-4">
            <input type="email" id='email' {...register('email',{
                required:'Email is required',
                pattern:{
                    value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message:'Enter a valid email'
                }
            })} className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=" " />
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Email</label>
            <p className='text-red-600 text-[10px]'>{errors.email?.message}</p>
        </div>
        <div className="relative my-4">
            <input type="password" id='password'{...register('password',{
                required:{
                    value:true,
                    message:'Password is required'
                },
                minLength:{
                    value: 8,
                    message:'Password should contain at least 8 characters'
                },
                pattern:{
                    value:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/,
                    message:'Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol!'
                }
            })} className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=" " />
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Password</label>
            <p className='text-red-600 text-[10px]'>{errors.password?.message}</p>

        </div>
        <div className="relative my-4">
            <input type="password" id='cpassword' {...register('cpassword',{
                required:{
                    value:true,
                    message:'Confirm password required!'
                },
                validate:(fieldValue)=>{
                    if(watch('password')!=fieldValue){
                        return 'Passwords do not match!'
                    } 
                }
            })}className="block w-72 py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=" " />
            <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
            <p className='text-red-600 text-[10px]'>{errors.cpassword?.message}</p>
        </div>
        <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit">Register</button>
       
        
      </form>
    </div>
    <DevTool control={control}/>

    </div>
  )
}

export default Register