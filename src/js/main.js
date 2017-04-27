/* 
@Author: Rudi van Litsenborgh
@Date: 27 April 2017
@Note: Main JS file. Note custom plugins can be found in plugins.js
*/


$(document).ready(function(){

/* event listners for arrow toggling */
	var arrowDown = $('#arrow-down');
	var arrowUp = $('#arrow-up');

	document.addEventListener('scroll', function(){
		if(window.scrollY > 250){

			if($('.fa-bars').length == 0){				
				arrowUp.hide();
			}

			arrowDown.removeClass('fadeIn');
			arrowDown.addClass('fadeOut');

			arrowUp.addClass('fadeIn');
			arrowUp.removeClass('fadeOut').removeClass('hide');	
		}
		else if(window.scrollY <= 250){		

			arrowDown.addClass('fadeIn');
			arrowDown.removeClass('fadeOut');

			arrowUp.addClass('fadeOut');
			arrowUp.removeClass('fadeIn');
		}		
	});

	document.addEventListener('click', function(){	

		if($('.fa-bars').length == 0){
			arrowUp.addClass('fadeOut');
		}
		else if($('.fa-bars').length == 1){
			arrowUp.show();
		}
	});


	//niceScroll config params
	$('html').niceScroll({scrollspeed:5, mousescrollstep:100, cursorwidth:10, cursorborderradius: 5, cursorcolor: '#800000', horizrailenabled: false});

	//vortex congif params
	$(window).load(function() {
		$('#vortex').vortex({
			initialPosition: 0,
			speed: 250,
			deepFactor: 0.3
		});
	});

	//some vortex controls
	var vortexBtn = $('#vortexBtn');
	var vortex = $('#vortex');

	$(vortexBtn).on('click', function(){
		if(vortexBtn.text() === 'Pause'){		
			$(vortex).data('vortex').stop();
			$(vortexBtn).text('Play');
		}
		else if(vortexBtn.text() === 'Play'){
			$(vortex).data('vortex').start();
			$(vortexBtn).text('Pause');
		}
		
	});

});
