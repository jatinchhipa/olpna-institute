import React, { useState } from "react";
import Navbar from "./Navbar";

import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import Footer from "./Footer";
import axios from "axios";




function Login(){


        const[Login , setLogin]=useState({
            email:"",
            password:""
        });

        const handleChange = (e)=>{
            setLogin({
            ...Login,[e.target.name]: e.target.value,
            })
        }

        const handleSubmit = async (e)=>{
            e.preventDefault();

            try{

               const res = await axios.post("http://localhost:9000/api/login",Login);
               alert(res.data.msg || "Login succesfully")

            }catch(err){
                alert(err.response?.data?.msg || "login error")
            }
        }





return(
    <>
        <Navbar/>



        <form onSubmit={handleSubmit}>   

           <div className="bg-sky-100 w-full p-15">

                <div className="w-[40%] mx-auto bg-white p-8 rounded-md shadow-sm ">

                    <h1 className="relative after:absolute after:left-0 after:-bottom-3 after:w-15 after:h-1 after:bg-orange-500 text-[#062a35] font-bold text-2xl font-['Poppins']">Login Your Account</h1>

                <p className="text-gray-500 pt-8 font-[nunito]">Fill In All The Details To Login Your Account. </p>                    


                    <div className="w-full h-[45px] border border-gray-300 flex items-center gap-3 rounded-md shadow-sm mt-5">
                        <MdOutlineEmail className="text-orange-600 text-xl ml-3"/>
                        <input type="email" name="email" value={Login.email} onChange={handleChange} placeholder="Enter Email Addres" className="text-md font-semibold outline-none"/>   
                    </div>

                    <div className="w-full h-[45px] border border-gray-300 flex items-center gap-3 rounded-md shadow-sm mt-5">
                        <TbLockPassword  className="text-orange-600 text-xl ml-3"/>
                        <input type="password" name="password" value={Login.password} onChange={handleChange} placeholder="Enter Password" className="text-md font-semibold outline-none"/>   
                    </div>


                    <div className="w-full h-[45px] items-center  rounded-md  mt-5 hover:bg-orange-600 flex items-center justify-center cursor-pointer bg-[#062a35] duration-400">
                    <button type="submit" className="w-full h-[45px] text-white font-semibold  font-['Poppins'] cursor-pointer ">LOGIN</button>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                    <p className="text-gray-500">Create Your account?</p>

                    <a href="/signup">
                    <button type="button" className="text-orange-500 font-semibold hover:text-[#062a35] duration-300 cursor-pointer">Sign Up</button>
                    </a>

                    </div>

                </div>

           </div>  

        </form> 

           <Footer/>

    </>
)
}

export default Login;