import React from 'react';
import { whatwedo } from '../data/homeData';
import gemadOverview from '.././assets/gemadOverview.jpg';

function Overview() {
  return (  
    <div className="my-[3rem] md:my-[5rem]">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#333] mb-8">
        GEMAD merges geological exploration, mining, and drilling, serving Mpumalanga's coal industry with expert consulting since 2015
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {whatwedo.map((text, index) => (
          <div key={index} className="flex flex-col justify-center items-start">
            <p className="text-lg md:text-xl mb-6 text-[#444] leading-relaxed">{text.paragraph}</p>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#81551c] mb-6">What We Do</h1>
        <hr className="border border-[#81551c] mb-8"/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#333]">GEMAD offers tailored geological exploration and mining solutions, ensuring success at every stage of your project</h2>
            <p className="text-lg md:text-xl mb-6 text-[#444]">Our comprehensive suite of services at GEMAD is supported by a seasoned workforce and our extensive inventory of top-tier machinery</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="rounded-lg border hover:text-white hover:bg-[#05172e] hover:border-white border-[#81551c] p-4 text-xl text-center bg-[#f7f7f7] text-[#81551c]">
                Exploration and infill/grade control drilling
              </button>
              <button className="rounded-lg border hover:text-white hover:bg-[#05172e] hover:border-white border-[#81551c] p-4 text-xl text-center bg-[#f7f7f7] text-[#81551c]">
                Percussion, underground horizontal drilling 
                </button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img src={gemadOverview} alt="gemad overview" className="rounded-lg max-w-full h-auto md:max-w-[70%] md:h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
