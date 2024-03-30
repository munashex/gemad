import { Link, useLocation } from 'react-router-dom';
import gemadLogo from '../../assets/gemadLogo.png';
import { HiBars3 } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const setToggle = () => setIsOpen(!isOpen);

    return (
        <div className="p-2 md:p-5 bg-gradient-to-l from-[#05172e] to-white">
            <div className="">
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <img
                            src={gemadLogo}
                            alt="gemadLogo"
                            className="animate-flip-down animate-delay-1000 animate-duration-1000 animate-twice w-48 md:w-52"
                        />
                    </Link>

                    <button onClick={setToggle} className="flex md:hidden animate-fade-left animate-delay-200 animate-duration-200 text-[#05172e]">
                        {isOpen ? <IoMdClose size={45} color="white" /> : <HiBars3 size={45} color="white" />}
                    </button>

                    <div className="hidden text-[whitesmoke] font-extrabold md:flex text-2xl gap-x-9 animate-fade-left animate-delay-200 animate-duration-200">
                        <Link to="/about">About</Link>
                        <Link to="/contact" className="">Contact</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/clients">Clients</Link>
                    </div>
                </div>
                {/* navbar on small screens */}
            </div>
            {isOpen && (
                <div className={`md:hidden ${isOpen ? 'animate-fade-right flex flex-col   items-center gap-12 my-12 text-2xl font-extrabold text-white  h-screen' : 'hidden'}`}>
                <Link to="/about" className="animate-fade-down animate-delay-100" onClick={setToggle}>About</Link>
                <Link to="/contact" className="animate-fade-down animate-delay-200" onClick={setToggle}>Contact</Link>
                <Link to="/services" className="animate-fade-down animate-delay-300" onClick={setToggle}>Services</Link>
                <Link to="/clients" className="animate-fade-down animate-delay-500" onClick={setToggle}>Clients</Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
