/* 
@Author: Rudi van Litsenborgh
@Date: 27 April 2017
@Note: Main JS file. Note custom plugins can be found in plugins.js
*/


$(document).ready(function(){

	//niceScroll config params
	$('html').niceScroll({scrollspeed:5, mousescrollstep:100, cursorwidth:10, cursorborderradius: 5, cursorcolor: '#800000'});	

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
		console.log('click');
		if(vortexBtn.text() === 'Pause'){
			console.log('pause');			
			$(vortex).data('vortex').stop();
			$(vortexBtn).text('Play');
		}
		else if(vortexBtn.text() === 'Play'){
			console.log('play');
			$(vortex).data('vortex').start();
			$(vortexBtn).text('Pause');
		}
		
	});

});
