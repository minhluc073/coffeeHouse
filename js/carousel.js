if ($(".boarding-swiper").length > 0) {
  var swiperBoarding = new Swiper(".boarding-swiper", {
    speed: 1000,
    parallax: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    // autoplay: true,
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

if ($(".tf-swiper").length > 0) {
  var spacing = $(".tf-swiper").data("space-between");
  var preview = $(".tf-swiper").data("preview");
  var tablet = $(".tf-swiper").data("tablet");
  var desktop = $(".tf-swiper").data("desktop");
  var swiper4 = new Swiper(".tf-swiper", {
    speed: 1500,
    slidesPerView: preview,
    loop: false,
    spaceBetween: spacing,
    observer: true,
    observeParents: true,

    breakpoints: {
      1024: {
        slidesPerView: desktop,
      },
      500: {
        slidesPerView: tablet,
      },
    },
  });
}


