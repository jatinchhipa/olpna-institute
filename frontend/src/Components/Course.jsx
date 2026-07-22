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

  const [course , setCourse] = useState([]);
  
  
       useEffect(()=>{
  
          fetchcourse();
       },[]) 
  
  
       const fetchcourse = async()=>{
  
          try{
  
            const res = await axios.get('http://localhost:9000/getcourse',course);
  
            setCourse(res.data);
  
          }catch(err){
            console.log(err);
          }
  
       };




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

       <div data-aos="fade-right" className="course-hero  flex flex-col justify-center items-center">
          <h1 className="lg:text-8xl text-4xl text-white font-bold shadow-xl">Our Courses</h1>  
            <p className="text-white lg:text-2xl text-lg bold lg:pt-5 pt-2">Home / Courses</p>
        </div>  



       <div className="w-[90%] mx-auto mt-6 lg:mt-10 px-2 md:px-0 mb-4 lg:mb-0">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  md:justify-between gap-y-5">

        {course.map((item)=>{

          return(

        <div key={item._id}  className="w-[95%] lg:w-[95%] lg:gap-5 h-[350px] lg:h-[365px] border border-gray-300 rounded mt-5 lg:mt-2 ml-2 lg:ml-0">
          
         <a href={`/coursedetail/${item._id}`}>
          <img src={`http://localhost:9000/uploads/${item.courseImg}`} alt={item.courseImg} className="hover:-translate-y-2 transition-all duration-300 rounded object-cover cursor-pointer w-full h-[200px]"/> 

          <div className="p-3">
              <p className="text-lg font-bold text-[#062a35] mt-4 hover:text-orange-500 cursor-pointer line-clamp-2 h-[40px]">{item.courseName}</p>
              <p className="text-gray-500 text-[15px] leading-5 line-clamp-2 h-[30px]">{item.courseDetail}</p>

            <div className="flex justify-between">  
              <div className="flex items-center gap-2 bg-orange-100/50 px-3 py-2 ">
                <HiOutlineUsers className="text-orange-500 text-lg"/>
                <span className="text-sm font-medium">{item.student} Students</span>
              </div>

              <div className="flex items-center gap-2 bg-orange-100/50 px-3 py-2 ">
                <HiOutlineUsers className="text-orange-500 text-lg"/>
                <span className="text-sm font-medium">{item.courseNumber}</span>
              </div>
            </div> 

          </div>
          </a> 
        </div> 

          )

        })
        }

        

      </div>

    </div>





    <div className="bg-sky-100 w-full h-auto pt-5 lg:pt-8 lg:mt-10">
    
        <div className="text-center h-[50px] lg:h-[100px] w-full"> 
            <p className="text-md lg:text-lg font-semibold text-orange-500 "> Team Members </p>
            <h1 className="pt-0 lg:pt-2 text-2xl lg:text-5xl font-bold text-[#062a35] tracking-wide ">Expert Instructors</h1>
      </div>

     

     <div className= "w-[95%] mx-auto mt-6 px-2 md:px-0 gap-8">  

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  md:justify-between gap-y-5 ">

        
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
    
    </div>
            



    <div class="text-center h-[50px] lg:h-[100px] w-full mt-15">
    <p class="text-lg font-semibold text-orange-500 "> Artices & Tipes </p>
    <h1 class=" text-2xl lg:text-5xl font-bold text-[#062a35] tracking-wide ">Latest News & Blog</h1>
    </div>        


