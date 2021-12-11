$(document).ready(function () {
    $(".menu-btn").click(function () {
      $(this).toggleClass("close");
    });

    $(".menu-btn").click(function () {
        $(".side-menu").toggleClass("open");
        $(".container").toggleClass("content-move");
      });


      $(".item-1").hover(function() {
        $('body').css('background-color' , 'grey');
      }, function() {
        $('.flyout').addClass('hidden');
      });
      


    
    //   slider 
      $('.owl-carousel').owlCarousel({
        loop:true,
        responsiveClass:true,
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:4,
                nav:false
            },
            1000:{
                items:4,
                nav:false,
                loop:false
            }
        }
    });



  });