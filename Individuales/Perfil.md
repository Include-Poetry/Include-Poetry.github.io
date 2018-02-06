---
layout: G-Article
title: Mi perfil
permalink: /Perfil/
description: Tu perfil en Include Poetry
Only-Lyt: true
no_comments: true
---

Aquí puedes personalizar la forma en que otros usuarios te conocerán y la forma en que te podrán contactar. Si tu perfil ya está completo, se mostrará un <i class="far fa-check-circle"></i> junto a tu avatar, así sabrás que tu perfil está disponible para la comunidad.

<p id="AccountStatus"></p>

## Datos de presentación

<article id="Presentacion">
    <div id="FotoPerfil" class="UPCampo">
        <input id="UploadPicButton" type="file" accept="image/*">
        <label for="UploadPicButton" id="UploadPic" title="Subir nueva foto"><i class="fas fa-upload"></i></label>
        <i id="AccStatIcon" class="far fa-fw fa-clock" title="Tu perfil está completo"></i>
    </div>
    <div id="DatosPre">
        <span class="UPCampo UPUno">
            <span class="UPUIco"><i class="fas fa-user-circle"></i></span>
            <span class="UPDVal UPDOut" id="BIFUsername">Nombre de usuario</span>
            <input class="UPDVal UPDIn" id="BIFUsernameIn">
        </span>
        <span class="UPCampo UPUno">
            <span class="UPUIco"><i class="far fa-address-book"></i></span>
            <span class="UPUTex" id="DPName">Nombre completo</span>
        </span>
        <span class="UPCampo UPUno">
            <span class="UPUIco"><i class="fas fa-map-marker-alt"></i></span>
            <span class="UPUTex" id="DPNacio">Nacionalidad y estado</span>
        </span>
        <span class="UPCampo UPUno">
            <span class="UPUIco"><i class="far fa-handshake"></i></span>
            <span class="UPUTex" id="DPType">Tipo de usuario</span>
        </span>
        <span class="UPCampo UPUno" id="UPDesc">
            <span class="UPUTex" id="DPMore">Descripción</span>
            <textarea class="UPUTex UPUIn" id="DPMoreIn"></textarea>
            <span class="UPUIco UPUIcoDesc"><i class="fas fa-info-circle"></i></span>
        </span>
    </div>
    <div class="OrgButton">
        <span class="UPButtons">
            <button id="Edit1" title="Editar"><i class="far fa-edit"></i></button>
            <button id="Done1" title="Guardar" disabled><i class="fas fa-check"></i></button>
            <button id="Cancel1" title="Cancelar" disabled><i class="fas fa-ban"></i></button>
            <span class="AuxButton" id="Aux1">Texto ayuda</span>
        </span>
    </div>
</article>

## Información básica

