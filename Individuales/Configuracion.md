---
layout: G-Article
title: Configuración del perfil
permalink: /Perfil/Configuracion/
description: Configura tu perfil de Include Poetry
Only-Lyt: true
no_comments: true
---

## Sobre mi cuenta

<h3 id="PCPassTitle">Cambiar contraseña</h3>

<article id="PassSettings">
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="fas fa-lock-open"></i></span>
        <span class="UPDNom">Contraseña actual</span>
        <span class="UPDVal UPDOut">Tu actual contraseña</span>
        <input type="password" class="UPDVal UPDIn" id="PCPassOld">
    </span>
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="fas fa-unlock"></i></span>
        <span class="UPDNom">Contraseña nueva</span>
        <span class="UPDVal UPDOut">La nueva</span>
        <input type="password" class="UPDVal UPDIn" id="PCPassNew">
    </span>
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="fas fa-lock"></i></span>
        <span class="UPDNom">Confirma la contraseña</span>
        <span class="UPDVal UPDOut">Confirmación de la nueva</span>
        <input type="password" class="UPDVal UPDIn" id="PCPassNew2">
    </span>
    <div class="OrgButton">
        <span class="UPButtons">
            <button id="EditPC8" title="Editar"><i class="far fa-edit"></i></button>
            <button id="DonePC8" title="Guardar" disabled><i class="fas fa-check"></i></button>
            <button id="CancelPC8" title="Cancelar" disabled><i class="fas fa-ban"></i></button>
            <span class="AuxButton" id="AuxPC8">Texto ayuda</span>
        </span>
    </div>
</article>

<h3 id="PCEmailTitle">Cambiar correo</h3>

<article id="MailSettings">
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="far fa-envelope-open"></i></span>
        <span class="UPDNom">Correo nuevo</span>
        <span class="UPDVal UPDOut">nuevo@ejemplo.com</span>
        <input type="email" class="UPDVal UPDIn" id="PCMailNew">
    </span>
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="far fa-envelope"></i></span>
        <span class="UPDNom">Confirma tu correo</span>
        <span class="UPDVal UPDOut">nuevo@ejemplo.com</span>
        <input type="email" class="UPDVal UPDIn" id="PCMailNew2">
    </span>
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="fas fa-lock"></i></span>
        <span class="UPDNom">Contraseña</span>
        <span class="UPDVal UPDOut">Tu contraseña actual</span>
        <input type="password" class="UPDVal UPDIn" id="PCMailPass">
    </span>
    <div class="OrgButton">
        <span class="UPButtons">
            <button id="EditPC9" title="Editar"><i class="far fa-edit"></i></button>
            <button id="DonePC9" title="Guardar" disabled><i class="fas fa-check"></i></button>
            <button id="CancelPC9" title="Cancelar" disabled><i class="fas fa-ban"></i></button>
            <span class="AuxButton" id="AuxPC9">Texto ayuda</span>
        </span>
    </div>
</article>

### Vincular con otras cuentas

<article id="AccountsLink">
    <span class="UPCampo UPDos UPDToggleBtn">
        <span class="UPDIco"><i class="far fa-envelope"></i></span>
        <span class="UPDNom">Correo y contraseña</span>
        <span class="UPDVal UPDOut" id="PCLCorreo"><i id="PCPcorreo" class="fas fa-toggle-off fa-lg"></i></span>
    </span>
    <span class="UPCampo UPDos PCEmailProv">
        <span class="UPDIco"><i class="far fa-envelope"></i></span>
        <span class="UPDNom">Correo</span>
        <input type="email" class="UPDVal UPDIn" id="CPEmailIn">
    </span>
    <span class="UPCampo UPDos PCEmailProv">
        <span class="UPDIco"><i class="fas fa-key"></i></span>
        <span class="UPDNom">Contraseña</span>
        <input type="password" class="UPDVal UPDIn" id="CPPassIn">
    </span>
    <span class="UPCampo UPDos PCEmailProv">
        <span class="UPDIco"><i class="fas fa-key"></i></span>
        <span class="UPDNom">Confirmar contraseña</span>
        <input type="password" class="UPDVal UPDIn" id="CPPassConfIn">
    </span>
    <span class="UPCampo UPDos UPDToggleBtn">
        <span class="UPDIco"><i class="fab fa-google"></i></span>
        <span class="UPDNom">Google</span>
        <span class="UPDVal UPDOut" id="PCLGoole"><i id="PCPgoogle" class="fas fa-toggle-off fa-lg"></i></span>
    </span>
    <span class="UPCampo UPDos UPDToggleBtn">
        <span class="UPDIco"><i class="fab fa-facebook-square"></i></span>
        <span class="UPDNom">Facebook</span>
        <span class="UPDVal UPDOut" id="PCLFacebook"><i id="PCPfacebook" class="fas fa-toggle-off fa-lg"></i></span>
    </span>
    <span class="UPCampo UPDos UPDToggleBtn">
        <span class="UPDIco"><i class="fab fa-github"></i></span>
        <span class="UPDNom">Github</span>
        <span class="UPDVal UPDOut" id="PCLGithub"><i id="PCPgithub" class="fas fa-toggle-off fa-lg"></i></span>
    </span>
    <div class="OrgButton">
        <span class="UPButtons">
            <button id="SaveEmailProv" title="Guardar" disabled><i class="fas fa-check"></i></button>
            <span class="AuxButton" id="AuxPC10">Texto ayuda</span>
        </span>
    </div>
</article>

## Sobre como veo el sitio

<article id="SiteView">
    <span class="UPCampo UPDos UPDToggleBtn">
        <span class="UPDIco"><i class="far fa-clock"></i></span>
        <span class="UPDNom">DarkMode automático</span>
        <span class="UPDVal UPDOut"><i id="PCDrkAuto" class="fas fa-toggle-off fa-lg"></i></span>
    </span>
    <span class="UPCampo UPDos UPDToggleBtn">
        <span class="UPDIco"><i class="far fa-moon"></i></span>
        <span class="UPDNom">DarkMode fijo</span>
        <span class="UPDVal UPDOut"><i id="PCDrkForced" class="fas fa-toggle-off fa-lg"></i></span>
    </span>
    <div class="OrgButton">
        <span class="UPButtons">
            <span class="AuxButton" id="AuxPC11">Texto ayuda</span>
        </span>
    </div>
</article>

<script src="{{ site.iP-Sources }}/JS/Universal/PerfilConfig.js"></script>