import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";



function Footer(){
    return(
    <>
        <div className="footer">

            <div className="w-[90%] flex h-[180px] items-center ml-20 border-b border-b-gray-700">
                <div className="w-[38%] relative cursor-pointer group h-[180px]">
                   <img src="/logow.png" className="w-[60%] "/> 

                   <span className="left-0 bottom-0 absolute h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>

                </div> 

                <div className="w-[15%] h-[180px] flex gap-3 items-center relative cursor-pointer group">
                    <FaFacebookF className="w-[30px] h-[30px] bg-blue-600 text-white rounded-xl p-2"/>
                    <p className="text-white font-bold">Facebook</p> 

                    <span className="left-0 bottom-0 absolute h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>

                </div>

                <div className="w-[15%]  h-[180px] flex gap-3 items-center relative cursor-pointer group">
                    <FaTwitter className="w-[30px] h-[30px] bg-sky-400 text-white rounded-xl p-2"/>
                    <p className="text-white font-bold">Twitter</p>

                    <span className="left-0 bottom-0 absolute h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>

                </div>

                <div className="w-[15%] h-[180px] flex gap-3 items-center relative cursor-pointer group">
                   <FaYoutube className="w-[30px] h-[30px] bg-red-600 text-white rounded-xl p-2"/>
                    <p className="text-white font-bold">Youtube</p>

                    <span className="left-0 bottom-0 absolute h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>

                </div>

                <div className="w-[15%] h-[180px] flex gap-3 items-center relative cursor-pointer group">
                   <FaInstagram className="w-[30px] h-[30px] bg-pink-600 text-white rounded-xl p-2"/>
                    <p className="text-white font-bold">Instagram</p>

                    <span className="left-0 bottom-0 absolute h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>

                </div>

            </div>


        <div className="w-[90%] flex ml-20  mt-12">

                <div className="w-[18%]">
                    <h1 className="text-2xl font-bold text-white">Our Course</h1>

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




              <div className="w-[25%]">
                    

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



              <div className="w-[20%]">
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


                <div className="w-[37%]"> 
                   <h1 className="text-2xl font-bold text-white">Newsletters</h1>   

                   <p className="text-gray-600 text-sm pt-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium doloremque laudantium totam rem aperiam</p>  

                   <div className="flex items-center mt-8 w-full">
                    <input type="email"  placeholder="Enter Your Email" className="flex-1 bg-[#0b3b4a] text-white text-lg px-6 py-4 outline-none "/>

                    <button className="w-[70px] h-[60px] bg-orange-500 ml-auto flex cursor-pointer">
                     <FaArrowRightLong className="text-2xl text-white mx-auto mt-5"/>
                    </button>

                   </div>  

                </div> 

        </div>  


        <div className="w-[90%] h-[50px] items-center justify-center flex bg-[#0b3b4a] ml-20 mt-8">
            <p className="text-white">Copyright © 2020 BDevs All Rights Reserved.</p>
        </div>  



    </div>

    </>
    )
}

export default Footer;