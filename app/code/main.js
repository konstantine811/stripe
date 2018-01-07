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
	})
});


