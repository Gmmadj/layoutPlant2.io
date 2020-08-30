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
	$('.top__slaider').slick({
		slidesToShow: 1,
 		slidesToScroll: 1,
 		arrows: false,
 		variableWidth: true,
 		infinite: false,
	});
	$('.block__slaider').slick({
		speed: 200,
		slidesToShow: 1,
 		slidesToScroll: 1,
 		arrows: true,
 		variableWidth: true,
 		infinite: false,
 		responsive: [
		    {
		      breakpoint: 986,
		      settings: {
		        slidesToShow: 1,
		 		slidesToScroll: 1,
		 		arrows: false,
		 		variableWidth: true,
		 		infinite: false,
		      }
		    }
		]
	});

	initMenu();
});


function initMenu() {

	$('.nav__mobil ul').hide();
	$('.nav__mobil ul:eq(1)').show();

	$('.nav__mobil li a').click(
	  function() {
	    var iselemnt = $(this).next();
	    if((iselemnt.is('ul')) && (iselemnt.is(':visible'))) {
	      return false;
	    }

	    if((iselemnt.is('ul')) && (!iselemnt.is(':visible'))) {
	      $('.nav__mobil ul:visible').slideUp('normal');
	      iselemnt.slideDown('normal');
	      return false;
	    }
	  }
	);

}

