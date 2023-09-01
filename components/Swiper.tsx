"use client";
// Import Swiper React components
import { Swiper } from "swiper/react";

import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";

interface SwiperWrapperProps {
  children: React.ReactNode;
}

const SwiperWrapper: React.FC<SwiperWrapperProps> = ({ children }) => {
  const breakpoints = {
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1090: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  };

  const handleSlideChange = () => {};

  const handleSwiper = (swiper: any) => {};

  return (
    <Swiper
      className="text-white py-5 my-5 w-full grow block"
      spaceBetween={50}
      autoplay={{ delay: 1000 }}
      navigation
      freeMode
      fadeEffect={{ crossFade: true }}
      modules={[Navigation, Scrollbar, A11y, Autoplay, FreeMode]}
      onSlideChange={handleSlideChange}
      onSwiper={handleSwiper}
      scrollbar={{ draggable: true }}
      slidesPerView={2}
      breakpoints={breakpoints}
    >
      {children}
    </Swiper>
  );
};

export default SwiperWrapper;
