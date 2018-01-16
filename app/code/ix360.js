$(document).ready(function() {
    $(window).scroll(function() {
		var st = $(this).scrollTop();
		var s_second = $('.section-second').offset().top - $('.section-second').outerHeight();
        var s_third = $('.section-third').offset().top - $('.section-second').outerHeight() / 2;
		
		if(st >= s_second) {
			$('.section-second-header__logo').find('.header-logo').addClass('animation');
		}

		if(st >= s_third) {
			$('.section-third-images').find('.section-third-image__inner').addClass('section-third-image__inner--animation')
		}
	});
});