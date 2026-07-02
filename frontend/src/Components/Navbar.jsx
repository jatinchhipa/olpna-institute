import React from "react";
import { IoIosContact } from "react-icons/io";

import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";




function Navbar(){

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();


    const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
    };




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
                <a href="/course">Services</a>
              </li>
            
              <li className="hover:text-orange-400 cursor-pointer">
                  <a href="/contact">Contact</a>
              </li>
            
              </ul>
            
            </div>
            
      <div className="w-[20%] flex justify-between items-center">

        <div className="flex items-center gap-5">

          <IoIosContact className="text-orange-600 text-2xl" />

          {user ? (
            <>
              <span className="font-medium text-gray-700">
                {user.name}
              </span>

            <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
            >
                Logout
                </button>
              </>
            ) : (
              <>
                <button
                    onClick={() => navigate("/signup")}
                    className="font-medium text-sm cursor-pointer"
                >
                    Sign Up
                </button>

                <span>/</span>

                <button
                    onClick={() => navigate("/login")}
                    className="font-medium text-sm cursor-pointer"
                >
                    Login
                </button>
              </>
            )}

        </div>

      </div>
            
    </div>
  </>
)
};

export default Navbar;