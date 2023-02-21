import { slidesData } from "components/UI/Swiper/slides";
import { Carousel } from "components";

import { Position } from "store/slices/navigationSlice";
import s from "./caruselPage.module.scss";

export const CaruselHintPage = () => {
  return (
    <div className={s.caruselPage}>
      <Carousel slides={slidesData} />
      <div id={`${Position.Places}`} className={s.caruselPageAnchor}></div>
    </div>
  );
};
