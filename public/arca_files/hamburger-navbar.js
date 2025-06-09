function HamburgerOn(){
	$('#main-navbar-collapse').addClass('in');
	$('#mainHamburgerNavbar').addClass('activeBox');
	$('header').addClass('activeHamburger');
	$('main').addClass('activeHamburger');
	$('.jumbotron').addClass('hidden');
	$('footer').addClass('activeHamburger');
	$('.ir-arriba').addClass('activeHamburger');
	
	//if ($('main').hasClass('show')) {
	//  $('main').removeClass('show');
	//}
	//$('main').addClass('hide');
	//if ($('footer').hasClass('show')) {
	//  $('footer').removeClass('show');
	//}
	//$('footer').addClass('hide');
};
			
function HamburgerOff(){
	$('#mainHamburgerNavbar').removeClass('activeBox');
	$('header').removeClass('activeHamburger');
	$('main').removeClass('activeHamburger');
	$('.jumbotron').removeClass('hidden');
	$('footer').removeClass('activeHamburger');
	$('.ir-arriba').removeClass('activeHamburger');
	
	//$('main').addClass('show');
	//$('footer').addClass('show');
};

$(document).ready( function () {
	$("#listadoAccesosHamburgerNavbar .dropdown-menu-large a").click(function(){
		$('#menuLoading').removeClass('hide');
		setTimeout(function() {
			$('#menuLoading').addClass('hide');
		}, 2000);
	});
	<!-- Precarga imagenes hover -->
	var imgLoading = new Image();
	imgLoading.src="resources/landing/componentes/hamburger-navbar/img/loading.gif";
	
	window.addEventListener('resize', function(event) {
		if ($(window).width() > 767) {
			$('#mainHamburgerNavbar').removeClass('activeBox');
			$('header').removeClass('activeHamburger');
			$('main').removeClass('activeHamburger');
			$('footer').removeClass('activeHamburger');
			$('.ir-arriba').removeClass('activeHamburger');
			$('#main-navbar-collapse').removeClass('in');
		}
	}, true);
});
