import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Distribution() {
  const[countyId,setCounty]=useState('Nairobi')
  const[lineChartData,setLineChartData]=useState({}) 
  const[barChartData,setBarChartData]=useState({})
  const [data, setData] = useState({});
  const[chartType,setChartType]=useState('')

  const handleChartTypeChange = (e)=>{
    const selectedChartType = e.target.value;
    setChartType(selectedChartType);
    console.log('select successfull',selectedChartType)
  }
  const handleCountyChange = (e)=>{
    const selectedCounty = e.target.value
    setCounty(selectedCounty)
    console.log('Submit successful',selectedCounty)
   // console.log('URL',url)
  }
useEffect(()=>{
  const fetchData=()=>{
    axios
    .get(`https://jsonplaceholder.typicode.com/posts/${countyId}`)//PASTE URL HERE!!
    .then(
      response=>{
        console.log('Api',response.data)
        setData(response.data)
      }
    )
   

  }
  const updateChart = ()=>{
    if(data){
  const labels = Object.keys(data);
  const propertyValues = labels.map((label) => data[label]);            
      switch(chartType){
         case 'line-chart':
          setLineChartData({
            labels,
            datasets:[
                {
                    label:'Revenue',
                    data:propertyValues,
                    fill: true,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],
        })
        break
        case 'bar-chart':
          setBarChartData({
            labels:labels,
            datasets:[
                {
                    label:'Revenue',
                    data:propertyValues,
                    fill: true,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],
        })
        break
      }
    }
  }
  fetchData()
  //updateChart()
},[countyId,chartType])

   
  



  return (
    <div className='container mx-auto'>
    
    <div className='flex flex-row items-center justify-center'>
        <div className=''>
                <select value={chartType} onChange={handleChartTypeChange}>
                    <option value="bar-chart">Bar Graph</option>
                    <option value="line-chart">Line Graph</option>
                    <option value="scatter-chart">Scatter Map</option>
                </select>
            
        </div>
        <div>
            
                <select value={countyId} onChange={handleCountyChange} >
                  <option value='Baringo'>Baringo</option>
                  <option value='Bomet'>Bomet</option>
                  <option value='Bungoma'>Bungoma</option>
                  <option value='Busia'>Busia</option>
                  <option value='Elgeyo-marakwet'>Elgeyo Marakwet</option>
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
                  <option value='Uasin-gishu'>Uasin Gishu</option>

                </select>
            
        </div>
    </div>
    <p>{countyId}</p>
    <div className='w-[900px]'>
            
            {
              chartType==='line-chart' && lineChartData && lineChartData?.datasets && (
                <Line
                options={ {
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                      title: {
                        display: true,
                        text: 'Revenue',
                      },
                    },
                  }} 
                data={lineChartData}
                
                />
               )

            }
            {
              chartType==='bar-chart' && barChartData && barChartData?.datasets && (
                <Bar
                options={ {
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                      title: {
                        display: true,
                        text: 'Revenue',
                      },
                    },
                  }} 
                data={barChartData}
                
                />
               )

            }
                          
        </div>

    </div>
  )
}

export default Distribution