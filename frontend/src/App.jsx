import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Course from './Components/Course';
import Coursedetail from './Components/Coursedetail';
import Teamintro from './Components/Teamintro';
import Blog from './Components/Blog';
import About from './Components/About';
import Contact from './Components/Contact';
import Signup from './Components/Signup';
import Login from './Components/Login';

import ProtectedRoute from '../auth/ProtectedRoute';
import Cartpage from './Components/Cartpage';
import Buynow from './Components/Buynow';
import MyCourses from "./Components/MyCourses";

import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Ek hi baar chale
    });
  }, []);
  

  return (
    <>

      <Routes>
        
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course/>}/>

      <Route path='/coursedetail/:id' element={ <Coursedetail/>}/>

      <Route path='/team/:id' element={<Teamintro/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/about' element={<About/>}/> 
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cartpage' element={<Cartpage/>}/>
      
      <Route path="/mycourses" element={<MyCourses />} />


      {/* protectroute */}

      <Route path='/buynow/:id' element={<ProtectedRoute><Buynow/></ProtectedRoute>}/>

      </Routes>
     
    </>
  )
}

export default App;
