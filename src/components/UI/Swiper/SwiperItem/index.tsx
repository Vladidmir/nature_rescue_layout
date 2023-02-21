import React, { FC } from "react";
import s from "./swiperItem.module.scss";
import { ISlideData } from "../slides";

interface ICaruselItem {
  slideData: ISlideData;
  currentSlide: number;
  setCurrentSlide: (arg: number) => void;
  index: number;
}

export const SwiperItem: FC<ICaruselItem> = ({
  slideData: { alt, desc, imageUrl, title },
  setCurrentSlide,
  index,
  currentSlide,
}) => {
  return (
    <div
      onClick={() => setCurrentSlide(index)}
      className={`${s.slide} ${index === currentSlide ? s.selected : ""}`}
    >
      <div className={s.img}>
        <img src={imageUrl} alt={alt} />
        {currentSlide !== index && <h3 className={s.title}>{title}</h3>}
      </div>

      <div className={s.content}>
        <div className={s.descr}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
