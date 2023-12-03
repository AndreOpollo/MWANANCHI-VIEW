import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function Submission() {
    const URL = ('')//Post API Endpoint Here!!
    const form = useForm()
    const{register,formState,handleSubmit,watch,control,reset} = form
    const{errors,isDirty, isValid} = formState
    const onSubmit = data =>{
        //axios.post(URL,data)
        console.log('form submitted',data)
    }


  return (
    
    <div className='container mx-auto bg-white'>
    <div className='flex h-screen items-center justify-center'>
        <div className=' bg-slate-900 border border-slate-600  rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200'>
            <h1 className='text-4xl text-white font-bold text-center mb-6' >Submission</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className='relative my-4'>
            <select  className=' w-96 font-medium  p-1'id="county" {...register('county')}> 
                  <option disabled selected>Select County</option>              
                  <option value='Baringo'>Baringo</option>
                  <option value='Bomet'>Bomet</option>
                  <option value='Bungoma'>Bungoma</option>
                  <option value='Busia'>Busia</option>
                  <option value='Elgeyo-Marakwet'>Elgeyo Marakwet</option>
                  <option value='Embu'>Embu</option>
                  <option value='Garissa'>Garissa</option>
                  <option value='Homabay'>HomaBay</option>
                  <option value='Isiolo'>Isiolo</option>
                  <option value='Kajiado'>Kajiado</option>
                  <option value='Kakamega'>Kakamega</option>
                  <option value='Kericho'>Kericho</option>
                  <option value='Kiambu'>Kiambu</option>
                  <option value='Kilifi'>Kilifi</option>
                  <option value='Kirinyaga'>Kirinyanga</option>
                  <option value='Kisii'>Kisii</option>
                  <option value='Kisumu'>Kisumu</option>
                  <option value='Kitui'>Kitui</option>
                  <option value='Kwale'>Kwale</option>
                  <option value='Laikipia'>Laikipia</option>
                  <option value='Lamu'>Lamu</option>
                  <option value='Machakos'>Machakos</option>
                  <option value='Makueni'>Makueni</option>
                  <option value='Mandera'>Mandera</option>
                  <option value='Meru'>Meru</option>
                  <option value='Migori'>Migori</option>
                  <option value='Marsabit'>Marsabit</option>
                  <option value='Mombasa'>Mombasa</option>
                  <option value='Muranga'>Murang'a</option>
                  <option value='Nairobi'>Nairobi</option>
                  <option value='Nakuru'>Nakuru</option>
                  <option value='Nandi'>Nandi</option>
                  <option value='Narok'>Narok</option>
                  <option value='Nyamira'>Nyamira</option>
                  <option value='Nyandarua'>Nyandarau</option>
                  <option value='Nyeri'>Nyeri</option>
                  <option value='Samburu'>Samburu</option>
                  <option value='Siaya'> Siaya</option>
                  <option value='Taita-taveta'>Taita Taveta</option>
                  <option value='Tana-river'>Tana River</option>
                  <option value='Tharaka-nithi'>Tharaka Nithi</option>
                  <option value='Trans-nzoia'>Trans Nzoia</option>
                  <option value='Turkana'>Turkana</option>
                  <option value='Uasin-gishu'>Uasin Gishu</option>
                  <option value='Vihiga'>Vihiga</option>
                  <option value='Wajir'>Wajir</option>
                  <option value='West-pokot'>West Pokot</option>
             </select>
               
            </div>
       
            <div className='relative my-4'>

            <textarea type='text' id='service' {...register('service',{
                required:"Service is required"
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

export default Submission