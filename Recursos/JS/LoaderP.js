$(window).ready(function() {
	$("header,.Cuerpo,footer").css("display", "none");
	$('body').jpreLoader({
		splashID: "#jSplash",
		autoClose: true,
		loaderVPos: '56%',
		showPercentage: false
	}, function() {
		$(".Pre-img").fadeOut();
		$(".Pre-fondo").fadeOut();
		$("header,.Cuerpo,footer").fadeIn(400);
	});
});