<article id="BasicInfo">
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="far fa-address-book"></i></span>
        <span class="UPDNom">Nombre</span>
        <span class="UPDVal UPDOut" id="BIFName"></span>
        <input class="UPDVal UPDIn" id="BIFNameIn">
    </span>
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="far fa-id-card"></i></span>
        <span class="UPDNom">Apellidos</span>
        <span class="UPDVal UPDOut" id="BILName"></span>
        <input class="UPDVal UPDIn" id="BILNameIn">
    </span>
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="fas fa-globe"></i></span>
        <span class="UPDNom">País</span>
        <span class="UPDVal UPDOut" id="BINaci"></span>
        <select class="UPDVal UPDIn" id="BINaciIn">
            <option>Afganistán</option>
            <option>Albania</option>
            <option>Alemania</option>
            <option>Andorra</option>
            <option>Angola</option>
            <option>Antigua y Barbuda</option>
            <option>Arabia Saudita</option>
            <option>Argelia</option>
            <option>Argentina</option>
            <option>Armenia</option>
            <option>Australia</option>
            <option>Austria</option>
            <option>Azerbaiyán</option>
            <option>Bahamas</option>
            <option>Bangladés</option>
            <option>Barbados</option>
            <option>Baréin</option>
            <option>Bélgica</option>
            <option>Belice</option>
            <option>Benín</option>
            <option>Bielorrusia</option>
            <option>Birmania</option>
            <option>Bolivia</option>
            <option>Bosnia y Herzegovina</option>
            <option>Botsuana</option>
            <option>Brasil</option>
            <option>Brunéi</option>
            <option>Bulgaria</option>
            <option>Burkina Faso</option>
            <option>Burundi</option>
            <option>Bután</option>
            <option>Cabo Verde</option>
            <option>Camboya</option>
            <option>Camerún</option>
            <option>Canadá</option>
            <option>Catar</option>
            <option>Chad</option>
            <option>Chile</option>
            <option>China</option>
            <option>Chipre</option>
            <option>Ciudad del Vaticano</option>
            <option>Colombia</option>
            <option>Comoras</option>
            <option>Corea del Norte</option>
            <option>Corea del Sur</option>
            <option>Costa de Marfil</option>
            <option>Costa Rica</option>
            <option>Croacia</option>
            <option>Cuba</option>
            <option>Dinamarca</option>
            <option>Dominica</option>
            <option>Ecuador</option>
            <option>Egipto</option>
            <option>El Salvador</option>
            <option>Emiratos Árabes Unidos</option>
            <option>Eritrea</option>
            <option>Eslovaquia</option>
            <option>Eslovenia</option>
            <option>España</option>
            <option>Estados Unidos</option>
            <option>Estonia</option>
            <option>Etiopía</option>
            <option>Filipinas</option>
            <option>Finlandia</option>
            <option>Fiyi</option>
            <option>Francia</option>
            <option>Gabón</option>
            <option>Gambia</option>
            <option>Georgia</option>
            <option>Ghana</option>
            <option>Granada</option>
            <option>Grecia</option>
            <option>Guatemala</option>
            <option>Guyana</option>
            <option>Guinea</option>
            <option>Guinea ecuatorial</option>
            <option>Guinea-Bisáu</option>
            <option>Haití</option>
            <option>Honduras</option>
            <option>Hungría</option>
            <option>India</option>
            <option>Indonesia</option>
            <option>Irak</option>
            <option>Irán</option>
            <option>Irlanda</option>
            <option>Islandia</option>
            <option>Islas Marshall</option>
            <option>Islas Salomón</option>
            <option>Israel</option>
            <option>Italia</option>
            <option>Jamaica</option>
            <option>Japón</option>
            <option>Jordania</option>
            <option>Kazajistán</option>
            <option>Kenia</option>
            <option>Kirguistán</option>
            <option>Kiribati</option>
            <option>Kuwait</option>
            <option>Laos</option>
            <option>Lesoto</option>
            <option>Letonia</option>
            <option>Líbano</option>
            <option>Liberia</option>
            <option>Libia</option>
            <option>Liechtenstein</option>
            <option>Lituania</option>
            <option>Luxemburgo</option>
            <option>Madagascar</option>
            <option>Malasia</option>
            <option>Malaui</option>
            <option>Maldivas</option>
            <option>Malí</option>
            <option>Malta</option>
            <option>Marruecos</option>
            <option>Mauricio</option>
            <option>Mauritania</option>
            <option>México</option>
            <option>Micronesia</option>
            <option>Moldavia</option>
            <option>Mónaco</option>
            <option>Mongolia</option>
            <option>Montenegro</option>
            <option>Mozambique</option>
            <option>Namibia</option>
            <option>Nauru</option>
            <option>Nepal</option>
            <option>Nicaragua</option>
            <option>Níger</option>
            <option>Nigeria</option>
            <option>Noruega</option>
            <option>Nueva Zelanda</option>
            <option>Omán</option>
            <option>Países Bajos</option>
            <option>Pakistán</option>
            <option>Palaos</option>
            <option>Panamá</option>
            <option>Papúa Nueva Guinea</option>
            <option>Paraguay</option>
            <option>Perú</option>
            <option>Polonia</option>
            <option>Portugal</option>
            <option>Reino Unido</option>
            <option>República Centroafricana</option>
            <option>República Checa</option>
            <option>República de Macedonia</option>
            <option>República del Congo</option>
            <option>República Democrática del Congo</option>
            <option>República Dominicana</option>
            <option>República Sudafricana</option>
            <option>Ruanda</option>
            <option>Rumanía</option>
            <option>Rusia</option>
            <option>Samoa</option>
            <option>San Cristóbal y Nieves</option>
            <option>San Marino</option>
            <option>San Vicente y las Granadinas</option>
            <option>Santa Lucía</option>
            <option>Santo Tomé y Príncipe</option>
            <option>Senegal</option>
            <option>Serbia</option>
            <option>Seychelles</option>
            <option>Sierra Leona</option>
            <option>Singapur</option>
            <option>Siria</option>
            <option>Somalia</option>
            <option>Sri Lanka</option>
            <option>Suazilandia</option>
            <option>Sudán</option>
            <option>Sudán del Sur</option>
            <option>Suecia</option>
            <option>Suiza</option>
            <option>Surinam</option>
            <option>Tailandia</option>
            <option>Tanzania</option>
            <option>Tayikistán</option>
            <option>Timor Oriental</option>
            <option>Togo</option>
            <option>Tonga</option>
            <option>Trinidad y Tobago</option>
            <option>Túnez</option>
            <option>Turkmenistán</option>
            <option>Turquía</option>
            <option>Tuvalu</option>
            <option>Ucrania</option>
            <option>Uganda</option>
            <option>Uruguay</option>
            <option>Uzbekistán</option>
            <option>Vanuatu</option>
            <option>Venezuela</option>
            <option>Vietnam</option>
            <option>Yemen</option>
            <option>Yibuti</option>
            <option>Zambia</option>
            <option>Zimbabue</option>
        </select>
    </span>
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="fas fa-map-marker-alt"></i></span>
        <span class="UPDNom">Estado de residencia</span>
        <span class="UPDVal UPDOut" id="BIState"></span>
        <select class="UPDVal UPDIn" id="BIStateIn">
            <option>Aguascalientes</option>
            <option>Baja California</option>
            <option>Baja California Sur</option>
            <option>Campeche</option>
            <option>Chiapas</option>
            <option>Chihuahua</option>
            <option>Ciudad de México</option>
            <option>Coahuila</option>
            <option>Colima</option>
            <option>Durango</option>
            <option>Estado de México</option>
            <option>Extranjero</option>
            <option>Guanajuato</option>
            <option>Guerrero</option>
            <option>Hidalgo</option>
            <option>Jalisco</option>
            <option>Michoacán</option>
            <option>Morelos</option>
            <option>Nayarit</option>
            <option>Nuevo León</option>
            <option>Oaxaca</option>
            <option>Puebla</option>
            <option>Querétaro</option>
            <option>Quintana Roo</option>
            <option>San Luis Potosí</option>
            <option>Sin Localidad</option>
            <option>Sinaloa</option>
            <option>Sonora</option>
            <option>Tabasco</option>
            <option>Tamaulipas</option>
            <option>Tlaxcala</option>
            <option>Veracruz</option>
            <option>Yucatán</option>
            <option>Zacatecas</option>
        </select>
    </span>
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="far fa-calendar-alt"></i></span>
        <span class="UPDNom">Fecha de nacimiento</span>
        <span class="UPDVal UPDOut" id="BIBirth"></span>
        <input class="UPDVal UPDIn" id="BIBirthIn" type="date">
    </span>
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="fas fa-university"></i></span>
        <span class="UPDNom">Estudiando actualmente</span>
        <span class="UPDVal UPDOut" id="BISchool"></span>
        <select class="UPDVal UPDIn" id="BISchoolIn">
            <option>Primaria</option>
            <option>Secundaria</option>
            <option>Preparatoria</option>
            <option>Universidad</option>
            <option>Maestría</option>
            <option>Doctorado</option>
            <option>Postdoctorado</option>
        </select>
    </span>
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="fas fa-bookmark"></i></span>
        <span class="UPDNom">Semestre o año</span>
        <span class="UPDVal UPDOut" id="BIGrade"></span>
        <select class="UPDVal UPDIn" id="BIGradeIn">
            <option>Semestre 1 a 2 | Año 1</option>
            <option>Semestre 3 a 4 | Año 2</option>
            <option>Semestre 5 a 6 | Año 3</option>
            <option>Semestre 7 a 8 | Año 4</option>
            <option>Semestre 9 a 10 | Año 5</option>
            <option>Semestre 11 a 12 | Año 6</option>
        </select>
    </span>
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="fas fa-venus-mars"></i></span>
        <span class="UPDNom">Sexo</span>
        <span class="UPDVal UPDOut" id="BISex"></span>
        <select class="UPDVal UPDIn" id="BISexIn">
            <option>Femenino</option>
            <option>Masculino</option>
        </select>
    </span>
    <div class="OrgButton">
        <span class="UPButtons">
            <button id="Edit2" title="Editar"><i class="far fa-edit"></i></button>
            <button id="Done2" title="Guardar" disabled><i class="fas fa-check"></i></button>
            <button id="Cancel2" title="Cancelar" disabled><i class="fas fa-ban"></i></button>
            <span class="AuxButton" id="Aux2">Texto ayuda</span>
        </span>
    </div>
