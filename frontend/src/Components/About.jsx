import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Feedswiper from "./Feedswiper";
import Imgswiper from "./Imgswiper";
import Footer from "./Footer";



import { LuBookMinus } from "react-icons/lu";
import { CiTrophy } from "react-icons/ci";
import { IoIosContacts } from "react-icons/io";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaLaptop } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";




function About(){

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
      <Navbar/>  

     <div className="course-hero  flex flex-col justify-center items-center">
        <h1 className="text-8xl text-white font-bold shadow-xl ">About Us</h1>  
        <p className="text-white text-2xl bold pt-5">Home / About Us</p>
    </div>


    <div className="w-[90%] flex mt-20 mx-auto min-h-[700px]">

        <div className="w-[50%]  relative">
            
            <img src="/ab1.jpg" alt="" className="w-[70%] h-[65%] "/>
                    
            
            <img src="/ab2.jpg" alt="" className="w-[300px] h-[250px] absolute bottom-0 right-20 top-80 object-cover rounded"/>

            <div className="absolute top-60 right-75 w-[150px] h-[150px] bg-orange-500 rounded-full flex flex-col items-center justify-center  border-5 border-white">
                <h1 className="text-6xl font-bold text-white">25</h1>

                <p className="text-white text-center font-semibold">Years of<br/> Experience</p>
      
            </div>
            
        </div>



        <div className="w-[40%]">
           <p className="text-orange-500 font-semibold text-md"> Introduced About EduPlus</p> 

           <h1 className="text-[#062a35] text-5xl font-bold pt-4">Welcome To EduPlus</h1>

            
             <p className="border-l-3 border-l-orange-500 text-gray-500  text-sm  pl-4 mt-8 leading-6">  EduPlus is committed to providing quality education and empowering students with the knowledge, skills, and confidence needed to achieve their academic and career goals.  </p>


            <div className="flex gap-5 mt-10">
                <div className="w-[80px] h-[50px] rounded-full bg-blue-700 px-3 py-3">
                <LuBookMinus  className="text-white  text-2xl"/>
                </div>

                <div>
                    <h1 className="text-[#062a35] font-semibold text-lg ">Professional & Expert</h1>

                    <p className="text-sm text-gray-500 leading-7"> Our team of highly qualified and experienced professionals is dedicated to delivering quality education and practical learning experiences. </p>
                </div>
            </div> 


            <div className="flex gap-5 mt-10">
                <div className="w-[80px] h-[50px] rounded-full bg-blue-700 px-3 py-3">
                <CiTrophy  className="text-white  text-2xl"/>

                </div>

                <div>
                    <h1 className="text-[#062a35] font-semibold text-lg ">Job Placement Support</h1>

                    <p className="text-sm text-gray-500 leading-7">  We provide dedicated job placement assistance to help students connect with leading companies and career opportunities.  </p>
                </div>
            </div>
            

            <button className="mt-10 bg-orange-500 w-[180px] h-[55px] text-white font-bold hover:bg-[#062a35] duration-500 cursor-pointer">LEARN MORE</button>

        </div>


    </div>


        <div className="w-[90%] flex items-center h-[100px] mx-auto gap-8">
        
                  <div className="w-[22%] bg-white h-[100px] flex gap-5 pt-4 pl-3 shadow-[0_10px_30px_rgba(0,0,0,0.2)] border-t-2 border-t-orange-500">
                    <span>
                      <IoIosContacts className="text-6xl text-orange-600 "/>
                    </span>
        
                   <div className="flex flex-col ">
                      <h1 className="text-3xl text-orange-500 font-semibold">{students}+</h1>
                      <p className="text-md text-gray-500">Saticfied Students</p>
                    </div>
        
                  </div>
        
                  <div className="w-[22%] bg-white h-[100px] flex gap-5 pt-4 pl-3 shadow-[0_10px_30px_rgba(0,0,0,0.2)] border-t-2 border-t-orange-500">
                    <span>
                      <LiaSwatchbookSolid  className="text-6xl text-orange-600 "/>
                    </span>
        
                   <div className="flex flex-col">
                      <h1 className="text-3xl text-orange-500 font-semibold">{courses}+</h1>
                      <p className="text-md text-gray-500">Available Courses</p>
                    </div>
        
                  </div>
        
                  <div className="w-[22%] bg-white h-[100px] flex gap-5 pt-4 pl-3 shadow-[0_10px_30px_rgba(0,0,0,0.2)] border-t-2 border-t-orange-500">
                    <span>
                      <RiGraduationCapLine className="text-6xl text-orange-600 "/>
                    </span>
        
                   <div className="flex flex-col">
                      <h1 className="text-3xl text-orange-500 font-semibold">{graduates}+</h1>
                      <p className="text-md text-gray-500">Graduate Students</p>
                    </div>
        
                  </div>
        
                  <div className="w-[22%] bg-white h-[100px] flex gap-5 pt-4 pl-3 shadow-[0_10px_30px_rgba(0,0,0,0.2)] border-t-2 border-t-orange-500">
                    <span>
                      <FaLaptop className="text-6xl text-orange-600" />
        
                    </span>
        
                   <div className="flex flex-col">
                      <h1 className="text-3xl text-orange-500 font-semibold">{active}+</h1>
                      <p className="text-md text-gray-500">Active Courses</p>
                    </div>
        
                  </div>
        
          </div>



      <div className="bg-sky-100 w-full flex p-20 gap-10">

        <div className="w-[35%]">
          <p className="text-orange-500 font-semibold"> Who We Are</p>
          <h1 className="text-5xl font-bold text-[#062a35] pt-2">Institute Goals</h1>
          <p  className="text-gray-500 text-sm pt-5 leading-6">Our institute aims to provide quality education, practical skills, professional guidance, and career opportunities that help students build a successful and bright future.</p>
          
          <div className="w-full flex gap-18 mt-8">

            <div className="w-[120px] h-[120px] rounded-full bg-white relative">
              <img src="/download.png" alt=""  className="object-cover w-full h-full"/>
              <p className="text-2xl font-bold text-[#062a35] absolute inset-0 flex items-center justify-center">83%</p>
              <h1 className="text-lg text-[#062a35] font-semibold">Enginering Studies</h1>
            </div>

            <div className="w-[120px] h-[120px] rounded-full bg-white relative">
              <img src="/chart.png" alt=""  className="object-cover w-full h-full"/>
              <p className="text-2xl font-bold text-[#062a35] absolute inset-0 flex items-center justify-center">83%</p>
              <h1 className="text-lg text-[#062a35] font-semibold">General & Other Studies</h1>
            </div>

          </div>

        </div>

        <div className="w-[60%] ">
             <div className="w-full relative">
                    <img src="/cd.jpg" alt="" />    
                    <a href="//www.youtube.com">
                    <FaYoutube className="w-[80px] h-[70px] bg-red-600 text-white  p-5 absolute top-[190px] right-[340px] rounded-xl transition-all duration-500 hover:scale-110"/>
                    </a>
              </div>
        </div>

      </div>



      <div className="stu-feedback pt-20 ">
      
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



        <div className="w-full  h-[180px] bg-orange-700 pt-12 pl-12 mt-20">
            <Imgswiper/>
        </div>
          
          
              
        <Footer/>

    </>
)
}

export default About;