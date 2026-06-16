import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { IoIosContact } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";






function Blog(){
return(
    <>
      <Navbar/>  

    <div className="blog-hero  flex flex-col justify-center items-center">
        <h1 className="text-8xl text-white font-bold "> Blog Details</h1>  
        <p className="text-white text-2xl bold pt-5">Home / Blog Details</p>
    </div>


    <div className="bg-sky-100 w-full pt-20 pb-20">
        
    <div className="w-[90%] flex mx-auto gap-8">

        <div className="w-[60%] bg-white">
           <img src="/bo.jpg" alt="" className="object-cover w-full"/> 

           <h1 className="text-[#062a35] text-3xl font-bold p-8">Inspire Design Decision With Ott Storch When Idea How To Space And Kern Punctuation</h1>  

           <div className="flex gap-8 pl-8">
             <span className="flex items-center gap-2">
                <IoIosContact className="text-orange-500 text-lg"/>
                <p className="text-gray-500 text-sm font-semibold">By pooja </p>
             </span>    

             <span className="flex items-center gap-2">
                <FaRegCalendarAlt className="text-orange-500 text-lg"/>
                <p className="text-gray-500 text-sm font-semibold">27 July 2026</p>
             </span>   

              <span className="flex items-center gap-2">
                <FaRegCommentDots className="text-orange-500 text-lg"/>
                <p className="text-gray-500 text-sm font-semibold">Com(50)</p>
             </span> 

             <span className="flex items-center gap-2">
                <CiHeart  className="text-orange-500 text-lg"/>
                <p className="text-gray-500 text-sm font-semibold">Like(1k)</p>
             </span>

           </div>     

           <p className="text-gray-500 leading-7 p-8 text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta suntexplicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullacorporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem</p>

           <h1 className="text-[#062a35] text-2xl font-bold pl-8">Why Needs Education</h1>

           <p className="text-gray-500 leading-7 p-8 text-justify">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem enim ad minima veniam</p> 

           <img src="/bo1.jpg" alt="" className="object-cover p-8"/>

           <div className="flex pl-8 gap-5">
              <FaCheck  className="w-7 h-7 rounded-full border border-gray-300 text-orange-500 p-1"/>
              <p className="text-[#062a35] font-semibold ">Inspired Design Decisions With Neville Brody: Design Cannot Remain Neutral</p>  
           </div>

           <div className="flex pl-8 pt-3 gap-5">
              <FaCheck  className="w-7 h-7 rounded-full border border-gray-300 text-orange-500 p-1"/>
              <p className="text-[#062a35] font-semibold ">Avoid Keyboard Event-Related Bugs In Browser-Based Transliteration</p>  
           </div>

           <div className="flex pl-8 pt-3 gap-5">
              <FaCheck  className="w-7 h-7 rounded-full border border-gray-300 text-orange-500 p-1"/>
              <p className="text-[#062a35] font-semibold ">Embrace The Possibilities (March 2020 Wallpapers)</p>  
           </div>


           <h1 className="text-[#062a35] text-2xl font-bold pl-8 pt-8">Best Articles For Web Design</h1>

           <p className="text-gray-500 leading-7 p-8 text-justify">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem enim ad minima veniam</p> 


           <div className="bg-sky-700 p-8 m-5">
               <h1 className="text-white text-2xl font-bold ">How To Build An Accessible Front-End Application With Chakra UI And Nuxt.js</h1> 

               <p className="text-white font-bold pt-5">Ridhima Sharma</p>
           </div>


           <div className="flex justify-between m-5 border-b border-b-gray-300 pb-3">
               <span className="flex gap-2 items-center">
                  <p>Tags :</p>
                  <p className="text-gray-500 text-sm"> Business Cart, Design & Branding</p>
               </span>

               <span className="flex items-center gap-5">
                 <p>Share : </p> 
                 <TiSocialFacebook  className="text-xl text-gray-500 "/>
                  <IoLogoInstagram  className="text-xl text-gray-500 "/>
                  <FaYoutube  className="text-xl text-gray-500 "/>
                  <FaTwitter  className="text-xl text-gray-500 "/>
               </span>
           </div>


           <div className="bg-sky-100 flex min-h-[200px] m-8 p-5">

            <div className="w-[40%]">
             <img src="/team2.avif" alt=""  className="w-[150px] h-[150px] rounded-full object-cover"/>    
            </div>

            <div className="w-[55%]">
               <h1 className="text-[#062a35] text-2xl font-bold ">Aaditay  Sharma</h1>
               <p className="text-gray-500 leading-6 pt-2  text-sm">But must explain to you how all this mistake idea deounci asure and praising pain was born and will give you comete account the system, and expound the actual teach</p>

                <span className="flex items-center gap-5 mt-5">
                 
                 <TiSocialFacebook  className="text-xl text-gray-500 "/>
                  <IoLogoInstagram  className="text-xl text-gray-500 "/>
                  <FaYoutube  className="text-xl text-gray-500 "/>
                  <FaTwitter  className="text-xl text-gray-500 "/>
               </span>

            </div>

           </div>
           

           <div className="flex w-full gap-12 p-8 border-b border-b-gray-300">

            <div className="flex w-[45%] gap-5">

             <div className="w-[25%]">  
              <img src="/boi.jpg" alt="" /> 
             </div>  

             <div className="w-[70%]">
               <h1 className="text-[#062a35] text-md font-bold ">Mixing Tangible & Intan Interfaces Using</h1>

               <span className="flex items-center gap-2 mt-2">
                <IoIosContact className="text-orange-500 text-lg"/>
                <p className="text-gray-500 text-sm font-semibold"> person </p>

               <FaRegCalendarAlt className="text-orange-500 text-lg"/>
                <p className="text-gray-500 text-sm font-semibold">27 July 2026</p>
             </span>    
             </div>  

            </div>

            <div className="flex w-[45%] gap-5">

             <div className="w-[25%]">  
              <img src="/boi2.jpg" alt="" /> 
             </div>  

             <div className="w-[70%]">
               <h1 className="text-[#062a35] text-md font-bold ">Mixing Tangible & Intan Interfaces Using</h1>

               <span className="flex items-center gap-2 mt-2">
                <IoIosContact className="text-orange-500 text-lg"/>
                <p className="text-gray-500 text-sm font-semibold"> person </p>

               <FaRegCalendarAlt className="text-orange-500 text-lg"/>
                <p className="text-gray-500 text-sm font-semibold">27 July 2026</p>
             </span>    
             </div>  

            </div>

           </div>


           <h1 className="p-8 text-[#062a35] text-2xl font-bold">People’s Comments</h1>
         
           <div className=" w-full p-5">

              <div className="w-full flex flex-wrap gap-8"> 

              <div className="w-[12%]">
                  <img src="c1.png" alt="" className="object-cover w-full"/>
              </div>  

              <div className="w-[80%]">

                 <div className="flex justify-between">
                    <span >
                        <h1 className="text-[#062a35] text-md font-bold">Rahul Sharma</h1>
                        <p className="text-orange-500 text-md">IT Consultant</p>
                    </span> 

                    <span className="text-gray-500 font-semibold text-sm">Reply Comment</span> 
                 </div> 

                 <p className="text-gray-500 text-sm pt-4">It is a long established fact that a reader will be distracted by the readable content of page looking at its layout. The point of using Lorem Ipsum normal</p> 

              </div>
            </div>

             <div className="w-full flex flex-wrap gap-8 mt-5"> 

              <div className="w-[12%]">
                  <img src="c2.png" alt="" className="object-cover w-full"/>
              </div>  

              <div className="w-[80%]">

                 <div className="flex justify-between">
                    <span >
                        <h1 className="text-[#062a35] text-md font-bold">Miller</h1>
                        <p className="text-orange-500 text-md">IT Consultant</p>
                    </span> 

                    <span className="text-gray-500 font-semibold text-sm">Reply Comment</span> 
                 </div> 

                 <p className="text-gray-500 text-sm pt-4">It is a long established fact that a reader will be distracted by the readable content of page looking at its layout. The point of using Lorem Ipsum normal</p> 

              </div>
            </div>


             <div className="w-full flex flex-wrap gap-8 mt-5"> 

              <div className="w-[12%]">
                  <img src="c3.png" alt="" className="object-cover w-full"/>
              </div>  

              <div className="w-[80%]">

                 <div className="flex justify-between">
                    <span >
                        <h1 className="text-[#062a35] text-md font-bold">jonson</h1>
                        <p className="text-orange-500 text-md">IT Consultant</p>
                    </span> 

                    <span className="text-gray-500 font-semibold text-sm">Reply Comment</span> 
                 </div> 

                 <p className="text-gray-500 text-sm pt-4">It is a long established fact that a reader will be distracted by the readable content of page looking at its layout. The point of using Lorem Ipsum normal</p> 

              </div>
            </div>


           </div>


      </div>   



        <div className="w-[35%]">

            <div className="bg-white w-full min-h-[150px] p-6">
               <h1 className="text-[#062a35] text-2xl font-bold">Keywords</h1>

               <div className="bg-sky-50 w-[90%] h-[60px] rounded-full flex items-center gap-5 mt-6">

                  <input type="text" placeholder="Search Course" className="text-xl text-gray-500 font-semibold px-6 py-3 outline-none"/>

                  <IoSearchSharp  className="text-orange-500 text-xl"/>

               </div>
            </div>

            <ul className="mt-8">
                     <li className="bg-white mt-1 px-3 py-4 flex gap-3 items-center justify-between text-[#062a35] font-semibold text-lg hover:bg-orange-600 duration-600 cursor-pointer hover:text-white">
                        <p>Computer Engineering</p>
                         <FaChevronRight />  
                     </li>

                      <li className="bg-white mt-1 px-3 py-4 flex gap-3 items-center justify-between text-[#062a35] font-semibold text-lg hover:bg-orange-600 duration-600 cursor-pointer hover:text-white">
                        <p>Business Studies</p>
                         <FaChevronRight />  
                     </li>

                      <li className="bg-white mt-1 px-3 py-4 flex gap-3 items-center justify-between text-[#062a35] font-semibold text-lg hover:bg-orange-600 duration-600 cursor-pointer hover:text-white">
                        <p>Medical & Health</p>
                         <FaChevronRight />  
                     </li>

                      <li className="bg-white mt-1 px-3 py-4 flex gap-3 items-center justify-between text-[#062a35] font-semibold text-lg hover:bg-orange-600 duration-600 cursor-pointer hover:text-white">
                        <p>Web Development</p>
                         <FaChevronRight />  
                     </li>

                      <li className="bg-white mt-1 px-3 py-4 flex gap-3 items-center justify-between text-[#062a35] font-semibold text-lg hover:bg-orange-600 duration-600 cursor-pointer hover:text-white">
                        <p>Learning English</p>
                         <FaChevronRight />  
                     </li>
                  </ul>


               <div className="w-full bg-white mt-8">
                  <h1 className="text-[#062a35] font-bold text-xl p-5">Recent News</h1>

                  <div className="flex p-7 gap-6 border-b border-b-gray-300">
                     <span>
                        <img src="/r1.jpg" alt="" />
                     </span>

                     <span>
                        <h1 className="text-[#062a35] font-bold hover:text-orange-500 duration-600 cursor-pointer">Smaing Podcast Epis Ode 15 With Phile</h1>
                        <p className="text-gray-500">By Shilva</p>
                     </span>
                  </div>

                  <div className="flex p-7 gap-6 border-b border-b-gray-300">
                     <span>
                        <img src="/r2.jpg" alt="" />
                     </span>

                     <span>
                        <h1 className="text-[#062a35] font-bold hover:text-orange-500 duration-600 cursor-pointer">Smaing Podcast Epis Ode 15 With Phile</h1>
                        <p className="text-gray-500">By Shilva</p>
                     </span>
                  </div>

                  <div className="flex p-7 gap-6 border-b border-b-gray-300">
                     <span>
                        <img src="/r3.jpg" alt="" />
                     </span>

                     <span>
                        <h1 className="text-[#062a35] font-bold hover:text-orange-500 duration-600 cursor-pointer">Smaing Podcast Epis Ode 15 With Phile</h1>
                        <p className="text-gray-500">By Shilva</p>
                     </span>
                  </div>

                  <div className="flex p-7 gap-6 border-b border-b-gray-300">
                     <span>
                        <img src="/r4.jpg" alt="" />
                     </span>

                     <span>
                        <h1 className="text-[#062a35] font-bold hover:text-orange-500 duration-600 cursor-pointer">Smaing Podcast Epis Ode 15 With Phile</h1>
                        <p className="text-gray-500">By Shilva</p>
                     </span>
                  </div>

               </div>   



            <div className="bg-white mt-8 p-6">

               <h1 className="text-[#062a35] font-bold text-2xl p-3">Photo Gallery</h1>

               <div className="w-full flex flex-wrap gap-6">

                  <div className="w-[45%] h-[150px] relative overflow-hidden group cursor-pointer">
                     <img src="g1.jpg" alt=""  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"/>

                     <div className="absolute inset-0 bg-orange-500/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center ">
                         <IoLogoInstagram  className="text-6xl text-white "/>
                     </div>

                  </div>

                  <div className="w-[45%] h-[150px] relative overflow-hidden group cursor-pointer">
                     <img src="g4.jpg" alt=""  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"/>

                     <div className="absolute inset-0 bg-orange-500/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center ">
                         <IoLogoInstagram  className="text-6xl text-white "/>
                     </div>

                  </div>

                  <div className="w-[45%] h-[150px] relative overflow-hidden group cursor-pointer">
                     <img src="bimg2.jpg" alt=""  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"/>

                     <div className="absolute inset-0 bg-orange-500/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center ">
                         <IoLogoInstagram  className="text-6xl text-white "/>
                     </div>

                  </div>

                  <div className="w-[45%] h-[150px] relative overflow-hidden group cursor-pointer">
                     <img src="course7.jpg" alt=""  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"/>

                     <div className="absolute inset-0 bg-orange-500/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center ">
                         <IoLogoInstagram  className="text-6xl text-white "/>
                     </div>

                  </div>

                  <div className="w-[45%] h-[150px] relative overflow-hidden group cursor-pointer">
                     <img src="g2.jpg" alt=""  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"/>

                     <div className="absolute inset-0 bg-orange-500/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center ">
                         <IoLogoInstagram  className="text-6xl text-white "/>
                     </div>

                  </div>

                  <div className="w-[45%] h-[150px] relative overflow-hidden group cursor-pointer">
                     <img src="g3.jpg" alt=""  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"/>

                     <div className="absolute inset-0 bg-orange-500/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center ">
                         <IoLogoInstagram  className="text-6xl text-white "/>
                     </div>

                  </div>

               </div>

            </div>   


            <div className="bg-white mt-8 p-6">
               <h1 className="text-[#062a35] font-bold text-2xl ">Photo Gallery</h1>

               <div className="flex w-full flex-wrap gap-5">
                  <button className="h-[50px] w-[100px] py-3 px-2 shadow-xl text-gray-500 font-semibold hover:bg-orange-500 hover:text-white cursor-pointer duration-500">DESIGN</button>
                  
                  <button className="h-[50px] w-[100px] py-3 px-2 shadow-xl text-gray-500 font-semibold hover:bg-orange-500 hover:text-white cursor-pointer duration-500">PORTFOLIO</button>

                  <button className="h-[50px] w-[100px] py-3 px-2 shadow-xl text-gray-500 font-semibold hover:bg-orange-500 hover:text-white cursor-pointer duration-500">RESUME</button>

                  <button className="h-[50px] w-[100px] py-3 px-2 shadow-xl text-gray-500 font-semibold hover:bg-orange-500 hover:text-white cursor-pointer duration-500">GALLERY</button>

                  <button className="h-[50px] w-[100px] py-3 px-2 shadow-xl text-gray-500 font-semibold hover:bg-orange-500 hover:text-white cursor-pointer duration-500">RENEWABLE</button>

                  <button className="h-[50px] w-[100px] py-3 px-2 shadow-xl text-gray-500 font-semibold hover:bg-orange-500 hover:text-white cursor-pointer duration-500">DESIGN</button>

               </div>

            </div>

            <div className="w-full mt-8">
               <img src="/cd3.jpg" alt="" className="h-full w-full object-cover"/>
            </div>

        </div> 

   </div>  

   </div>    


      
        <Footer/>    
      

    </>
)
}

export default Blog;