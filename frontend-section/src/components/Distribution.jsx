import axios from 'axios'
import React, { useEffect, useState,useRef } from 'react'
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler ,BarElement} from "chart.js";
import { Line ,Bar,Pie,Doughnut,Scatter} from 'react-chartjs-2';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import Sidebar from './Sidebar';

function Distribution() {

  
  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,

    Title,
    Tooltip,
    Legend,
    Filler
  );
  const chartRef = useRef(null);


  //Chart states
  const[chartType,setChartType]=useState('bar-chart')
  

   //County States
   const[countyId,setCountyId]=useState('Nairobi')
   

  //Chart Types
  const[lineChartData,setLineChartData]=useState({}) 
  const[barChartData,setBarChartData]=useState({})
  const [pieChartData, setPieChartData] = useState({});
  const [doughnutChartData, setDoughnutChartData] = useState({});
   const [scatterChartData, setScatterChartData] = useState({});

  const [data, setData] = useState({});
  const handleChartType = (e) => {
    const selectedChartType = e.target.value;
    setChartType(selectedChartType);
    console.log('Submission success', selectedChartType);
  };

  const handleSelectedCounty = (e)=>{
    const selectedCounty = e.target.value
    setCountyId(selectedCounty)
    console.log('Submission success', selectedCounty)

  }
  

useEffect(()=>{
  const fetchData=async ()=>{
   await axios
    .get(`http://127.0.0.1:8000/servicenumber/${countyId}`)//PASTE URL HERE!!
    .then(
      response=>{
        console.log('Api',response.data)
        setData(response.data)
      }
    )
   if(data){
    updateChart()
   }

  }
  const updateChart =  ()=>{
    if(data){
  const labels =   Object.keys(data.prediction_counts);
  const propertyValues = labels.map((label) => data.prediction_counts[label]); 
  console.log("Object keys",labels)  
  console.log("Property",propertyValues)           
   switch(chartType){
  case 'line-chart':
    setLineChartData({
            labels,
            datasets:[
                {
                    label:'Revenue',
                    data:propertyValues,
                    fill: true,
                    borderColor: 'blue',
                    backgroundColor: 'white',
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
                    backgroundColor: 'blue',
                },
            ],
        })
        break
        case 'pie-chart':
        setPieChartData({
          labels,
          datasets: [
            {
              data: propertyValues,            
              backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
            },
          ],
        })
        break;
          case 'scatter-chart':
            setScatterChartData({
              datasets: [
                {
                  label: 'Scatter Data',
                  data: labels.map((label, index) => ({ x: index, y: propertyValues[index] })),
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
              ],
            });
            break;
          case 'doughnut-chart':
          setDoughnutChartData({
            labels,
            datasets: [
              {
                data: propertyValues,
                backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
              },
            ],
          });
          break;  
      default:
        break;
    
      }
    }
   }
  fetchData()
 
},[countyId,chartType,data])
const handleDownloadPDF = () => {
  // Use html2canvas to capture the chart as an image
  html2canvas(chartRef.current)
    .then((canvas) => {
      // Convert the canvas to a data URL
      const dataUrl = canvas.toDataURL('image/png');

      // Initialize jsPDF
      const pdf = new jsPDF();

      // Add the image to the PDF
      pdf.addImage(dataUrl, 'PNG', 10, 10, 190, 100);

      // Save or open the PDF
      pdf.save('chart.pdf');
    })
    .catch((error) => {
      console.error('Error capturing chart:', error);
    })}

   
  



  return (
    <div className='bg-slate-50 w-full h-full flex-1 flex-col items-center justify-center'>
    <div className='font-medium text-center text-[30px] m-0'>
      <p className='px-8'>{countyId} County Report</p>
    </div>
{/*County Dropdown  */}
    <div className='flex h-48 space-x-48 mx-24'>
      <div className='w-72 font-medium h-80 mt-3'>
      <select  className=' w-96 font-medium  p-1'value={countyId} onChange={handleSelectedCounty}> 
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

      <div className='w-72 font-medium h-80 mt-3'>
      <select  className=' w-96 font-medium  p-1'value={chartType} onChange={handleChartType}> 
                  <option disabled selected>Select Chart</option>              
                  <option value='line-chart'>Line Chart</option>
                  <option value='bar-chart'>Bar Chart</option>
                  <option value='pie-chart'>Pie Chart</option>
                  <option value='doughnut-chart'>Doughnut Chart</option>
                  <option value='scatter-chart'>Scatter Chart</option>
                  </select>
        
      </div>
    </div>
    
    <div className='w-full h-auto flex items-center justify-center'>
      <div className=' relative w-3/4 h-3/4' ref={chartRef} >
        {chartType === 'line-chart' && lineChartData && lineChartData.datasets && (
          <Line
            options={{
              responsive: true,
              minBarLength: 100,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: `${chartType}`,
                },
              },
            }}
            data={lineChartData}
          />
        )}

        {chartType === 'bar-chart' && barChartData && barChartData.datasets && (
          <Bar
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Bar Chart',
                },
              },
            }}
            data={barChartData}
          />
        )}

        {chartType === 'pie-chart' && pieChartData && pieChartData.datasets && (
          <Pie
            options={{
              responsive: true,
              radius:'60%',
              
              
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: false,
                  text: 'Revenue',
                },
              },
            }}
            data={pieChartData}
          />
        )}
        {
              chartType==='scatter-chart' && scatterChartData && scatterChartData?.datasets && (
                <Scatter
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
                data={scatterChartData}
                
                />
               )

            }
            {
              chartType==='doughnut-chart' && doughnutChartData && doughnutChartData?.datasets && (
                <Doughnut
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
                data={doughnutChartData}
                
                />
               )

            }
                  <button className='text-blue-900 font-semibold' onClick={handleDownloadPDF}>Download Chart as PDF</button> 
      </div>

    </div>

   
  </div>
  )
}

export default Distribution