---
layout: General
title: Tickets
author: rivel_co
tags: [Ciclos, Introductorios]
---

Para ir al cine, uno, aunque quisiera, no puede llevar a todos los amigos que tenemos, pues las salas tienen lugares limitados. Como todos sabemos el maestro B no es la excepción y como a todos, le gusta ir al cine con sus amigos. Al comprar sus boletos tiene que hacerlo en una máquina automática. Si aún quedan lugares en la sala puede seguir comprando boletos. 

En algunas ocasiones se hace un día de promoción en los precios de los boletos y por lo tanto se puede vender una cantidad limitada de boletos por cliente. Generalmente si la cantidad solicitada de boletos supera la cantidad máxima permitida, la máquina no vende ningún boleto. El maestro B como todo buen programador, se ha inquietado con el funcionamiento de la máquina, por lo que decide, después de ver la película, escribir un programa que simule este funcionamiento.

## Problema

Dado un número N, que representa la cantidad de lugares, un número N que representa la cantidad máxima de boletos que se pueden comprar por persona, mostrar un mensaje de "Vendido" o "No vendido" según aplique a lo largo del programa.

## Entrada

En la primera línea dos enteros N y M en ese orden separados por un espacio.
En la siguiente línea una cantidad indeterminada de solicitudes de venta (cantidad de boletos a comprar).

## Salida

Por cada solicitud de venta mostrar "Vendido" o "No vendido" según corresponda.

## Ejemplo

<textarea class="output">
// Entrada
15 4
1
3
6
4
3
10
4

// Salida
Vendido
Vendido
No vendido
Vendido
Vendido
No vendido
Vendido </textarea>

## Límites

Puedes considerar que $$ 1 \le N \le M \le 1000000 $$ además se asegura que siempre se venderá la cantidad exacta de lugares 

## Solución 

### Razonamiento

Como siempre, hay que tener primero en cuenta lo que vamos a hacer (<s>qué raro</s>), y lo que haremos primero es leer de la entrada un entero N que represente la cantidad de boletos a vender. Enseguida pediremos un entero M que es la cantidad máxima de boletos que se pueden vender por usuario. Una vez que tengamos esto vamos a estar leyendo enteros que representan la solicitud de venta, es decir la cantidad de boletos que cada cliente quiere comprar. Cuando ya no tengamos más boletos que vender entonces podemos terminar con nuestro programa.

Ahora que ya lo tenemos claro, vamos a estructurar lo que haremos. Primero, como ya dijimos vamos a tener que pedir dos enteros, N y M respectivamente. Esto sólo lo haremos una vez por variable así que sólo las leeremos una vez cada una. Ahora sí, estaremos pidiendo más números que serán la cantidad de boletos que el cliente quiere comprar. <int>¿acaso dijimos "estaremos"?</int> sí, por lo tanto es algo que hay que repetir. Entonces ***repetiremos*** la acción de leer un número que represente la cantidad de boletos que el cliente quiere comprar. Como es algo que vamos a repetir, usaremos ciclos.

Entonces cada que vendemos una determinada cantidad de boletos, vamos a cambiar la cantidad de lugares restantes disponibles. Más exactamente, esa cantidad va a disminuir, porque como es lógico, al vender boletos quedan menos lugares por vender. La cantidad que disminuiremos de nuestros lugares restantes será la misma que vamos vendiendo. Pero recordemos que no podemos vender cuantos boletos queramos, podemos vender sólo una determinada cantidad, si nos piden comprar más entonces no vendemos nada y por lo tanto no restamos nada a nuestros lugares restantes.

Como ya hemos visto muchas veces, para saber si algo es más chico que otra cosa, usamos comparaciones o ***condicionales***. Por lo que sólo venderemos *si* la cantidad deseada es menor o igual al la máxima permitida. Si no es así pues no vendemos nada. 

El final del programa llega cuando ya no tengamos boletos por vender, por lo que en cuanto la cantidad de boletos restantes sea 0 podemos salir de nuestro ciclo y finalizar el programa. 

### Pseudocódigo

<textarea class="output">
Inicio del programa
    entero N, M, t
    leer N
    leer M
    mientras N > 0:
        leer t
        si t < M:
            N -= t
            mostrar "Vendido"
        sino
            mostrar "No vendido"
    fin mientras
Fin del programa </textarea>