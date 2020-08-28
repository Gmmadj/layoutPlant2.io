$(document).ready(function () {
	$('.stock__slaider').slick({
		slidesToShow: 1,
 		slidesToScroll: 1,
 		arrows: false,
 		variableWidth: true,
 		centerMode: true,
 		autoplay: true,
 		autoplaySpeed: 7000,
	});
	$('.block__slaider').slick({
		slidesToShow: 1,
 		slidesToScroll: 1,
 		arrows: false,
 		variableWidth: true,
 		infinite: false,
	});

	var accordion_head = $('.accordion > li > a'),
     accordion_body = $('.accordion li > .sub-menu');

	 accordion_head.on('click', function(event) {

	  event.preventDefault();
	  if ($(this).attr('class') == 'active'){
	     accordion_body.slideUp('normal')
	     $(this).removeClass('active');
	     return false;
	     }

	  if ($(this).attr('class') != 'active'){
	     accordion_body.slideUp('normal');
	     $(this).next().stop(true,true).slideToggle('normal');
	     accordion_head.removeClass('active');
	     $(this).addClass('active');
	     }
	   });
});