// // SECTION: BANNER;
new Swiper(".banner .swiper-container", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween:40,
  loop: true,
  autoplay: false,
  pagination: {
    el: ".banner .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".banner .swiper-prev",
    nextEl: ".banner .swiper-next",
  },
});
