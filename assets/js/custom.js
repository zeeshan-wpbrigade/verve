$(document).ready(function () {
  // 1. Make the Humberger icon to cross
  $(".menu-btn").click(function () {
    $(this).toggleClass("close");
  });

  // 2. Move container as just like Side bar moves out
  // 3. Open Side bar with add open class
  $(".menu-btn").click(function () {
    $(".side-menu").toggleClass("open");
    $("body").toggleClass("overflow");
    $(".container").toggleClass("content-move");
  });

  // 4.slider
  $(".owl-carousel").owlCarousel({
    loop: true,
    responsiveClass: true,
    dots: false,
    navText: [
      "<img src='assets/img/left.png'>",
      "<img src='assets/img/right.png'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 4,
        nav: true,
      },
      1000: {
        items: 4,
        nav: true,
        loop: true,
      },
    },
  });

  // Main Document ends
});
