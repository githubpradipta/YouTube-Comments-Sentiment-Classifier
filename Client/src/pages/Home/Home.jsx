import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SendIcon from '../../../assets/icons/sendIcon'
import SearchIcon from '../../../assets/icons/searchIcon'
import './Home.css'
import bgIMG from '../../../assets/image/yt.png'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const [search, setSearch] = useState(false)
  const [url, setURL] = useState({})
  const [prediction, setPrediction] = useState({})

  const navigate = useNavigate();

  const openSearchBox = () => {
    setSearch(true);

  }

  const getData = (e) => {
    const { name, value } = e.target;
    setURL({ url: value })
  }

  const submit = () => {
    axios.post('http://127.0.0.1:8000/api/predict/',url)
    .then(res=>{
  
      setPrediction(res.data.prediction);
      navigate('/dashboard', {state:res.data.prediction});
    })
    .catch(err=>{
      console.log(err);
      
    })
  }

  return (
    <div className='home gradientBG bg-neutral-900 min-h-screen relative overflow-hidden'>
      <div className="content py-8 pt-20 px-6 z-10">
        <div className="heading">
          <h1 className="text-4xl text-gray-300 font-bold flex flex-col items-center gap-4">
            <div className="span">Analyze your</div>
            <span className='text-red-700 text-[55px] lg:text-[80px]'>YouTube</span>
            <div className="text-2xl ms-2">videos</div>
          </h1>
          <p className="text-normal text-gray-300 px-10 text-center mt-6">
            Search by your video URL and get an analysis of it's comments
          </p>
        </div>

        <div className="form my-6 mt-24 w-full flex justify-center z-10 relative">
          <div className={`searchBar px-6 py-2 rounded-[23px] flex items-center border-[1px] border-red-600 transition-all ease ${search ? 'w-full lg:w-1/2' : 'w-auto hover:bg-red-600 hover:cursor-pointer'}`} onClick={() => { openSearchBox(); }}>
            <SearchIcon />
            <input type="text" className={`bg-transparent text-gray-300 outline-none w-full transition-all ease placeholder: font-semibold ${search ? 'block' : 'hidden'}`} placeholder='Search With URL'
              onChange={getData}
            />
            <div className={`${search ? 'hidden' : 'block'} text-gray-300 ml-2 text-xl font-semibold transition-all ease`}>Search</div>
            <div className='send cursor-pointer' onClick={() => { submit(); }}>
              <SendIcon className={`${search ? '' : `hidden`} transition-all ease`} />
            </div>
          </div>
        </div>

        
      </div>
      <div className="demoVideos absolute w-[900px] lg:w-[1500px] left-[-12rem] lg:left-[-10rem] bottom-[-6rem] lg:bottom-[-16rem] rotate-[20deg] lg:rotate-[15deg] z-0 opacity-[5%]">
        <img src={bgIMG} alt="" className='w-full' />
      </div>
    </div>

  )
}
