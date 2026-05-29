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
           <div className="w-full flex item-center bg-white h-[100px] justify-between">
            <div className="w-[25%] ">
                <img src="/logo.webp" className="h-[90px] pl-5 pt-3"/>
            </div>  

            <div className="w-[45%]">
  
  <ul className="flex justify-between items-center mt-8 text-lg font-medium">

    <li className="hover:text-orange-400 cursor-pointer ">
      Home
    </li>

    <li>
      <select className="w-[90px] cursor-pointer outline-none bg-transparent hover:text-orange-400">

        <option>Course</option>
        <option>Digital Marketing Course</option>
        <option>Web Development</option>
        <option>Social Media Marketing</option>
        <option>Graphic Design</option>
        <option>Data Analytics</option>
        <option>Data Science</option>
        <option>Python With DSA</option>
        <option>Wordpress Development</option>
        <option>Cyber Security</option>
        <option>Video Editing</option>
        <option>Mernstack</option>

      </select>
    </li>

    <li className="hover:text-orange-400 cursor-pointer">
      About Us
    </li>

    <li className="hover:text-orange-400 cursor-pointer">
      Blogs
    </li>

    <li className="hover:text-orange-400 cursor-pointer">
      Services
    </li>

    <li className="hover:text-orange-400 cursor-pointer">
      Contact
    </li>

  </ul>

</div>

            <div className="w-[20%]  flex justify-between ">
                <FaFacebookF className="mt-10 text-orange-600 text-xl hover:text-black cursor-pointer"/>
                <FaYoutube  className="mt-10 text-orange-600 text-xl hover:text-black cursor-pointer"/>
                <div className="flex items-center">
                    <IoIosContact className="text-orange-600"/>
                    <button className="flex font-medium text-sm cursor-pointer">Sing in</button>
                </div>
                <img src="/bar.png" className="h-[35px] mt-8 mr-4"/>
            </div>

           </div>  



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
            <h1 className="mt-2 text-5xl font-bold text-[#062a35] tracking-wide ">Course Categories</h1>
    </div>

    <div className="w-[90%] ml-15 mt-10">

      <div className="w-full flex items-center justify-between">

        <div className="w-[22%] h-[340px] border border-gray-300 rounded">
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
        </div> 

        <div className="w-[22%] h-[340px] border border-gray-300 rounded">
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
        </div>

        <div className="w-[22%] h-[340px] border border-gray-300 rounded">
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
        </div>

        <div className="w-[22%] h-[340px] border border-gray-300 rounded">
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
        </div>

      </div>


      <div className="w-full flex items-center justify-between mt-5">

        <div className="w-[22%] h-[340px] border border-gray-300 rounded">
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
        </div> 

        <div className="w-[22%] h-[340px] border border-gray-300 rounded">
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
        </div>

        <div className="w-[22%] h-[340px] border border-gray-300 rounded">
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
        </div>

        <div className="w-[22%] h-[340px] border border-gray-300 rounded">
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

    <button className="enroll-btn">
      GET ENROLLED →
    </button>

      </div>  

  </div>

  </div>


  <div className="flex justify-center items-center mt-10">
    <button className="bg-[#062a35] text-white px-8 py-4 font-semibold cursor-pointer border border-sky-900 hover:bg-orange-600 transition duration-300 ">
      VIEW ALL COURSES →
    </button>
  </div>

  </div>




        <div className="w-full text-center mt-18 h-[150px]">
            <p className="text-lg font-semibold text-orange-600 "> Photo & Album </p>
            <h1 className="mt-2 text-5xl font-bold text-[#062a35] tracking-wide ">Campus Gallery</h1>
        </div>



      <div>
            <Compustab/>
      </div>



    </>
)
}

export default Home;