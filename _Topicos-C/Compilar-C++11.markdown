---
layout: General
title: Compilar C++11
author: rivel_co
tags: [C++11, tip]
categories:
  - Compilador
---

Así como *C++* puede ser visto como una evolución de *C*, *C++11* puede ser visto como el sucesor de C++. Es la segunda versión más reciente de este lenguaje de programación, lleva ya algunos años desde que se aprobó por la [ISO](http://www.iso.org/ "Sitio oficial"). La extensión del nombre se debe, como tradicionalmente, por el año de publicación, siendo que se publico oficialmente en el año 2011.

El lenguaje sucede al C++03, y precede al C++14, y trae consigo algunas mejoras importantes que las versiones anteriores necesitaban. Es de gran utilidad al momento de implementar funciones más avanzadas de la STL por ejemplo.

## Compilación

Un programa escrito con funciones de C++11, no podrá ser compilado por un compilador configurado sólo para C++, pues aunque las extensiones de archivo pueden ser iguales `.h .hh .hpp .hxx .h++ .cc .cpp .cxx .c++`, la manera en que estos deben ser procesados son diferentes.
 
Por esto es necesario configurar o conseguir compiladores para que soporten las funciones de C++11. Es un procedimiento sencillo y que necesita de pocos pasos para realizarse en la mayoría de los IDE y compiladores actuales.

## Cosa de un comando

La mayoría de los compiladores actuales, soportan compilar programas con funciones de C++11, sin embargo no vienen configurados por defecto. Sin embargo un comando es suficiente (en la mayoría de los casos) para "actualizarnos".

La magia ocurre al usar las banderas o opciones del compilador `-std=c++11` o `-std=c++11` (si el primero no funciona) en conjunto con nuestro compilador (preferente `g++`) para poder empezar a compilar C++11. 

Las dos banderas anteriores no son nada más que líneas de comando comunes, que son tomados por el compilador como parámetros para funcionar. Y existen muchos métodos de pasar esos comandos a los compiladores, pero tomemos las más sencillas

## En Dev-C++

1. Abrimos nuestro IDE
2. Nos vamos a la pestaña de herramientas
3. Opciones del compilador
4. Marcamos la casilla de "Añadir los siguientes comandos cuando se llama al compilador"
5. En el recuadro inmediato pegar el comando `-std=c++11`
6. Aceptar, y listo

También podemos usar las opciones que el mismo IDE nos da

1. Abrimos nuestro IDE
2. Nos dirigimos a la pestaña de herramientas
3. Opciones del compilador
4. Pestaña de "Generación/Optimización de Código"
5. Pestaña de "Generación de código"
6. En la lista desplegable de "Languaje standard (-std)" seleccionamos `GNU C++11` o `ISO C++11`
7. Aceptar y listo

## En Code::Blocks

1. Abrimos el IDE
2. Nos vamos a la pestaña de "Settings"
3. A continuación en "Compiler..."
4. Marcamos la casilla de "Have g++ follow the C++11 ISO C++ language standard [-std=c++11]"
5. OK y listo

También podemos marcar la opción de "Have g++ follow the coming C++0x ISO C++ language standard [-std=c++0x]", donde además podemos notar, que se citan las banderas antes mencionadas. Estas opciones no hacen otra cosa que agregar ese comando al momento de llamar al compilador.

## Uso de C++11

Aunque al usarlo, muchas veces facilitamos algunas declaraciones, y usos de diversas funciones, *su uso no es forzoso*, es decir, podemos prescindir de usar esta versión del compilador para los problemas del tipo de la *OMI*, sin embargo, resulta útil conocer las herramientas, sin hacer un uso indiscriminado de ellas, claro. 

Es preferible que se dominen primero las herramientas disponibles con C++98 (el que usamos tradicionalmente) que caer en la pereza de usar siempre C++11, sin embargo, el uso correcto e inteligente de ambas herramientas, pueden ayudarnos muchísimo.