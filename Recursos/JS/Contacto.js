var $contactForm = $('#contactform');

$contactForm.submit(function(e) {
	e.preventDefault();
	var $submit = $('input:submit', $contactForm);
	var defaultSubmitText = $submit.val();

	$.ajax({
		method: "POST",
		url: "//formspree.io/includepoetry@gmail.com",
		type: 'POST',
		data: $(this).serialize(),
		dataType: "json",
		beforeSend: function() {
			$submit.attr('disabled', true).val('Enviando...');
		},
		success: function(data) {
			$submit.val('Mensaje enviado');
			setTimeout(function() {
				$submit.attr('disabled', false).val(defaultSubmitText);
				$("#contactform, #TextoF, #Contacto, #8").fadeOut('slow', function() {
					$("#TGracias, #TextoG, #Otro").fadeIn('slow');
				});
			}, 3000);
		},
		error: function(err) {
			$submit.val('Hubo un error :C');
			setTimeout(function() {
				$submit.attr('disabled', false).val(defaultSubmitText);
				$("#contactform, #TextoF, #Contacto, #8").fadeOut('slow', function() {
					$("#TError, #TextoE, #OtroSad").fadeIn('slow');
				});
			}, 3000);
		}
	});
});