import React,{useEffect,useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";




function Buynow(){

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



return(
    <>
    
        

    <div className="w-[90%] flex gap-5  mx-auto justify-center mt-20">

       <div className="w-[60%] h-[250px] rounded-lg ">

           <p className="text-gray-500 p-2">Home / Coursedetails / Buy Page</p> 
    
        <div className="w-full h-13 bg-blue-100 rounded-sm">
            <h1 className="text-lg font-semibold text-orange-500 p-3">Checkout Details</h1>
        </div>   

        <div className="w-full flex justify-between p-5 border border-gray-200 shadow-sm">

            <img src={`http://localhost:9000/uploads/${course.courseImg}`} alt="" className="w-[28%] h-[120px] rounded-md"/>

            <div className="w-[70%] ">
              <h2 className="font-semibold text-lg text-red-900">{course.courseName}</h2>
              <p className="text-gray-600 pt-1 text-sm font-semibold">Duration: {course.courseDuration}</p>  

            <span className="flex items-center gap-8 pt-4">
             <p className="border border-gray-300 px-2 py-0 rounded-lg text-red-600 text-sm">{course.language}</p>
             <p className="text-gray-500 border border-gray-300 px-2 py-0 text-sm rounded-lg ">price: {course.coursePrice}</p>
            </span>    

            </div>

        </div>

       </div>  


       <div className="w-[30%] border border-gray-300 shadow-sm min-h-[200px] rounded-lg  mt-9">

            <div className="w-full h-13 bg-blue-100 rounded-sm">
            <h1 className="text-lg font-semibold text-orange-500 p-3">Price Details</h1>
            </div> 

            <div className=" w-full ">

            <span className="flex mt-3  border-b border-b-gray-200 items-center justify-between p-2">
               <p className="text-orange-700 font-semibold">Course Name : </p> 
               <p className="text-gray-500">{course.courseName}</p>
            </span> 
          
           <span className="flex mt-3  border-b border-b-gray-200 items-center justify-between p-2">
               <p className="text-orange-700 font-semibold">item price : </p> 
               <p className="text-gray-500">{course.coursePrice}/-</p>
           </span>

           <span className="flex mt-3  border-b border-b-gray-200 items-center justify-between p-2">
               <p className="text-orange-700 font-semibold">Shipping charges : </p> 
               <p className="text-green-500 font-semibold">Free</p>
           </span>

           <span className="flex mt-3  border-b border-b-gray-200 items-center justify-between p-2">
               <p className="text-orange-700 font-semibold">Total : </p> 
               <p className="text-gray-500">{course.coursePrice}/-</p>
           </span>

          </div> 

          <div className="w-full p-4 mt-4">
            <p className="text-gray-500 text-sm text-center">Safe And Secure Payment</p>

            <button className="w-full bg-sky-900 text-white px-2 py-2 rounded-lg hover:bg-sky-900/90 cursor-pointer duration-500 mt-3">Pay Now</button>
          </div>       
            

       </div> 


    </div>


    </>
)
}

export default Buynow;