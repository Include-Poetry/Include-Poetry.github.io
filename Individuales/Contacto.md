---
layout: G-Article
title: Contactanos
permalink: /Contacto/
description: Manda un mensaje a Include Poetry, estamos interesados en escucharte
Only-Lyt: true
Hide_FBC: true
---

## Deja tu mensaje 	{#CFDefT}

## ¡Gracias! 		{#CFGraT}

## Rayos :c 		{#CFErrT}

{: #CFDefP}
En Include Poetry estamos en constante desarrollo y crecimiento, es por ello que tu opinión nos interesa mucho. Así que no lo pienses dos veces y di lo que tienes en mente, tanto si quieres felicitar o sugerir correcciones, colaborar o hacer una petición, decir hola o solicitar información.

{: #CFGraP}
Gracias por tu mensaje, recibirás una respuesta muy pronto.

{: #CFErrP}
Las fuerzas del mal han conspirado y tu mensaje no podido ser enviado. Comprueba tu conexión a internet o espera unos minutos.

> [Enviar otro mensaje]({{ site.url }}/Contacto/){: #CFOtro}

> [¿Otra oportunidad?]({{ site.url }}/Contacto/){: #CFOtroSad}

<form id="ContactForm" method="POST">
	<div class="FIzq">
		<input type="hidden" name="_subject" value="Mensaje desde #IP" />
		<input  class="FElem" type="text" placeholder="Tu nombre" name="Nombre" id="Nombre" required="">

		<input  class="FElem" type="email" placeholder="Tu correo" name="_replyto" id="Correo" required="">

		<select class="FElem" name="Motivo" >
			<option selected="" value="Nada">Motivo de tu mensaje</option>
			<option>Aportación</option>
			<option>Petición de tema</option>
			<option>Petición de material</option>
			<option>Sugerencia</option>
			<option>Corrección</option>
			<option>Información sobre el sitio</option>
			<option>Información de olimpiada</option>
			<option>Saludo :D</option>
			<option>Otro</option>
		</select>
	</div>
	
	<textarea placeholder="Tu mensaje" name="Mensaje" id="Mensaje" required="" ></textarea>
	<input type="text" name="_gotcha" style="display:none" />
	<input type="submit" value="Listo" id="Enviar">
</form>
<script src="{{ site.iP-Sources }}/JS/Universal/ContactForm.js"></script>