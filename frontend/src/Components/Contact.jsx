import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


import { TbMessageDots } from "react-icons/tb";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";




function Contact(){

return(
    <>
        <Navbar/>

    <div className="course-hero  flex flex-col justify-center items-center">
    <h1 className="text-8xl text-white font-bold shadow-xl ">Contact Us</h1>  
    <p className="text-white text-2xl bold pt-5">Home / Contact Us</p>
    </div>

    <div className="w-full bg-sky-100 flex p-20 gap-15">

       <div className="w-[35%]">
          <p className="text-orange-500 font-semibold"> Quick Contact</p>
          <h1 className="text-5xl font-bold text-[#062a35] pt-2">Get In Touch</h1>
          <p  className="text-gray-500 text-sm pt-5 leading-6">Have questions or need guidance? Get in touch with our team for course details, admissions, and career support. We are here to help you achieve your learning goals.</p>

            

                <div className="flex w-full gap-5 mt-4">
                   <span className="w-[50px] h-[50px] rounded-full bg-orange-500 flex items-center justify-center ">
                       <CiLocationOn  className="text-white text-2xl"/>        
                   </span>    

                    <span>
                        <h1 className="text-[#062a35] font-bold text-lg">Locations</h1>
                        <p className="text-[#062a35]  ">Mahaveer Nagar, Jaipur(Rajasthan)</p>
                    </span>
                </div>

                <div className="flex w-full gap-5 mt-4">
                   <span className="w-[50px] h-[50px] rounded-full bg-orange-500 flex items-center justify-center ">  
                      
                      <TbMessageDots  className="text-white text-2xl"/> 
                   </span>    

                    <span>
                        <h1 className="text-[#062a35] font-bold text-lg">Email Us</h1>
                        <p className="text-[#062a35]  ">Support@gmail.com</p>
                    </span>
                </div>

                <div className="flex w-full gap-5 mt-4">
                   <span className="w-[50px] h-[50px] rounded-full bg-orange-500 flex items-center justify-center ">
                     <MdOutlinePhoneInTalk className="text-white text-2xl"/>         
                   </span>    

                    <span>
                        <h1 className="text-[#062a35] font-bold text-lg">Phone Us</h1>
                        <p className="text-[#062a35]  ">+91-9950539988</p>
                    </span>
                </div>


                <div className="flex w-full gap-5 mt-15 border-t-2 border-t-gray-300 pt-8">
                    <span className="w-[40px] h-[40px] rounded-full bg-sky-200 flex items-center justify-center "> 
                     <FaFacebookF  className="text-blue-500 text-lg"/>    
                   </span> 
                   
                   <span className="w-[40px] h-[40px] rounded-full bg-sky-200 flex items-center justify-center ">
                    <FaTwitter  className="text-blue-500 text-lg"/>
                   </span>

                   <span className="w-[40px] h-[40px] rounded-full bg-sky-200 flex items-center justify-center ">
                    <FaYoutube className="text-blue-500 text-lg"/>
                   </span>
                </div>

       </div>  

       <div className="w-[60%] h-[550px]">
           
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14237.987792164948!2d75.78088477594993!3d26.855948069573483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5b75ca375a7%3A0x3f282d238b699226!2sMahaveer%20Nagar%2C%20Durgapura%2C%20Jaipur%2C%20Rajasthan%20302018!5e0!3m2!1sen!2sin!4v1781515425734!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen referrerpolicy="no-referrer-when-downgrade" className="rounded-xl"></iframe>
            
       </div>

    </div>


        <div className="w-full h-[100px] bg-sky-100">
            <p className="text-orange-500 font-semibold text-center">Get In Touch</p>
            <h1 className="text-4xl font-bold text-[#062a35] pt-2 text-center">Leave Us Message</h1>   
        </div>  


        <div className="w-full pt-5 pl-20 pr-20 bg-sky-100 flex flex-wrap justify-between">

          <span className="w-[30%] flex items-center bg-white h-[70px] justify-between pr-4">
            <input type="text" placeholder="Enter Full Name" className="px-5 font-semibold outline-none"/>
            <RiContactsLine  className="text-orange-600 text-lg"/>
          </span> 

          <span className="w-[30%] flex items-center bg-white h-[70px] justify-between pr-4">
            <input type="email" placeholder="Email Here" className="px-5 font-semibold outline-none"/>
            <TbMessageDots   className="text-orange-600 text-lg"/>
          </span>

          <span className="w-[30%] flex items-center bg-white h-[70px] justify-between pr-4">
            <input type="tel" placeholder="Phone Number" className="px-5 font-semibold outline-none"/>
            <MdOutlinePhoneInTalk  className="text-orange-600 text-lg"/> 
          </span>

          <textarea name="" id="" placeholder="Write Message" className="w-full h-[200px] bg-white mt-5 outline-none p-3"></textarea>
        
        </div> 

        
        <div className="bg-sky-100 w-full h-[200px] flex items-center justify-center pt-5 ">
            <button className="w-[40%] h-[50px] bg-orange-700 text-white font-bold hover:bg-blue-800 cursor-pointer duration-500">SEND MESSAGE</button>
        </div>


        <Footer/>    


    </>
)

}

export default Contact;