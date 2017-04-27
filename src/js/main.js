/* 
@Author: Rudi van Litsenborgh
@Date: 27 April 2017
@Note: Main JS file. Note custom plugins can be found in plugins.js
*/

//niceScroll config params
$(document).ready(function(){
	$('html').niceScroll({scrollspeed:5, mousescrollstep:100, cursorwidth:10, cursorborderradius: 5, cursorcolor: '#800000'});	
});

//vortex congif params
$(window).load(function() {
	$('#vortex').vortex({
		initialPosition: 270,
		speed: 250,
		deepFactor: 0.3
	});
});
