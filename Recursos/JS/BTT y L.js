/* -------- Volver arriba -------- */
var limite = 500;
$(window).scroll(function() {
	if ($(window).scrollTop() > limite) {
		$('.VolverA').fadeIn('slow');
	} else {
		$('.VolverA').fadeOut('slow');
	}

	$('.Aparece').each(function(i) {
		var FondoDeObjeto = $(this).offset().top + $(this).outerHeight();
		var FondoDeVentana = $(window).scrollTop() + $(window).height();

		/* Si es completamente visible entonces se muestra */
		if (FondoDeVentana > FondoDeObjeto) {
			$(this).animate({
				'opacity': '1'
			}, 500);
		}
	});
});
$('.VolverA').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});
/* --------- Fin volver arriba ------- */

/* --------- Iconos menu ------- */
$("#Karel").click(function(e) {
	$("#mC").slideUp('fast');
	$("#mRec").slideUp('fast');
	$("#mMas").slideUp('fast');
	$("#mKarel").slideToggle('slow');
});
$("#C").click(function(e) {
	$("#mKarel").slideUp('fast');
	$("#mRec").slideUp('fast');
	$("#mMas").slideUp('fast');
	$("#mC").slideToggle('slow');
});
$("#Recursos").click(function(e) {
	$("#mKarel").slideUp('fast');
	$("#mC").slideUp('fast');
	$("#mMas").slideUp('fast');
	$("#mRec").slideToggle('slow');
});
$("#Mas").click(function(e) {
	$("#mKarel").slideUp('fast');
	$("#mC").slideUp('fast');
	$("#mRec").slideUp('fast');
	$("#mMas").slideToggle('slow');
});
$(".Cuerpo").click(function(event) {
	$("#mKarel").slideUp('fast');
	$("#mC").slideUp('fast');
	$("#mRec").slideUp('fast');
	$("#mMas").slideUp('fast');
});
/* --------- Fin Iconos menu ------- */


/* --------- Ir a un punto ------- */
var movil = false;
var extra = 80;
if ($(window).width() < 600) {
	movil = true;
	extra = 60;
}

$('.BotonMenu').click(function() {
	$('.Cabecera').slideToggle('slow');
	if (extra == 80 || extra == 60) {
		if (movil) {
			extra = 10;
		} else {
			extra = 20;
		}
	} else {
		if (movil) {
			extra = 60;
		} else {
			extra = 80;
		}
	}
});

$(function() {
	$("#1L").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $("#1").offset().top - extra
		}, 2000);
	});
	$("#2L").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $("#2").offset().top - extra
		}, 2000);
	});
	$("#3L").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $("#3").offset().top - extra
		}, 2000);
	});
	$("#4L").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $("#4").offset().top - extra
		}, 2000);
	});
	$("#5L").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $("#5").offset().top - extra
		}, 2000);
	});
	$("#6L").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $("#6").offset().top - extra
		}, 2000);
	});
	$("#7L").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $("#7").offset().top - extra
		}, 2000);
	});
	$("#8L").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $("#8").offset().top - extra
		}, 2000);
	});
	$("#9L").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $("#9").offset().top - extra
		}, 2000);
	});
	$("#10L").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $("#10").offset().top - extra
		}, 2000);
	});
	$("#11L").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $("#11").offset().top - extra
		}, 2000);
	});
	$("#12L").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $("#12").offset().top - extra
		}, 2000);
	});
	$("#13L").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $("#13").offset().top - extra
		}, 2000);
	});
	$("#14L").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $("#14").offset().top - extra
		}, 2000);
	});
	$("#15L").click(function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: $("#15").offset().top - extra
		}, 2000);
	});
})
/* --------- Fin Ir a un punto ------- */

/* --------- Facebook comments ------- */
$("#ComentAct").click(function(event) {
	$(".CajaComent").slideToggle("slow");
});
/* --------- Fin Facebook comments ------- */