<div className="w-full min-h-[650px] lg:h-[750px] flex flex-col lg:flex-row items-center gap-8 justify-center mt-8">

      <div className="lg:w-[28%] w-full p-3"> 

        <a href="/blog">
        <img src="/bimg3.jpg"  class="w-full h-[250px] lg:h-[350px] object-cover hover:-translate-y-2 transition-all duration-300  cursor-pointer"/>
        </a>

        <div className="border border-gray-300">

          <div className="flex items-center gap-4 pl-7 pt-4">
           <div className="flex items-center gap-3">
              <FaRegCalendarAlt className="text-orange-500 lg:text-xl text-lg"/>
              <p className="text-sm lg:text-md font-semibold text-gray-500">7 JUNE 2026</p>
           </div>

           <div className="flex items-center gap-3">
              <FaRegComments className="text-orange-500 text-xl"/>
              <p className="text-md font-semibold text-gray-500">COM(30)</p>
           </div>
          </div>

          <h2 className="lg:text-xl text-lg font-bold text-[#062a35] pt-3 pl-7 pr-5"><a href="/blog">Learning Resources In Challenec Times Online Workshops </a> </h2>

          <div className="flex items-center gap-3 pl-7 mt-5">
             <img src="/g.png" alt="" /> 
             <p className="text-md lg:text-lg font-semibold text-orange-600">Pooja Sharma</p>
          </div>

          <a href="/blog">
          <button className="w-[60px] h-[50px] lg:w-[70px] lg:h-[60px] bg-[#062a35] ml-auto flex hover:bg-orange-600 cursor-pointer">
            <FaArrowRightLong className="lg:text-2xl text-xl text-white mx-auto lg:mt-5 mt-4"/>
          </button>
          </a>
        </div>

      </div>


       <div className="lg:w-[28%] w-full p-3"> 

        <a href="/blog">
        <img src="/bimg2.jpg"  class="w-full h-[250px] lg:h-[350px] hover:-translate-y-2 transition-all duration-300 object-cover cursor-pointer"/>
        </a>

        <div className="border border-gray-300">

          <div className="flex items-center gap-4 pl-7 pt-4">
           <div className="flex items-center gap-3">
              <FaRegCalendarAlt className="text-orange-500 lg:text-xl text-lg"/>
              <p className="text-sm lg:text-md font-semibold text-gray-500">7 JUNE 2026</p>
           </div>

           <div className="flex items-center gap-3">
              <FaRegComments className="text-orange-500 text-xl"/>
              <p className="text-md font-semibold text-gray-500">COM(30)</p>
           </div>
          </div>

          <h2 className="lg:text-xl text-lg font-bold text-[#062a35] pt-3 pl-7 pr-5"><a href="/blog"> Djang Models Admin And Harness Rela Tional Database </a></h2>

          <div className="flex items-center gap-3 pl-7 mt-5">
             <img src="/g.png" alt="" /> 
             <p className="lg:text-lg text-sm font-semibold text-orange-600">Aaditay Sharma</p>
          </div>

          <a href="/blog">
          <button className="lg:w-[70px] lg:h-[60px] w-[60px] h-[50px] bg-[#062a35] ml-auto flex hover:bg-orange-600 cursor-pointer">
            <FaArrowRightLong className="lg:text-2xl text-xl text-white mx-auto mt-4 lg:mt-5"/>
          </button>
          </a>

        </div>

      </div>



       <div className="lg:w-[28%] w-full p-3"> 

        <a href="/blog">
        <img src="/bimg1.jpg"  className="w-full h-[250px] lg:h-[350px] hover:-translate-y-2 transition-all duration-300  object-cover cursor-pointer"/>
        </a>
        <div className="border border-gray-300">

          <div className="flex items-center gap-4 pl-7 pt-4">
           <div className="flex items-center gap-3">
              <FaRegCalendarAlt className="text-orange-500 lg:text-xl text-lg"/>
              <p className="lg:text-md text-sm font-semibold text-gray-500">7 JUNE 2026</p>
           </div>

           <div className="flex items-center gap-3">
              <FaRegComments className="text-orange-500 lg:text-xl text-lg"/>
              <p className="lg:text-md text-sm font-semibold text-gray-500">COM(30)</p>
           </div>
          </div>

          <h2 className="lg:text-xl text-lg font-bold text-[#062a35] pt-3 pl-7 pr-5"><a href="/blog"> Smash Podcast With Laura Kalbag What Is Online Privacy</a></h2>

          <div className="flex items-center gap-3 pl-7 mt-5">
             <img src="/g.png" alt="" /> 
             <p className="lg:text-lg text-sm font-semibold text-orange-600">karan</p>
          </div>

          <a href="/blog">
          <button className="lg:w-[70px] lg:h-[60px] w-[60px] h-[50px] bg-[#062a35] ml-auto flex hover:bg-orange-600 cursor-pointer">
            <FaArrowRightLong className="lg:text-2xl text-xl text-white mx-auto lg:mt-5 mt-4"/>
          </button>
          </a>

        </div>

      </div>

    </div>        




    <div className=" lg:h-[180px] h-[100px] bg-orange-700 lg:pt-10 lg:pl-12 pt-5 pl-5">
        <Imgswiper/>
    </div>   


    
    <Footer/>
        



    </>
    )
}

export default Course;