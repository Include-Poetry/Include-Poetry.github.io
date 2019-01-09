---
layout: G-Article
title: Contactanos
permalink: /Contacto/
description: Manda un mensaje a Include Poetry, estamos interesados en escucharte
Only-Lyt: true
no_comments: true
---

## Deja tu mensaje 	{#CFDefT}

## ¡Gracias! 		{#CFGraT}

## Rayos :c 		{#CFErrT}

{: #CFDefP}
En Include Poetry estamos en constante desarrollo y crecimiento, es por ello que tu opinión nos interesa mucho. Así que no lo pienses dos veces y di lo que tienes en mente, tanto si quieres felicitar o sugerir correcciones, colaborar o hacer una petición, decir hola o solicitar información. No olvides que también puedes mandar un correo. Para ver el correo de #iP <span class="secOflMail">haz click aquí</span>.

{: #CFGraP}
Gracias por tu mensaje, recibirás una respuesta muy pronto. Código de tu mensaje:

{: #CFErrP}
Las fuerzas del mal han conspirado y tu mensaje no podido ser enviado. Comprueba tu conexión a internet o espera unos minutos.

> [Enviar otro mensaje]({{ site.url }}/Contacto/){: #CFOtro}

> [¿Otra oportunidad?]({{ site.url }}/Contacto/){: #CFOtroSad}

<form id="ContactForm" method="POST">
	<div class="FIzq">
		<input type="hidden" name="_subject" value="Mensaje desde #IP" />
		<input  class="FElem" type="text" placeholder="Nombre o identificador" name="Nombre" id="Nombre" required="">
		<input  class="FElem" type="email" placeholder="Correo" name="_replyto" id="Correo" required="">
	</div>
	<textarea placeholder="Mensaje" name="Mensaje" id="Mensaje" required=""></textarea>
	<input type="text" name="_gotcha" style="display:none" />
	<input type="hidden" name="Codigo" id="CFCodeRec">
	<span id="CFTerms"><input type="checkbox" id="CFAC" name="CFAC"> <label for="CFAC">He leído y acepto los <a href="{{site.url}}/Terminos-condiciones-y-privacidad/">terminos y condiciones</a>.</label></span>
	<div id="CFDelSend"><input type="submit" value="Listo" id="Enviar"></div>
</form>
<script src="{{ site.iP-Sources }}/JS/Universal/ContactForm.js"></script>