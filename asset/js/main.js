(function ($) {
 "use strict";

//=> Preloader Activation start
 $(window).load(function(){
   $('#preloader').fadeOut('slow',function(){$(this).remove();});
 });


//=> Testimonial-carousel Activation
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


//=> RetinaJs Activation
retinajs();


//=> NiceScroll  active
$("body").niceScroll({styler:"fb",cursorcolor:"red",cursorwidth:"10px",zindex: "99999",mousescrollstep: 20});


//=> Countdown  activation
$('[data-countdown]').each(function() {
  var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
	    $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"><span class="time-count">%S</span> <p>Sec</p></span>'));
  });
});



//=> wow js activation
 new WOW().init();


//=> ScrollUp Activation
$.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});
})(jQuery);
