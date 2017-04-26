$(document).ready(function(){

	$('html').niceScroll({scrollspeed:5, mousescrollstep:50, cursorwidth:10, cursorborderradius: 5, cursorcolor: '#800000'});

	/* toggle sidebar */
	$('#bars').on('click', function(){

		if($('.fa-bars').length === 1){
			$('.fa-bars').removeClass('fa-bars').addClass('fa-times');		
		}

		else if($('.fa-times').length === 1){
			$('.fa-times').removeClass('fa-times').addClass('fa-bars');
		}

		else if($('.fa-times').length === 2){
			$('#bars').find('.fa-times').removeClass('fa-times').addClass('fa-bars');
		}
		
	});

	/*Toggle social*/
	$('#social').on('click', function(){

		if($('.fa-share-alt').length === 1){
			$('.fa-share-alt').removeClass('fa-share-alt').addClass('fa-times');		
		}

		else if($('.fa-times').length === 1){
			$('.fa-times').removeClass('fa-times').addClass('fa-share-alt');
		}
		else if($('.fa-times').length === 2){
			$('#social').find('.fa-times').removeClass('fa-times').addClass('fa-share-alt');
		}		
		
	});	
	
});