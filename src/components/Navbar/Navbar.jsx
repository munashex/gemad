import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiBars3 } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import gemadLogo from '../../assets/gemadLogo.png';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [openServices, setOpenServices] = useState(false);
    const [openServicesPhone, setOpenServicesPhone] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleServices = () => setOpenServices(!openServices);
    const toggleServicesPhone = () => setOpenServicesPhone(!openServicesPhone);

    const navigateMiningAndCloseMiningNavbar = () => {
     setIsOpen(!isOpen)    
     navigate('/services/mining')
    }

    const navigateMiningAndCloseGeologicalNavbar = () => {
        setIsOpen(!isOpen)    
        navigate('/services/geological')
       }
   
    const navigateMiningAndCloseMiningPopUp = () => {
    setOpenServices(!openServices) 
    navigate('/services/mining')
    }

    const navigateMiningAndCloseGeologicalPopUp = () => {
        setOpenServices(!openServices) 
        navigate('/services/geological') 
    }

    return (
        <div>
            <div className="p-2 md:p-5 bg-gradient-to-l from-[#05172e] to-white">
                <div className="lg:px-9">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <img
                                src={gemadLogo}
                                alt="gemadLogo"
                                className="animate-flip-down animate-delay-1000 animate-duration-1000 animate-twice w-48 md:w-52"
                            />
                        </Link>

                        <button onClick={toggleMenu} className="flex md:hidden animate-fade-left animate-delay-200 animate-duration-200 text-[#05172e]">
                            {isOpen ? <IoMdClose size={45} color="white" /> : <HiBars3 size={45} color="white" />}
                        </button>

                        {/* Navbar on md and larger screens */}
                        <div className="hidden text-[whitesmoke] font-extrabold md:flex text-2xl gap-x-9 animate-fade-left animate-delay-200 animate-duration-200">
                            <Link to="/about" className={location.pathname === '/about' ? 'border-b-2' : ''}>About</Link>
                            <Link to="/contact" className={location.pathname === '/contact' ? 'border-b-2' : ''}>Contact</Link>
                            <div className="inline-flex items-center gap-x-1">
                                <button onClick={toggleServices}>Services</button>
                                <span>{openServices ? <MdOutlineArrowDropUp size={34}/> : <MdOutlineArrowDropDown size={34}/>}</span>
                            </div>
                            <Link to="/clients" className={location.pathname === '/clients' ? 'border-b-2' : ''}>Clients</Link>
                        </div>
                    </div>

                    {/* Navbar on small screens */}
                </div>

                {isOpen && (
                    <div className={`md:hidden ${isOpen ? 'animate-fade-right flex flex-col items-center gap-12 my-12 text-2xl font-extrabold text-white h-screen' : 'hidden'}`}>
                        <Link to="/about" className="animate-fade-down animate-delay-100" onClick={toggleMenu}>About</Link>
                        <Link to="/contact" className="animate-fade-down animate-delay-200" onClick={toggleMenu}>Contact</Link>
                        <Link to="/clients" className="animate-fade-down animate-delay-500" onClick={toggleMenu}>Clients</Link>
                        
                        <div className="border px-7 inline-flex items-center gap-x-2  py-1 rounded">
                            <button  className="animate-fade-down animate-delay-300" onClick={toggleServicesPhone}>
                                Services
                            </button>
                            <span>{openServicesPhone ? <MdOutlineArrowDropUp size={30}/> : <MdOutlineArrowDropDown size={30}/>}</span>
                        </div>
                        
                        {/* Overlay popup on small screens */}
                        {openServicesPhone && (
                            <div className="flex flex-col gap-y-5 animate-fade-down">
                                <button onClick={navigateMiningAndCloseGeologicalNavbar} className="rounded-lg animate-fade-right animate-delay-300 hover:text-white font-extrabold hover:bg-[#05172e] hover:border-white p-2 text-lg lg:text-xl text-center bg-[#f7f7f7] text-[#81551c]">
                                    Geological consulting services
                                </button>
                                <button onClick={navigateMiningAndCloseMiningNavbar} className="rounded-lg animate-fade-left animate-delay-300 hover:text-white font-extrabold hover:bg-[#05172e] hover:border-white p-2 text-lg lg:text-xl text-center bg-[#f7f7f7] text-[#81551c]">
                                    Mining consulting services
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Overlay popup on md and large screens */}
            {openServices && (
                <div className="fixed inset-0 hidden md:flex z-50 bg-black bg-opacity-60">
                    <div className="bg-slate-200 rounded p-4 w-[70%] mx-auto h-36 md:h-48 mt-24 animate-fade-down">
                        <div className="flex items-center flex-row justify-between">
                            <h1 className="text-2xl font-extrabold text-[#05172e]">Our services</h1>
                            <button onClick={toggleServices}>
                                <IoMdClose size={40} color="#05172e" />
                            </button>
                        </div>
                        <div className="flex flex-row gap-4 items-center justify-center mt-5">
                            <button onClick={navigateMiningAndCloseGeologicalPopUp}  className="rounded-lg border animate-fade-right animate-delay-300 hover:text-white font-extrabold hover:bg-[#05172e] hover:border-white p-2 text-lg lg:text-xl text-center bg-[#f7f7f7] text-[#81551c]">
                                Geological consulting services
                            </button>
                            <button onClick={navigateMiningAndCloseMiningPopUp} className="rounded-lg border animate-fade-left animate-delay-300 hover:text-white font-extrabold hover:bg-[#05172e] hover:border-white p-2 text-lg lg:text-xl text-center bg-[#f7f7f7] text-[#81551c]">
                                Mining consulting services
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;








