if ($(".boarding-swiper").length > 0) {
  var swiperBoarding = new Swiper(".boarding-swiper", {
    speed: 1500,
    parallax: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    autoplay: true,
    loop: false,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

if ($(".favourite-swiper").length > 0) {
  var swiper4 = new Swiper(".favourite-swiper", {
    speed: 1500,
    slidesPerView: "auto",
    spaceBetween: 16,
    observer: true,
    observeParents: true,
    loop: true,
  });
}

if ($(".cate-swiper").length > 0) {
  var spacing = $(".cate-swiper").data("space-between");
  var swiper4 = new Swiper(".cate-swiper", {
    speed: 1500,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: spacing,
    observer: true,
    observeParents: true,
  });
}
