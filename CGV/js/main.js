// SECTION: HEADER-SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// SECTION: BANNER;
new Swiper(".banner .swiper-container", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 7000,
  },
  pagination: {
    el: ".banner .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".banner .swiper-prev",
    nextEl: ".banner .swiper-next",
  },
});

// SECTION: NOTICEBAR
new Swiper(".notice_bar .mySwiper", {
  autoplay: true,
  loop: true,
  direction: "vertical",
});

// GSAP
function floatingObject(selector) {
  //gsap.to(요소, 시간, 옵션)
  gsap.to(selector, 1, {
    y: -40,
    rotate: 50,
    repeat: -1,
    ease: Power1.easeInOut,
    yoyo: true,
  });
}
floatingObject(".floating");

// SCROLL MAGIC
const spyEl = document.querySelectorAll(".scroll-spy");
spyEl.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    //Scene은 특정요소 감시옵션 메소드
    triggerElement: spyEl, //감시하다가 트리거(강제적으로 일으키는)
    triggerHook: 0.8, //
  })
    .setClassToggle(spyEl, "show") //class를 빼주고 넣어주고 하는 메소드
    .addTo(new ScrollMagic.Controller());
});
