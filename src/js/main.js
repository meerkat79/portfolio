$(document).ready(function(){

	$('html').niceScroll({scrollspeed:5, mousescrollstep:250, cursorwidth:10, cursorborderradius: 5, cursorcolor: '#800000'});

	/* toggle sidebar */
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

	/*Toggle social*/
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
	
});