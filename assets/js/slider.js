document.addEventListener('DOMContentLoaded', function() {
  new Swiper('.languages-swiper', {
    slidesPerView: 3, 
    spaceBetween: 16,
    loop: true,
    freeMode: true,
    freeModeMomentum: true,
    freeModeMomentumRatio: 0.5, 
    
    autoplay: {
      delay: 1, 
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      stopOnLastSlide: false,
    },
    speed: 3000, 
    
    centeredSlides: false,
    slidesPerGroup: 1,

    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 12,
        centeredSlides: true, 
      },
      480: {
        slidesPerView: 2.2,
        spaceBetween: 12,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: false,
      },
    },
  });
});