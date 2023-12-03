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

  const charts = [
    { name: 'Line Chart', value: 'line-chart' },
    { name: 'Bar Chart', value: 'bar-chart' },
    { name: 'Pie Chart', value: 'pie-chart' },
    { name: 'Scatter Chart', value: 'scatter-chart' },
      { name: 'Dougnut Chart', value: 'Doughnut-chart' },

  ];
  const counties = [
    { name: "Baringo", value: "Baringo" },
    { name: "Bomet", value: "Bomet" },
    { name: "Bungoma", value: "Bungoma" },
    { name: "Busia", value: "Busia" },
    { name: "Elgeyo Marakwet", value: "ElgeyoMarakwet" },
    { name: "Embu", value: "Embu" },
    { name: "Garissa", value: "Garissa" },
    { name: "Homabay", value: "HomaBay" },
    { name: "Isiolo", value: "Isiolo" },
    { name: "Kajiado", value: "Kajiado" },
    { name: "Kakamega", value: "Kakamega" },
    { name: "Kericho", value: "Kericho" },
    { name: "Kiambu", value: "Kiambu" },
    { name: "Kilifi", value: "Kilifi" },
    { name: "Kirinyaga", value: "Kirinyanga" },
    { name: "Kisii", value: "Kisii" },
    { name: "Kisumu", value: "Kisumu" },
    { name: "Kitui", value: "Kitui" },
    { name: "Kwale", value: "Kwale" },
    { name: "Laikipia", value: "Laikipia" },
    { name: "Lamu", value: "Lamu" },
    { name: "Machakos", value: "Machakos" },
    { name: "Makueni", value: "Makueni" },
    { name: "Mandera", value: "Mandera" },
    { name: "Meru", value: "Meru" },
    { name: "Migori", value: "Migori" },
    { name: "Marsabit", value: "Marsabit" },
    { name: "Mombasa", value: "Mombasa" },
    { name: "Muranga", value: "Murang'a" },
    { name: "Nairobi", value: "Nairobi" },
    { name: "Nakuru", value: "Nakuru" },
    { name: "Nandi", value: "Nandi" },
    { name: "Narok", value: "Narok" },
    { name: "Nyamira", value: "Nyamira" },
    { name: "Nyandarua", value: "Nyandarau" },
    { name: "Nyeri", value: "Nyeri" },
    { name: "Samburu", value: "Samburu" },
    { name: "Siaya", value: "Siaya" },
    { name: "Taita-taveta", value: "TaitaTaveta" },
    { name: "Tana-river", value: "TanaRiver" },
    { name: "Tharaka-nithi", value: "TharakaNithi" },
    { name: "Trans-nzoia", value: "TransNzoia" },
    { name: "Turkana", value: "Turkana" },
    { name: "Uasin-gishu", value: "UasinGishu" },
    { name: "Vihiga", value: "Vihiga" },
    { name: "Wajir", value: "Wajir" },
    { name: "West-pokot", value: "West Pokot" },
    
  ];

  
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
  const[chartType,setChartType]=useState('')
  const [selectedChart, setSelectedChart] = useState("");
  const [chartOpen, setChartOpen] = useState(false);
  const [chartValue, setChartValue] = useState("");

   //County States
   const[countyId,setCountyId]=useState('')
   const[countyOpen,setCountyOpen]=useState(false)
  const[countySelected,setCountySelected]=useState('') 
  const [countyValue, setCountyValue] = useState("");

  //Chart Types
  const[lineChartData,setLineChartData]=useState({}) 
  const[barChartData,setBarChartData]=useState({})
  const [pieChartData, setPieChartData] = useState({});
  const [doughnutChartData, setDoughnutChartData] = useState({});
   const [scatterChartData, setScatterChartData] = useState({});

  const [data, setData] = useState({});
  

useEffect(()=>{
  const fetchData=async ()=>{
   await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${countyId}`)//PASTE URL HERE!!
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
  const labels =   Object.keys(data);
  const propertyValues = labels.map((label) => data[label]); 
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
 updateChart()
},[countyId,chartType])
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
        <div
          onClick={() => setCountyOpen(!countyOpen)}
          className={`bg-slate-300 w-full p-2 flex items-center justify-between rounded ${
            !countySelected && 'text-gray-700'
          }`}
        >
          {countySelected ? (countySelected.length > 25 ? countySelected.substring(0, 25) + '...' : countySelected) : 'Select County'}
          <BiChevronDown size={20} className={`${countyOpen && 'rotate-180'}`} />
        </div>
        <ul className={`bg-slate-500 mt-2 overflow-y-auto ${countyOpen ? 'max-h-32' : 'max-h-0'}`}>
          <div className='flex items-center px-2 sticky top-0 bg-white'>
            <AiOutlineSearch size={18} className='text-gray-700' />
            <input
              type='text'
              value={countyValue}
              onChange={(e) => setCountyValue(e.target.value.toLowerCase())}
              placeholder='Enter county name'
              className='placeholder:text-gray-700 p-2 outline-none'
            />
          </div>
          {counties.map((county) => (
            <li
              key={county.value}
              className={`p-2 text-sm hover:bg-sky-600 hover:text-white ${
                county.name.toLowerCase() === countySelected.toLowerCase() && 'bg-sky-600 text-white'
              } ${county.name.toLowerCase().startsWith(inputValue) ? 'block' : 'hidden'}`}
              onClick={() => {
                setCountySelected(county.name);
                setCountyId(county.value);
                setCountyOpen(false);
                console.log(countyId);
              }}
            >
              {county.name}
            </li>
          ))}
        </ul>
      </div>

      <div className='w-72 font-medium h-80 mt-3'>
        <div
          onClick={() => setChartOpen(!chartOpen)}
          className={`bg-slate-300 w-full p-2 flex items-center justify-between rounded ${!selectedChart && 'text-gray-700'}`}
        >
          {selectedChart ? (selectedChart.length > 25 ? selectedChart.substring(0, 25) + '...' : selectedChart) : 'Select Display'}
          <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
        </div>
        <ul className={`bg-slate-500 mt-2 overflow-y-auto ${open ? 'max-h-32' : 'max-h-0'}`}>
          <div className='flex items-center px-2 sticky top-0 bg-white'>
            <AiOutlineSearch size={18} className='text-gray-700' />
            <input
              type='text'
              value={chartValue}
              onChange={(e) => setChartValue(e.target.value.toLowerCase())}
              placeholder='Enter chart name'
              className='placeholder:text-gray-700 p-2 outline-none'
            />
          </div>
          {charts.map((chart) => (
            <li
              key={chart.value}
              className={`p-2 text-sm hover:bg-sky-600 hover:text-white ${
                chart.name.toLowerCase() === selected.toLowerCase() && 'bg-sky-600 text-white'
              } ${chart.name.toLowerCase().startsWith(inputValue) ? 'block' : 'hidden'}`}
              onClick={() => {
                setSelectedChart(chart.name);
                setChartType(chart.value);
                setChartOpen(false);
                console.log(chartType);
              }}
            >
              {chart.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <button onClick={handleDownloadPDF}>Download Chart as PDF</button> 
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
                  text: getCurrentTimeAndDate(),
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
                  position: 'below',
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
      </div>
    </div>

    <button onClick={handleDownloadPDF}>Download Chart as PDF</button> 
  </div>
  )
}

export default Distribution