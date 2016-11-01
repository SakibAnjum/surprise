/* one page active  */
   $("#nav").onePageNav();

   //jQuery for page scrolling feature - requires jQuery Easing plugin
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
