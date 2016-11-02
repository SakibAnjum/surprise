(function ($) {
  "use strict";
    $("nav.menu").onePageNav();
      jQuery(function($) {
        $('#nav ul li a').bind('click', function(event) {
          var $anchor = $(this);
          $('html').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
          }, 1000, 'easeInOutQuint');
          event.preventDefault();
        });
    });
    $('.menu-button').on('click',function(){
      $('.menu-button').toggleClass('open');
      $('.menu-button').toggleClass('clse');
      $('.menu').toggleClass('open');
      $('.menu').toggleClass('clse');
    });
  $(".testimonial-carousel").owlCarousel({
      autoPlay: true,
	    slideSpeed:2000,
	    pagination:true,
	    navigation:false,
      mouseDrag:false,
      items : 1,
	    transitionStyle : "backSlide",
	    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	    itemsDesktopSmall : [980,1],
	    itemsTablet: [768,1],
	    itemsMobile : [479,1],
  });


//=> Scroll Header Activation
var mywindow = $(window);
var mypos = 0;
var up = false;
var newscroll;
mywindow.scroll(function () {
   newscroll = mywindow.scrollTop();
   if (newscroll > mypos && !up || newscroll <= 0 ) {
     $('.scroll-header').addClass('clse');
       up = !up;
   }

   else if(newscroll < mypos && up) {
       $('.scroll-header').removeClass('clse');
       up = !up;
   }

   mypos = newscroll;
});

 })(jQuery);
