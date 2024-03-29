import React from 'react';
import Slider from 'react-slick';
import { MdArrowForwardIos } from "react-icons/md";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import scroll1 from '../../assets/scroll1.jpg';
import scroll3 from '../../assets/scroll3.jpg'; 
import whatwedo from '../../assets/whatwedo.png' 
import whoweare from '../../assets/whoweare.png' 
import inquiry from '../../assets/inquiry.png'
import Overview from '../Overview';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  const slides = [
    { image: scroll3, name: 'scroll3' }, 
    { image: scroll1, name: 'scroll2' }
  ];

  const getToKnowAboutGemad = [
    {
      image: whoweare, 
      name: "Who we are", 
      description: "Premier geological and mining consulting firm in Delmas, Mpumalanga, integrating exploration, mining, and drilling services seamlessly."
    }, 
    {
      image: whatwedo,
      name: "What we do", 
      description: "GEMAD provides comprehensive geological and mining consulting services, optimizing operations for efficiency and success."
    }, 
    {
      image: inquiry, 
      name: "Make an enquiry", 
      description: "GEMAD welcomes inquiries regarding our geological and mining consulting services, tailored to optimize operations effectively."
    }
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000
  };

  return (
    <div>
      <div className="relative">
        <Slider {...settings}>
          {slides.map((image, index) => (
            <img
              key={index}
              className="h-96 object-cover w-full rounded-br-none md:rounded-br-[4rem]"
              src={image.image}
              alt={image.name}
            />
          ))}
        </Slider>

        <div className="absolute top-2 animate-fade-right animate-duration-700 animate-delay-[1000ms] bg-[#81551c] bg-opacity-70 p-4 rounded-lg m-2 md:m-5 mx-4 md:mx-9 lg:mx-14">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-white animate-fade-right animate-duration-[2000ms] animate-delay-[1000ms] text-2xl md:text-3xl lg:text-4xl font-bold">
              Exploring the Earth's crust
            </h1>
            <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold animate-fade-left animate-duration-[2000ms] animate-delay-[1000ms]">
              Trust Our Expertise at Gemad!
            </h2>
            <button className="text-white border animate-fade-down animate-duration-[2000ms] animate-delay-[1000ms] hover:bg-[#81551c] hover:border-[#81551c] font-semibold text-base md:text-lg px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1">
              ENQUIRE NOW
            </button>
          </div>
        </div>

        <div className="absolute top-[19rem]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-7 gap-x-7 m-2 md:m-5 mx-4 md:mx-9 lg:mx-14">
            {getToKnowAboutGemad.map((item, index) => (
              <div key={index} className="animate-fade-right animate-delay-[2000ms] animate-duration-[1000ms] bg-[#05174e] shadow-lg p-5 space-y-4 rounded-lg">
                <img src={item.image} alt={item.name} 
                className="w-24 md:w-32 mx-auto animate-shake animate-twice  animate-duration-[1000ms] animate-delay-[2000ms]" />

                <h1 className="font-bold text-center text-xl text-white animate-fade-right animate-duration-[1000ms] animate-delay-[2000ms]">{item.name}</h1> 
                <h1 className="text-lg text-white">{item.description}</h1> 
                
                <h1 className="font-extrabold animate-fade-up animate-duration-[1000ms] animate-delay-[3000ms] text-xl inline-flex items-center gap-x-2 hover:gap-x-4 text-white"> 
                  See more 
                  <span className="inline-flex text-[#81551c]"><MdArrowForwardIos size={25} /> <MdArrowForwardIos size={25} /></span>
                </h1>
              </div>
            ))}
          </div>

          <Overview/> 
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Home;



















