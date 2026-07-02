import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Imgswiper from "./Imgswiper";

import { LuBookAudio } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { PiStudentThin } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi2";

import axios from 'axios';
import { useParams } from "react-router-dom";





function Teamintro(){


  const{id} = useParams();

  const[professor , setProfessor]=useState([]);

    useEffect(()=>{
      fetchprofessor()
    },[id]);


    const fetchprofessor = async()=>{

      try{
        const res = await axios.get(`http://localhost:9000/professor/${id}`)

        setProfessor(res.data);
      }catch(err){
        console.log(err)
      }

    }






    const [students, setStudents] = useState(0);
          const [courses, setCourses] = useState(0);
          
    
        useEffect(() => {
        const interval = setInterval(() => {
        setStudents((prev) => (prev < 6460 ? prev + 60 : 6460));
        setCourses((prev) => (prev < 3500 ? prev + 40 : 3500));
        
        }, 20);
    
      return () => clearInterval(interval);
      }, []);








return(
<>
       <Navbar/> 

    <div className="course-hero  flex flex-col justify-center items-center">
        <h1 className="text-8xl text-white font-bold "> Instructor Details</h1>  
        <p className="text-white text-2xl bold ">Home / Instructor Details</p>
    </div> 



     <div className="w-full bg-sky-100 min-h-[700px]">
      <div className="w-[90%] mx-auto pt-20 flex gap-5 ">

        <div className="w-[35%] ">

            <img src={`http://localhost:9000/uploads/${professor.professorImg}`} alt={professor.professorImg}  className=" w-full min-h-[400px] object-cover"/>

            <div className="w-full bg-white flex p-6 h-auto">

              <div className="w-[50%]">  
              <h1 className="text-[#062a35] text-[19px] font-[700]">{professor.name}</h1>  
              <p className="text-gray-500 text-sm ">{professor.department}</p>

              <span className="flex items-center gap-2 mt-3 border-t border-t-gray-300 pt-5">
                    <LuBookAudio className="text-orange-500 text-md"/>
                    <p className="text-sm text-gray-500">590 + Course</p>
              </span>               
             </div> 

              <div className="w-[45%] ml-12">
                <span className="flex  gap-3">
                   <FaFacebookF  className="h-[40px] w-[40px] rounded-full bg-sky-500 text-white p-3"/>
                   <FaTwitter className="h-[40px] w-[40px] rounded-full bg-yellow-500 text-white p-3"/>
                  
                </span>

                <span className="flex mt-2 gap-3">
                   <FaYoutube  className="h-[40px] w-[40px] rounded-full bg-red-500 text-white p-3"/>
                 <AiFillInstagram  className="h-[40px] w-[40px] rounded-full bg-blue-500 text-white p-3"/>
                </span>
              </div>    

            </div>
        </div>   


        <div className="w-[60%] bg-white  p-10">
           <h1 className="text-[#062a35] text-3xl font-[700]">About Me</h1> 

           <p className="text-gray-500 leading-7 text-[15px] pt-5">{professor.about}</p>

          <div className="flex gap-8 mt-8 justify-center">  
           <div className="flex flex-col">
              <h1 className="text-4xl text-orange-500 font-bold">{courses}+</h1>
              <p className="text-md text-gray-500">Saticfied Students</p>
            </div>

            <div className="flex flex-col ">
              <h1 className="text-4xl text-orange-500 font-bold">{students}+</h1>
              <p className="text-md text-gray-500">Saticfied Students</p>
            </div>
          </div>  
        </div>

     </div>

    </div>





    <div className="w-full bg-sky-100 min-h-[450px]">
        <div className="w-[90%] mx-auto flex gap-5 min-h-[400px]">

          <div className="w-[48%] bg-white p-12">
            <h1 className="text-[#062a35] text-2xl font-[700]">Certifications</h1>  
            <p className="text-gray-500 text-[15px] leading-7 pt-5">{professor.certificate}</p>

            <div className="flex items-center gap-5 mt-8">
                <img src={`http://localhost:9000/uploads/${professor.certificateImg}`} alt={professor.certificateImg} />
                
                <img src="/c3.jpg" alt="" />
            </div>    

          </div>     

          <div className="w-[48%] bg-white p-12">

            <h1 className="text-[#062a35] text-2xl font-[700]">Educations</h1>

            <div className="flex gap-8 mt-10">
                
               <div className="flex gap-5">
                   <PiStudentThin  className="text-5xl text-orange-500"/>

                    <span>
                        <h1 className="text-[#062a35] text-md font-bold">{professor.univercity}</h1>
                        <p className="text-gray-500 pt-1">{professor.education}</p>
                    </span>    
               </div>

               <div className="flex gap-5">
                   <PiStudentThin  className="text-5xl text-orange-500"/>

                    <span>
                        <h1 className="text-[#062a35] text-md font-bold">{professor.univercity}</h1>
                        <p className="text-gray-500 pt-1">{professor.education}</p>
                    </span>    
               </div>

            </div>

            <h1 className="text-[#062a35] text-2xl font-[700] pt-8">Experience</h1>

            <div className="flex gap-8 mt-10">
                
               <div className="flex gap-5">
                   <PiStudentThin  className="text-5xl text-orange-500"/>

                    <span>
                        <h1 className="text-[#062a35] text-md font-bold">{professor.experience}</h1>
                        <p className="text-gray-500 pt-1">{professor.experienceUrl}</p>
                    </span>    
               </div>

               <div className="flex gap-5">
                   <PiStudentThin  className="text-5xl text-orange-500"/>

                    <span>
                        <h1 className="text-[#062a35] text-md font-bold">{professor.experience}</h1>
                        <p className="text-gray-500 pt-1">{professor.experienceUrl}</p>
                    </span>    
               </div>

            </div>

          </div>     

        </div> 
    </div>


    <div className="mt-20">

          <h1 className="text-[#062a35] text-center text-3xl font-bold ">Popular Course</h1>   

        <div className= "w-[90%] flex items-center justify-center flex-wrap mx-auto mt-8  gap-8">

           
        
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


    </div>



    <div className="mt-20 h-[180px] bg-orange-700 pt-12 pl-12">
        <Imgswiper/>
    </div>  


<Footer/>


</>
)    
}

export default Teamintro