</article>

## Datos de contacto

<article id="ContactMethods">
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="far fa-envelope"></i></span>
        <span class="UPDNom">Correo</span>
        <span class="UPDVal UPDOut" id="CMCorreo"></span>
        <input type="email" class="UPDVal UPDIn" id="CMCorreoIn">
    </span>
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="fab fa-facebook-square"></i></span>
        <span class="UPDNom">Facebook (usuario)</span>
        <span class="UPDVal UPDOut" id="CMFacebook"></span>
        <input type="text" class="UPDVal UPDIn" id="CMFacebookIn">
    </span>
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="fab fa-github"></i></span>
        <span class="UPDNom">Github (usuario)</span>
        <span class="UPDVal UPDOut" id="CMGithub"></span>
        <input type="text" class="UPDVal UPDIn" id="CMGithubIn">
    </span>
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="fas fa-link"></i></span>
        <span class="UPDNom">Página web (link)</span>
        <span class="UPDVal UPDOut" id="CMWebsite"></span>
        <input type="url" class="UPDVal UPDIn" id="CMWebsiteIn">
    </span>
    <span class="UPCampo UPDos">
        <span class="UPDIco"><i class="fas fa-mobile"></i></span>
        <span class="UPDNom">Celular con lada</span>
        <span class="UPDVal UPDOut" id="CMCelular"></span>
        <input type="tel" minlength="13" maxlength="13" class="UPDVal UPDIn" id="CMCelularIn">
    </span>
    <div class="OrgButton">
        <span class="UPButtons">
            <button id="Edit7" title="Editar"><i class="far fa-edit"></i></button>
            <button id="Done7" title="Guardar" disabled><i class="fas fa-check"></i></button>
            <button id="Cancel7" title="Cancelar" disabled><i class="fas fa-ban"></i></button>
            <span class="AuxButton" id="Aux7">Texto ayuda</span>
        </span>
    </div>
