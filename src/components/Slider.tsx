import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import AppImage from "./AppImage";

SwiperCore.use([Navigation, Pagination]);

type Props = {
  imageList: { name: string; src: string }[];
};

const Slider: React.FC<Props> = (props) => {
  const imageSlider = props.imageList.map((cardImage, index) => (
    <SwiperSlide>
      <AppImage key={index} cardImage={cardImage} />
    </SwiperSlide>
  ));

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {imageSlider}
      ...
    </Swiper>
  );
};

export default Slider;
