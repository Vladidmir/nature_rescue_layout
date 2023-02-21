import { FC } from "react";
import SwiperCore from "swiper";
import s from "./controls.module.scss";
interface IControlProps {
  swiperCore: SwiperCore;
  length: number;
  currentSlide: number;
  setCurrentSlide: (selected: number) => void;
}
export const SwipersControlPanel: FC<IControlProps> = ({
  currentSlide,
  swiperCore,
  length,
  setCurrentSlide,
}) => {
  const handleNext = () => {
    if (swiperCore) {
      if (currentSlide === length - 1) {
        swiperCore.slideTo(0);
        setCurrentSlide(0);
      } else {
        swiperCore.slideNext();
        setCurrentSlide(currentSlide + 1);
      }
    }
  };

  const handlePrev = () => {
    if (swiperCore) {
      if (currentSlide === 0) {
        swiperCore.slideTo(length - 1);
        setCurrentSlide(length - 1);
      } else {
        swiperCore.slidePrev();
        setCurrentSlide(currentSlide - 1);
      }
    }
  };
  return (
    <div className={s.controllers}>
      <button className={s.trigger} onClick={handlePrev}>
        <span> &#60;</span>
      </button>

      <div className={s.status}>
        <span>{currentSlide + 1}</span>
        <span>&#47;</span>
        <span>{length}</span>
      </div>

      <button className={s.trigger} onClick={handleNext}>
        <span>&#62;</span>
      </button>
    </div>
  );
};
