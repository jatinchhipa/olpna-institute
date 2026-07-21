import { useEffect, useState,useContext } from "react";
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

import axios from 'axios';






function Home(){

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

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16 flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">  
              <p data-aos="fade-down" className="text-sm md:text-base text-orange-400 font-semibold">Welcome To EduPlus</p>

              <h1 data-aos="fade-left" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-900 italic font-serif leading-tight ">More than 1200 Online Courses</h1>

              <div className="mt-8 w-full bg-white rounded-lg shadow-md flex items-center justify-between p-3">
                  <input type="text" placeholder=" Search Course" className="w-full text-base md:text-lg outline-none"/>
                    <IoSearchSharp className="text-3xl bg-orange-400 w-[50px] h-[50px] text-white p-3 rounded"/>
              </div>

            <div className="flex flex-col md:flex-row gap-4  mt-8">
              <span className=" border-r-4 border-orange-500 pr-8">
               <p className="text-md text-gray-500">Learn, grow, and succeed with courses<br/> designed to unlock your full potential.</p> 
              </span>  

            <span className="flex items-center gap-5 lg:ml-0 ml-8">
              <MdOutlineSupportAgent className="text-4xl text-orange-500" />

             <div className="flex flex-col ">
              <p className="text-lg text-gray-800 font-semibold">Online Support</p>
              <p className="text-xl text-sky-900 font-bold">+012 (345) 6789</p>
             </div>
            </span>
              
              
            </div>

          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
              <img src="/herogirl.png" alt="" className="w-full max-w-md lg:max-w-xl lg:pl-0 pl-12" />
          </div>
      </div>

        <div className=" max-w-7xl  mx-auto px-6 py-12 ">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

          <div className=" bg-white shadow-lg rounded-lg flex items-center gap-4 p-5 md:p-3">
            <span>
              <IoIosContacts className="text-5xl md:text-6xl text-orange-600 "/>
            </span>

           <div className="flex flex-col md:flex-row">
              <h1 className="text-3xl  text-orange-500 font-semibold">{students}+</h1>
              <p className="text-md text-gray-500">Saticfied Students</p>
            </div>

          </div>

          <div className=" bg-white shadow-lg rounded-lg flex items-center gap-4 p-5 md:p-3">
            <span>
              <LiaSwatchbookSolid  className="text-6xl text-orange-600 "/>
            </span>

           <div className="flex flex-col">
              <h1 className="text-3xl text-orange-500 font-semibold">{courses}+</h1>
              <p className="text-md text-gray-500">Available Courses</p>
            </div>

          </div>

          <div className=" bg-white shadow-lg rounded-lg flex items-center gap-4 p-5 md:p-3">
            <span>
              <RiGraduationCapLine className="text-6xl text-orange-600 "/>
            </span>

           <div className="flex flex-col">
              <h1 className="text-3xl text-orange-500 font-semibold">{graduates}+</h1>
              <p className="text-md text-gray-500">Graduate Students</p>
            </div>

          </div>

          <div className=" bg-white shadow-lg rounded-lg flex items-center gap-4 p-5 md:p-3">
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


      </div>



    <div className="text-center h-[50px] lg:h-[100px] w-full mt-5 lg:mt-5"> 
            <p className="text-md lg:text-lg font-semibold text-orange-500 "> Popular Categories </p>
            <h1 className=" lg:pt-0 text-2xl lg:text-5xl font-bold text-[#062a35] tracking-wide ">Course Categories</h1>
    </div>




    <div className="w-[90%] mx-auto mt-6 px-2 md:px-0">

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





    <div className="w-full bg-[#062a35] h-90% lg:h-[800px] mt-15">

      <div className="text-center h-[100px] lg:h-[200px] w-full pt-4 lg:pt-6"> 
            <p className="text-md lg:text-lg font-semibold text-orange-600 "> Popular Courses </p>
            <h1 className="lg:mt-2 mt-1  text-2xl lg:text-5xl font-bold text-white tracking-wide ">Available Courses</h1>
      </div> 



    <div className= "w-[90%] mx-auto  flex flex-wrap justify-center gap-8">

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

          <div className=" p-5 min-h-[200px]">

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


  <div className="flex justify-center items-center mt-8 lg:mt-10">

  <a href="/Course"> 
    <button className="bg-[#062a35] mb-5 lg:mb-0 text-sm text-white px-4 lg:px-8 py-2 lg:py-4 font-semibold cursor-pointer border border-sky-900 hover:bg-orange-600 transition duration-300 ">
      VIEW ALL COURSES →
    </button>
  </a>   
  </div>

  </div>




    <div className="w-full text-center mt-10 min-h-[100px] lg:min-h-[150px]">
        <p className="text-md lg:text-lg font-semibold text-orange-600 "> Photo & Album </p>
        <h1 className="lg:mt-2 mt-1 text-2xl lg:text-5xl font-bold text-[#062a35] tracking-wide ">Campus Gallery</h1>
    </div>




    <div className="mb-15">
            <Compustab/>
    </div>






    <div className="bg-sky-100 w-full h-auto pt-5 lg:pt-8">

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




    <div className="text-center lg:h-[100px] h-[50px] w-full mt-20"> 
            <p className="text-md lg:text-lg font-semibold text-orange-500 "> Latest Events </p>
            <h1 className=" text-2xl lg:text-5xl font-bold text-[#062a35] tracking-wide ">Upcoming Events</h1>
    </div>




  <div className= "w-[95%] flex flex-col lg:flex-row items-center justify-center mx-auto mt-8 gap-8">  

    <div className="lg:w-[60%] w-full event-card">

        <div className="overflow-hidden">
         <img src="/event1.jpg"alt="" className="w-full block h-[250px] sm:h-[300px] lg:h-[400px] object-cover transition-transform duration-500" />
            
       </div>

      <div className="w-full bg-sky-100 lg:h-[300px] h-auto p-5 lg:p-10">

        <div className="flex flex-col sm:flex-row flex-wrap gap-5 items-center">
          <span className="flex items-center gap-4 lg:gap-2">
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

        <h1 className="text-xl  lg:text-2xl font-bold text-[#062a35] hover:text-orange-500 cursor-pointer duration-200 pt-4">Web Design & Development Conference 2026</h1>

        <p className="text-gray-500 text-md pt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et</p>

        <button className="uparcase h-[50px] w-[170px] bg-orange-500 p-3 font-semibold text-white mt-6 cursor-pointer">join event</button>

      </div>  

    </div>


  <div className=" w-full lg:w-[30%]">

    <div className="w-full  relative overflow-hidden shadow-lg">

    <img
    src="/event2.jpg"
    alt=""
    className="w-full h-[250px] lg:h-[350px] object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40"></div>

    <div className="absolute top-5 right-5 bg-orange-500 text-white h-[60px] w-[60px] lg:w-[70px] lg:h-[70px] flex items-center justify-center rounded-full text-xl font-bold">
    $20
   </div>
  
    <div className="absolute text-white bottom-5 left-5">
      <div className="flex  items-center gap-4 mb-3">
        <span className="flex items-center gap-2">
            <FaRegCalendarAlt className="text-orange-500"/>
            <p className="text-md  font-400">30 MAY 2026</p>    
        </span> 

         <span className="flex items-center gap-2">
            <FaRegCalendarAlt className="text-orange-500"/>
            <p className="text-md  font-400">8AM - 9PM</p>    
        </span>
      </div>

      <h1 className="font-bold text-lg lg:text-xl hover:text-orange-500 cursor-pointer duration-200 ">Annual Conference 2020</h1>

      <button className=" font-semibold text-white mt-4 cursor-pointer">join event-- </button>

    </div>

  </div>



  <div className="w-full  relative overflow-hidden shadow-lg mt-5">

    <img
    src="/event3.jpg"
    alt=""
    className="w-full h-[250px] lg:h-[350px] object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40"></div>

    <div className="absolute top-5 right-5 bg-orange-500 text-white w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] flex items-center justify-center rounded-full text-xl font-bold">
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

      <h1 className="font-bold text-lg lg:text-xl hover:text-orange-500 cursor-pointer duration-200 ">Annual Conference 2020</h1>

      <button className=" font-semibold text-white mt-4  cursor-pointer">join event-- </button>

    </div>

    </div>

   </div>

</div>

        <div className="w-full  h-[200px]  items-center justify-center flex">
            <button className=" text-md  lg:h-[50px] lg:w-[180px]  p-3 hover:font-semibold text-sky-800 mt-8 cursor-pointer hover:bg-orange-500 hover:text-white border border-gray-400 duration-600">VIEW ALL EVENTS</button>
        </div>




    <div className="stu-feedback pt-20">

      <div className="text-center h-[50px] lg:h-[100px] w-full"> 
            <p className="text-md lg:text-lg font-semibold text-orange-400 "> Students Feedback   </p>
            <h1 className="lg:pt-2 text-2xl lg:text-5xl font-bold text-white tracking-wide ">What Our Students Say</h1>
      </div> 


      <div className="w-[95%] mx-auto flex flex-col lg:flex-row items-center gap-8 mt-8">
        
        <div className="w-full lg:w-[55%]">
            <Feedswiper/>
        </div>

        <div className="w-full lg:w-[40%] justify-center flex">
          <img src="/feed2.png" alt="" className="w-full max-w-[500px] h-auto object-contain"/>
        </div>

      </div>

    </div>  


    <div className="w-full h-auto bg-sky-100 p-10 lg:p-15 flex flex-col lg:flex-row justify-between mt-5">

      <div className="lg:w-[50%] w-full">
          <img src="/instruck.png" alt="" />
      </div>

    <div className="lg:w-[43%] w-full mt-10">
      <p className="text-md text-orange-600 font-bold"> Build A Career</p>
      <h1 className="lg:text-5xl text-3xl font-bold  text-[#062a35] pt-2">Become an Instructor</h1>
      <p className="text-gray-500 text-md pt-4">Sed ut perspiciati unde omnis iste natus error sit voluptatem accusanc tium doloremque laudantium, totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sun</p>


      <div className="w-full flex items-center justify-between mt-5 lg:gap-0 gap-3">
        <div className="lg:w-[50%] w-full border-r border-r-gray-400">
          <PiSuitcaseSimple  className="text-6xl text-orange-600"/>

          <p className=" text-[#062a35] text-xl font-bold pt-2">Digitalization</p>  
          <p className="text-gray-500 text-md pt-2">Sed ut perspia unde omnis aste natus error sit volu</p>
        </div>

         <div className="lg:w-[40%] w-full">
          <LuBookUser className="text-6xl text-orange-600"/>

          <p className=" text-[#062a35] text-xl font-bold pt-2">Book Friendly</p>  
          <p className="text-gray-500 text-md pt-2">Sed ut perspia unde omnis aste natus error sit volu</p>
        </div>

      </div>

          <div className="flex itmes-center gap-5 mt-8"> 
           <a href="/contact"> 
            <button class="h-[40px] w-[120px] lg:h-[50px] lg:w-[180px] bg-orange-600 p-2 font-semibold text-white mt-8 cursor-pointer hover:bg-[#062a35] duration-400  text-sm lg:text-md">JOIN WITH US</button>
            </a>


            <button class="h-[40px] w-[150px] lg:h-[50px] lg:w-[180px] bg-white hover:bg-orange-500 p-2 font-semibold text-[#062a35] hover:text-white mt-8 cursor-pointer duration-400 text-sm">BECOME A PARTNER</button>
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

export default Home;