/*
* @Author: Admin
* @Date:   2017-07-19 19:43:56
* @Last Modified by:   Admin
* @Last Modified time: 2017-07-20 15:28:53
*/

'use strict';

$(document).ready(function() {

	//bootstrap carousel
	$('.carousel').carousel({
		interval: 3000
	});

	$('.mobile-button').click(function() {
		$('.mobile-menu').toggle(300);
		$(this).toggleClass('close');
	});

	$(window).scroll(function() {
		var st = $(this).scrollTop();
		var s_second = $('.section-second').position().top - $('.section-second').outerWidth()/2;
		var s_third = $('.section-third').position().top - $('.section-third').outerWidth()/2;


		if(st >= s_second) {
			$('.section-second-header__logo').find('.rect-top').addClass('rect-top-ix360-anim');
			$('.section-second-header__logo').find('.rect-middle-first').addClass('rect-middle-first-ix360-anim');
			$('.section-second-header__logo').find('.rect-middle-second').addClass('rect-middle-second-ix360-anim');
			$('.section-second-header__logo').find('.rect-bottom').addClass('rect-bottom-ix360-anim');
		}

		if(st >= s_third) {
			$('.section-third-images').find('.section-third-image__inner').addClass('section-third-image__inner--animation')
		}
	});
});

$(window).on('load', function() { 
	$(".container-fix").delay(6000).fadeOut("slow");
	setTimeout(function() {
		$('body').css('overflow-y', 'scroll')
	}, 0);
});

