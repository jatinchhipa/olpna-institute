import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaLaptop } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuBookAudio } from "react-icons/lu";
import Compustab from "./Campustab";
import { FaTwitter } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

import Feedswiper from "./Feedswiper";
import { PiSuitcaseSimple } from "react-icons/pi";
import { LuBookUser } from "react-icons/lu";
import { FaRegComments } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import Imgswiper from "./Imgswiper";

import Footer from "./Footer";
import Navbar from "./Navbar";




function Home(){



      const [students, setStudents] = useState(0);
      const [courses, setCourses] = useState(0);
      const [graduates, setGraduates] = useState(0);
      const [active, setActive] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
    setStudents((prev) => (prev < 5000 ? prev + 50 : 5000));
    setCourses((prev) => (prev < 1200 ? prev + 10 : 1200));
    setGraduates((prev) => (prev < 3000 ? prev + 30 : 3000));
    setActive((prev) => (prev < 800 ? prev + 8 : 800));
    }, 20);

  return () => clearInterval(interval);
  }, []);






return(
    <>
    <div className="hero-section ">
           
      <Navbar/>





      <div className="w-[90%] flex items-center mt-15 ml-15 mr-15">
          <div className="w-[50%]">  
              <p className="text-md text-orange-400 font-semibold pl-5 pt-5">Welcome To EduPlus</p>

              <h1 className="text-[65px] font-bold text-sky-900 italic font-serif ">More than 1200 Online Courses</h1>

              <div className="flex items-center h-[100px] w-[90%] bg-white p-3 justify-between">
                  <input type="text" placeholder=" Search Course" className="text-lg font-semibold outline-none"/>
                    <IoSearchSharp className="text-3xl bg-orange-400 w-[50px] h-[50px] text-white p-3 rounded"/>
              </div>

            <div className="flex items-center justify-between mt-8">
              <span className=" border-r-4 border-orange-500 pr-8">
               <p className="text-md text-gray-500">Sed ut perspiciatis unde omnis<br/> natus error sit voluptatem</p> 
              </span>  

            <span className="flex items-center gap-5">
              <MdOutlineSupportAgent className="text-4xl text-orange-500" />

             <div className="flex flex-col">
              <p className="text-lg text-gray-800 font-semibold">Online Support</p>
              <p className="text-xl text-sky-900 font-bold">+012 (345) 6789</p>
             </div>
            </span>
              
              <span>

              </span>
            </div>

          </div>

          <div className="w-[50%]">
              <img src="/herogirl.png" alt="" />
          </div>
      </div>

        <div className="w-[95%] flex items-center h-[100px] ml-15 gap-8">

          <div className="w-[22%] bg-white h-[100px] flex gap-5 pt-4 pl-3 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <span>
              <IoIosContacts className="text-6xl text-orange-600 "/>
            </span>

           <div className="flex flex-col ">
              <h1 className="text-3xl text-orange-500 font-semibold">{students}+</h1>
              <p className="text-md text-gray-500">Saticfied Students</p>
            </div>

          </div>

          <div className="w-[22%] bg-white h-[100px] flex gap-5 pt-4 pl-3 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <span>
              <LiaSwatchbookSolid  className="text-6xl text-orange-600 "/>
            </span>

           <div className="flex flex-col">
              <h1 className="text-3xl text-orange-500 font-semibold">{courses}+</h1>
              <p className="text-md text-gray-500">Available Courses</p>
            </div>

          </div>

          <div className="w-[22%] bg-white h-[100px] flex gap-5 pt-4 pl-3 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <span>
              <RiGraduationCapLine className="text-6xl text-orange-600 "/>
            </span>

           <div className="flex flex-col">
              <h1 className="text-3xl text-orange-500 font-semibold">{graduates}+</h1>
              <p className="text-md text-gray-500">Graduate Students</p>
            </div>

          </div>

          <div className="w-[22%] bg-white h-[100px] flex gap-5 pt-4 pl-3 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
            <span>
              <FaLaptop className="text-6xl text-orange-600" />

            </span>

           <div className="flex flex-col">
              <h1 className="text-3xl text-orange-500 font-semibold">{active}+</h1>
              <p className="text-md text-gray-500">Active Courses</p>
            </div>

          </div>

        </div>


      </div>



    <div className="text-center h-[100px] w-full"> 
            <p className="text-lg font-semibold text-orange-500 "> Popular Categories </p>
            <h1 className="pt-2 text-5xl font-bold text-[#062a35] tracking-wide ">Course Categories</h1>
    </div>

    <div className="w-[90%] ml-15 mt-10">

      <div className="w-full flex items-center justify-between">

        <div className="w-[22%] h-[340px] border border-gray-300 rounded">
         <a href="/coursedetail">
          <img src="/course8.jpg" className="hover:-translate-y-2 transition-all duration-300 rounded object-cover cursor-pointer"/> 

          <div className="pl-6">
              <p className="text-xl font-bold text-[#062a35] mt-4 hover:text-orange-600 cursor-pointer">Graphics Design (UI)</p>
              <p className="text-gray-500 text-md mt-2 tracking-wide">Web Design Course</p>

            <div className="flex gap-6 mt-2">  
              <span className="flex gap-2 cursor-pointer">
                <HiOutlineUsers  className="text-xl text-orange-500"/>    
                <p className="text-sm text-gray-500">250</p>  
              </span>
               <span className="flex gap-2 cursor-pointer">
                <HiOutlineUsers  className="text-xl text-orange-500"/>    
                <p className="text-sm text-gray-500">800 + Courses</p>  
              </span>
            </div> 

          </div>
          </a> 
        </div> 

        <div className="w-[22%] h-[340px] border border-gray-300 rounded">
        <a href="/coursedetail">  
          <img src="/course7.jpg" className="hover:-translate-y-2 transition-all duration-300 rounded object-cover cursor-pointer"/> 

          <div className="pl-6">
              <p className="text-xl font-bold text-[#062a35] mt-4 hover:text-orange-600 cursor-pointer">Business Studies</p>
              <p className="text-gray-500 text-md mt-2 tracking-wide">Finance Business</p>

            <div className="flex gap-6 mt-2">  
              <span className="flex gap-2 cursor-pointer">
                <HiOutlineUsers  className="text-xl text-orange-500"/>    
                <p className="text-sm text-gray-500">250</p>  
              </span>
               <span className="flex gap-2 cursor-pointer">
                <HiOutlineUsers  className="text-xl text-orange-500"/>    
                <p className="text-sm text-gray-500">700 + Courses</p>  
              </span>
            </div> 

          </div>
          </a>
        </div>

        <div className="w-[22%] h-[340px] border border-gray-300 rounded">
        <a href="/coursedetail"> 
          <img src="/course6.jpg" className="hover:-translate-y-2 transition-all duration-300 rounded object-cover cursor-pointer"/> 

          <div className="pl-6">
              <p className="text-xl font-bold text-[#062a35] mt-4 hover:text-orange-600 cursor-pointer">Web Development</p>
              <p className="text-gray-500 text-md mt-2 tracking-wide">Web Design Course</p>

            <div className="flex gap-6 mt-2">  
              <span className="flex gap-2 cursor-pointer">
                <HiOutlineUsers  className="text-xl text-orange-500"/>    
                <p className="text-sm text-gray-500">250</p>  
              </span>
               <span className="flex gap-2 cursor-pointer">
                <HiOutlineUsers  className="text-xl text-orange-500"/>    
                <p className="text-sm text-gray-500">800 + Courses</p>  
              </span>
            </div> 

          </div>
          </a> 
        </div>

        <div className="w-[22%] h-[340px] border border-gray-300 rounded">
        <a href="/coursedetail">  
          <img src="/course5.jpg" className="hover:-translate-y-2 transition-all duration-300 rounded object-cover cursor-pointer"/> 

          <div className="pl-6">
              <p className="text-xl font-bold text-[#062a35] mt-4 hover:text-orange-600 cursor-pointer">Product Engineering</p>
              <p className="text-gray-500 text-md mt-2 tracking-wide">Web Design Course</p>

            <div className="flex gap-6 mt-2">  
              <span className="flex gap-2 cursor-pointer">
                <HiOutlineUsers  className="text-xl text-orange-500"/>    
                <p className="text-sm text-gray-500">250</p>  
              </span>
               <span className="flex gap-2 cursor-pointer">
                <HiOutlineUsers  className="text-xl text-orange-500"/>    
                <p className="text-sm text-gray-500">800 + Courses</p>  
              </span>
            </div> 

          </div>
          </a>
        </div>

      </div>


      <div className="w-full flex items-center justify-between mt-5">

        <div className="w-[22%] h-[340px] border border-gray-300 rounded">
        <a href="/coursedetail">  
          <img src="/course4.jpg" className="hover:-translate-y-2 transition-all duration-300 rounded object-cover cursor-pointer"/> 

          <div className="pl-6">
              <p className="text-xl font-bold text-[#062a35] mt-4 hover:text-orange-600 cursor-pointer">Graphics Design (UI)</p>
              <p className="text-gray-500 text-md mt-2 tracking-wide">Basic Photography</p>

            <div className="flex gap-6 mt-2">  
              <span className="flex gap-2 cursor-pointer">
                <HiOutlineUsers  className="text-xl text-orange-500"/>    
                <p className="text-sm text-gray-500">250</p>  
              </span>
               <span className="flex gap-2 cursor-pointer">
                <HiOutlineUsers  className="text-xl text-orange-500"/>    
                <p className="text-sm text-gray-500">800 + Courses</p>  
              </span>
            </div> 

          </div>
          </a>
        </div> 

        <div className="w-[22%] h-[340px] border border-gray-300 rounded">
        <a href="/coursedetail">  
          <img src="/course3.jpg" className="hover:-translate-y-2 transition-all duration-300 rounded object-cover cursor-pointer"/> 

          <div className="pl-6">
              <p className="text-xl font-bold text-[#062a35] mt-4 hover:text-orange-600 cursor-pointer">Medical & Health</p>
              <p className="text-gray-500 text-md mt-2 tracking-wide">Doctors & Nursing</p>

            <div className="flex gap-6 mt-2">  
              <span className="flex gap-2 cursor-pointer">
                <HiOutlineUsers  className="text-xl text-orange-500"/>    
                <p className="text-sm text-gray-500">250</p>  
              </span>
               <span className="flex gap-2 cursor-pointer">
                <HiOutlineUsers  className="text-xl text-orange-500"/>    
                <p className="text-sm text-gray-500">700 + Courses</p>  
              </span>
            </div> 

          </div>
          </a>
        </div>

        <div className="w-[22%] h-[340px] border border-gray-300 rounded">
         <a href="/coursedetail"> 
          <img src="/course2.jpg" className="hover:-translate-y-2 transition-all duration-300 rounded object-cover cursor-pointer"/> 

          <div className="pl-6">
              <p className="text-xl font-bold text-[#062a35] mt-4 hover:text-orange-600 cursor-pointer">Marketing Strategy</p>
              <p className="text-gray-500 text-md mt-2 tracking-wide">Social Media Marketing</p>

            <div className="flex gap-6 mt-2">  
              <span className="flex gap-2 cursor-pointer">
                <HiOutlineUsers  className="text-xl text-orange-500"/>    
                <p className="text-sm text-gray-500">250</p>  
              </span>
               <span className="flex gap-2 cursor-pointer">
                <HiOutlineUsers  className="text-xl text-orange-500"/>    
                <p className="text-sm text-gray-500">800 + Courses</p>  
              </span>
            </div> 

          </div>
          </a>
        </div>

        <div className="w-[22%] h-[340px] border border-gray-300 rounded">
         <a href="/coursedetail"> 
          <img src="/course1.jpg" className="hover:-translate-y-2 transition-all duration-300 rounded object-cover cursor-pointer"/> 

          <div className="pl-6">
              <p className="text-xl font-bold text-[#062a35] mt-4 hover:text-orange-600 cursor-pointer">Product Engineering</p>
              <p className="text-gray-500 text-md mt-2 tracking-wide">Web Design Course</p>

            <div className="flex gap-6 mt-2">  
              <span className="flex gap-2 cursor-pointer">
                <HiOutlineUsers  className="text-xl text-orange-500"/>    
                <p className="text-sm text-gray-500">250</p>  
              </span>
               <span className="flex gap-2 cursor-pointer">
                <HiOutlineUsers  className="text-xl text-orange-500"/>    
                <p className="text-sm text-gray-500">800 + Courses</p>  
              </span>
            </div> 

          </div>
          </a>
        </div>

      </div>


    </div>





    <div className="w-full bg-[#062a35] h-[850px] mt-20">

      <div className="text-center h-[200px] w-full pt-15"> 
            <p className="text-lg font-semibold text-orange-600 "> Popular Courses </p>
            <h1 className="mt-2 text-5xl font-bold text-orange-500 tracking-wide ">Available Courses</h1>
      </div> 



    <div className= "w-[90%] flex items-center justify-center flex-wrap mx-auto mt-8 gap-8">

        <div className="course-card">

          <div className="course-img">
            <img src="/coursec1.jpg"/>
          </div>

          <div className=" p-5 h-[200px] h-[200px]">

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

   <a href="/coursedetail"> 
    <button className="enroll-btn">
      GET ENROLLED →
    </button>
    </a>
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

    <a href="/coursedetail"> 
    <button className="enroll-btn">
      GET ENROLLED →
    </button>
    </a>

      </div>  


    </div>




  <div className="course-card">

          <div className="course-img">
            <img src="/coursec3.jpg"/>
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

    <a href="/coursedetail"> 
    <button className="enroll-btn">
      GET ENROLLED →
    </button>
    </a>

      </div>  

  </div>

  </div>


  <div className="flex justify-center items-center mt-10">

  <a href="/Course"> 
    <button className="bg-[#062a35] text-white px-8 py-4 font-semibold cursor-pointer border border-sky-900 hover:bg-orange-600 transition duration-300 ">
      VIEW ALL COURSES →
    </button>
  </a>   
  </div>

  </div>




    <div className="w-full text-center mt-18 h-[150px]">
        <p className="text-lg font-semibold text-orange-600 "> Photo & Album </p>
        <h1 className="mt-2 text-5xl font-bold text-[#062a35] tracking-wide ">Campus Gallery</h1>
     </div>






    <div className="mb-20">
            <Compustab/>
    </div>






    <div className="bg-sky-100 w-full h-[700px] pt-[80px]">

      <div className="text-center h-[100px] w-full"> 
            <p className="text-lg font-semibold text-orange-500 "> Team Members </p>
            <h1 className="pt-2 text-5xl font-bold text-[#062a35] tracking-wide ">Expert Instructors</h1>
      </div>

      

     <div className= "w-[95%] flex items-center justify-center flex-wrap mx-auto mt-8 gap-8">  

      <div className="team-member">
      <a href="/team">
        <div className="team-img group">
          <img src="/team1.avif" alt="" />

          <div className="plus-btn">+</div>
      
          <div className="social-icons">
            <div className="bg-blue-500 rounded text-white h-[30px] w-[35px] p-2 text-xl"><FaFacebookF /></div>

            <div className="bg-yellow-500 rounded text-white h-[30px] w-[35px] p-2 text-xl"><FaTwitter /></div>
            <div className="bg-red-600 rounded text-white h-[30px] w-[35px] p-2 text-xl"><FaYoutube /></div>

          </div>

        </div>

        <div className="bg-white p-5 h-[200px]">
            <h1 className="text-2xl font-bold text-[#062a35]">Ravi Sharma</h1>
            <p className="text-sm text-gray-400 border-b border-gray-300 pb-5 pt-2">Math Teacher</p>

          <span className="flex items-center gap-2 mt-3">
              <LuBookAudio className="text-orange-500 text-sm"/>
              <p className="text-sm text-gray-500">750 + Course</p>
          </span> 
        </div>
      </a>
      </div>


      <div className="team-member">
      <a href="/team">
        <div className="team-img group">
          <img src="/team4.avif" alt="" />

          <div className="plus-btn">+</div>
      
          <div className="social-icons">
            <div className="bg-blue-500 rounded text-white h-[30px] w-[35px] p-2 text-xl"><FaFacebookF /></div>

            <div className="bg-yellow-500 rounded text-white h-[30px] w-[35px] p-2 text-xl"><FaTwitter /></div>
            <div className="bg-red-600 rounded text-white h-[30px] w-[35px] p-2 text-xl"><FaYoutube /></div>

          </div>

        </div>

        <div className="bg-white p-5 h-[200px]">
            <h1 className="text-2xl font-bold text-[#062a35]">Ridhima sharma</h1>
            <p className="text-sm text-gray-400 border-b border-gray-300 pb-5 pt-2">Math Teacher</p>

          <span className="flex items-center gap-2 mt-3">
              <LuBookAudio className="text-orange-500 text-sm"/>
              <p className="text-sm text-gray-500">750 + Course</p>
          </span> 
        </div>
        </a>
      </div>


      <div className="team-member">
      <a href="team">
        <div className="team-img group">
          <img src="/team3.avif" alt="" />

          <div className="plus-btn">+</div>
      
          <div className="social-icons">
            <div className="bg-blue-500 rounded text-white h-[30px] w-[35px] p-2 text-xl"><FaFacebookF /></div>

            <div className="bg-yellow-500 rounded text-white h-[30px] w-[35px] p-2 text-xl"><FaTwitter /></div>
            <div className="bg-red-600 rounded text-white h-[30px] w-[35px] p-2 text-xl"><FaYoutube /></div>

          </div>

        </div>

        <div className="bg-white p-5 h-[200px]">
            <h1 className="text-2xl font-bold text-[#062a35]">Ajay yadav</h1>
            <p className="text-sm text-gray-400 border-b border-gray-300 pb-5 pt-2">Computer Teacher</p>

          <span className="flex items-center gap-2 mt-3">
              <LuBookAudio className="text-orange-500 text-sm"/>
              <p className="text-sm text-gray-500">700 + Course</p>
          </span> 
        </div>
      </a>
      </div>



      <div className="team-member">
      <a href="/team">
        <div className="team-img group">
          <img src="/team2.avif" alt="" />

          <div className="plus-btn">+</div>
      
          <div className="social-icons">
            <div className="bg-blue-500 rounded text-white h-[30px] w-[35px] p-2 text-xl"><FaFacebookF /></div>

            <div className="bg-yellow-500 rounded text-white h-[30px] w-[35px] p-2 text-xl"><FaTwitter /></div>
            <div className="bg-red-600 rounded text-white h-[30px] w-[35px] p-2 text-xl"><FaYoutube /></div>

          </div>

        </div>

        <div className="bg-white p-5 h-[200px]">
            <h1 className="text-2xl font-bold text-[#062a35]">Aaditay sharma</h1>
            <p className="text-sm text-gray-400 border-b border-gray-300 pb-5 pt-2">English Teacher</p>

          <span className="flex items-center gap-2 mt-3">
              <LuBookAudio className="text-orange-500 text-sm"/>
              <p className="text-sm text-gray-500">590 + Course</p>
          </span> 
        </div>
        </a>
      </div>

  </div>

  </div>




    <div className="text-center h-[100px] w-full mt-20"> 
            <p className="text-lg font-semibold text-orange-500 "> Latest Events </p>
            <h1 className="pt-2 text-5xl font-bold text-[#062a35] tracking-wide ">Upcoming Events</h1>
    </div>




  <div className= "w-[95%] flex items-center justify-center  mx-auto mt-8 gap-8">  

    <div className="w-[60%] event-card">

        <div className="overflow-hidden">
         <img src="/event1.jpg"alt="" className="w-full block h-[400px] object-cover transition-transform duration-500" />
            
       </div>

      <div className="w-full bg-sky-100 h-[300px] p-10">

        <div className="flex gap-5 items-center">
          <span className="flex items-center gap-2">
              <FaRegCalendarAlt className="text-orange-500"/>
              <p className="text-md text-gray-500 font-400">30 MAY 2026</p>    
          </span> 

          <span className="flex items-center gap-2">
              <FaRegCalendarAlt className="text-orange-500"/>
              <p className="text-md text-gray-500 font-400">8AM - 9PM</p>    
          </span> 

          <span className="flex items-center gap-2">
              <GrLocation  className="text-orange-500"/>
              <p className="text-md text-gray-500 font-400">Jaipur,Rajasthan</p>    
          </span> 
        </div>

        <h1 className="text-2xl font-bold text-[#062a35] hover:text-orange-500 cursor-pointer duration-200 pt-4">Web Design & Development Conference 2026</h1>

        <p className="text-gray-500 text-md pt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et</p>

        <button className="uparcase h-[50px] w-[180px] bg-orange-500 p-3 font-semibold text-white mt-8 cursor-pointer">join event</button>

      </div>  

    </div>


  <div className="w-[30%]">

    <div className="w-full  relative overflow-hidden shadow-lg">

    <img
    src="/event2.jpg"
    alt=""
    className="w-full h-[350px] object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40"></div>

    <div className="absolute top-5 right-5 bg-orange-500 text-white w-[70px] h-[70px] flex items-center justify-center rounded-full text-xl font-bold">
    $20
   </div>
  
    <div className="absolute text-white bottom-5 left-5">
      <div className="flex items-center gap-4 mb-3">
        <span className="flex items-center gap-2">
            <FaRegCalendarAlt className="text-orange-500"/>
            <p className="text-md  font-400">30 MAY 2026</p>    
        </span> 

         <span className="flex items-center gap-2">
            <FaRegCalendarAlt className="text-orange-500"/>
            <p className="text-md  font-400">8AM - 9PM</p>    
        </span>
      </div>

      <h1 className="font-bold text-xl hover:text-orange-500 cursor-pointer duration-200 ">Annual Conference 2020</h1>

      <button className=" font-semibold text-white mt-4 cursor-pointer">join event-- </button>

    </div>

  </div>



  <div className="w-full  relative overflow-hidden shadow-lg mt-5">

    <img
    src="/event3.jpg"
    alt=""
    className="w-full h-[350px] object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40"></div>

    <div className="absolute top-5 right-5 bg-orange-500 text-white w-[70px] h-[70px] flex items-center justify-center rounded-full text-xl font-bold">
    $20
   </div>
  
    <div className="absolute text-white bottom-5 left-5">
      <div className="flex items-center gap-4 mb-3">
        <span className="flex items-center gap-2">
            <FaRegCalendarAlt className="text-orange-500"/>
            <p className="text-md  font-400">30 MAY 2026</p>    
        </span> 

         <span className="flex items-center gap-2">
            <FaRegCalendarAlt className="text-orange-500"/>
            <p className="text-md  font-400">8AM - 9PM</p>    
        </span>
      </div>

      <h1 className="font-bold text-xl hover:text-orange-500 cursor-pointer duration-200 ">Annual Conference 2020</h1>

      <button className=" font-semibold text-white mt-4 cursor-pointer">join event-- </button>

    </div>

    </div>

   </div>

</div>

        <div className="w-full h-[250px] items-center justify-center flex">
            <button className=" text-md h-[50px] w-[180px]  p-3 hover:font-semibold text-sky-800 mt-8 cursor-pointer hover:bg-orange-500 hover:text-white border border-gray-400 duration-600">VIEW ALL EVENTS</button>
        </div>




    <div className="stu-feedback pt-20">

      <div className="text-center h-[100px] w-full"> 
            <p className="text-lg font-semibold text-white "> Students Feedback   </p>
            <h1 className="pt-2 text-5xl font-bold text-white tracking-wide ">What Our Students Say</h1>
      </div> 


      <div className="w-[95%] flex mt-8 gap-8">
        
        <div className="w-[55%]">
            <Feedswiper/>
        </div>

        <div className="w-[40%] pl-5">
          <img src="/feed2.png" alt="" />
        </div>

      </div>

    </div>  


    <div className="w-full h-[700px] bg-sky-100 p-15 flex justify-between">

      <div className="w-[50%]">
          <img src="/instruck.png" alt="" />
      </div>

    <div className="w-[43%] mt-10">
      <p className="text-md text-orange-600 font-bold"> Build A Career</p>
      <h1 className="text-5xl font-bold  text-[#062a35] pt-4">Become an Instructor</h1>
      <p className="text-gray-500 text-md pt-4">Sed ut perspiciati unde omnis iste natus error sit voluptatem accusanc tium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sun</p>


      <div className="w-full flex items-center justify-between mt-8">
        <div className="w-[50%] border-r border-r-gray-400">
          <PiSuitcaseSimple  className="text-6xl text-orange-600"/>

          <p className=" text-[#062a35] text-xl font-bold pt-2">Digitalization</p>  
          <p className="text-gray-500 text-md pt-2">Sed ut perspia unde omnis aste natus error sit volu</p>
        </div>

         <div className="w-[40%]">
          <LuBookUser className="text-6xl text-orange-600"/>

          <p className=" text-[#062a35] text-xl font-bold pt-2">Book Friendly</p>  
          <p className="text-gray-500 text-md pt-2">Sed ut perspia unde omnis aste natus error sit volu</p>
        </div>

      </div>

          <div className="flex itmes-center gap-5 mt-8"> 
           <a href="/contact"> 
            <button class=" h-[50px] w-[180px] bg-orange-600 p-3 font-semibold text-white mt-8 cursor-pointer hover:bg-[#062a35] duration-400">JOIN WITH US</button>
            </a>


            <button class=" h-[50px] w-[180px] bg-white hover:bg-orange-500 p-3 font-semibold text-[#062a35] hover:text-white mt-8 cursor-pointer duration-400 text-sm">BECOME A PARTNER</button>
          </div>  

    </div> 

    </div>


    <div class="text-center h-[100px] w-full mt-20">
    <p class="text-lg font-semibold text-orange-500 "> Artices & Tipes </p>
    <h1 class="pt-2 text-5xl font-bold text-[#062a35] tracking-wide ">Latest News & Blog</h1>
    </div>




    <div className="w-full h-[750px] flex items-center gap-8 justify-center mt-8">

      <div className="w-[28%] "> 

        <a href="/blog">
        <img src="/bimg3.jpg"  class="hover:-translate-y-2 transition-all duration-300  object-cover cursor-pointer"/>
        </a>

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

          <h2 className="text-2xl font-bold text-[#062a35] pt-3 pl-7 pr-5"><a href="/blog">Learning Resources In Challenec Times Online Workshops </a> </h2>

          <div className="flex items-center gap-3 pl-7 mt-5">
             <img src="/g.png" alt="" /> 
             <p className="text-lg font-semibold text-orange-600">Pooja Sharma</p>
          </div>

          <a href="/blog">
          <button className="w-[70px] h-[60px] bg-[#062a35] ml-auto flex hover:bg-orange-600 cursor-pointer">
            <FaArrowRightLong className="text-2xl text-white mx-auto mt-5"/>
          </button>
          </a>
        </div>

      </div>


       <div className="w-[28%] "> 

        <a href="/blog">
        <img src="/bimg2.jpg"  class="hover:-translate-y-2 transition-all duration-300 object-cover cursor-pointer"/>
        </a>

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

          <h2 className="text-2xl font-bold text-[#062a35] pt-3 pl-7 pr-5"><a href="/blog"> Djang Models Admin And Harness Rela Tional Database </a></h2>

          <div className="flex items-center gap-3 pl-7 mt-5">
             <img src="/g.png" alt="" /> 
             <p className="text-lg font-semibold text-orange-600">Pooja Sharma</p>
          </div>

          <a href="/blog">
          <button className="w-[70px] h-[60px] bg-[#062a35] ml-auto flex hover:bg-orange-600 cursor-pointer">
            <FaArrowRightLong className="text-2xl text-white mx-auto mt-5"/>
          </button>
          </a>

        </div>

      </div>



       <div className="w-[28%] "> 

        <a href="/blog">
        <img src="/bimg1.jpg"  class="hover:-translate-y-2 transition-all duration-300  object-cover cursor-pointer"/>
        </a>
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

          <h2 className="text-2xl font-bold text-[#062a35] pt-3 pl-7 pr-5"><a href="/blog"> Smash Podcast With Laura Kalbag What Is Online Privacy</a></h2>

          <div className="flex items-center gap-3 pl-7 mt-5">
             <img src="/g.png" alt="" /> 
             <p className="text-lg font-semibold text-orange-600">Pooja Sharma</p>
          </div>

          <a href="/blog">
          <button className="w-[70px] h-[60px] bg-[#062a35] ml-auto flex hover:bg-orange-600 cursor-pointer">
            <FaArrowRightLong className="text-2xl text-white mx-auto mt-5"/>
          </button>
          </a>

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

export default Home;