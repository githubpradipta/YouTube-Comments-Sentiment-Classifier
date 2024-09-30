import React from 'react'
import { useLocation } from 'react-router-dom'
import SearchIcon from '../../../assets/icons/searchIcon';
import './DashBoard.css'
import ProgressSpeedometer from '../../components/ProgressSpeedometer/ProgressSpeedometer';
import happyImg from '../../../assets/image/happy.png'
import fearImg from '../../../assets/image/fear.png'
import angryImg from '../../../assets/image/angry.png'
import sadImg from '../../../assets/image/sad.png'

export default function DashBoard() {
    const location = useLocation();
    const data = location.state;
    console.log(data);

    const happy = Math.floor(data.Joy);
    const fear = Math.floor(data.Fear);
    const anger = Math.floor(data.Anger);
    const sadness = Math.floor(data.Sadness);

    return (
        <>
            <div className='dashboard bg-neutral-900 gradientBG min-h-screen flex flex-col items-center py-10 px-2'>
                <div className="heading text-center">
                    <h1 className="text-4xl lg:text-[55px] font-bold text-red-600">Analysis</h1>
                    <p className="text-xl lg:text-xl font-mideum text-gray-200 my-2 lg:my-4">Comment Sentiments</p>
                </div>

                <div className="analysisBox w-full flex flex-wrap items-center justify-center mt-10">

                    <div className="innerbox my-4 mx-3 flex flex-col justify-center items-center bg-gray-900 hover:bg-red-900 hover:scale-105 border-red-800 border-[2px] transition-all ease  min-w-[200px] min-h-[200px] w-3/4 lg:w-1/3 py-6 rounded-xl relative">
                        <div className="icon w-[15%]">
                            <img src={happyImg} alt="" srcset="" className='w-full' />
                        </div>

                        <ProgressSpeedometer percentage={happy} />
                        <div className="text-xl font-semibold text-gray-200">Happyness</div>
                    </div>

                    <div className="innerbox my-4 mx-3 flex flex-col justify-center items-center bg-gray-900 hover:bg-red-900 hover:scale-105 border-red-800 border-[2px] transition-all min-w-[200px] min-h-[200px] w-3/4 lg:w-1/3 py-6 rounded-xl relative">
                        <div className="icon w-[15%]">
                            <img src={fearImg} alt="" srcset="" className='w-full' />
                        </div>

                        <ProgressSpeedometer percentage={fear} />
                        <div className="text-xl font-semibold text-gray-200">Fear</div>
                    </div>

                    <div className="innerbox my-4 mx-3 flex flex-col justify-center items-center bg-gray-900 hover:bg-red-900 hover:scale-105 border-red-800 border-[2px] transition-all min-w-[200px] min-h-[200px] w-3/4 lg:w-1/3 py-6 rounded-xl relative">
                        <div className="icon w-[15%]">
                            <img src={angryImg} alt="" srcset="" className='w-full' />
                        </div>

                        <ProgressSpeedometer percentage={anger} />
                        <div className="text-xl font-semibold text-gray-200">Anger</div>
                    </div>

                    <div className="innerbox my-4 mx-3 flex flex-col justify-center items-center bg-gray-900 hover:bg-red-900 hover:scale-105 border-red-800 border-[2px] transition-all min-w-[200px] min-h-[200px] w-3/4 lg:w-1/3 py-6 rounded-xl relative">
                        <div className="icon w-[15%]">
                            <img src={sadImg} alt="" srcset="" className='w-full' />
                        </div>

                        <ProgressSpeedometer percentage={sadness} />
                        <div className="text-xl font-semibold text-gray-200">Sadness</div>
                    </div>


                </div>



            </div >


        </>

    )
}
