---
layout: G-Article
title: Regístrate en &#35iP
permalink: /Registro/
description: Registrate en Include Poetry y forma parte de esta gran comunidad
Only-Lyt: true
no_comments: true
Hide_Title: true
---

<h1 id="SUTitulo">Regístrate en #iP</h1>

<p id="SUPre">
    Puedes usar tu cuenta de:
</p>

<p id="SUAlters">
    <span class="SUOpt" id="SUGoogle"><i class="fab fa-google"></i> <span class="SUOptTex">Google</span></span> <span class="SUOpt" id="SUFacebook"><i class="fab fa-facebook-f"></i> <span class="SUOptTex">Facebook</span></span> <span class="SUOpt" id="SUGithub"><i class="fab fa-github"></i> <span class="SUOptTex">Github</span></span>
</p>

<p id="SUPost">
    O utilizar tu correo y una contraseña
</p>

<form id="RegisterForm">
    <span class="UPCampo UPUno">
        <label class="UPUIco" for="SUCorreo"><i class="far fa-envelope"></i></label>
        <input class="UPUTex" id="SUCorreo" name="SUMail" placeholder="Correo">
    </span>
    <span class="UPCampo UPUno">
        <label class="UPUIco" for="SUPass"><i class="fas fa-key"></i></label>
        <input type="password" class="UPUTex" id="SUPass" name="SUPassword" placeholder="Contraseña">
    </span>
    <span class="UPCampo UPUno">
        <label class="UPUIco" for="SUPassConf"><i class="fas fa-key"></i></label>
        <input type="password" class="UPUTex" id="SUPassConf" name="SUPasswordConf" placeholder="Confirmar contraseña">
    </span>
    
    <p id="SUOffer">
        ¿Ya tienes una cuenta? <a href="{{ site.url }}/Iniciar-sesion/">Inicia sesión</a>
    </p>
    <p id="SUTerms">
        Al registrarte aceptas los <a href="{{ site.url }}/Perfil/Terminos-y-condiciones/" target="_blank">términos y condiciones así como políticas de privacidad</a>
    </p>
    <p id="SUSendB">
        <input type="submit" value="Registrarme" id="LEnviar" name="LEnviar">
    </p>
</form>
<script src="{{ site.iP-Sources }}/JS/Universal/Registro.js"></script>