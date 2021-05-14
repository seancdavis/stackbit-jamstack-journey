import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation]);

class TextTileSlider {
  constructor() {}

  static init(selector = ".swiper-container") {
    new Swiper(selector, {
      navigation: {
        nextEl: ".swiper-next-button",
        prevEl: ".swiper-prev-button",
      },
      slidesOffsetAfter: 0,
      slidesOffsetBefore: 0,
      slidesPerView: 1,
      spaceBetween: 32,
      breakpoints: {
        640: {
          slidesPerView: 2,
          slidesOffsetAfter: 100,
          slidesOffsetBefore: 100,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      simulateTouch: false,
    });
  }
}

export default TextTileSlider;
