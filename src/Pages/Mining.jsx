import mining from '../assets/mining.jpg';
import {useNavigate} from 'react-router-dom'
import Footer from '../components/Footer/Footer';

function Mining() {

const navigate = useNavigate()

  return (
    <div>
      <div className="relative">
        <img 
          src={mining}
          className="h-72 w-full object-cover rounded-br-none md:rounded-br-[4rem]"
          alt="gemadgeological"
        />
        <h1 className="absolute top-24 text-2xl animate-fade-right animate-delay-700 left-7 text-white font-extra-bold bg-[#81551c] p-4 bg-opacity-70 rounded md:text-3xl lg:text-4xl font-bold">
        Mining consulting services
        </h1>
      </div>
    
        {/* div with grid for services and what we also do */}
       <div className="grid grid-cols-1 animate-fade-right animate-delay-1000 md:grid-cols-2 mx-0 lg:mx-9">
        {/* services offered div here */}
      <div className="mt-8  m-4">
        <h2 className="text-xl md:text-2xl  lg:text-3xl font-bold mb-4">Services Offered:</h2>
        <ul className="list-disc pl-8 text-lg space-y-2">
          <li>Developing and designing mine projects (conceptual, pre-feasibility and feasibility studies)</li>
          <li>Mine planning and scheduling.</li>
          <li>Production drilling (drilling of blasting holes).</li>
          <li>Loading and hauling</li> 
          <li>Horizontal core drilling</li> 
          <li>Core drilling (topsoil mining)</li>
        </ul>
      </div>
       
        {/* what we also do div */}
       <div className="m-4 mt-9 space-y-7">
       <h1 className="text-lg font-bold lg:text-2xl">
       If you'd like further details on how we can support your project through our mining consulting services, please don't hesitate to reach out to us
       </h1>
       <button onClick={() => navigate('/contact')} className="my-4 rounded-lg  border  hover:text-white font-extrabold hover:bg-[#05172e] hover:border-white p-2 text-lg lg:text-xl text-center bg-[#f7f7f7] text-[#81551c]">
        Contact us
       </button>
       <h1 className="text-xl text-[#81551c]   md:text-2xl  lg:text-3xl font-extrabold mb-4">What we also do</h1>
       <h1 className='border border-[#81551c]'></h1>
       <button onClick={() => navigate('/services/geological')} className="my-4 rounded-lg  border  hover:text-white font-extrabold hover:bg-[#05172e] hover:border-white p-2 text-lg lg:text-xl text-center bg-[#f7f7f7] text-[#81551c]">
        Geological consulting services
       </button>
       </div>
       </div>

       <div className="mt-16 md:mt-24">
         <Footer/>
         </div>
    </div>
  )
}

export default Mining;

