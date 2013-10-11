$(function(){
	
	
	$('.home-link').bind('click',function(){
   		$("html, body").animate({ scrollTop: 0 }, 500);
	});
	$('#navbar-main .crew-link').bind('click',function(){
   		$("html, body").animate({ scrollTop: $('.crew-stage').offset().top }, 500);
	});
	$('#navbar-main .about-link').bind('click',function(){
   		$("html, body").animate({ scrollTop: $('.about-me').offset().top }, 500);
	});
	$('#navbar-main .favorites-link').bind('click',function(){
   		$("html, body").animate({ scrollTop: $('.favorites-container').offset().top }, 500);
	});

	$('.back-to-top').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
	});


	$('[data-toggle="tooltip"]').tooltip();

	$('audio').get(0).play();
})