import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Distribution() {
  const[countyId,setCounty]=useState('')
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
    const baseURL = 'api:';//PASTE ENDPOINT HERE
    const url = `${baseURL}/${selectedCounty}`;
    console.log('Submit successful',selectedCounty)
    console.log('URL',url)
  }
useEffect(()=>{
  const fetchData = async()=>{
    response = await axios.get(url)
    const data = response.data
    setData(data)

  }
  fetchData
},[countyId])

  useEffect(()=>{
    
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
      updateChart()
         
      

   
    console.log('Render on county or chartType change')
  },[countyId,chartType,data])

  
    
  



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
                  <option value='baringo'>Baringo</option>
                  <option value='bomet'>Bomet</option>
                  <option value='bungoma'>Bungoma</option>
                  <option value='busia'>Busia</option>
                  <option value='elgeyo-marakwet'>Elgeyo Marakwet</option>
                  <option value='embu'>Embu</option>
                  <option value='garissa'>Garissa</option>
                  <option value='homabay'>HomaBay</option>
                  <option value='isiolo'>Isiolo</option>
                  <option value='kajiado'>Kajiado</option>
                  <option value='kakamega'>Kakamega</option>
                  <option value='kericho'>Kericho</option>
                  <option value='kiambu'>Kiambu</option>
                  <option value='kilifi'>Kilifi</option>
                  <option value='kirinyaga'>Kirinyanga</option>
                  <option value='kisii'>Kisii</option>
                  <option value='kisumu'>Kisumu</option>
                  <option value='kitui'>Kitui</option>
                  <option value='kwale'>Kwale</option>
                  <option value='laikipia'>Laikipia</option>
                  <option value='lamu'>Lamu</option>
                  <option value='machakos'>Machakos</option>
                  <option value='makueni'>Makueni</option>
                  <option value='mandera'>Mandera</option>
                  <option value='meru'>Meru</option>
                  <option value='migori'>Migori</option>
                  <option value='marsabit'>Marsabit</option>
                  <option value='mombasa'>Mombasa</option>
                  <option value='muranga'>Murang'a</option>
                  <option value='nairobi'>Nairobi</option>
                  <option value='nakuru'>Nakuru</option>
                  <option value='nandi'>Nandi</option>
                  <option value='narok'>Narok</option>
                  <option value='nyamira'>Nyamira</option>
                  <option value='nyandarua'>Nyandarau</option>
                  <option value='nyeri'>Nyeri</option>
                  <option value='samburu'>Samburu</option>
                  <option value='siaya'> Siaya</option>
                  <option value='taita-taveta'>Taita Taveta</option>
                  <option value='tana-river'>Tana River</option>
                  <option value='tharaka-nithi'>Tharaka Nithi</option>
                  <option value='trans-nzoia'>Trans Nzoia</option>
                  <option value='turkana'>Turkana</option>
                  <option value='uasin-gishu'>Uasin Gishu</option>
                  <option value='vihiga'>Vihiga</option>
                  <option value='wajir'>Wajir</option>
                  <option value='west-pokot'>West Pokot</option>
                  <option value='uasin-gishu'>Uasin Gishu</option>

                </select>
            
        </div>
    </div>
    <p>{countyId}</p>
    <div className='w-[900px]'ref={chartRef}>
            
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