import React, { useEffect, useState , useContext} from "react";
import Navbar from "./Navbar";

import { FaYoutube } from "react-icons/fa";
import Caccordion from "./Caccordion";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { FaDollarSign } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa6";
import { CiFlag1 } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";

import Footer from "./Footer";
import Imgswiper from "./Imgswiper";


import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


import { AuthContext } from "../../auth/AuthContext";



function Coursedetail(){

     const { id } = useParams();


    const[course , setCourse] = useState({});

    useEffect(()=>{
        fetchcourse()
    },[id]);

    const fetchcourse = async()=>{

        try{
            const res = await axios.get(`http://localhost:9000/course/${id}`)

            setCourse(res.data);

        }catch(err){
            console.log(err)
        }

    };


    const[professor , setProfessor] = useState([]);

       useEffect(()=>{
            fetchprofessor()
       },[]);

       const fetchprofessor = async()=>{

        try{
            const res = await axios.get("http://localhost:9000/getprofessor" , professor);

            setProfessor(res.data);

        }catch(err){
            console.log(err)
        }
       }




       const { user } = useContext(AuthContext);
       
       
            const addToCart = async (courseId) => {
       
           try {
       
               const res = await axios.post(
                   "http://localhost:9000/cart",
                   {
                       userId: user._id,
                       courseId: courseId
                   }
               );
       
               alert(res.data.msg);
       
           } catch (err) {
       
               alert(err.response.data.msg);
       
           }
       
       }
    

    





    return(
    <>
       <Navbar/> 

    <div className="course-hero  flex flex-col justify-center items-center">
        <h1 className="lg:text-8xl text-4xl text-white font-bold "> Course Details</h1>  
        <p className="text-white text-lg lg:text-2xl bold ">Home / Courses</p>
    </div>  

    <div className="w-[90%]  flex flex-col lg:flex-row mx-auto mt-10 lg:mt-20 gap-8">

    <div className="lg:w-[65%] w-full">

        <div className="w-full relative">
        <img src="/cd.jpg" alt="" />    
        <a href="//www.youtube.com">
        <FaYoutube className="lg;w-[80px] lg:h-[70px] w-[50px] h-[40px] bg-red-600 text-white p-2 lg:p-5 absolute lg:top-[190px] lg:right-[340px] top-20 right-35 rounded-xl transition-all duration-500 hover:scale-110"/>
        </a>
        </div> 


        <div className="w-full items-center mt-10">

          <h1 className="lg:text-3xl text-xl font-bold text-[#062a35]">How To Improve Wed Design Skills</h1> 

          <p className="text-[15px] text-gray-500 lg:leading-7 pt-2 lg:pt-5 text-justify">Improving web design skills requires consistent practice, creativity, and a willingness to learn new technologies. Start by mastering the fundamentals of HTML, CSS, and JavaScript, then explore modern frameworks like React and Tailwind CSS. Study well-designed websites to understand layout, typography, color theory, and user experience principles. Build real-world projects to strengthen your skills and create a professional portfolio. Stay updated with the latest design trends, responsive design techniques, and accessibility standards. Seek feedback from other designers, refine your work regularly, and never stop experimenting. Continuous learning and hands-on experience are the keys to becoming a confident and successful web designer.</p> 

          <h1 className="lg:text-3xl text-xl font-bold text-[#062a35] pt-5 lg:pt-8">Curriculum</h1>
          <p className="text-[15px] text-gray-500 lg:leading-7 pt-2 lg:pt-5 text-justify">Our curriculum is carefully designed to provide a complete and practical learning experience for students of all skill levels. It combines strong theoretical concepts with hands-on projects, interactive lessons, and real-world applications to ensure effective understanding. </p>


          <ul className="mt-5">
            <a href="/coursedetail">
            <li className="text-[#062a35] text-sm font-bold pt-5 pb-4 border-t border-t-gray-300 cursor-pointer hover:bg-sky-100 duration-500">Lesson 01: Introduced About Web Design</li>
            </a>    

            <a href="/coursedetail">
            <li className="text-[#062a35] text-sm font-bold pt-5 pb-4 border-t border-t-gray-300 cursor-pointer hover:bg-sky-100 duration-500">Lesson 02: What Is UX/UI Design ?</li>
            </a>

            <a href="/coursedetail">
            <li className="text-[#062a35] text-sm font-bold pt-5 pb-4 border-t border-t-gray-300 cursor-pointer hover:bg-sky-100 duration-500">Lesson 03:Why Need UX/UI Role In Web Design ?</li>
            </a>

            <a href="/coursedetail">
            <li className="text-[#062a35] text-sm font-bold pt-5 pb-4 border-t border-t-gray-300 cursor-pointer hover:bg-sky-100 duration-500">Lesson 04: What Is UX Manager</li>
            </a>    

            <a href="/coursedetail">
            <li className="text-[#062a35] text-sm font-bold pt-5 pb-4 border-t border-t-gray-300 cursor-pointer hover:bg-sky-100 duration-500">Lesson 05:What's Your Design Goals ?</li>
            </a>

          </ul>


          <img src="/cd2.jpg" alt="" className="mt-10 lg:mt-15"/>


          <h2 className="lg:text-3xl text-xl font-bold text-[#062a35] mt-10">Frequently Asked Questions</h2>

          <p className="text-[15px] text-gray-500 lg:leading-7 lg:pt-5 pt-2 text-justify">Find answers to the most commonly asked questions about our courses, enrollment process, payments, certifications, and learning experience. Our Frequently Asked Questions section is designed to provide clear and helpful information, making it easy for you to get started with confidence. </p>

        </div>


        <div className="w-full">
            <Caccordion/>
        </div>


        <div className="w-full flex flex-wrap mt-10 gap-5">

            {professor.map((item)=>{
            return(
               
                
           <div key={item._id} className=" w-full lg:w-[48%] h-[300px] lg:h-[350px] border border-gray-200 justify-center flex flex-col items-center cursor-pointer">
              <Link to={`/team/${item._id}`}> 
                <img src={`http://localhost:9000/uploads/${item.professorImg}`} alt={item.professorImg} className="lg:w-[190px] lg:h-[190px] w-[150px] h-[150px] rounded-full object-cover"/>

                <h1 className="text-xl font-bold text-[#062a35] pt-5 text-center">{item.name}</h1>
                <p className="text-gray-400 text-sm text-center">Math Teacher</p>
               </Link>  
           </div>  
               

            )       

            })}

        </div>

    </div> 




    <div className="w-full lg:w-[30%]">

       <div className="w-full border border-gray-300 min-h-[600px] lg:p-8 p-6">

        <div className="flex items-center justify-between mt-5 h-[40px] lg:h-[50px]">
            <span className="flex items-center gap-1">
                <HiOutlineCurrencyDollar  className="text-orange-500 text-xl"/>
                <p className="text-[#062a35] font-semibold text-md">Course Price</p>
            </span>

            <span className="flex items-center">
               
                <p className="text-orange-500  font-semibold text-md">{course.coursePrice}</p>
            </span>
        </div>   
         

        <div className="flex items-center justify-between mt-5 h-[40px] lg:h-[50px] border-t border-t-gray-200">
            <span className="flex items-center gap-1">
                <IoIosContact className="text-orange-500 text-xl"/>
                <p className="text-[#062a35] font-semibold text-md">Instructor</p>
            </span>

                <p className="text-orange-500  font-semibold text-md">{course.courseProfessor}</p>
           
        </div>


        <div className="flex items-center justify-between mt-5 h-[50px] border-t border-t-gray-200">
            <span className="flex items-center gap-1">
                <MdOutlineWatchLater   className="text-orange-500 text-xl"/>
                <p className="text-[#062a35] font-semibold text-md">Duration</p>
            </span>

                <p className="text-orange-500  font-semibold text-md">{course.courseDuration}</p>
    
        </div>

        <div className="flex items-center justify-between mt-5 h-[50px] border-t border-t-gray-200" >
            <span className="flex items-center gap-1">
                <FaRegAddressBook  className="text-orange-500 text-xl"/>
                <p className="text-[#062a35] font-semibold text-md">Lectures</p>
            </span>

                <p className="text-orange-500  font-semibold text-md">{course.lectures}</p>
           
        </div>

        <div className="flex items-center justify-between mt-5 h-[50px] border-t border-t-gray-200">
            <span className="flex items-center gap-1">
                <IoIosContact className="text-orange-500 text-xl"/>
                <p className="text-[#062a35] font-semibold text-md">Enrolled</p>
            </span>
           
                <p className="text-orange-500  font-semibold text-md">{course.student} Students</p>
           
        </div>

        <div className="flex items-center justify-between mt-5 h-[50px] border-t border-t-gray-200">
            <span className="flex items-center gap-1">
                <CiFlag1  className="text-orange-500 text-xl"/>
                <p className="text-[#062a35] font-semibold text-md">Language</p>
            </span>

                <p className="text-orange-500  font-semibold text-md">{course.language}</p>
        </div>

        <div className="flex items-center justify-between mt-5 h-[50px] border-t border-t-gray-200">
            <span className="flex items-center gap-1">              
                <FaRegCalendarAlt  className="text-orange-500 text-xl"/>
                <p className="text-[#062a35] font-semibold text-md">Deadline</p>
            </span>
         
                <p className="text-orange-500  font-semibold text-md">{course.courseDeadline}</p>         
        </div> 


           <div className="w-full flex lg:flex-col flex-row gap-3">

          <Link to={`/buynow/${course._id}`}>
            <button className="lg:w-[210px] lg:h-[55px] w-[140px] h-[40px] bg-sky-600 text-white font-semibold rounded-full lg:ml-10 mt-10 cursor-pointer hover:bg-orange-500 duration-300">Buy Now</button>
          </Link>  

            <button onClick={() => addToCart(course._id)} className="lg:w-[210px] lg:h-[55px] w-[140px] h-[40px] bg-red-600 text-white font-semibold rounded-full lg:ml-10 mt-10 lg:mt-5 cursor-pointer hover:bg-orange-500 duration-300">Add To Cart</button>
            
           </div>  

       </div>  

       


        <div className="w-full mt-15">
            <img src="/cd3.jpg" alt=""  className="object-cover"/>
        </div>

    </div>    

</div>

          
        
    <div className=" lg:h-[180px] h-[100px] bg-orange-700 lg:pt-10 lg:pl-12 pt-5 pl-5 lg:mt-5 mt-5">
        <Imgswiper/>
    </div>  


<Footer/>


    </>
    )
}

export default Coursedetail;