/* --------- Loader ------- */
$(window).ready(function() {
	$(".Cabecera,.Cuerpo,.Pie").css("display", "none");
	$('body').jpreLoader({
		splashID: "#jSplash",
		autoClose: true,
		loaderVPos: '56%',
		showPercentage: false
	}, function() {
		$(".Pre-img").fadeOut();
		$(".Pre-img-c").fadeOut();
		$(".Pre-fondo").fadeOut();
		$(".Pre-img-i").fadeOut();
		$(".Pre-img-m").fadeOut();
		$(".Cabecera,.Cuerpo,.Pie").fadeIn(400, function() {
			setTimeout(function(){
				$('.PortadaR').animate({
					'opacity': '1'
				}, 500, function() {
					$('.Tour').animate({
						'width': '100%'
					}, 500, function() {
						$('.LinkTour').slideDown(500, function() {
							$('.Tour a').animate({'opacity':'1'},500, function(){
								$('.PortadaL').fadeIn(1000);
							});
						});
					});
				});
			}, 500);
		});
		if ($(".Pantalla").length > 0){$('.Cabecera').slideToggle(400);}
	});
});
/* --------- Fin Loader ------- */

/* --------- Fondos ------- */
//var fondos = ['url(Recursos/Multimedia/Fondos/77.jpg)'];
var fondos = ['url(Recursos/Multimedia/Fondos/01.jpg)',
	'url(Recursos/Multimedia/Fondos/02.jpg)',
	'url(Recursos/Multimedia/Fondos/03.jpg)',
	'url(Recursos/Multimedia/Fondos/04.jpg)',
	'url(Recursos/Multimedia/Fondos/05.jpg)',
	'url(Recursos/Multimedia/Fondos/06.jpg)',
	'url(Recursos/Multimedia/Fondos/07.jpg)',
	'url(Recursos/Multimedia/Fondos/08.jpg)',
	'url(Recursos/Multimedia/Fondos/09.jpg)',
	'url(Recursos/Multimedia/Fondos/10.jpg)',
	'url(Recursos/Multimedia/Fondos/11.jpg)',
	'url(Recursos/Multimedia/Fondos/12.jpg)',
	'url(Recursos/Multimedia/Fondos/13.jpg)',
	'url(Recursos/Multimedia/Fondos/14.jpg)',
	'url(Recursos/Multimedia/Fondos/15.jpg)',
	'url(Recursos/Multimedia/Fondos/16.jpg)',
	'url(Recursos/Multimedia/Fondos/17.jpg)'
];

var x = Math.floor((Math.random() * fondos.length) + 1);
document.getElementById("CuerpoF").style.backgroundImage = fondos[x - 1];
/* --------- Fin Fondos ------- */

/* --------- Estados ------- */
var estados = ['<img oncontextmenu="return false" oncopy="return false" src="Recursos/Multimedia/Estados/Its better.png" width="100%">',
	'<img oncontextmenu="return false" oncopy="return false" src="Recursos/Multimedia/Estados/404.png" width="100%">',
	'<img oncontextmenu="return false" oncopy="return false" src="Recursos/Multimedia/Estados/Bienvenido.png" width="100%">',
	'<img oncontextmenu="return false" oncopy="return false" src="Recursos/Multimedia/Estados/You should.png" width="100%">'
];

var cantE = estados.length;
var yolo = Math.floor((Math.random() * estados.length));
var contE = yolo;
document.getElementById("Contenedor").innerHTML = estados[yolo];

function CambioEstado() {
	$('#Contenedor').fadeOut(500);
	contE = contE + 1;
	if (contE == cantE) {
		contE = 0;
	}
	setTimeout(function() {
		document.getElementById("Contenedor").innerHTML = estados[contE];
		$('#Contenedor').fadeIn(500);
	}, 500);
}

setInterval(function() {
	CambioEstado()
}, 10000);
/* --------- Fin Estados ------- */