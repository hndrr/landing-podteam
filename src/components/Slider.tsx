import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import AppImage from "./AppImage";
import { useMediaQuery } from "react-responsive";

SwiperCore.use([Navigation, Pagination]);

type Props = {
  imageList: { name: string; src: string }[];
};

const Slider: React.FC<Props> = (props) => {
  const isLg = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isLMd = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const imageSlider = props.imageList.map((cardImage, index) => (
    <SwiperSlide key={index} className="img-fluid">
      <AppImage cardImage={cardImage} />
    </SwiperSlide>
  ));

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={isLg && props.imageList.length > 4 ? 4.3 : isLg ? 4 : 2.3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {imageSlider}
      ...
    </Swiper>
  );
};

export default Slider;
