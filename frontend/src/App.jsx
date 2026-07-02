import React from 'react'
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


function App() {
  

  return (
    <>

      <Routes>
        
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course/>}/>

      

      <Route path='/team/:id' element={<Teamintro/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/about' element={<About/>}/> 
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>


      {/* protectroute */}

      <Route path='/coursedetail/:id' element={<ProtectedRoute> <Coursedetail/> </ProtectedRoute>}/>


      </Routes>
     
    </>
  )
}

export default App;
