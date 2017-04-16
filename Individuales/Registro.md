---
layout: G-Article
title: Registro
permalink: /Registro/
description: Registrate en Include Poetry y forma parte de esta gran comunidad
Only-Lyt: true
Hide_FBC: true
published: false
---

## ¡Gracias por registrarte! {#RFGraT}

## Algo salió mal {#RFErrT}

{: #RFDefP}
Regístrate en #iP para que puedas tener acceso al nuevo material, más funcionalidades, registro de progreso y mucho más.

{: #RFGraP}
Revisa tu correo electrónico, pues hemos enviado un correo de confirmación, en unos momentos te redireccionaremos a la página de inicio. Te vemos adentro.

{: #RFErrP}
Al parecer algo ha salido mal: 

{: #RFErrD}
> 

<form id="RegisterForm">
    <label for="RNombre">Nombre</label> 
    <input type="text" placeholder="Tu nombre" name="RNombre" id="RNombre">

    <label for="RApellidos">Apellidos</label> 
    <input type="text" placeholder="Tus apellidos" name="RApellidos" id="RApellidos" required="">

    <label for="RUsuario">Usuario</label>
    <input type="text" placeholder="Tu nombre de usuario" name="RUsuario" id="RUsuario" autofocus>
    <input type="hidden" id="foouser" value="false" name="foouser">
    
    <label for="REmail">Correo</label>
    <input type="email" placeholder="Tu correo" name="REmail" id="REmail" required="">
    
    <label for="RTipo">Tipo de usuario</label>
    <select id="RTipo" name="RTipo" required="">
        <option selected="">Competidor</option>
        <option>Estudiante</option>
        <option>Profesor</option>
        <option>Investigador</option>
    </select>

    <label for="RPass">Contraseña</label>
    <input type="password" placeholder="Contraseña" name="RPass" id="RPass" required="">

    <label for="RPassc">Repite tu contraseña</label>
    <input type="password" placeholder="Contraseña" name="RPassc" id="RPass" required="">

    <input type="submit" value="Listo" id="REnviar">
</form>
<script src="{{ site.iP-Sources }}/JS/Universal/Registro.js"></script>