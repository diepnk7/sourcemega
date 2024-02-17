export default function SwiperModule() {
  function functionSlider(element, customizeOption, typePagi) {
    const swiperSlider = document.querySelectorAll(element);
    if (swiperSlider) {
      swiperSlider.forEach((item) => {
        const swiper = item.querySelector(".swiper");
        const pagi = item.querySelector(".swiper-pagination");
        const next = item.querySelector(".swiper-next");
        const prev = item.querySelector(".swiper-prev");
        if (!typePagi) {
          typePagi = "bullets";
        }
        var slide = new Swiper(swiper, {
          watchSlidesProgress: true,
          pagination: {
            el: pagi,
            type: typePagi,
            clickable: true,
          },
          navigation: {
            nextEl: next,
            prevEl: prev,
          },
          fadeEffect: {
            crossFade: true,
          },
          ...customizeOption,
        });
      });
    }
  }

  functionSlider(".element", {
    speed: 1200,
    autoplay: {
      delaY: 5000,
    },
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 24,
    effect: "slide",
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        freeMode: true,
      },
      500: {
        slidesPerView: 2.2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });



  // Slider Control
  // topsSliderMain.controller.control = topSliderThumb;
  // topSliderThumb.controller.control = topsSliderMain;




  // product slider

  var swiperPdtThumb = new Swiper(".prod-dt-slider-thumb .swiper", {
    slidesPerView: "auto",
  });
  var swiperPdtMain = new Swiper(".prod-dt-slider-main .swiper", {
    slidesPerView: "auto",
    navigation: {
      prevEl: ".prod-dt-slider-thumb .swiper-prev",
      nextEl: ".prod-dt-slider-thumb .swiper-next",
    },
    thumbs: {
      swiper: swiperPdtThumb,
    }
  });

  functionSlider(".prod-relate-slider", {
    speed: 1200,
    autoplay: {
      delaY: 5000,
    },
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    slidesPerView: "auto",
    effect: "slide",
  });

  // 
  functionSlider(".prod-contact-slider", {
    speed: 1200,
    autoplay: {
      delaY: 5000,
    },
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    slidesPerView: "auto",
    effect: "slide",
  });

  functionSlider(".sls", {
    speed: 1200,
    autoplay: {
      delaY: 5000,
    },
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    slidesPerView: "auto",
    effect: "slide",
  });
  functionSlider(".homes-bn", {
    speed: 1200,
    autoplay: {
      delaY: 5000,
    },
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    slidesPerView: "auto",
    effect: "fade",
  });
  functionSlider(".homes-rs-slider ", {
    speed: 1200,
    autoplay: {
      delaY: 5000,
    },
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    slidesPerView: "auto",
    effect: "slide",
  });
  functionSlider(".homes-pd", {
    speed: 1200,
    autoplay: {
      delaY: 5000,
    },
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    slidesPerView: "auto",
    effect: "slide",
  });
}


