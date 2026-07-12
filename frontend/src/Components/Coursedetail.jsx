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
        <h1 className="text-8xl text-white font-bold "> Course Details</h1>  
        <p className="text-white text-2xl bold ">Home / Courses</p>
    </div>  

    <div className="w-[90%]  flex ml-20 mt-20 gap-8">

    <div className="w-[65%]">

        <div className="w-full relative">
        <img src="/cd.jpg" alt="" />    
        <a href="//www.youtube.com">
        <FaYoutube className="w-[80px] h-[70px] bg-red-600 text-white  p-5 absolute top-[190px] right-[340px] rounded-xl transition-all duration-500 hover:scale-110"/>
        </a>
        </div> 


        <div className="w-full items-center mt-10">

          <h1 className="text-3xl font-bold text-[#062a35]">How To Improve Wed Design Skills</h1> 

          <p className="text-[15px] text-gray-500 leading-7 pt-5 text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p> 

          <h1 className="text-3xl font-bold text-[#062a35] pt-8">Curriculum</h1>
          <p className="text-[15px] text-gray-500 leading-7 pt-5 text-justify">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam</p>


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


          <img src="/cd2.jpg" alt="" className="mt-15"/>


          <h2 className="text-3xl font-bold text-[#062a35] mt-10">Frequently Asked Questions</h2>

          <p className="text-[15px] text-gray-500 leading-7 pt-5 text-justify">Wuisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam</p>

        </div>


        <div className="w-full">
            <Caccordion/>
        </div>


        <div className="w-full flex flex-wrap mt-10 gap-5">

            {professor.map((item)=>{
            return(
               
                
           <div key={item._id} className="w-[48%] h-[350px] border border-gray-200 justify-center flex flex-col items-center cursor-pointer">
              <Link to={`/team/${item._id}`}> 
                <img src={`http://localhost:9000/uploads/${item.professorImg}`} alt={item.professorImg} className="w-[190px] h-[190px] rounded-full object-cover"/>

                <h1 className="text-xl font-bold text-[#062a35] pt-5 ">{item.name}</h1>
                <p className="text-gray-400 text-sm">Math Teacher</p>
               </Link>  
           </div>  
               

            )       

            })}

        </div>

    </div> 




    <div className="w-[30%]">

       <div className="w-full border border-gray-300 min-h-[650px] p-8 ">

        <div className="flex items-center justify-between mt-5 h-[50px]">
            <span className="flex items-center gap-1">
                <HiOutlineCurrencyDollar  className="text-orange-500 text-xl"/>
                <p className="text-[#062a35] font-semibold text-md">Course Price</p>
            </span>

            <span className="flex items-center">
               
                <p className="text-orange-500  font-semibold text-md">{course.coursePrice}</p>
            </span>
        </div>   
         

        <div className="flex items-center justify-between mt-5 h-[50px] border-t border-t-gray-200">
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


          <Link to={`/buynow/${course._id}`}>
            <button className="w-[210px] h-[55px] bg-sky-600 text-white font-semibold rounded-full ml-10 mt-10 cursor-pointer hover:bg-orange-500 duration-300">Buy Now</button>
          </Link>  

            <button onClick={() => addToCart(course._id)} className="w-[210px] h-[55px] bg-red-600 text-white font-semibold rounded-full ml-10 mt-5 cursor-pointer hover:bg-orange-500 duration-300">Add To Cart</button>
  

       </div>  

       


        <div className="w-full mt-15">
            <img src="/cd3.jpg" alt=""  className="object-cover"/>
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

export default Coursedetail;