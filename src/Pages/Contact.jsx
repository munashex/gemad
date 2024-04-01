import React, { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Location from '../components/Location';
import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6"; 
import Footer from '../components/Footer/Footer';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_83ka8gv', 'template_0wntw5h', form.current, {
        publicKey: 'zpxSJ3awwAYrFz-RU',
      })
      .then(
        () => {
          toast.success('Email sent successfully!', { position: 'top-right' });
        },
        (error) => {
          toast.error(`Failed to send email: ${error.text}`, { position: 'top-right' });
        },
      );
  };

  return (
    <div>
      <Location />
      <div className="m-2 md:m-5 mx-4 md:mx-9 my-9 md:my-12">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Contact Us</h1>
          <div className="space-y-4 md:space-y-6">
            <p className="text-lg font-bold md:text-xl">
              Engage with us regarding your involvement in geological exploration, mining, and drilling.
            </p>
            <p className="text-lg md:text-xl">
              If you're interested in learning how we can assist with your geological exploration, mining, and drilling endeavors, don't hesitate to reach out. Our flexible contract mining services and hiring solutions are designed to meet the specific requirements of your operation. Get in touch with us today to explore the possibilities.
            </p>
            <p className="text-lg md:text-xl font-bold">
              Fill out the form or phone us direct to get started.
            </p>
          </div>
        </div>
      </div>

      <div className="m-2 md:m-5 mx-4 md:mx-9 my-9 md:my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact information */}
        <div className="flex flex-col gap-y-6 col">
          <span className="inline-flex items-center space-x-2">
            <FaLocationDot color="#81551c" size={27} className="animate-bounce"/>
            <h1 className="md:text-xl">Mareu Buildings 5 Samuel Rd, Delmas, 2210</h1>
          </span>
          <span className="inline-flex items-center space-x-2">
            <FaPhoneAlt color="#81551c" size={27} />
            <a href="tel:+27727150780" className="hover:text-[#81551c] md:text-xl decoration underline">+2772 715 0780</a>
          </span>
          <span className="inline-flex items-center space-x-2">
            <SiMinutemailer color="#81551c" size={27} />
            <a href="mailto:info@gemad.co.za" className="md:text-xl decoration underline hover:text-[#81551c]">info@gemad.co.za</a>
          </span>
        </div>

        {/* Contact form */}
        <div className="flex flex-col gap-4">
          <div className="">
            <h1 className="text-xl md:text-2xl font-extrabold text-[#81551c]">MAKE AN ENQUIRY</h1>
            <div className="border border-[#81551c] my-2"></div>
          </div>
          <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Your Name" name="from_name" required className="border placeholder:font-bold bg-gray-100 outline-[#81551c]  border-gray-300 rounded-md p-2 md:p-3" />
            <input type="email" placeholder="Your Email" name="from_email" required className="border placeholder:font-bold border-gray-300 bg-gray-100 outline-[#81551c] rounded-md p-2 md:p-3" />
            <textarea rows="4" placeholder="Your Message" name="message" required className="border placeholder:font-bold border-gray-300 rounded-md p-2 md:p-3 bg-gray-100 outline-[#81551c]"></textarea>
            <button type="submit" className="bg-[#81551c] text-lg font-bold text-white py-2 px-4 rounded-md hover:bg-[#5e3c14] transition duration-300">Submit</button>
          </form>
        </div>
        {/* End of Contact form */}
      </div>

      {/* ToastContainer to display toast notifications */}
      <ToastContainer limit={1}/>

      {/* Footer component */}
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;


