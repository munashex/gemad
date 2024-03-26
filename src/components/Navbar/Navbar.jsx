import { Link, useLocation } from 'react-router-dom'
import gemadLogo from '../../assets/gemadLogo.png'
import { HiBars3 } from "react-icons/hi2"


const Navbar = () => {

const location = useLocation()

    return (
<div className=" p-2 md:p-5 bg-gradient-to-l  from-[#05172e]  to-white">
<div className="">  
<div className="flex items-center justify-between ">

<Link to="/">
<img 
src={gemadLogo}  
alt="gedmadLogo"
className="animate-flip-down animate-delay-1000 animate-duration-1000 animate-twice w-48 md:w-52"
/>  
</Link>

<span className="flex md:hidden animate-fade-left animate-delay-200 animate-duration-200 text-[#05172e]">
   <HiBars3 size={45} color="white"/>
</span> 

<div className="hidden text-[whitesmoke] font-extrabold md:flex text-2xl gap-x-9 animate-fade-left animate-delay-200 animate-duration-200">
   <Link to="/about">About</Link>  
   <Link to="/contact" className="">Contact</Link> 
   <Link to="/services">Services</Link> 
   <Link to="/clients">Clients</Link>
</div>

</div> 

</div>
        </div>
    )
}

export default Navbar