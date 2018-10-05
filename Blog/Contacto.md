---
layout: P-Main
title: Contacto
description: Deja tu mensaje, fuera las formalidades
permalink: /Blog/Contacto/
---

# Escribe a #iP 		{#CFDefT}

# Gracias 				{#CFGraT}

# Algo salió mal :c 	{#CFErrT}

{: #CFDefP}
Tanto si tienes colaboraciones, peticiones, reclamos o frustraciones, tus mensajes son bienvenidos.

{: #CFGraP}
Gracias por tu mensaje, recibirás una respuesta muy pronto.

{: #CFErrP}
Las fuerzas del mal han conspirado y tu mensaje no podido ser enviado. Comprueba tu conexión a internet o espera unos minutos.

[Enviar otro mensaje]({{ site.url }}/Blog/Contacto/){: #CFOtro}

[Volvamos a intentarlo]({{ site.url }}/Blog/Contacto/){: #CFOtroSad}

<form id="ContactForm" method="POST">
	<input type="hidden" name="_subject" value="Mensaje desde el blog de #IP" />

	<input  class="FElem" type="text" placeholder="Tu nombre" name="Nombre" id="Nombre" required="">
	<input  class="FElem" type="email" placeholder="Tu correo" name="_replyto" id="Correo" required="">
	
	<textarea placeholder="Tu mensaje" name="Mensaje" id="Mensaje" required="" ></textarea>
	<input type="text" name="_gotcha" style="display:none" />
	<input type="submit" value="Listo" class="Enviar">
</form>
<script src="{{ site.iP-Sources }}/JS/Universal/ContactForm.js"></script>