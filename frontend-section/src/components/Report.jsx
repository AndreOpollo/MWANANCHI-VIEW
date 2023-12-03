import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function Report() {
  const URL = ('http://127.0.0.1:8000/reportproblem/')//Post API Endpoint Here!!
  const form = useForm()
  const{register,formState,handleSubmit,watch,control,reset} = form
  const{errors,isDirty, isValid} = formState
  const onSubmit = data =>{
    axios.post(URL,data)
    console.log('Form submitted',data)
  }
  return (
    
    <div className='container mx-auto bg-white'>
    <div className='flex h-screen items-center justify-center'>
        <div className=' bg-slate-900 border border-slate-600  rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200'>
            <h1 className='text-4xl text-black font-bold text-center mb-6' >Report System Challenge</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
       
            <div className='relative my-4'>

            <textarea type='text' id='submission' {...register('submission',{
                required:"Submssion is required"
               })} className='block w-96 py-2.5 px-0  text-sm text-white bg-transparent border-2  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'placeholder=''/>
               <label htmlFor='textarea' className='' placeholder='Submit Problem'></label>
               <p className='text-red-600 text-[10px]'>{errors.submission?.message}</p>
               </div>
           

            <button disabled={!isDirty || !isValid} className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit">Submit</button>
            </form>
            </div>
            </div>
           
       
        </div>
    
    
  )
}

export default Report