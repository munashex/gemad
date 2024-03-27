import React from 'react' 
import aboutUs from '.././assets/aboutUs.jpg'  
import aboutImage from '.././assets/aboutImage.jpg'
import { AboutUs } from '../data/aboutData'
import value1 from '.././assets/value1.jpg'

function About() {
  return (
    <div>
     <div className="relative">
     <img 
    src={aboutUs}
    className="h-72 w-full object-cover rounded-br-none md:rounded-br-[4rem]"
    alt="gemad"
     />
     <div className="absolute  top-3 p-4 space-y-4 bg-[#81551c] bg-opacity-70 rounded-md  text-white font-bold text-xl mx-4 md:mx-9 lg:mx-14">
      <h1 className="text-white  text-2xl md:text-3xl lg:text-4xl font-bold">Who we are</h1>
      <h2 className="text-white text-lg md:text-xl lg:text-2xl font-bold">
      Premier geological and mining consulting firm in Delmas, Mpumalanga, integrating exploration, mining, and drilling services seamlessly.
      </h2>
     </div>
     </div>
       
       {/* abouts us div */}
     <div className="m-2 md:m-5 mx-4 md:mx-9 lg:mx-14 my-9">
        <h1 className="text-2xl md:text-3xl font-bold text-[#81551c]">ABOUT US</h1>
        <hr className="border border-[#81551c] my-2"/> 

        <div className="grid grid-cols-1 my-7 md:grid-cols-2 gap-8 items-center">
        <h1 className="text-lg md:text-xl"> 
         Our company merges and integrates geological
         exploration; mining and drilling hence named   
         &nbsp;<span className="font-bold">GEMAD.</span>&nbsp;
  <span className="font-bold">GEMAD</span> is a well-established geological and mining
  consulting company based in Delmas since 2015,
  over the years&nbsp;<span className="font-bold">GEMAD</span> has extended its footprints to
  other parts of Mpumalanga province mostly in the
  coal industry. All projects are carried out by fully
  qualified personnel.
</h1>


          <img 
          className="rounded-lg max-w-full h-auto md:max-w-[90%] md:h-auto"
          alt="aboutus"  
          src={aboutImage}
           />
        </div>
     </div>  


     {/* about us cards  */}
     <div className="my-9 md:my-20 md:m-5 mx-4 md:mx-9 lg:mx-14">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-11">
     {AboutUs.map((info) => (
      <div key={info.name} className="bg-[whitesmoke] shadow-lg  rounded-b-lg"> 
        <h1 className="text-lg text-white font-bold p-3 bg-gradient-to-r rounded-md from-[#81551c]">{info.name}</h1>
         <h1 className="text-lg p-3">{info.description}</h1>
      </div>
     ))}
     </div>
     </div>
      

       {/* end of values sections with Items insides */}
     <div className="m-2 space-y-6 md:m-5 mx-4 md:mx-9 lg:mx-14">
  <h1 className="text-3xl md:text-4xl font-bold text-[#81551c]">Values</h1> 

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
   

  <div className="bg-[#05174e]  rounded-lg shadow-md p-6">
    <h2 className="text-lg md:text-xl font-bold mb-2 text-white">GEMAD</h2>
    <p className="text-lg md:text-xl text-white">thrives by upholding and sticking by the following abbreviation of “DEDAH” values</p>
  </div>

  <div className="bg-[#05174e] rounded-lg shadow-md p-6">
    <h2 className="text-lg md:text-xl font-bold mb-2 text-white">DETERMINATION</h2>
    <p className="text-lg md:text-xl text-white">We believe that determination is the mother of success.</p>
  </div>

  <div className="bg-[#05174e] rounded-lg shadow-md p-6">
    <h2 className="text-lg text-white md:text-xl font-bold mb-2">ETHICS</h2>
    <p className="text-lg md:text-xl text-white">We are an ethic-driven company; our staff possess the highest form of professionalism.</p>
  </div>

  <div className="bg-[#81551c] rounded-lg shadow-md p-6">
    <h2 className="text-lg text-white md:text-xl font-bold mb-2">DISCIPLINE</h2>
    <p className="text-lg text-white md:text-xl">We thrive by upholding principles and the highest form of discipline.</p>
  </div>

  <div className="bg-[#81551c] rounded-lg shadow-md p-6">
    <h2 className="text-lg text-white md:text-xl font-bold mb-2">AMBITION</h2>
    <p className="text-lg md:text-xl text-white">We are an organization made up of ambitious members who thrive to succeed.</p>
  </div>

  <div className="bg-[#81551c] rounded-lg shadow-md p-6">
    <h2 className="text-lg text-white md:text-xl font-bold mb-2">HONESTY</h2>
    <p className="text-lg md:text-xl text-white">We believe in doing business in an honest and open way.</p>
  </div>
</div>

</div>
 {/* end of values sections with Items insides */} 
 
 {/* explaining div about our values */}
 <div className="my-11 md:my-14"> 

 <div className="p-3 md:p-6">
   <div className="space-y-5">
    <h1 className="text-black font-bold text-xl md:text-2xl">Our values define our culture, shape our behaviour and drives our success.</h1>
    <h1 className="text-black text-lg md:text-xl">They shape how we interact with each other, our clients, and the wider community, and determine the kind of confident, flexible and accountable company we are and will continue to be</h1>
   </div>
   
   
   <div>

   </div> 

 </div>

 </div> 

     </div>

   
  )
}

export default About