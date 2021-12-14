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
  // $(".owl-carousel").owlCarousel({
  //   items: 4,
  //   loop: true,
  //   responsiveClass: true,
  //   dots: false,
  //   navText: [
  //     "<img src='assets/img/left.png'>",
  //     "<img src='assets/img/right.png'>",
  //   ],
  // });

  // 5. Full Screen Mode
  $("#full-screen-btn").on("click", function () {
    if (!document.fullscreenElement) {
      let e = document.querySelector("html");
      e.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });

  // Deactive owl slider 
  $(document).ready(function() {
    if ( $(window).width() > 767 ) {
      startCarousel();
    } else {
      $('.owl-carousel').addClass('off');
    }
  });

  $(window).resize(function() {
    if ( $(window).width() > 767 ) {
      startCarousel();
    } else {
      stopCarousel();
    }
  });
  function startCarousel(){
    $(".owl-carousel").owlCarousel({
       navigation : true, // Show next and prev buttons
       slideSpeed : 500,
       margin:10,
       paginationSpeed : 400,
       autoplay:true,
       items : 4,
       itemsDesktop : false,
       itemsDesktopSmall : false,
       itemsTablet: false,
       itemsMobile : false,
       loop:true,
       nav:true,
       navText: [
            "<img src='assets/img/left.png'>",
            "<img src='assets/img/right.png'>",
          ]
    });
  }
  function stopCarousel() {
    var owl = $('.owl-carousel');
    owl.trigger('destroy.owl.carousel');
    owl.addClass('off');
  }





  // Main Document ends
});

// JS Out from the jQuery Tag
// 6. on Hover change bg of body
function changebg(src, type) {
  if (type === "image") {
    $(".image").css("display", "block");
    $(".video").css({ display: "none" });
    $(".image").attr("src", src);
  }
  if (type === "video") {
    $(".image").css({ display: "none" });
    $(".video").css({ display: "block" });
    $(".video").attr("src", src);
    document.getElementById("playrest").play();
  }
}
