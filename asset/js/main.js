(function ($) {
 "use strict";

//=> Preloader Activation start
 $(window).load(function(){
   $('#preloader').fadeOut('slow',function(){$(this).remove();});
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
