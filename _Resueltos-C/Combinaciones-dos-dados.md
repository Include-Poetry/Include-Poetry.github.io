---
layout: General
title: Dos dados
date: 2016-10-15 22:22:00
author: rivel_co
tags: [Ciclos, Introductorios]
---

El maestro B (pronunciado en inglés "Bi"), un día que no tenía mucho que hacer, buscando por sorpresas entre sus cosas, encontró una caja con muchos dados, con diferentes números de caras. Al verlos se preguntó cuáles eran todas las posibles combinaciones de puntos que podríamos obtener al lanzar dos dados. Sabía que había una cantidad considerable de combinaciones, sin embargo él quería verlas todas ordenadas, porque, como todos sabemos, al profesor B le encanta el orden, y además, le encanta resolver problemas particulares.

## Problema

Dado dos números, **N** y **M**, donde cada uno representa el número de caras de cada dado, mostrar de manera ordenada todas las posibles combinaciones de resultados que podríamos obtener, al lanzar dichos dados.

## Entrada

Dos enteros **N** y **M**, el número de caras del dado 1 y dado 2 respectivamente

## Salida

Todas las posibles combinaciones de resultados de manera ordenada, separadas por saltos de línea

## Ejemplo

<textarea class="output">
// Entrada
2 3

// Salida
1 1
1 2
1 3
2 1
2 2
2 3</textarea>

## Límites 

Puedes suponer que $$ 2 \le N \le M \le 100000 $$

## Solución

### Razonamiento

Lo primero es entender la manera en la que los posibles resultados pueden darse, en el caso de ejemplo, tenemos un dado con dos caras, y otro con tres, por lo tanto, del primero sólo podemos obtener o un 1 o un 2, mientras que del segundo podemos obtener un 1 o 2 o 3. <int>Hasta ahora bastante intuitivo ¿no?</int>

La cosa se pone interesante al momento de querer mostrar todas las posibles combinaciones, y además de manera ordenada. Para esto tomemos como caso de partida la siguiente situación. Imaginemos que tenemos un día de suerte y al hacer tres lanzamientos el primer dado (con dos caras) cae 1 siempre, mientras que nuestro segundo dado (el de tres caras) cae alternando sus puntos. Las combinaciones se darían como 1 y 1, 1 y 2, 1 y 3. Recordemos que estamos en nuestro día de suerte y en el siguiente lanzamiento nuestro dado de dos caras cae en 2 y el segundo dado vuelve a alternar. Tendríamos entonces 2 y 1, 2 y 2, 2 y 3.

De acuerdo, hasta ahora nada que no nos haya mostrado el ejemplo. Ahora sí, es momento de darnos cuenta del punto importante. ***Estamos iterando con cada posible puntuación del primer dado, y por cada vez que iteramos una vez ahí, iteramos todos los posibles puntos del segundo***. 

Para nuestra solución, entonces, sabemos que siempre al menos vamos a tener un punto en cada dado, por lo que siempre empezamos a ***repetir*** en 1, y terminaremos de hacerlo hasta que hayamos repetido las cosas ***N*** o ***M*** veces según corresponda. 

### Pseudocódigo

<textarea class="output">
Inicio del programa
    entero N, M
    leer N
    leer M
    Desde dado1 = 1, hasta dado1 == N, incrementos de 1:
        Desde dado2 = 1, hasta dado2 == M, incrementos de 1:
            mostrar N " y " M
        fin Desde
    fin Desde
Fin del programa</textarea>