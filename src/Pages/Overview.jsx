import React from 'react';
import { whatwedo } from '../data/homeData';
import gemadOverview from '.././assets/gemadOverview.jpg';
import {useNavigate} from 'react-router-dom'


function Overview() {
 const navigate = useNavigate()
  
  return (  
    <div className="my-[3rem] md:my-[5rem] m-2 md:m-5 mx-4 md:mx-9 lg:mx-14">
      <div className="shadow-lg p-3 lg:p-6 border rounded-lg">
      <h1 className="text-xl md:text-2xl lg:text-4xl text-center mx-0 lg:mx-12  font-bold text-[#333] ">
        GEMAD merges geological exploration, mining, and drilling, serving Mpumalanga's coal industry with expert consulting since 2015
      </h1>
      <hr className="border border-[#81551c] mb-8 my-4"/>
 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
  {whatwedo.map((text, index) => (
    <div key={index} className="flex flex-col">
      <p className="text-lg  md:text-xl  mb-6 text-[#444] leading-relaxed">{text.paragraph}</p>
    </div>
  ))}
</div>
  </div>

<div className="container mx-auto   py-8 mt-6 md:mt-14">
  <h1 className="text-3xl md:text-4xl font-extrabold text-[#81551c] mb-6">What We Do</h1>
  <hr className="border border-[#81551c] mb-8"/>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="space-y-6 lg:space-y-11">
      <h2 className="text-lg lg:text-2xl font-bold mb-4 text-center text-[#05174e]">GEMAD offers tailored geological exploration and mining solutions, ensuring success at every stage of your project</h2>
      <p className="text-lg text-center lg:text-xl mb-6 text-[#444]">Our comprehensive suite of services at GEMAD is supported by a seasoned workforce and our extensive inventory of top-tier machinery</p>
      
      <div class="grid grid-cols-1 lg:grid-cols-1 gap-4">
    <button onClick={() => navigate('/services/geological')} class="rounded-lg border hover:text-white font-extrabold  hover:bg-[#05172e] hover:border-white  p-2 text-lg lg:text-xl text-center bg-[#f7f7f7] text-[#81551c]">
      Geological consulting services
    </button>
    <button  onClick={() => navigate('/services/mining')} class="rounded-lg border hover:text-white font-extrabold hover:bg-[#05172e] hover:border-white p-2 text-lg lg:text-xl text-center bg-[#f7f7f7] text-[#81551c]">
      Mining consulting services
    </button>
    </div>
    </div>

    <div className="flex justify-center items-center">
      <img src={gemadOverview} alt="gemad overview" 
      className="rounded-lg max-w-full h-auto md:max-w-[70%] md:h-auto" />
    </div>
  </div>
  
</div>
</div>

  );
}

export default Overview;
