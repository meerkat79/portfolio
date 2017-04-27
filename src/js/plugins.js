/* 
@Author: Rudi van Litsenborgh
@Date: 27 April 2017
@Note: Plugins JS file
*/


/* console error snippet courtesy of boilerplate team */
// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
  'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
  'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
  'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
  'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
          console[method] = noop;
        }
      }
    }());

/* custom plugin for sidebars */
/* toggle sidebar-nav*/
$('#bars').on('click', function(){

  if($('.fa-bars').length === 1){
    $('#sidebar-nav')
    .removeClass('slideOutUp')
    .addClass('slideInRight');
    $('.fa-bars')
    .removeClass('fa-bars')
    .addClass('fa-times')
    .addClass('button--m-r-12');    
  }

  else if($('.fa-times').length === 1){
    $('#sidebar-nav')
    .removeClass('slideInRight')
    .addClass('slideOutUp');
    $('.fa-times')
    .removeClass('fa-times')
    .removeClass('button--m-r-12')
    .addClass('fa-bars');
  }

  else if($('.fa-times').length === 2){
    $('#bars')
    .find('.fa-times')
    .removeClass('fa-times')
    .removeClass('button--m-r-12')
    .removeClass('slideInRight')
    .addClass('fa-bars')
    .addClass('slideOutUp');
  }

});

/*Toggle sidbar-social*/
$('#social').on('click', function(){

  if($('.fa-share-alt').length === 1){
    $('#sidebar-social')
    .removeClass('slideOutUp')
    .addClass('slideInLeft');
    $('.fa-share-alt')
    .removeClass('fa-share-alt')
    .addClass('fa-times')
    .addClass('button--m-l-12');
  }

  else if($('.fa-times').length === 1){
    $('#sidebar-social')
    .removeClass('slideInLeft')
    .addClass('slideOutUp');
    $('.fa-times')
    .removeClass('fa-times')
    .removeClass('button--m-l-12')
    .addClass('fa-share-alt');
  }
  else if($('.fa-times').length === 2){
    $('#social')
    .find('.fa-times')
    .removeClass('fa-times')
    .removeClass('button--m-l-12')
    .removeClass('slideInLeft')
    .addClass('fa-share-alt')
    .addClass('slideOutUp');
  }   

});

/* End toggle sidebars */

/* Smooth hash scrolling */
$("a").on('click', function(event) {

  // Only run if hash has a value
  if (this.hash !== "") {
    
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 700, function(){

      window.location.hash = hash;
    });
  }
});