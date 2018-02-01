/*
* @Author: Admin
* @Date:   2017-07-19 19:43:56
* @Last Modified by:   Admin
* @Last Modified time: 2017-07-20 15:28:53
*/

'use strict';

$(document).ready(function() {

	var showMobileMenu;

	//bootstrap carousel
	$('.carousel').carousel({
		interval: 3000
	});


	$('.logo__header').find('.header-logo').addClass('animation');

	// showMobileMenu = function() {
	// 	var menu = $('.mobile-menu');
	// 	var visible = $('.mobile-menu').css('opacity') == 0;

	// 	$('.mobile-button').click(function()  {
	// 		if (visible) {
	// 			menu.css({'opacity': '1', transform: 'scale(1)'});
	// 		}
	// 	}
	// }

	function showMobileMenu() {
		var menu = $('header.header').find('.mobile-menu'),
		button_open = $('header.header').find('.mobile-button'),
		button_close = $('header.header').find('.mobile-menu__button-close');
		
		
		button_open.click(function() {
			var visible = menu.is(':visible');
			if(!visible) {
				menu.fadeIn(0).css({'transform': 'none'}).animate({'opacity': '1'}, 100, "linear");
			}
		});
		
		button_close.click(function() {
			var visible = menu.is(':visible');
			if (visible) {
				menu.fadeOut(140).css({'transform': 'scale(.95)'}).animate({'opacity': '0'}, 100, "linear");
			}
		});
		
	}

	showMobileMenu();

});

$(window).on('load', function() { 
	$(".container-fix").delay(0).fadeOut("slow");
});

