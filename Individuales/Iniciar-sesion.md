---
layout: G-Article
title: Inicia sesión en &#35iP
permalink: /Iniciar-sesion/
description: Inicia sesión con tu cuenta de Include Poetry
Only-Lyt: true
no_comments: true
Hide_Title: true
published: true
---

<h1 id="LITitulo">Inicia sesión en #iP</h1>

<p id="LIPre">
    Iniciar con mi cuenta de:
</p>

<p id="LIAlters">
    <span class="LIOpt" id="LIGoogle"><i class="fab fa-google"></i> <span class="LIOptTex">Google</span></span> <span class="LIOpt" id="LIFacebook"><i class="fab fa-facebook-f"></i> <span class="LIOptTex">Facebook</span></span> <span class="LIOpt" id="LIGithub"><i class="fab fa-github"></i> <span class="LIOptTex">Github</span></span>
</p>

<p id="LIPost">
    Iniciar sesión usando correo y contraseña
</p>

<form id="LoginForm">
    <span class="UPCampo UPUno">
        <label class="UPUIco" for="LICorreo"><i class="far fa-envelope"></i></label>
        <input class="UPUTex" id="LICorreo" name="LEmail" placeholder="Correo">
    </span>
    <span class="UPCampo UPUno">
        <label class="UPUIco" for="LIPass"><i class="fas fa-key"></i></label>
        <input type="password" class="UPUTex" id="LIPass" name="LPass" placeholder="Contraseña">
    </span>
    <p id="ForgotEmail">¿Olvidaste tu contraseña? <span id="FEmailSend" class="FalseBtn">Enviar correo de recuperación</span>.</p>
    <p id="LIOffer">
        ¿Aún no tienes una cuenta? <a href="{{ site.url }}/Registro/">Regístrate</a>
    </p>
    <p id="LISendB">
        <input type="submit" value="Iniciar sesión" id="LEnviar" name="LEnviar">
    </p>
</form>

<script src="{{ site.iP-Sources }}/JS/Universal/InicioSes.js"></script>