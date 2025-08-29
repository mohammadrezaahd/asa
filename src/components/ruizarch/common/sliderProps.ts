// Import Swiper bundle which includes all modules
import "swiper/swiper-bundle.css";

// For Swiper v9, we don't need to import and register modules manually
// All modules are available in the bundle

export const SliderProps = {
  milInfiniteSlider: {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 4000,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 0,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 4,
      },
    },
  },
  milBannerSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    effect: "fade",
    parallax: true,
    loop: true,
    navigation: {
      prevEl: ".mil-banner-prev",
      nextEl: ".mil-banner-next",
    },
    pagination: {
      el: ".mil-banner-pagination",
      type: "bullets",
      clickable: true,
    },
  },
  milBannerSlider2: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    effect: "fade",
    parallax: true,
    loop: true,
    navigation: {
      prevEl: ".mil-banner-prev",
      nextEl: ".mil-banner-next",
    },
    pagination: {
      el: ".mil-banner-pagination",
      type: "bullets",
      clickable: true,
    },
  },
  milProcessSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    parallax: true,
    navigation: {
      prevEl: ".mil-process-prev",
      nextEl: ".mil-process-next",
    },
    pagination: {
      el: ".mil-banner-pagination",
      type: "bullets",
      clickable: true,
    },
  },
  milReviewsSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    effect: "fade",
    parallax: true,
    navigation: {
      prevEl: ".mil-process-prev",
      nextEl: ".mil-process-next",
    },
    pagination: {
      el: ".mil-banner-pagination",
      type: "bullets",
      clickable: true,
    },
  },
  milIllustrationSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    effect: "fade",
    parallax: true,
    navigation: {
      prevEl: ".mil-illustration-prev",
      nextEl: ".mil-illustration-next",
    },
  },
};
