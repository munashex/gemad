import geological from '../assets/geological.jpg';
import {useNavigate} from 'react-router-dom'
import Footer from '../components/Footer/Footer';

function Geological() {

const navigate = useNavigate()

  return (
    <div>
      <div className="relative">
        <img 
          src={geological}
          className="h-72 w-full object-cover rounded-br-none md:rounded-br-[4rem]"
          alt="gemadgeological"
        />
        <h1 className="absolute top-24 text-2xl left-7 text-white font-extra-bold bg-[#81551c] p-4 bg-opacity-70 rounded md:text-3xl lg:text-4xl font-bold">Geological consulting services</h1>
      </div>
    
        {/* div with grid for services and what we also do */}
       <div className="grid grid-cols-1 md:grid-cols-2 mx-0 lg:mx-9">
        {/* services offered div here */}
      <div className="mt-8  m-4">
        <h2 className="text-xl md:text-2xl  lg:text-3xl font-bold mb-4">Services Offered:</h2>
        <ul className="list-disc pl-8 text-lg space-y-2">
          <li>Prospecting and mining right application.</li>
          <li>Prospecting and mining work plan.</li>
          <li>Providing diamond core drilling for exploration.</li>
          <li>Planning and execution of geological exploration program.</li>
          <li>Grade controlling.</li>
          <li>Geological sampling during geological exploration.</li>
          <li>Compiling and signing of the competent person report (CPR) for bankable studies.</li>
        </ul>
      </div>
       
        {/* what we also do div */}
       <div className="m-4 mt-9 space-y-7">
       <h1 className="text-lg font-bold lg:text-2xl">
       If you'd like further details on how we can support your project through our geological consulting services, please don't hesitate to reach out to us
       </h1>
       <button onClick={() => navigate('/contact')} className="my-4 rounded-lg  border  hover:text-white font-extrabold hover:bg-[#05172e] hover:border-white p-2 text-lg lg:text-xl text-center bg-[#f7f7f7] text-[#81551c]">
        Contact us
       </button>
       <h1 className="text-xl text-[#81551c]   md:text-2xl  lg:text-3xl font-extrabold mb-4">What we also do</h1>
       <h1 className='border border-[#81551c]'></h1>
       <button onClick={() => navigate('/services/mining')} className="my-4 rounded-lg  border  hover:text-white font-extrabold hover:bg-[#05172e] hover:border-white p-2 text-lg lg:text-xl text-center bg-[#f7f7f7] text-[#81551c]">
        Mining consulting services
       </button>
       </div>
       </div>

       <div className="mt-16 md:mt-24">
         <Footer/>
         </div>
    </div>
  )
}

export default Geological;



