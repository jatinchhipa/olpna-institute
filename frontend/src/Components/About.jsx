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

     <div data-aos="fade-right"  className="course-hero  flex flex-col justify-center items-center px-4">
        <h1  className="lg:text-8xl text-4xl text-white font-bold shadow-xl ">About Us</h1>  
        <p  className="text-white lg:text-2xl text-lg bold lg:pt-5 pt-2">Home / About Us</p>
    </div>


    <div  className="w-[90%] flex flex-col lg:flex-row mt-12 lg:mt-20 mx-auto min-h-auto lg:min-h-[550px] gap-10">

        <div  className="w-full lg:w-[50%] relative flex justify-center  py-5">
            
            <img src="/ab1.jpg" alt="" data-aos="fade-right" data-aos-duration="1200" className="w-[85%] lg:w-[70%] min:h-[200px] lg:h-[400px] rounded-md "/>
                    
            
            <img src="/ab2.jpg" alt="" className="w-[48%] h-[150px] lg:w-[290px] lg:h-[240px] absolute bottom-0 top-55 right-0 lg:right-10  lg:top-80 object-cover rounded"/>


            <div className="absolute  w-[80px] h-[80px]  lg:w-[130px] lg:h-[130px] bg-orange-500 rounded-full flex flex-col items-center justify-center  border-5 border-white lg:top-65 lg:right-60 lg:left-auto lg:bottom-auto bottom-[90px] left-[40%]">

                <h1 className="text-2xl lg:text-4xl font-bold text-white">25</h1>

                <p className="text-white text-center text-[10px] sm:text-sm lg:text-base font-semibold leading-tight">Years of<br/> Experience</p>
      
            </div>
            
        </div>



        <div data-aos="fade-dwon" className="lg:w-[40%] w-full">
           <p className="text-orange-500 font-semibold text-md"> Introduced About EduPlus</p> 

           <h1 className="text-[#062a35] text-3xl lg:text-5xl font-bold lg:pt-4 pt-2">Welcome To EduPlus</h1>

            
             <p   className="border-l-3 border-l-orange-500 text-gray-500  text-sm  pl-4 mt-8 leading-6">  EduPlus is committed to providing quality education and empowering students with the knowledge, skills, and confidence needed to achieve their academic and career goals.  </p>


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
            

            <button className="mt-10 bg-orange-500 w-[140px] h-[40px] lg:w-[180px] lg:h-[55px] text-white font-semibold lg:font-bold hover:bg-[#062a35] duration-500 cursor-pointer">LEARN MORE</button>

        </div>


    </div>

         <div  className=" max-w-7xl  mx-auto px-6 py-12 ">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
        
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



      <div className="bg-sky-100 w-full flex flex-col lg:flex-row lg:p-20 p-10 gap-10">

        <div data-aos="fade-dwon" className="lg:w-[35%] w-full">
          <p className="text-orange-500 font-semibold"> Who We Are</p>
          <h1 className="lg:text-5xl text-2xl font-bold text-[#062a35] lg:pt-2">Institute Goals</h1>
          <p  className="text-gray-500 text-sm lg:pt-5 pt-2 leading-6">Our institute aims to provide quality education, practical skills, professional guidance, and career opportunities that help students build a successful and bright future.</p>
          
          <div className="w-full flex lg:gap-18 gap-15 mt-8">

            <div className="lg:w-[120px] lg:h-[120px] w-[90px] h-[90px] rounded-full bg-white relative">
              <img src="/download.png" alt=""  className="object-cover w-full h-full"/>
              <p className="lg:text-2xl text-lg font-bold text-[#062a35] absolute inset-0 flex items-center justify-center">83%</p>
              <h1 className="lg:text-lg text-sm text-[#062a35] font-semibold">Enginering Studies</h1>
            </div>

            <div className="lg:w-[120px] lg:h-[120px] w-[90px] h-[90px] rounded-full bg-white relative">
              <img src="/chart.png" alt=""  className="object-cover w-full h-full"/>
              <p className="lg:text-2xl text-lg font-bold text-[#062a35] absolute inset-0 flex items-center justify-center">83%</p>
              <h1 className="lg:text-lg text-sm text-[#062a35] font-semibold">General & Other Studies</h1>
            </div>

          </div>

        </div>

        <div data-aos="fade-dwon" className="lg:w-[60%]  w-full mt-5">
             <div className="w-full relative">
                    <img src="/cd.jpg" alt="" />    
                    <a href="//www.youtube.com">
                    <FaYoutube className="lg:w-[80px] lg:h-[70px] w-[40px] h-[30px] bg-red-600 text-white  lg:p-5 p-1 absolute lg:top-[190px] lg:right-[340px] top-[70px] right-[120px] rounded-xl transition-all duration-500 hover:scale-110"/>
                    </a>
              </div>
        </div>

      </div>



      <div className="stu-feedback pt-20">
      
            <div className="text-center h-[50px] lg:h-[100px] w-full"> 
                  <p className="text-md lg:text-lg font-semibold text-orange-400 "> Students Feedback   </p>
                  <h1 className="lg:pt-2 text-2xl lg:text-5xl font-bold text-white tracking-wide ">What Our Students Say</h1>
            </div> 
      
      
            <div data-aos="fade-dwon" className="w-[95%] mx-auto flex flex-col lg:flex-row items-center gap-8 mt-8">
              
              <div  className="w-full lg:w-[55%]">
                  <Feedswiper/>
              </div>
      
              <div className="w-full lg:w-[40%] justify-center flex">
                <img src="/feed2.png" alt="" className="w-full max-w-[500px] h-auto object-contain"/>
              </div>
      
            </div>
      
          </div>



        <div className="lg:h-[180px] h-[100px] bg-orange-700 lg:pt-10 lg:pl-12 pt-5 pl-5 mt-10">
            <Imgswiper/>
        </div>
          
          
              
        <Footer/>

    </>
)
}

export default About;