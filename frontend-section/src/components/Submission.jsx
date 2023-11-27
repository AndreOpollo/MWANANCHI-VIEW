import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function Submission() {
    const URL = ('')//Post API Endpoint Here!!
    const form = useForm()
    const{register,formState,handleSubmit,watch,control,reset} = form
    const{errors,isDirty, isValid} = formState
    const onSubmit = data =>{
        axios.post(URL,data)
        console.log('form submitted',data)
    }

  return (
    
      <div className='bg-slate-800 border h-full w-15 flex-1 flex-col items-center border-slate-600 m-32 p-8 shadow-lg backdrop-filter backdrop-blur-lg  relative transition-all duration-200'>
            <h1 className='text-4xl text-white font-bold text-center mb-6' >Submission Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
          
            <div className='relative my-4'>
            <select  className='w-full'id="county" {...register('county')}>
                 <option className='text-blue-700' value="Nairobi">Nairobi</option>
                 <option value="Mombasa">Mombasa</option> 
                 <option value="Kiambu">Kiambu</option>
                 <option value="Kilifi">Kilifi</option>
                 <option value="Mombasa">Mombasa</option> 
                 <option value="Kiambu">Kiambu</option>
                 <option value="Kilifi">Kilifi</option>
                 <option value="Mombasa">Mombasa</option> 
                 <option value="Kiambu">Kiambu</option>
                 <option value="Kilifi">Kilifi</option>
                 <option value="Mombasa">Mombasa</option> 
                 <option value="Kiambu">Kiambu</option>
                 <option value="Kilifi">Kilifi</option>
             </select>
               
            </div>
       
            <div className='relative my-4'>
               <textarea type='text' id='submission' {...register('submission',{
                required:"Submission is required"
               })} className='block w-full py-2.5 px-0  text-sm text-white bg-transparent border-2  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'placeholder=''/>
               <label htmlFor='textarea' className='absolute text-sm text-white duration-300  transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Submit Problem</label>
               <p className='text-red-600 text-[10px]'>{errors.submission?.message}</p>
            </div>

            <button disabled={!isDirty || !isValid} className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit">Submit</button>
            </form>
           
       
        </div>
    
  )
}

export default Submission