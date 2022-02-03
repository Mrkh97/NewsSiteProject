import { useEffect, useState } from 'react';
import Axios from 'axios'

import { BrowserRouter as Router, Routes, Route, useNavigate, useParams, Outlet } from 'react-router-dom';
import './App.css';

import Admin from './components/Admin'
import Login from './components/Login';
import Edit from './components/Edit';






const News = [
  { id: '0', title: "Covid: US reports record infections as Europe's Omicron cases also soar", news: 'The US and several European countries have reported their highest daily rises in Covid cases since the pandemic began, as the Omicron variant spreads.', imgSrc: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/431E/production/_122528171_mediaitem122528170.jpg' },
  { id: '1', title: 'Climate change: Storm clouds gather after COP26', news: "As well as a host of extreme, destructive events influenced by rising temperatures, the past 12 months have seen unprecedented political engagement on the issue, culminating in the COP26 summit in Glasgow in November.Progress was undoubtedly made and the overall thrust of the meeting was towards more rapid action on a whole host of measures to curb emissions.But there are now growing concerns that this momentum may dissipate over the coming months.The most grievous blow comes from the US.", imgSrc: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/C03A/production/_122501294_gettyimages-1285448530-1.jpg' },
  { id: '2', title: 'Reprehenderit 2 id ex amet quis adipisicing nostrud incididunt officia laboris cillum.', news: 'Velit aliquip sint ipsum aute labore consectetur anim veniam commodo adipisicing do. Laborum dolor do nisi dolor et laborum laborum. Ex consequat veniam minim ullamco magna consectetur laborum ea. Nulla eiusmod pariatur cillum qui aliquip elit cupidatat magna tempor. Incididunt eiusmod do nisi ex tempor est duis laboris. Excepteur aliqua sint cupidatat dolor eiusmod id velit velit labore aliquip deserunt eu officia. Duis velit enim nulla ea culpa dolor consequat exercitation pariatur mollit.Est culpa sint dolore labore nostrud excepteur elit officia laborum pariatur. Aliqua consectetur dolore reprehenderit et irure elit irure esse dolore quis aliquip laborum. Id dolor cillum qui ipsum. Aliqua sint do ea nisi.', imgSrc: 'https://source.unsplash.com/random' },
  { id: '3', title: 'Reprehenderit 3 id ex amet quis adipisicing nostrud incididunt officia laboris cillum.', news: 'Velit aliquip sint ipsum aute labore consectetur anim veniam commodo adipisicing do. Laborum dolor do nisi dolor et laborum laborum. Ex consequat veniam minim ullamco magna consectetur laborum ea. Nulla eiusmod pariatur cillum qui aliquip elit cupidatat magna tempor. Incididunt eiusmod do nisi ex tempor est duis laboris. Excepteur aliqua sint cupidatat dolor eiusmod id velit velit labore aliquip deserunt eu officia. Duis velit enim nulla ea culpa dolor consequat exercitation pariatur mollit.', imgSrc: 'https://source.unsplash.com/random' },
  { id: '4', title: 'Reprehenderit 4 id ex amet quis adipisicing nostrud incididunt officia laboris cillum.', news: 'Velit aliquip sint ipsum aute labore consectetur anim veniam commodo adipisicing do. Laborum dolor do nisi dolor et laborum laborum. Ex consequat veniam minim ullamco magna consectetur laborum ea. Nulla eiusmod pariatur cillum qui aliquip elit cupidatat magna tempor. Incididunt eiusmod do nisi ex tempor est duis laboris. Excepteur aliqua sint cupidatat dolor eiusmod id velit velit labore aliquip deserunt eu officia. Duis velit enim nulla ea culpa dolor consequat exercitation pariatur mollit.', imgSrc: 'https://source.unsplash.com/random' },
  { id: '5', title: 'Reprehenderit 5 id ex amet quis adipisicing nostrud incididunt officia laboris cillum.', news: 'Velit aliquip sint ipsum aute labore consectetur anim veniam commodo adipisicing do. Laborum dolor do nisi dolor et laborum laborum. Ex consequat veniam minim ullamco magna consectetur laborum ea. Nulla eiusmod pariatur cillum qui aliquip elit cupidatat magna tempor. Incididunt eiusmod do nisi ex tempor est duis laboris. Excepteur aliqua sint cupidatat dolor eiusmod id velit velit labore aliquip deserunt eu officia. Duis velit enim nulla ea culpa dolor consequat exercitation pariatur mollit.', imgSrc: 'https://source.unsplash.com/random' }
]


function Card(props) {
  const navigate = useNavigate();
  return <div className={'flex flex-col  mx-3.5 p-3 rounded-xl  bg-gradient-to-br from-white-50 to-white-15 shadow-2xl backdrop-blur-sm transition-all mt-5 card-style hover:bg-white-100 hover:shadow-sm hover:scale-105'} onClick={() => navigate('/bigcard/' + props.id)} >
    <div className='row-start-1 row-span-1 h-24'>
      <p className='text-2xl font-bold text-center'>{props.title}</p>
    </div>
    <div className={'row-start-2 row-span-1 h-64 overflow-auto '}>
      <p className='text-lg'>{props.news}</p>
    </div>
    <div className={'row-start-3 row-span-3 flex justify-center'}>
      <img src={props.src} className='image-style rounded-xl'></img>
    </div>
  </div>
}

function BigCard(props) {
  let params = useParams();
  
  const [item,setItem]=useState([])
  useEffect(()=>{
    fetch('https://localhost:7207/api/NewsItem/'+params.CardId)
    .then(response => response.json())
    .then(data => setItem(data))
    .catch(error => console.error('Unable to get items.', error));
  },[])
  return <div className='h-5/6 rounded-xl  bg-gradient-to-br from-white-50 to-white-15 shadow-2xl backdrop-blur-sm overflow-auto'>
    <div className='flex justify-center my-6'>
      <img src={item.imgSrc} className='rounded-xl h-96 xl:h-[30rem]'></img>
    </div>
    <div className='my-3'>
      <p className='text-2xl font-bold text-center '>{item.title}</p>
    </div>
    <div>
      <p className='text-lg px-9 py-5'>{item.text}</p>
    </div>
  </div>
}

function WeatherIcon(props) {
  switch (props.id) {
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" w-24 text-slate-800 flex h-full justify-center" viewBox="0 0 16 16">
        <path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-.753-8.499a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2z" />
      </svg>
      break;
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" w-24 text-blue-600 flex h-full justify-center" viewBox="0 0 16 16">
        <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z" />
      </svg>
      break;
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
    case 511:
    case 520:
    case 521:
    case 522:
    case 531:
      return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" w-24 text-blue-600 flex h-full justify-center" viewBox="0 0 16 16">
        <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 0 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z" />
      </svg>
      break;
    case 600:
    case 601:
    case 602:
    case 611:
    case 612:
    case 613:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" w-24 text-white-100 flex h-full justify-center" viewBox="0 0 16 16">
        <path d="M13.405 4.277a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973zM8.5 1.25a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1.25zM2.625 11.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm2.75 2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm-2.75-2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25z" />
      </svg>
      break;
    case 701:
    case 711:
    case 721:
    case 731:
    case 741:
    case 751:
    case 761:
    case 762:
    case 771:
    case 781:
      return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" w-24 text-gray-300 flex h-full justify-center" viewBox="0 0 16 16">
        <path d="M3 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm10.405-9.473a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 12H13a3 3 0 0 0 .405-5.973zM8.5 3a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 3z" />
      </svg>
      break;
    case 800:
      return <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class=" w-24 text-yellow-400 flex h-full justify-center" viewBox="0 0 16 16">
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
      </svg>
      break;
    case 801:
    case 802:
    case 803:
    case 804:
      return <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class=" w-24 text-slate-200 flex h-full justify-center" viewBox="0 0 16 16">
        <path d="M16 7.5a2.5 2.5 0 0 1-1.456 2.272 3.513 3.513 0 0 0-.65-.824 1.5 1.5 0 0 0-.789-2.896.5.5 0 0 1-.627-.421 3 3 0 0 0-5.22-1.625 5.587 5.587 0 0 0-1.276.088 4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5z" />
        <path d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.502 4.502 0 0 1 7 5zm3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492V9.5z" />
      </svg>
      break;
    default:
      return <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class=" w-24 text-yellow-400 flex h-full justify-center" viewBox="0 0 16 16">
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
      </svg>
      break;
  }


}

function WeatherCard(props) {
  const navigate = useNavigate()

  return <div className='flex flex-row justify-between px-10 py-5 weather-card shadow-2xl backdrop-blur-sm rounded-xl w-[20rem] h-[10rem] mt-3 bg-gradient-to-br from-white-30 to-white-10 transition-all hover:scale-105 hover:bg-white-100' onClick={() => navigate('/weather')}>
    <div className='flex flex-col'>
      <div className=' basis-1/2 flex justify-center items-center'>
        <p className=' text-3xl font-bold text-white-100'>Ankara</p>
      </div>
      <div className='basis-1/2 flex justify-center items-center'>
        <p className='text-3xl text-white-100 font-bold'>{props.temp}°C</p>
      </div>
    </div>
    <div>
      <WeatherIcon id={props.iconId} />
    </div>
  </div>
}

function WeathrtForcast(props) {
  let ss = new Date;
  ss.setTime(props.sunset*1000)
  
  let sr = new Date;
  sr.setTime(props.sunrise*1000)
  

function day(){

  switch (ss.getDay()) {
    case 0:
      return 'Sunday'
      break;
    case 1:
      return 'monday'
      break
    case 2:
      return 'tuesday'
      break
    case 3:
      return 'wednesday'
      break
    case 4:
      return 'thursday'
      break
    case 5:
      return 'friday'
      break
    case 6:
      return 'saturday'
      break
    default:
      return 'noDay'
      break;
  }
}

  return <div className=' flex flex-col items-center forcast-style mx-3.5  p-3 rounded-xl  bg-gradient-to-br from-white-50 to-white-15 shadow-2xl backdrop-blur-sm transition-all mt-5'>
    <div>
      <p className=' text-3xl mb-5 font-bold'>{day()}</p>
    </div>
    <div className='flex flex-row'>
      <div className=' mr-2'>
        <WeatherIcon id={props.iconId} />
      </div>
      <div>
        <p className='text-xl text-center mt-6'>{props.weather}</p>
      </div>
    </div>
    <div className='flex flex-row mt-5'>
      <div className='mr-1'>
        <div className='flex  justify-between'>
          <p >Day : </p>
          <p className=' text-sm relative top-1 mr-2'>{props.day}°C</p>
        </div>
        <div className='flex  justify-between mt-2'>
          <p>Night : </p>
          <p className=' text-sm relative top-1 ml-2 mr-2'>{props.night}°C</p>
        </div>
      </div>
      <div className=' ml-1'>
        <div className='flex  justify-between'>
          <p>Max : </p>
          <p className=' text-sm relative top-1'>{props.max}°C</p>
        </div>
        <div className='flex  justify-between mt-2'>
          <p>Min : </p>
          <p className=' text-sm relative top-1 ml-2'>{props.min}°C</p>
        </div>
      </div>
    </div>
    <div className='flex flex-row mt-10'>
      <div className='flex flex-row'>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-7 text-amber-400" viewBox="0 0 16 16">
          <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </div>
        <div>
          <p className='text-sm relative top-1 ml-2 mr-2'>{sr.toLocaleTimeString()}</p>
        </div>
      </div>
      <div className='flex flex-row'>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class=" w-7 text-orange-500" viewBox="0 0 16 16">
          <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </div>
        <div>
          <p className=' text-sm relative top-1 ml-2'>{ss.toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  </div>
}

function Weather() {

  const [forcast, setForcast] = useState([])
  useEffect(() => {
    Axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=39.9199&lon=32.8543&units=metric&appid=24587b07bb400a4a823e36075dcc2507").then((res) => {
      setForcast(res.data.daily);
    })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return <div className='flex flex-row h-3/6 my-20 overflow-auto'>
    {forcast.map((item) => <WeathrtForcast sunrise={item.sunrise} sunset={item.sunset} max={item.temp.max} min={item.temp.min} day={item.temp.day} night={item.temp.night} iconId={item.weather[0].id} weather={item.weather[0].description} />)}
  </div>



}

let time
setInterval(() => { time = new Date().toLocaleTimeString(); });


function App() {
  return <Router>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='' element={<Hi />} />
        <Route path='/bigcard/:CardId' element={<BigCard />} />
        <Route path='/weather' element={<Weather />} />
      </Route>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
  </Router>
}



function Hi() {
  const [item, setItem] = useState()
  const [items, setItems] = useState([{ id: '0', title: "Covid: US reports record infections as Europe's Omicron cases also soar", news: 'The US and several European countries have reported their highest daily rises in Covid cases since the pandemic began, as the Omicron variant spreads.', imgSrc: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/431E/production/_122528171_mediaitem122528170.jpg' }])

  useEffect(()=>{
    fetch('https://localhost:7207/api/NewsItem')
    .then(response => response.json())
    .then(data => setItems(data))
    .catch(error => console.error('Unable to get items.', error));
  },[])
  useEffect(()=>{
    fetch('https://localhost:7207/api/NewsItem/'+"1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Unable to get items.', error));
  },[])
  return <div className='flex flex-row'>{items.map((item) => <Card title={item.title} news={item.text} src={item.imgSrc} id={item.id} />)}</div>
}



function Home() {
  
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState()
  const [temp, setTemp] = useState()
  const [weatherId, setWeatherId] = useState(0)
  useEffect(() => {
    Axios.get('https://api.openweathermap.org/data/2.5/weather?q=ankara&units=metric&appid=24587b07bb400a4a823e36075dcc2507')
      .then(function (response) {
        // handle success
        setTemp(response.data.main.temp);
        setWeatherId(response.data.weather[0].id)

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [])

  
  


  useEffect(() => { setInterval(() => setSeconds(time), 1000); }, [])


  return (
    <div className='flex flex-col absolute h-full w-full  bg-gradient-to-r from-sky-500 to-indigo-500'>
      <div className=' basis-1/5 mx-36 flex flex-row justify-between'>
        <p className=' text-white-100 text-5xl mt-14 font-Pacifico cursor-pointer' onClick={() => navigate('/')}>News Site</p>
        <div >
          <WeatherCard temp={temp} iconId={weatherId} />
        </div>
        <p className='text-3xl flex justify-center items-center w-48 text-white-100 font-bold'>{seconds}</p>
      </div>

      <div className=' basis-4/5  mx-36 my-auto overflow-auto'>
        <Outlet />
      </div>


    </div>
  );
}

export default App;

