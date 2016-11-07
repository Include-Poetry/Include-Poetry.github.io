---
layout: General
title: Pirámide de asteriscos
date: 2016-10-15 23:00:00
author: rivel_co
tags: [Ciclos, Introductorios]
---

Fascinado por la geometría de las pirámides, el maestro B, después de su visita a Teotihuacán, decidió imitar la belleza de la pirámide del Sol, y qué mejor manera de hacerlo que haciendo un programa que la dibujara. Dado un número de pisos, ayuda al maestro B, a dibujar la mitad derecha de la pirámide del Sol.

## Problema

Dado un entero **N**, dibujar con asteriscos (`*`) la mitad derecha de una pirámide. Como sabes, las pirámides tienen la parte más pequeña en la punta y la más extensa en la base.

## Entrada

Un entero **N**, la cantidad de pisos que tendrá la pirámide.

## Salida

La mitad derecha de la pirámide, dibujada con asteriscos.

## Ejemplo

<textarea class="output">
// Entrada
5

// Salida
*
**
***
****
*****</textarea>

## Límites

Puedes suponer que $$ 1 \le N \le 1000 $$

## Solución

### Razonamiento

Razonemos primero la geometría de la salida. Comenzamos poniendo un asterisco, que representaría el largo del piso superior, luego hacemos un salto de línea y ponemos dos asteriscos, que representarían el largo del siguiente piso hacia abajo, y seguimos así hasta haber terminado con todos los pisos.

Pero espera, <int>¿Notas alguna relación del número de piso con el número de asteriscos en ese piso?</int> Veámoslo de la siguiente manera. El piso más pequeño es el piso número 1 y el último piso, el más grande, el piso número N. Ahora, el primer piso o piso uno, tiene un asterisco. El piso dos tiene dos asteriscos. El piso tres tiene tres asteriscos. El piso N tiene N asteriscos.

Ahora que lo vemos de esta manera, podemos ver otra parte de la solución. Si lo pensamos un poco, estaremos repitiendo varias cosas. La primera es mostrar un piso con sus asteriscos respectivos, y la segunda, mostrar la cantidad adecuada de asteriscos en cada piso. Por lo tanto, y por decir que estaremos repitiendo cosas, sabemos que usaremos ciclos.

Ya que sabemos que vamos a repetir cosas, tenemos que saber cuántas veces vamos a repetirlas. La primer cosa a repetir es mostrar un piso, por lo que, según los datos del problema, repetiremos esto N veces (porque son N pisos). La parte interesante es la cantidad de veces que repetiremos el mostrar un asterisco en cada piso. Pero, si ya dijimos que en piso 1 mostramos 1 asterisco, en el piso 2 mostramos 2 y así sucesivamente, podemos deducir que ***repetiremos mostrar un asterisco la misma cantidad de veces que el numero de piso en el que estamos***.

Sólo nos falta definir un par de cosas más. Lo primero es el momento en el que damos un salto de línea para indicar que terminamos de mostrar ese piso. Esto es sencillo, pues en cuanto hayamos terminado de repetir mostrar un asterisco la cantidad de veces ya dicha, podremos dar un salto de línea.

El siguiente punto es con cuanto empezamos nuestros ciclos, y con cuanto modificamos la variable que lo controla. Como sabemos que habrá al menos un piso y en cada piso habrá al menos un asterisco, podemos decir, que tendremos que empezar ambos ciclos (el que controla los pisos y el que controla los asteriscos por piso) en 1 y también que iremos avanzando de piso en piso y contando de asterisco en asterisco, con incrementos de 1. 

### Pseudocódigo

<textarea class="output">
Inicio del programa
    entero N
    leer N
    Desde piso=1, hasta piso == N, incrementos de 1:
        Desde asterisco=1, hasta asterisco == piso, incrementos de 1
            mostrar "*"
        fin Desde
        mostrar SaltoDeLinea
    fin Desde
Fin del programa</textarea>