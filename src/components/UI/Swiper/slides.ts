import { SwiperOptions } from "swiper";
import img1 from "../../../assets/img/slider/slide1.png";
import img2 from "../../../assets/img/slider/slide2.png";
import img3 from "../../../assets/img/slider/slide3.png";
import img4 from "../../../assets/img/slider/slide4.png";
import img5 from "../../../assets/img/slider/slide5.png";

export interface ISlideData {
  id: number;
  imageUrl: string;
  alt: string;
  title: string;
  desc: string;
}

export const slidesData: ISlideData[] = [
  {
    id: 1,
    imageUrl: img1,
    alt: "Avoid plastic",
    title: "Avoid plastic",
    desc: "Plastic is a non-biodegradable material that can take hundreds of years to break down in the environment",
  },
  {
    id: 2,
    imageUrl: img2,
    alt: "Choose organic",
    title: "Choose organic",
    desc: "Organic products are free from harmful chemicals and pesticides, which can have negative effects on human health",
  },
  {
    id: 3,
    imageUrl: img3,
    alt: "Plant trees",
    title: "Plant trees",
    desc: "Trees have been shown to improve mental health and reduce stress, as well as provide shade and cooling, making outdoor spaces more enjoyable and livable.",
  },
  {
    id: 4,
    imageUrl: img4,
    alt: "Save watter",
    title: "Save watter",
    desc: "Taking on the issue of ensuring access to safe water requires worldwide effort.",
  },
  {
    id: 4,
    imageUrl: img5,
    alt: "Save energy",
    title: "Save energy",
    desc: "Energy production is a major contributor to greenhouse gas emissions, which are linked to global warming and climate change. ",
  },
];

export const breakPoints: SwiperOptions["breakpoints"] = {
  320: {
    slidesPerView: 1,
  },
  640: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 40,
  },

  1200: {
    slidesPerView: 4,
  },
};
