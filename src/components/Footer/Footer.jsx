import React from 'react';
import gemadLogo from '../../assets/gemadLogo.png';
import { FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {

const googleLocation = "https://www.google.com/maps/place/Mareu/@-26.1479517,28.6767317,17z/data=!3m1!4b1!4m6!3m5!1s0x1e9532ac50e59fa1:0x31421658957aa45b!8m2!3d-26.1479517!4d28.6767317!16s%2Fg%2F11b6c_rv6l?entry=ttu"

    return (
        <footer className="bg-[#05174e] text-white">
            <div className="container mx-auto py-10 px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row justify-between items-center gap-y-9 md:gap-x-12">
                    <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                    <img alt="gemadLogo" src={gemadLogo} 
                    className="bg-white rounded w-52 lg:w-56" />
                    </div>

                    <div className="flex items-center gap-6">
                        <h2 className="text-lg md:text-xl font-bold">Contact us</h2>
                        <div className="flex gap-6">
                            <a className="hover:text-[#81551c]" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25} /></a>
                            <a className="hover:text-[#81551c]" href={googleLocation}><FaLocationDot size={25} /></a>
                            <a className="hover:text-[#81551c]" href="tel:+27727150780"><FaPhoneAlt size={25} /></a>
                            <a className="hover:text-[#81551c]" href="mailto:info@gemad.co.za"><SiMinutemailer size={25} /></a>
                        </div>
                    </div>
                </div>
                
                <p className="text-center text-gray-300 text-sm md:text-lg py-9">&copy; 2024 Gemad. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;


