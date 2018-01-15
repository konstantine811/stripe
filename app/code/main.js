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

	$('.logo__header').find('.header-logo').addClass('animation');

	$(window).scroll(function() {

		var st = $(this).scrollTop();
		var s_second = $('.section-second').position().top - $('.section-second').outerWidth()/2;
		var s_third = $('.section-third').position().top - $('.section-third').outerWidth()/2;
		var table_width = $('.section-fourth-table__tbody').outerWidth();
		var table_pos = $('.section-fourth-table__tbody').position();
		var table_pos_top = $('.section-fourth-table__tbody').position().top;
		// console.log("outer Width " + table_width);
		// console.log("position - " + table_pos);
		// console.log("position-top - " + table_pos_top);
		// console.log("this is scroll - " + st);
		$('.section-fourth-table__tbody').find('tr').each(function(index, element) {
			var element = $(element).find('.table-row-icon').position().top - $(element).find('.table-row-icon').outerWidth();
			console.log(element);
		})
		if(st >= s_second) {
			$('.section-second-header__logo').find('.header-logo').addClass('animation');
		}

		if(st >= s_third) {
			$('.section-third-images').find('.section-third-image__inner').addClass('section-third-image__inner--animation')
		}
	});
});

$(window).on('load', function() { 
	$(".container-fix").delay(0).fadeOut("slow");
	setTimeout(function() {
		$('body').css('overflow-y', 'scroll')
	}, 0);
});

