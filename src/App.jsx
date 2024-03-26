import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from '././components/Navbar/Navbar' 
import Home from '././Pages/Home/Home'  
import About from './Pages/About' 
import Services from './Pages/Services' 
import Clients from './Pages/Clients' 
import Contact from './Pages/Contact'

const App = () => {

  return (
    <BrowserRouter> 
     <Navbar/> 
     <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/about" element={<About/>}/> 
      <Route path="/services" element={<Services/>} />
      <Route path="/clients" element={<Clients/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
    </BrowserRouter>
  )
} 

export default App