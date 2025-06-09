
function init() {
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 150,
            header = document.querySelector("header");
        if ($('body').hasClass("sticky-header")) {
            if (distanceY > shrinkOn) {
                classie.add(header, "smaller");
                $("main").css("margin-top", 100);
            } else {
                if (classie.has(header, "smaller")) {
                    classie.remove(header, "smaller");
                    $("main").css("margin-top", 0);
                }
            }
        }
    });
}
window.onload = init();

// Header Scroll minify 

$(document).ready(function () {
	var $navbar = $("#submenu-sticky");

	AdjustHeader(); // Incase the user loads the page from halfway down (or something);
	$(window).scroll(function () {
		AdjustHeader();
	});

	function AdjustHeader() {
		if ($(window).scrollTop() > 60) {
			if (!$navbar.hasClass("navbar-fixed-top")) {
				$navbar.addClass("navbar-fixed-top");
			}
		} else {
			$navbar.removeClass("navbar-fixed-top");
		}
	}
});
$(document).click(function (event) {

  /// If *sub-navbar-collapse* is not among targets of event
  if (!$(event.target).is('.sub-menu .sub-navbar-collapse *')) {

    /// Collapse every *navbar-collapse*
    $('.sub-menu .navbar-collapse').collapse('hide');

  }
});



function init() {
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 150,
            header = document.querySelector("header");
        if ($('body').hasClass("sticky-header")) {
            if (distanceY > shrinkOn) {
                classie.add(header, "smaller");
                $("main").css("margin-top", 150);
				//$("#listadoAccesosHamburgerNavbar").addClass("hidden");
            } else {
                if (classie.has(header, "smaller")) {
                    classie.remove(header, "smaller");
                    $("main").css("margin-top", 0);
					//$("#listadoAccesosHamburgerNavbar").removeClass("hidden");
                }
            }
        }
    });
}
window.onload = init();


//Script para menus laterales   
$(document).ready(function () {

    //resaltarOpcionMenu();
    setTimeout(function () { resaltarOpcionMenu(); }, 100);
    $("#menu-lateral-sitio li").click(function () {
        setTimeout(function () { resaltarOpcionMenu(); }, 100);
    });

});

function resaltarOpcionMenu() {
	$("#menu-lateral-sitio li").removeClass("active");
    var paginaActual = $(location).attr('href').split('/').slice(-1)[0];
    var paginaActual2 = window.location.pathname;
	var links = $("#menu-lateral-sitio li");
    for (var i = 0; i < links.length; i++) {
		var a = links[i].getElementsByTagName("a")[0];
		if (a != undefined) {
			var href = a.getAttribute("href");
	        if (href != undefined && (paginaActual == href || paginaActual2 == href)) {
    	        if ($(links[i]).hasClass('has-sub')) {
        	        $(links[i]).addClass("active");
	            } else if ($(links[i]).parent().parent().attr("id") == "menu-lateral-sitio") {
    	            $(links[i]).addClass("active");
	            } else if ($(links[i]).parent().parent().hasClass('has-sub')) {
    	            $(links[i]).parent().parent().addClass("active");
        	        $(links[i]).addClass("bolder");
            	}
	        }
		}
    }
}


// Botón subir
	$(document).ready(function(){
	
		$('.ir-arriba').click(function(){
			$('body, html').animate({
				scrollTop: '0px'
			}, 300);
		});
	
		$(window).scroll(function(){
			if( $(this).scrollTop() > 0 ){
				$('.ir-arriba').slideDown(300);
			} else {
				$('.ir-arriba').slideUp(300);
			}
		});
	
	});

$('nav a').click(function(e){				
		e.preventDefault();		//evitar el eventos del enlace normal
		var strAncla=$(this).attr('href'); //id del ancla
			$('body,html').stop(true,true).animate({				
				scrollTop: $(strAncla)
			},300);
		
	});