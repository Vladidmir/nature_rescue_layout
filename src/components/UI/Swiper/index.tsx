import React, { useState } from "react";
import SwiperCore, { SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { SwipersControlPanel } from "./SwipersControlPanel/Index";
import { SwiperItem } from "./SwiperItem";

import { breakPoints, slidesData, ISlideData } from "./slides";
import s from "./carusel.module.scss";

interface ICaruselProps {
  slides: ISlideData[];
  slidesPerView?: number | "auto";
  spaceBetween?: number;
  loop?: boolean;
  breakpoints?: SwiperOptions["breakpoints"];
}

export const Carousel: React.FC<ICaruselProps> = ({
  slides = slidesData,
  slidesPerView = 0,
  spaceBetween = 0,
  loop = false,
  breakpoints = breakPoints,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  const handleSlideChange = (swiper: { realIndex: number }) => {
    setCurrentSlide(swiper.realIndex + 1);
  };

  return (
    <div className={s["slider"]}>
      <Swiper
        wrapperTag="div"
        className={s["swiper-wrapper"]}
        onSwiper={setSwiper}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        direction={"horizontal"}
        loop={loop}
        breakpoints={breakpoints}
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className={`${s["swiper-slide"]}`} key={index}>
            <SwiperItem
              slideData={slide}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              index={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {swiper && (
        <SwipersControlPanel
          currentSlide={currentSlide}
          length={slides.length}
          setCurrentSlide={setCurrentSlide}
          swiperCore={swiper}
        />
      )}
    </div>
  );
};
