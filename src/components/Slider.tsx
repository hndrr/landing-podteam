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
  const isXl = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const isLg = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isSm = useMediaQuery({
    query: "(min-width: 640px)",
  });
  const imageSlider = props.imageList.map((cardImage, index) => (
    <SwiperSlide
      key={index}
      className={`img-fluid ${
        cardImage.name.match(/ios/i) ? "ios" : "android"
      }`}
    >
      <AppImage cardImage={cardImage} />
    </SwiperSlide>
  ));

  return (
    <Swiper
      spaceBetween={32}
      slidesOffsetBefore={isXl ? 0 : isSm ? 48 : 16}
      slidesOffsetAfter={isXl ? 0 : isSm ? 48 : 16}
      slidesPerView={isLg && props.imageList.length > 4 ? 4.5 : isLg ? 4 : 2.5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {imageSlider}
    </Swiper>
  );
};

export default Slider;