</article>

## Tipo de usuario

<article id="UserKind">
    <div id="UKCol1">
        <!--- Aquí se generan dinámicamente los resultados -->
    </div>
    <div id="UKCol2">
        <div id="UKDescs">
            <div class="UKDesc" id="UKDAsesor">
                <span><i class="far fa-handshake fa-2x fa-pull-left fa-border fa-fw"></i></span>
                <h5>Asesor</h5>
                <p>Dirige a los competidores en su trayectoria, aporta además de conocimientos técnicos experiencia, consejos, orientación académica entre otros.</p>
            </div>
            <div class="UKDesc" id="UKDCompetidor" style="display: inline-block;">
                <span><i class="fas fa-trophy fa-2x fa-pull-left fa-border fa-fw"></i></span>
                <h5>Competidor</h5>
                <p>Es quien participa en las competencias, quien recibe el entrenamiento y orientación y representa a su estado, zona o escuela en los eventos.</p>
            </div>
            <div class="UKDesc" id="UKDDelegado">
                <span><i class="fab fa-hubspot fa-2x fa-pull-left fa-border fa-fw"></i></span>
                <h5>Delegado</h5>
                <p>Es el coordinador general del evento en cada estado y vínculo directo con el comité nacional, representa la parte directiva y administrativa.</p>
            </div>
            <div class="UKDesc" id="UKDDesarrollador">
                <span><i class="fas fa-code fa-2x fa-pull-left fa-border fa-fw"></i></span>
                <h5>Desarrollador</h5>
                <p>Se desempeña creando material tecnológico de utilidad, ya sea a través de software o hardware, sitios web o material multimedia.</p>
            </div>
            <div class="UKDesc" id="UKDEntrenador">
                <span><i class="fas fa-cogs fa-2x fa-pull-left fa-border fa-fw"></i></span>
                <h5>Entrenador</h5>
                <p>Transmite sus conocimientos técnicos sobre un área a los competidores, es quien explica los temas necesarios para la competencia.</p>
            </div>
            <div class="UKDesc" id="UKDEstudiante">
                <span><i class="fas fa-graduation-cap fa-2x fa-pull-left fa-border fa-fw"></i></span>
                <h5>Estudiante</h5>
                <p>Perteneciente a una escuela o institución educativa y no figura como competidor, sin embargo es entusiasta del aprendizaje.</p>
            </div>
            <div class="UKDesc" id="UKDInvestigador">
                <span><i class="fas fa-space-shuttle fa-2x fa-pull-left fa-border fa-fw"></i></span>
                <h5>Investigador</h5>
                <p>Se dedica a descubrir y describir nuevas cosas, procesos o herramientas, es el científico, vínculo directo entre el universo y conocimiento humano.</p>
            </div>
        </div>
        <div id="UKList">
            <span class="UKLIcon" DescFor="Asesor"><i class="far fa-handshake"></i></span>
            <span class="UKLIcon" DescFor="Competidor"><i class="fas fa-trophy"></i></span>
            <span class="UKLIcon" DescFor="Delegado"><i class="fab fa-hubspot"></i></span>
            <span class="UKLIcon" DescFor="Desarrollador"><i class="fas fa-code"></i></span>
            <span class="UKLIcon" DescFor="Entrenador"><i class="fas fa-cogs"></i></span>
            <span class="UKLIcon" DescFor="Estudiante"><i class="fas fa-graduation-cap"></i></span>
            <span class="UKLIcon" DescFor="Investigador"><i class="fas fa-space-shuttle"></i></span>
        </div>
    </div>
    <div class="OrgButton">
        <span class="UPButtons">
            <button id="Add1" title="Agregar"><i class="fas fa-plus"></i></button>
            <button id="Delete1" title="Eliminar"><i class="fas fa-times"></i></button>
            <button id="Done3" title="Guardar" disabled><i class="fas fa-check"></i></button>
            <button id="Cancel3" title="Cancelar" disabled><i class="fas fa-ban"></i></button>
            <span class="AuxButton" id="Aux3">Texto ayuda</span>
        </span>
    </div>
