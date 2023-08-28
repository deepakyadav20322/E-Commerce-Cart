import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const SinglePageSlider = () => {

  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper w-full  border-2 text-center"
    >
        {AllImg.map((img,index)=>(
     <SwiperSlide key={index} ><img src={img} alt="slderImg" /></SwiperSlide>
     ))} 
       
        
      
      
    </Swiper>
  </>
   
  )
}

export default SinglePageSlider;