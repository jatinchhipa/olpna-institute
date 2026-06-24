import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import axios from 'axios';



import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { MdOutlinePhone } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";




function Signup(){

    const[Sign,setSign]=useState({

        name:"",
        email:"",
        phone:"",
        course:"",
        password:"",

    });

    const handleChange = (e)=>{
        setSign({
            ...Sign,[e.target.name] :e.target.value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try{
            const res = await axios.post("http://localhost:9000/api/sign",Sign);
            console.log(res)
            alert(res.data.msg || "Signup Successfully");

        }catch(err){
      
            alert(err.response?.data?.msg  || "Signup Error")
        }
        
            
    }

    




return(
    <>
        <Navbar/>  


      <form onSubmit={handleSubmit}> 

        <div className="w-full bg-sky-100 pt-15 pb-15">

            <div className="w-[65%] bg-white mx-auto flex rounded-sm shadow-sm">

            <div className="w-[45%] bg-white">
                <img src="sign.png" alt="" className=" w-full  object-cover"/>
            </div>


            <div className="w-[55%] p-8">
   
                <h1 className="relative after:absolute after:left-0 after:-bottom-3 after:w-15 after:h-1 after:bg-orange-500 text-[#062a35] font-bold text-2xl font-['Poppins']">Create Your Account</h1>

                <p className="text-gray-500 pt-8 font-[nunito]">Fill In All The Details To Create Your Account. </p>


                <div className="w-full h-[45px] border border-gray-300 flex items-center gap-3 rounded-md shadow-sm mt-5">
                 <BsPerson  className="text-orange-600 text-xl ml-3"/>
                 <input type="text" name="name" value={Sign.name} onChange={handleChange} placeholder="Enter Full Name" className="text-md font-semibold outline-none"/>   
                </div>


                <div className="w-full h-[45px] border border-gray-300 flex items-center gap-3 rounded-md shadow-sm mt-5">
                 <MdOutlineEmail className="text-orange-600 text-xl ml-3"/>
                 <input type="email" name="email" value={Sign.email} onChange={handleChange} placeholder="Enter Email Addres" className="text-md font-semibold outline-none"/>   
                </div>


                <div className="w-full h-[45px] border border-gray-300 flex items-center gap-3 rounded-md shadow-sm mt-5">
                 <MdOutlinePhone  className="text-orange-600 text-xl ml-3"/>
                 <input type="tel" name="phone" value={Sign.phone} onChange={handleChange} placeholder="Enter Mobile Number" className="text-md font-semibold outline-none"/>   
                </div>


                <div className="w-full h-[45px] border border-gray-300 flex items-center gap-3 rounded-md shadow-sm mt-5">
                
                 <PiStudentBold  className="text-orange-600 text-xl ml-3"/>

                <select name="course" value={Sign.course} onChange={handleChange} id="" className="w-full outline-none text-md font-semibold text-gray-500">
                    <option value="course">course</option>
                    <option value="web development">Web Development</option>
                    <option value="graphic design">Graphic Design</option>
                    <option value="digital marketing">Digital Marketing</option>
                    <option value="social media">Social Media Marketing</option>
                    <option value="data analytics">Data Analtics</option>
                </select> 

                </div>



                <div className="w-full h-[45px] border border-gray-300 flex items-center gap-3 rounded-md shadow-sm mt-5">
                 <TbLockPassword  className="text-orange-600 text-xl ml-3"/>
                 <input type="password" name="password" value={Sign.password} onChange={handleChange} placeholder="Enter Password" className="text-md font-semibold outline-none"/>   
                </div>


                <div className="w-full h-[45px] items-center  rounded-md  mt-5 bg-orange-600 flex items-center justify-center cursor-pointer hover:bg-[#062a35] duration-400">
                    <button type="submit" className="w-full h-[45px] text-white font-semibold  font-['Poppins'] cursor-pointer ">SIGN UP</button>
                </div>


                

                <div className="flex items-center gap-2 mt-4">
                    <p className="text-gray-500">Already have an account?</p>

                <a href="/login">
                <button type="button" className="text-orange-500 font-semibold hover:text-[#062a35] duration-300 cursor-pointer">Login</button>
                </a>

                </div>


            </div>


            </div>
        </div>

    </form> 

        <Footer/>

    </>
)
}

export default Signup;