</article>

## Áreas de interés para aprender

<article id="InteresAprender">
    <div id="OrgInterestA">
        <!-- Aquí se generan dinámicamente los resultdos -->
    </div>
    <div class="OrgButton">
        <span class="UPButtons">
            <button id="Add3"><i class="fas fa-plus"></i></button>
            <button id="Delete3" title="Eliminar"><i class="fas fa-times"></i></button>
            <button id="Done5" disabled><i class="fas fa-check"></i></button>
            <button id="Cancel5" disabled><i class="fas fa-ban"></i></button>
            <span class="AuxButton" id="Aux5">Texto ayuda</span>
        </span>
    </div>
</article>

## Áreas de interés para enseñar

<article id="InteresEnsenar">
    <div id="OrgInterestE">
        <!-- Aquí se generan dinámicamente los resultdos -->
    </div>
    <div class="OrgButton">
        <span class="UPButtons">
            <button id="Add4"><i class="fas fa-plus"></i></button>
            <button id="Delete4" title="Eliminar"><i class="fas fa-times"></i></button>
            <button id="Done6" disabled><i class="fas fa-check"></i></button>
            <button id="Cancel6" disabled><i class="fas fa-ban"></i></button>
            <span class="AuxButton" id="Aux6">Texto ayuda</span>
        </span>
    </div>
</article>

<script src="{{ site.iP-Sources }}/JS/Universal/Perfil.js"></script>