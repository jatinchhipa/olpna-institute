import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";



function Footer(){
    return(
    <>
        <div data-aos="fade-up" className="footer">

            <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center md:h-[180px] border-b border-b-gray-700 py-2 md:py-0">
                <div className="lg:w-[38%] w-full relative cursor-pointer group lg:h-[180px] h-[90px]">
                   <img src="/logow.png" className="w-[180px] md:w-[60%]"/> 

                   <span className="left-0 bottom-0 absolute h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>

                </div> 

                <div className="w-full lg:w-[62%] flex flex-wrap lg:flex-nowrap justify-center">

                <div className="w-1/2 lg:w-[25%] h-auto lg:h-[180px] flex justify-center items-center gap-3 py-4 relative cursor-pointer group">
                    <FaFacebookF className="w-[30px] h-[30px] bg-blue-600 text-white rounded-xl p-2"/>
                    <p className="text-white font-bold">Facebook</p> 

                    <span className="left-0 bottom-0 absolute h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>

                </div>

                <div className="w-1/2 lg:w-[25%] h-auto lg:h-[180px] flex justify-center items-center gap-3 py-4 relative cursor-pointer group">
                    <FaTwitter className="w-[30px] h-[30px] bg-sky-400 text-white rounded-xl p-2"/>
                    <p className="text-white font-bold">Twitter</p>

                    <span className="left-0 bottom-0 absolute h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>

                </div>

                <div className="w-1/2 lg:w-[25%] h-auto lg:h-[180px] flex justify-center items-center gap-3 py-4 relative cursor-pointer group">
                   <FaYoutube className="w-[30px] h-[30px] bg-red-600 text-white rounded-xl p-2"/>
                    <p className="text-white font-bold">Youtube</p>

                    <span className="left-0 bottom-0 absolute h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>

                </div>

                <div className="w-1/2 lg:w-[25%] h-auto lg:h-[180px] flex justify-center items-center gap-3 py-4 relative cursor-pointer group">
                   <FaInstagram className="w-[30px] h-[30px] bg-pink-600 text-white rounded-xl p-2"/>
                    <p className="text-white font-bold">Instagram</p>

                    <span className="left-0 bottom-0 absolute h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>

                </div>

                </div>

            </div>


        <div className="w-[90%] mx-auto mt-12 flex flex-wrap">

                <div className="w-1/2 lg:w-[18%] px-2 mb-8">
                    <h1 className="lg:text-2xl text-xl font-bold text-white">Our Course</h1>

                <ul>
                    <li className="group flex items-center gap-2 text-gray-500 text-md pt-2 cursor-pointer hover:text-orange-500 transition-all duration-300">
                    <span className="w-0 h-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-2 group-hover:h-2"></span>
                    <span className="translate-x-0 group-hover:translate-x-3 transition-all duration-500">
                        Web Development
                    </span>
                    </li>
                    
                    <li className="group flex items-center gap-2 text-gray-500 text-md pt-2 cursor-pointer hover:text-orange-500 transition-all duration-300">
                    <span className="w-0 h-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-2 group-hover:h-2"></span>
                    <span className="translate-x-0 group-hover:translate-x-3 transition-all duration-500">
                        Computer Engineering
                    </span>
                    </li>

                    <li className="group flex items-center gap-2 text-gray-500 text-md pt-2 cursor-pointer hover:text-orange-500 transition-all duration-300">
                    <span className="w-0 h-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-2 group-hover:h-2"></span>
                    <span className="translate-x-0 group-hover:translate-x-3 transition-all duration-500">
                        Graphic Design
                    </span>
                    </li>

                   <li className="group flex items-center gap-2 text-gray-500 text-md pt-2 cursor-pointer hover:text-orange-500 transition-all duration-300">
                    <span className="w-0 h-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-2 group-hover:h-2"></span>
                    <span className="translate-x-0 group-hover:translate-x-3 transition-all duration-500">
                        Software Development
                    </span>
                    </li>

                    <li className="group flex items-center gap-2 text-gray-500 text-md pt-2 cursor-pointer hover:text-orange-500 transition-all duration-300">
                    <span className="w-0 h-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-2 group-hover:h-2"></span>
                    <span className="translate-x-0 group-hover:translate-x-3 transition-all duration-500">
                        Addvance Wordpress
                    </span>
                    </li>
                </ul> 

                </div>  




              <div className="w-1/2 lg:w-[25%] px-2 mb-8">
                    

                <ul className="mt-8">
                    <li className="group flex items-center gap-2 text-gray-500 text-md pt-2 cursor-pointer hover:text-orange-500 transition-all duration-300">
                    <span className="w-0 h-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-2 group-hover:h-2"></span>
                    <span className="translate-x-0 group-hover:translate-x-3 transition-all duration-500">
                        Business Studies
                    </span>
                    </li>
                    
                    <li className="group flex items-center gap-2 text-gray-500 text-md pt-2 cursor-pointer hover:text-orange-500 transition-all duration-300">
                    <span className="w-0 h-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-2 group-hover:h-2"></span>
                    <span className="translate-x-0 group-hover:translate-x-3 transition-all duration-500">
                        English Learning
                    </span>
                    </li>

                    <li className="group flex items-center gap-2 text-gray-500 text-md pt-2 cursor-pointer hover:text-orange-500 transition-all duration-300">
                    <span className="w-0 h-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-2 group-hover:h-2"></span>
                    <span className="translate-x-0 group-hover:translate-x-3 transition-all duration-500">
                           Color Combinition 
                    </span>
                    </li>

                   <li className="group flex items-center gap-2 text-gray-500 text-md pt-2 cursor-pointer hover:text-orange-500 transition-all duration-300">
                    <span className="w-0 h-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-2 group-hover:h-2"></span>
                    <span className="translate-x-0 group-hover:translate-x-3 transition-all duration-500">
                        Photography
                    </span>
                    </li>

                    <li className="group flex items-center gap-2 text-gray-500 text-md pt-2 cursor-pointer hover:text-orange-500 transition-all duration-300">
                    <span className="w-0 h-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-2 group-hover:h-2"></span>
                    <span className="translate-x-0 group-hover:translate-x-3 transition-all duration-500">
                        Basic PSD To HTML
                    </span>
                    </li>
                </ul> 

                </div>    



              <div className="w-1/2 lg:w-[20%] px-2 mb-8">
                    <h1 className="text-2xl font-bold text-white">Comapny</h1>

                <ul>
                    <li className="group flex items-center gap-2 text-gray-500 text-md pt-2 cursor-pointer hover:text-orange-500 transition-all duration-300">
                    <span className="w-0 h-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-2 group-hover:h-2"></span>
                    <span className="translate-x-0 group-hover:translate-x-3 transition-all duration-500">
                        About Eduket
                    </span>
                    </li>
                    
                    <li className="group flex items-center gap-2 text-gray-500 text-md pt-2 cursor-pointer hover:text-orange-500 transition-all duration-300">
                    <span className="w-0 h-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-2 group-hover:h-2"></span>
                    <span className="translate-x-0 group-hover:translate-x-3 transition-all duration-500">
                        Meet Advisor
                    </span>
                    </li>

                    <li className="group flex items-center gap-2 text-gray-500 text-md pt-2 cursor-pointer hover:text-orange-500 transition-all duration-300">
                    <span className="w-0 h-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-2 group-hover:h-2"></span>
                    <span className="translate-x-0 group-hover:translate-x-3 transition-all duration-500">
                        Join Career
                    </span>
                    </li>

                   <li className="group flex items-center gap-2 text-gray-500 text-md pt-2 cursor-pointer hover:text-orange-500 transition-all duration-300">
                    <span className="w-0 h-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-2 group-hover:h-2"></span>
                    <span className="translate-x-0 group-hover:translate-x-3 transition-all duration-500">
                        Latest Course
                    </span>
                    </li>

                    <li className="group flex items-center gap-2 text-gray-500 text-md pt-2 cursor-pointer hover:text-orange-500 transition-all duration-300">
                    <span className="w-0 h-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-2 group-hover:h-2"></span>
                    <span className="translate-x-0 group-hover:translate-x-3 transition-all duration-500">
                        Newsletters
                    </span>
                    </li>
                </ul> 

                </div>  


                <div className="w-1/2 lg:w-[37%] px-2 mb-8"> 
                   <h1 className="text-2xl font-bold text-white">Newsletters</h1>   

                   <p className="text-gray-600 text-sm pt-5">  Join our community and never miss important updates, new course launches, and exciting opportunities.</p>
  
                   <div className="hidden md:flex mt-6 w-full">
                    <input type="email"  placeholder="Enter Your Email" className="flex-1 bg-[#0b3b4a] text-white text-sm lg:text-lg px-2 lg:px-6 py-3 lg:py-4 outline-none "/>

                    <button className="w-[55px] lg:w-[70px] h-[52px] lg:h-[60px] bg-orange-500 flex justify-center items-center cursor-pointer">
                     <FaArrowRightLong className="text-xl lg:text-2xl text-white"/>
                    </button>

                   </div>  

                </div> 

        </div>  


                <div className="flex md:hidden mt-2 w-[75%] mx-auto">
                    <input type="email"  placeholder="Enter Your Email" className="flex-1 bg-[#0b3b4a] text-white text-sm lg:text-lg px-2 lg:px-6 py-3 lg:py-4 outline-none "/>

                    <button className="w-[55px] lg:w-[70px] h-[52px] lg:h-[60px] bg-orange-500 flex justify-center items-center cursor-pointer">
                     <FaArrowRightLong className="text-xl lg:text-2xl text-white"/>
                    </button>

                </div>   

        <div className="text-sm lg:text-lg w-[80%] lg:w-[90%] h-[50px] items-center justify-center flex bg-[#0b3b4a] mx-auto mt-5">
            <p className="text-white">Copyright © 2020 BDevs All Rights Reserved.</p>
        </div>  



    </div>

    </>
    )
}

export default Footer;