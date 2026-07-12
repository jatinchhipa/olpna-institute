import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Imgswiper from "./Imgswiper";
import Footer from "./Footer";

import { HiOutlineUsers } from "react-icons/hi2";
import { LuBookAudio } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import axios from 'axios';



function Course(){

    const[professor , setProfessor]=useState([]);
      
      useEffect(()=>{
        fetchprofessor()
      },[]);
      
    const fetchprofessor = async()=>{
      
      try{
          const res = await axios.get("http://localhost:9000/getprofessor",professor);
      
            setProfessor(res.data);
          }catch(err){
              console.log(err)
          }
    }





    return(
    <>
        <Navbar/>

       <div className="course-hero  flex flex-col justify-center items-center">
          <h1 className="text-8xl text-white font-bold ">Our Courses</h1>  
            <p className="text-white text-2xl bold ">Home / Courses</p>
        </div>  






       <div className= "w-[90%] flex items-center justify-center flex-wrap mx-auto mt-20 gap-10">
       
               <div className="course-card">
       
                 <div className="course-img">
                   <img src="/coursec1.jpg"/>
                 </div>
       
                 <div className=" p-5 h-[200px] ">
       
                   <button className="text-sm p-1 border rounded text-white font-semibold bg-sky-700">English</button>
       
                   <h1 className="text-xl text-[#062a35] font-[700] pt-2">Best Courses For Learning English Courses</h1>
       
                   <div className="flex item-center gap-10  pt-4">
                     <span className="flex items-center gap-1">
                     <HiOutlineUsers className="text-orange-600"/>
                     <p className="text-sm text-gray-500">25</p>
                     </span>
       
                      <span className="flex items-center gap-1">
                    <LuBookAudio className="text-orange-600"/>
                     <p className="text-sm text-gray-500">36hr</p>
                     </span>
       
                     <span className="flex items-center gap-1">
                     <LuBookAudio className="text-orange-600"/>
                     <p className="text-sm text-gray-500">2.5k</p>
                     </span>
                 
                   </div>
       
                 </div>
       
       
             <div className="hover-content">
       
               <button className="business-btn">BUSINESS</button>
       
               <h2>Best Courses For Learning English Courses</h2>
       
              <div className="teacher-box">
       
             <div className="teacher">
               <img src="/teacher.png" alt="" />
               <span>Warner</span>
             </div>
       
             <div className="price">$59.95</div>
       
             </div> 
       
              <p>
             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
           </p>
       
           <button className="enroll-btn">
             GET ENROLLED →
           </button>
       
             </div>  
       
           </div>
       
       
       
           <div className="course-card">
       
                 <div className="course-img">
                   <img src="/coursec2.jpg"/>
                 </div>
       
                 <div className=" p-5 h-[200px]">
       
                   <button className="text-sm p-1 border rounded text-white font-semibold bg-sky-700">English</button>
       
                   <h1 className="text-xl text-[#062a35] font-[700] pt-2">Best Courses For Learning English Courses</h1>
       
                   <div className="flex item-center gap-10  pt-4">
                     <span className="flex items-center gap-1">
                     <HiOutlineUsers className="text-orange-600"/>
                     <p className="text-sm text-gray-500">25</p>
                     </span>
       
                      <span className="flex items-center gap-1">
                    <LuBookAudio className="text-orange-600"/>
                     <p className="text-sm text-gray-500">36hr</p>
                     </span>
       
                     <span className="flex items-center gap-1">
                     <LuBookAudio className="text-orange-600"/>
                     <p className="text-sm text-gray-500">2.5k</p>
                     </span>
                 
                   </div>
       
                 </div>
       
       
             <div className="hover-content">
       
               <button className="business-btn">BUSINESS</button>
       
               <h2>Best Courses For Learning English Courses</h2>
       
              <div className="teacher-box">
       
             <div className="teacher">
               <img src="/teacher.png" alt="" />
               <span>Warner</span>
             </div>
       
             <div className="price">$59.95</div>
       
             </div> 
       
              <p>
             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
           </p>
       
           <button className="enroll-btn">
             GET ENROLLED →
           </button>
       
             </div>  
       
       
           </div>
       
       
       
       
         <div className="course-card">
       
                 <div className="course-img">
                   <img src="/course7.jpg" />
                 </div>
       
                 <div className=" p-5 h-[200px]">
       
                   <button className="text-sm p-1 border rounded text-white font-semibold bg-sky-700">English</button>
       
                   <h1 className="text-xl text-[#062a35] font-[700] pt-2">Best Courses For Learning English Courses</h1>
       
                   <div className="flex item-center gap-10  pt-4">
                     <span className="flex items-center gap-1">
                     <HiOutlineUsers className="text-orange-600"/>
                     <p className="text-sm text-gray-500">25</p>
                     </span>
       
                      <span className="flex items-center gap-1">
                    <LuBookAudio className="text-orange-600"/>
                     <p className="text-sm text-gray-500">36hr</p>
                     </span>
       
                     <span className="flex items-center gap-1">
                     <LuBookAudio className="text-orange-600"/>
                     <p className="text-sm text-gray-500">2.5k</p>
                     </span>
                 
                   </div>
       
                 </div>
       
       
             <div className="hover-content">
       
               <button className="business-btn">BUSINESS</button>
       
               <h2>Best Courses For Learning English Courses</h2>
       
              <div className="teacher-box">
       
             <div className="teacher">
               <img src="/teacher.png" alt="" />
               <span>Warner</span>
             </div>
       
             <div className="price">$59.95</div>
       
             </div> 
       
              <p>
             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
           </p>
       
           <button className="enroll-btn">
             GET ENROLLED →
           </button>
       
             </div>  
       
         </div>


         <div className="course-card">
       
                 <div className="course-img">
                   <img src="/course2.jpg" />
                 </div>
       
                 <div className=" p-5 h-[200px]">
       
                   <button className="text-sm p-1 border rounded text-white font-semibold bg-sky-700">English</button>
       
                   <h1 className="text-xl text-[#062a35] font-[700] pt-2">Best Courses For Learning English Courses</h1>
       
                   <div className="flex item-center gap-10  pt-4">
                     <span className="flex items-center gap-1">
                     <HiOutlineUsers className="text-orange-600"/>
                     <p className="text-sm text-gray-500">25</p>
                     </span>
       
                      <span className="flex items-center gap-1">
                    <LuBookAudio className="text-orange-600"/>
                     <p className="text-sm text-gray-500">36hr</p>
                     </span>
       
                     <span className="flex items-center gap-1">
                     <LuBookAudio className="text-orange-600"/>
                     <p className="text-sm text-gray-500">2.5k</p>
                     </span>
                 
                   </div>
       
                 </div>
       
       
             <div className="hover-content">
       
               <button className="business-btn">BUSINESS</button>
       
               <h2>Best Courses For Learning English Courses</h2>
       
              <div className="teacher-box">
       
             <div className="teacher">
               <img src="/teacher.png" alt="" />
               <span>Warner</span>
             </div>
       
             <div className="price">$59.95</div>
       
             </div> 
       
              <p>
             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
           </p>
       
           <button className="enroll-btn">
             GET ENROLLED →
           </button>
       
             </div>  
       
         </div>








         <div className="course-card">
       
                 <div className="course-img">
                   <img src="/course6.jpg" />
                 </div>
       
                 <div className=" p-5 h-[200px]">
       
                   <button className="text-sm p-1 border rounded text-white font-semibold bg-sky-700">English</button>
       
                   <h1 className="text-xl text-[#062a35] font-[700] pt-2">Best Courses For Learning English Courses</h1>
       
                   <div className="flex item-center gap-10  pt-4">
                     <span className="flex items-center gap-1">
                     <HiOutlineUsers className="text-orange-600"/>
                     <p className="text-sm text-gray-500">25</p>
                     </span>
       
                      <span className="flex items-center gap-1">
                    <LuBookAudio className="text-orange-600"/>
                     <p className="text-sm text-gray-500">36hr</p>
                     </span>
       
                     <span className="flex items-center gap-1">
                     <LuBookAudio className="text-orange-600"/>
                     <p className="text-sm text-gray-500">2.5k</p>
                     </span>
                 
                   </div>
       
                 </div>
       
       
             <div className="hover-content">
       
               <button className="business-btn">BUSINESS</button>
       
               <h2>Best Courses For Learning English Courses</h2>
       
              <div className="teacher-box">
       
             <div className="teacher">
               <img src="/teacher.png" alt="" />
               <span>Warner</span>
             </div>
       
             <div className="price">$59.95</div>
       
             </div> 
       
              <p>
             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
           </p>
       
           <button className="enroll-btn">
             GET ENROLLED →
           </button>
       
             </div>  
       
         </div>      



         <div className="course-card">
       
                 <div className="course-img">
                   <img src="/course4.jpg" />
                 </div>
       
                 <div className=" p-5 h-[200px]">
       
                   <button className="text-sm p-1 border rounded text-white font-semibold bg-sky-700">English</button>
       
                   <h1 className="text-xl text-[#062a35] font-[700] pt-2">Best Courses For Learning English Courses</h1>
       
                   <div className="flex item-center gap-10  pt-4">
                     <span className="flex items-center gap-1">
                     <HiOutlineUsers className="text-orange-600"/>
                     <p className="text-sm text-gray-500">25</p>
                     </span>
       
                      <span className="flex items-center gap-1">
                    <LuBookAudio className="text-orange-600"/>
                     <p className="text-sm text-gray-500">36hr</p>
                     </span>
       
                     <span className="flex items-center gap-1">
                     <LuBookAudio className="text-orange-600"/>
                     <p className="text-sm text-gray-500">2.5k</p>
                     </span>
                 
                   </div>
       
                 </div>
       
       
             <div className="hover-content">
       
               <button className="business-btn">BUSINESS</button>
       
               <h2>Best Courses For Learning English Courses</h2>
       
              <div className="teacher-box">
       
             <div className="teacher">
               <img src="/teacher.png" alt="" />
               <span>Warner</span>
             </div>
       
             <div className="price">$59.95</div>
       
             </div> 
       
              <p>
             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
           </p>
       
           <button className="enroll-btn">
             GET ENROLLED →
           </button>
       
             </div>  
       
         </div> 


        <div className="flex justify-center items-center mt-10">

        <a href="/Course">   
        <button className="bg-orange-500 text-white px-8 py-4 font-semibold cursor-pointer  hover:bg-blue-500 transition duration-300">
        VIEW ALL COURSES →
        </button>
        </a> 
        </div>

    </div>








    <div className="bg-sky-100 w-full h-[700px] pt-[80px] mt-20">
    
          <div className="text-center h-[100px] w-full"> 
                <p className="text-lg font-semibold text-orange-500 "> Team Members </p>
                <h1 className="pt-2 text-5xl font-bold text-[#062a35] tracking-wide ">Expert Instructors</h1>
          </div>
    
          
    
         <div className= "w-[95%] flex items-center justify-center flex-wrap mx-auto mt-8 gap-8">  

      {professor.map((item)=>{

        return(

      <div key={item._id} className="team-member">
        
      <a href={`/team/${item._id}`}>
        <div className="team-img group">
          <img src={`http://localhost:9000/uploads/${item.professorImg}`} alt={item.professorImg} />

          <div className="plus-btn">+</div>
      
          <div className="social-icons">
            <div className="bg-blue-500 rounded text-white h-[30px] w-[35px] p-2 text-xl"><FaFacebookF /></div>

            <div className="bg-yellow-500 rounded text-white h-[30px] w-[35px] p-2 text-xl"><FaTwitter /></div>
            <div className="bg-red-600 rounded text-white h-[30px] w-[35px] p-2 text-xl"><FaYoutube /></div>

          </div>

        </div>

        <div className="bg-white p-5 h-[200px]">
            <h1 className="text-2xl font-bold text-[#062a35]">{item.name}</h1>
            <p className="text-sm text-gray-400 border-b border-gray-300 pb-5 pt-2">{item.department}</p>

          <span className="flex items-center gap-2 mt-3">
              <LuBookAudio className="text-orange-500 text-sm"/>
              <p className="text-sm text-gray-500">750 + Course</p>
          </span> 
          <button className="mt-3 bg-orange-500 hover:bg-[#062a35] text-white px-6 py-2 rounded-full transition cursor-pointer">
            View Profile
        </button>
        </div>
      </a>
      </div>

        )    
      })}


    </div>
    
    </div>
            



     <div class="text-center h-[100px] w-full mt-20">
    <p class="text-lg font-semibold text-orange-500 "> Artices & Tipes </p>
    <h1 class="pt-2 text-5xl font-bold text-[#062a35] tracking-wide ">Latest News & Blog</h1>
    </div>        



    <div className="w-full h-[750px] flex items-center gap-8 justify-center mt-8">
    
          <div className="w-[28%] "> 
    
            <img src="/bimg3.jpg"  class="hover:-translate-y-2 transition-all duration-300  object-cover cursor-pointer"/>
    
            <div className="border border-gray-300">
    
              <div className="flex items-center gap-4 pl-7 pt-4">
               <div className="flex items-center gap-3">
                  <FaRegCalendarAlt className="text-orange-500 text-xl"/>
                  <p className="text-md font-semibold text-gray-500">7 JUNE 2026</p>
               </div>
    
               <div className="flex items-center gap-3">
                  <FaRegComments className="text-orange-500 text-xl"/>
                  <p className="text-md font-semibold text-gray-500">COM(30)</p>
               </div>
              </div>
    
              <h2 className="text-2xl font-bold text-[#062a35] pt-3 pl-7 pr-5">Learning Resources In Challenec Times Online Workshops</h2>
    
              <div className="flex items-center gap-3 pl-7 mt-5">
                 <img src="/g.png" alt="" /> 
                 <p className="text-lg font-semibold text-orange-600">Pooja Sharma</p>
              </div>
    
              <button className="w-[70px] h-[60px] bg-[#062a35] ml-auto flex hover:bg-orange-600 cursor-pointer">
                <FaArrowRightLong className="text-2xl text-white mx-auto mt-5"/>
              </button>
    
            </div>
    
          </div>
    
    
           <div className="w-[28%] "> 
    
            <img src="/bimg2.jpg"  class="hover:-translate-y-2 transition-all duration-300 object-cover cursor-pointer"/>
    
            <div className="border border-gray-300">
    
              <div className="flex items-center gap-4 pl-7 pt-4">
               <div className="flex items-center gap-3">
                  <FaRegCalendarAlt className="text-orange-500 text-xl"/>
                  <p className="text-md font-semibold text-gray-500">7 JUNE 2026</p>
               </div>
    
               <div className="flex items-center gap-3">
                  <FaRegComments className="text-orange-500 text-xl"/>
                  <p className="text-md font-semibold text-gray-500">COM(30)</p>
               </div>
              </div>
    
              <h2 className="text-2xl font-bold text-[#062a35] pt-3 pl-7 pr-5">Djang Models Admin And Harness Rela Tional Database</h2>
    
              <div className="flex items-center gap-3 pl-7 mt-5">
                 <img src="/g.png" alt="" /> 
                 <p className="text-lg font-semibold text-orange-600">Pooja Sharma</p>
              </div>
    
              <button className="w-[70px] h-[60px] bg-[#062a35] ml-auto flex hover:bg-orange-600 cursor-pointer">
                <FaArrowRightLong className="text-2xl text-white mx-auto mt-5"/>
              </button>
    
            </div>
    
          </div>
    
    
    
           <div className="w-[28%] "> 
    
            <img src="/bimg1.jpg"  class="hover:-translate-y-2 transition-all duration-300  object-cover cursor-pointer"/>
    
            <div className="border border-gray-300">
    
              <div className="flex items-center gap-4 pl-7 pt-4">
               <div className="flex items-center gap-3">
                  <FaRegCalendarAlt className="text-orange-500 text-xl"/>
                  <p className="text-md font-semibold text-gray-500">7 JUNE 2026</p>
               </div>
    
               <div className="flex items-center gap-3">
                  <FaRegComments className="text-orange-500 text-xl"/>
                  <p className="text-md font-semibold text-gray-500">COM(30)</p>
               </div>
              </div>
    
              <h2 className="text-2xl font-bold text-[#062a35] pt-3 pl-7 pr-5">Smash Podcast With Laura Kalbag What Is Online Privacy</h2>
    
              <div className="flex items-center gap-3 pl-7 mt-5">
                 <img src="/g.png" alt="" /> 
                 <p className="text-lg font-semibold text-orange-600">Pooja Sharma</p>
              </div>
    
              <button className="w-[70px] h-[60px] bg-[#062a35] ml-auto flex hover:bg-orange-600 cursor-pointer">
                <FaArrowRightLong className="text-2xl text-white mx-auto mt-5"/>
              </button>
    
            </div>
    
          </div>
    
    </div>        




    <div className=" h-[180px] bg-orange-700 pt-12 pl-12">
        <Imgswiper/>
    </div>   


    
    <Footer/>
        



    </>
    )
}

export default Course;