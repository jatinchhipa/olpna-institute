import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { LiaQuoteLeftSolid } from "react-icons/lia";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Feedswiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>

            <div className='w-[90%] lg:w-[55%] min-h-[420px] lg:h-[500px] bg-white mx-auto lg:ml-[170px] p-4  border-t-15 border-l-15 border-gray-200 shadow-lg'>
                <p className='text-lg font-semibold mt-4 Poppins'>"I enjoyed the learning process and gained new skills through this course. The teaching methodology was effective, and the resources provided were helpful. Looking forward to more such sessions in the future."</p>

                <p className='text-gray-400 text-sm mt-5'>"Good learning experience. The instructor was supportive and the course content was helpful."</p>

                <div className='flex items-center gap-5 mt-8'>
                    <img src="/teacher.png" className='w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover'/>  

                  <div>
                    <p className='text-lg font-bold text-gray-800'>Raman sharma </p>
                    <p className='text-sm text-orange-500 font-semibold'>CEO & Founder</p>
                  </div>    
                </div>


            <div className='flex justify-end text-6xl lg:text-9xl text-orange-500 mt-6'>
                <LiaQuoteLeftSolid />
            </div>    

            </div>


        </SwiperSlide>


        <SwiperSlide>

            <div className='w-[90%] lg:w-[55%] min-h-[420px] lg:h-[500px] bg-white mx-auto lg:ml-[170px] p-4  border-t-15 border-l-15 border-gray-200 shadow-lg'>
                <p className='text-lg font-semibold mt-4 Poppins'>"I enjoyed the learning process and gained new skills through this course. The teaching methodology was effective, and the resources provided were helpful. Looking forward to more such sessions in the future."</p>

                <p className='text-gray-400 text-sm mt-5'>"Good learning experience. The instructor was supportive and the course content was helpful."</p>

                <div className='flex items-center gap-5 mt-8'>
                    <img src="/teacher.png" className='w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover'/>  

                  <div>
                    <p className='text-lg font-bold text-gray-800'>Raman sharma </p>
                    <p className='text-sm text-orange-500 font-semibold'>CEO & Founder</p>
                  </div>    
                </div>


            <div className='flex justify-end text-6xl lg:text-9xl text-orange-500 mt-6'>
                <LiaQuoteLeftSolid />
            </div>    

            </div>


        </SwiperSlide>


        <SwiperSlide>

            <div className='w-[90%] lg:w-[55%] min-h-[420px] lg:h-[500px] bg-white mx-auto lg:ml-[170px] p-4  border-t-15 border-l-15 border-gray-200 shadow-lg'>
                <p className='text-lg font-semibold mt-4 Poppins'>"I enjoyed the learning process and gained new skills through this course. The teaching methodology was effective, and the resources provided were helpful. Looking forward to more such sessions in the future."</p>

                <p className='text-gray-400 text-sm mt-5'>"Good learning experience. The instructor was supportive and the course content was helpful."</p>

                <div className='flex items-center gap-5 mt-8'>
                    <img src="/teacher.png" className='w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover'/>  

                  <div>
                    <p className='text-lg font-bold text-gray-800'>Raman sharma </p>
                    <p className='text-sm text-orange-500 font-semibold'>CEO & Founder</p>
                  </div>    
                </div>


            <div className='flex justify-end text-6xl lg:text-9xl text-orange-500 mt-6'>
                <LiaQuoteLeftSolid />
            </div>    

            </div>


        </SwiperSlide>


        <SwiperSlide>

            <div className='w-[90%] lg:w-[55%] min-h-[420px] lg:h-[500px] bg-white mx-auto lg:ml-[170px] p-4  border-t-15 border-l-15 border-gray-200 shadow-lg'>
                <p className='text-lg font-semibold mt-4 Poppins'>"I enjoyed the learning process and gained new skills through this course. The teaching methodology was effective, and the resources provided were helpful. Looking forward to more such sessions in the future."</p>

                <p className='text-gray-400 text-sm mt-5'>"Good learning experience. The instructor was supportive and the course content was helpful."</p>

                <div className='flex items-center gap-5 mt-8'>
                    <img src="/teacher.png" className='w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover'/>  

                  <div>
                    <p className='text-lg font-bold text-gray-800'>Raman sharma </p>
                    <p className='text-sm text-orange-500 font-semibold'>CEO & Founder</p>
                  </div>    
                </div>


            <div className='flex justify-end text-6xl lg:text-9xl text-orange-500 mt-6'>
                <LiaQuoteLeftSolid />
            </div>    

            </div>


        </SwiperSlide>




        
      </Swiper>
    </>
  );
}
