import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay } from 'swiper/modules';

export default function Imgswiper() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide >
           
            <div className='w-full flex justify-center items-center gap-2 sm:gap-4 md:gap-8 overflow-x-auto'>

            <div className='w-[15%]'>
                   <img src="/l1.png" alt="" /> 
            </div>  

            <div className='w-[15%]'>
                   <img src="/l2.png" alt="" /> 
            </div> 

            <div className='w-[15%]'>
                   <img src="/l3.png" alt="" /> 
            </div> 

            <div className='w-[15%]'>
                   <img src="/l4.png" alt="" /> 
            </div> 

            <div className='w-[15%]'>
                   <img src="/l5.png" alt="" /> 
            </div>  
               
           </div> 


        </SwiperSlide>




        <SwiperSlide>
            <div className='w-full flex justify-center items-center gap-2 sm:gap-4 md:gap-8 overflow-x-auto'>

            <div className='w-[15%]'>
                   <img src="/l5.png" alt="" className='w-16 sm:w-20 md:w-28 lg:w-30 h-auto flex-shrink-0 object-contain'/> 
            </div>  

            <div className='w-[15%]'>
                   <img src="/l2.png" alt="" className='w-16 sm:w-20 md:w-28 lg:w-30 h-auto flex-shrink-0 object-contain'/> 
            </div> 

            <div className='w-[15%]'>
                   <img src="/l3.png" alt="" className='w-16 sm:w-20 md:w-28 lg:w-30 h-auto flex-shrink-0 object-contain'/> 
            </div> 

            <div className='w-[15%]'>
                   <img src="/l4.png" alt="" className='w-16 sm:w-20 md:w-28 lg:w-30 h-auto flex-shrink-0 object-contain'/> 
            </div> 

            <div className='w-[15%]'>
                   <img src="/l5.png" alt="" className='w-16 sm:w-20 md:w-28 lg:w-30 h-auto flex-shrink-0 object-contain'/> 
            </div>  
               
           </div> 
           </SwiperSlide>


        <SwiperSlide>
            <div className='w-full flex justify-center items-center gap-2 sm:gap-4 md:gap-8 overflow-x-auto'>

            <div className='w-[15%]'>
                   <img src="/l4.png" alt="" className='w-16 sm:w-20 md:w-28 lg:w-30 h-auto flex-shrink-0 object-contain'/> 
            </div>  

            <div className='w-[15%]'>
                   <img src="/l4.png" alt="" className='w-16 sm:w-20 md:w-28 lg:w-30 h-auto flex-shrink-0 object-contain'/> 
            </div> 

            <div className='w-[15%]'>
                   <img src="/l3.png" alt="" className='w-16 sm:w-20 md:w-28 lg:w-30 h-auto flex-shrink-0 object-contain'/> 
            </div> 

            <div className='w-[15%]'>
                   <img src="/l2.png" alt="" className='w-16 sm:w-20 md:w-28 lg:w-30 h-auto flex-shrink-0 object-contain'/> 
            </div> 

            <div className='w-[15%]'>
                   <img src="/l1.png" alt="" className='w-16 sm:w-20 md:w-28 lg:w-30 h-auto flex-shrink-0 object-contain'/> 
            </div>  
               
           </div> 
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
