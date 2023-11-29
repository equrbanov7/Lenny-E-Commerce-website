import "./sliderfirst.scss";
//import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import CatchSliderItem from "./component/CatchSliderItem";

const SliderFirst = () => {
  return (
    <div className="swipwerItems">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <CatchSliderItem />
        </SwiperSlide>
        <SwiperSlide>
        <CatchSliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <CatchSliderItem />
        </SwiperSlide>
        <SwiperSlide>   <CatchSliderItem /> </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderFirst;
