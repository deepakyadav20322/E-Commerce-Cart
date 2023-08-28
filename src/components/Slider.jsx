import React from 'react'
import SliderImg1 from '../assets/images/slider-img-2.png';
import SliderImg2  from '../assets/images/slider-img-3.png';
import SliderImg3 from '../assets/images/slider-img-1.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Slider = () => {


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
      
        <SwiperSlide> <img src={SliderImg1} alt="SliderImg" /></SwiperSlide>
        <SwiperSlide> <img src={SliderImg2} alt="SliderImg" /></SwiperSlide>
        <SwiperSlide> <img src={SliderImg3} alt="SliderImg" /></SwiperSlide>
       
      
      
    </Swiper>
  </>
   
  )
}

export default Slider