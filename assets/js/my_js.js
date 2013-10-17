$(function(){
	
	
	$('.home-link').bind('click',function(){
   		$("html, body").animate({ scrollTop: 0 }, 500);
	});
	$('#navbar-main .crew-link').bind('click',function(){
   		$("html, body").animate({ scrollTop: $('.crew-stage').offset().top }, 500);
	});
	$('#navbar-main .imotion-link').bind('click',function(){
   		$("html, body").animate({ scrollTop: $('.imotion').offset().top }, 500);
	});
	$('#navbar-main .airx-link').bind('click',function(){
   		$("html, body").animate({ scrollTop: $('.airx').offset().top }, 500);
	});
	$('#navbar-main .frststage-link').bind('click',function(){
   		$("html, body").animate({ scrollTop: $('.frststage').offset().top }, 500);
	});
	$('#navbar-main .TnM-link').bind('click',function(){
   		$("html, body").animate({ scrollTop: $('.TnM').offset().top }, 500);
	});

	$('.back-to-top').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
	});


	$('[data-toggle="tooltip"]').tooltip();

	$('audio').get(0).play();
})