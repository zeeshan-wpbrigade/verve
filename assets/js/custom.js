$(document).ready(function () {
  // 1. Make the Humberger icon to cross
  $(".menu-btn").click(function () {
    $(this).toggleClass("close");
  });

  // 2. Move container as just like Side bar moves out
  // 3. Open Side bar with add open class
  $(".menu-btn").click(function () {
    $(".side-menu").toggleClass("open");
    $(".container").toggleClass("content-move");
  });

  // 4. Open info tab
  $(".info-btn").click(function () {
    $(".information").toggleClass("open-2");
    $(".container").toggleClass("content-move-2");
  });
 
  // 5. Close info tab by Cross
  $(".close-info").click(function () {
    $(".information").toggleClass("open-2");
    $(".container").toggleClass("content-move-2");
  });

  // 6. Full Screen Mode
  $("#full-screen-btn").on("click", function () {
    if (!document.fullscreenElement) {
      let e = document.querySelector("html");
      e.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });

  // 6. owl slider
  $(document).ready(function () {
    if ($(window).width() > 767) {
      startCarousel();
    } else {
      $(".owl-carousel").addClass("off");
    }
  });

  $(window).resize(function () {
    if ($(window).width() > 767) {
      startCarousel();
    } else {
      stopCarousel();
    }
  });
  function startCarousel() {
    $(".owl-carousel").owlCarousel({
      navigation: true, // Show next and prev buttons
      slideSpeed: 500,
      dots: false,
      items: 4,
      loop: true,
      nav: true,
      navText: [
        "<img src='assets/img/left.png'>",
        "<img src='assets/img/right.png'>",
      ],
    });
  }
  function stopCarousel() {
    var owl = $(".owl-carousel");
    owl.trigger("destroy.owl.carousel");
    owl.addClass("off");
  }

  // 7. Hide Information section on click out side the information conatiner
  $(".container").click(function (e) {
    if (e.target.className !== "information") {
      $(".information").removeClass("open-2");
      $(".container").removeClass("content-move-2");
    }
  });

  // 7. Hide Side Menu Section on click out side the Side Menu conatiner
  $(".container").click(function (e) {
    if (e.target.className !== "side-menu") {
      $(".side-menu").removeClass("open");
      $(".container").removeClass("content-move");
      // Condtion if Menu icon in Homberger then dont add class
      if ($(".menu-btn").hasClass("close")) {
        $(".menu-btn").removeClass("close");
      }
    }
  });
  // Video Play and Pause on clcik the video section for Mobile Version
  $(document).ready(function () {
    if ($(window).width() < 767) {
      $("video").click(function () {
        this.paused ? this.play() : this.pause();
      });
    }
  });

  // Main Document ends
});

// JS Out from the jQuery Tag

// 8. on Hover change bg of body
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

// 9. Second Slider Custom slider wuth JS

var currentSlide = 0;
const slides = document.querySelectorAll(".slide");

const init = (n) => {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[n].style.display = "block";
};
document.addEventListener("DOMContentLoaded", init(currentSlide));

const right = () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  init(currentSlide);
};

const left = () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  init(currentSlide);
};

document.querySelector(".right").addEventListener("click", right);
document.querySelector(".left").addEventListener("click", left);

setInterval(() => {
  right();
}, 5000);
