
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {photos} from './photos'
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import 'swiper/components/navigation/navigation.scss';
import "swiper/components/thumbs/thumbs.min.css"
import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination,Navigation,Thumbs
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,EffectCoverflow,Pagination,Thumbs]);


export default function Swipe() {
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  return (
    <React.Fragment style={{backgroundColor:"#fff"}}>
    <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} thumbs={{ swiper: thumbsSwiper }} slidesPerView={'auto'} coverflowEffect={{
  "rotate": 50,
  "stretch": 0,
  "depth": 100,
  "modifier": 1,
  "slideShadows": true
}} navigation={true} className="mySwiper">
  {photos.map(x => {
    return <SwiperSlide><img src={x.src} /></SwiperSlide>
  })}
  
  </Swiper>

  <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={5} freeMode={true} watchSlidesVisibility={true} watchSlidesProgress={true} className="mySwiper2" style={{maxWidth:"80%",display:"flex"}}>
  
  {photos.map(x => {
    return <SwiperSlide><img src={x.src} /></SwiperSlide>
  })}
  </Swiper>
    </React.Fragment>
  )
}