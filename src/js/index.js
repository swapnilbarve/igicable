$('#menu').css("right","-300px");
	$('.menu_icon').on('click',function(){
		if($('.menu_icon').hasClass('open')){
			$(this).removeClass('open');
			$(this).animate({
				"right":"20px",
				"background-position":"0px"
			});
			$('#menu').animate({"right":"-300px"});
			$('body').css("position","absolute");
			$('body').animate({
				"right":"0px",
				"z-index":"999"
			});
		}
		else{
			$(this).addClass('open');
			$(this).animate({
				"right":"310px",
				"background-position":"-40px"
			});
			$('#menu').animate({"right":"0px"});
			$('body').css("position","absolute");
			$('body').animate({
				"right":"300px",
				"z-index":"999"
			});
		
		}
	});



  