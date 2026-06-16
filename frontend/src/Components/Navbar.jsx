import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";




function Navbar(){
    return(
        <>
          <div className="w-full flex item-center bg-sky-50 h-[100px] justify-between">
                  <div className="w-[25%] ">
                          <a href="/">
                            <img src="/logo.webp" className="h-[90px] pl-5 pt-3"/>
                           </a> 
                    </div>  
            
                <div className="w-[45%]">
              
              <ul className="flex justify-between items-center mt-8 text-lg font-medium">
            
                <li className="hover:text-orange-400 cursor-pointer ">
                 <a href="/"> Home</a>                
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
                  <a href="/about"> About Us</a>
                </li>
            
                <li className="hover:text-orange-400 cursor-pointer">
                 <a href="/blog"> Blogs</a>
                </li>
            
                <li className="hover:text-orange-400 cursor-pointer">
                  <a href="/course">
                  Services
                  </a>
                </li>
            
                <li className="hover:text-orange-400 cursor-pointer">
                  <a href="/contact">Contact</a>
                </li>
            
              </ul>
            
            </div>
            
                  <div className="w-[25%]  flex justify-between ">
                      <FaFacebookF className="mt-10 text-orange-600 text-xl hover:text-black cursor-pointer"/>
                      <FaYoutube  className="mt-10 text-orange-600 text-xl hover:text-black cursor-pointer"/>
                      <div className="flex items-center">
                        <IoIosContact className="text-orange-600"/>

                       <a href="/signup"> 
                        <button className="flex font-medium text-sm cursor-pointer">Sing in/</button>
                       </a> 

                        <a href="/signup"> 
                        <button className="flex font-medium text-sm cursor-pointer">Login</button>
                       </a>

                      </div>
                        <img src="/bar.png" className="h-[35px] mt-8 mr-4"/>
                  </div>
            
          </div>
        </>
    )
}

export default Navbar;