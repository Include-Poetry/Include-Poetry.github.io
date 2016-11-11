---
layout: General
title: Promedios con números pares e impares
date: 2016-10-20 17:30:00
author: rivel_co
tags: [Ciclos, Introductorios]
---

Es un clásico que en un día de aburrimiento, no nos quede de otra mas que sacar promedios de números, y como somos además muy <s>poco</s> creativos, decidimos obtener promedios de números pares e impares.

## Problema

De una cantidad $$ N $$ de números, mostrar individualmente el promedio de los números pares y luego el de los impares.

## Entrada

En la primera línea, el entero $$ N $$. En la segunda línea, $$ N $$ enteros $$ X_i $$ separados por un espacio.

## Salida

En la primer línea de la salida, el promedio de los números pares. En la segunda línea de la salida, el promedio de los números impares.

## Ejemplo

<textarea class="output">
// Entrada
10
2 7 98 10 3 65 37 12 80 10

// Salida
35.3333
28</textarea>

## Límites

Puedes suponer que todo valor generado en el flujo normal del problema, cabe en un entero signado de 32 bits.

## Solución

## Razonamiento

Para empezar, hay que asegurarnos, como siempre, de entender el problema. Primero, recibimos de la entrada un número, ese número (llamado $$ N $$) representa la cantidad de números que vamos a *evaluar*, a cada uno de esos números les estamos llamando $$ X_i $$, (donde la `i` representa que hay varios enteros `X`). Al finalizar de recibir los $$ N $$ números, vamos a mostrar el promedio de los números que son pares, y luego, en la segunda línea, el promedio de los que son impares. En los límites, el hecho de que nos digan que 

Sólo para recordarlo, definamos un número par como aquel cuyo módulo entre dos (o el residuo de dividir entre dos) es igual a 0, es decir un número $$ X $$ es par si $$ X\mod 2 = 0 $$. Y por lo tanto, un número impar es aquel en donde no se cumple esta condición.

Con eso en mente, podemos comenzar a resolver el problema, podemos entrar de lleno al algoritmo. En primera instancia, vamos a estar pidiendo números, exactamente $$ N $$ números. Como es algo que vamos a estar repitiendo, usaremos un ciclo, y como sabemos qué cantidad de veces lo repetiremos, usaremos un ciclo `for`. A partir de ahora usaremos la variable `N` como una variable tipo entero que almacena la cantidad de números a recibir.

Entonces nuestro ciclo se repetirá `N` veces, porque serán `N` números los que vamos a recibir y evaluar. Entonces primero pediremos el número $$ X_i $$ (a partir de ahora nos referiremos a él como una variable tipo entero llamada `x`), y lo evaluaremos. Con evaluarlo recuerda que nos referimos a ***compararlo***. Si ese número `x`, tiene un módulo en la división por 2 igual a 0, entonces sabemos que es par, sino pues es impar. Recuerda que con C++ no podemos obtener el módulo de una variable que no sea de tipo entero.

Ahora hay que razonar: ¿cómo hacemos un promedio? ¿qué necesitamos? Lo primero es la sumatoria de los datos, y luego la cantidad de datos que la componen. Entonces, necesitamos saber en nuestro programa esas mismas dos cosas, cuántos números de cada tipo van (pares o impares) y cuál es la sumatoria de cada tipo.

Para realizarlo, utilizaremos un ***contador*** y un ***acumulador***, donde un contador, es una variable que cuenta (<s>qué raro</s>), es decir, empieza con un valor conocido y va aumentando 1 en 1 cada que pasa algo, en este caso cada que encontramos una variable de cierto tipo. Un acumulador es una variable que acumula (<s>qué rato también</s>), es decir, empieza con un valor conocido y aumenta su valor en la medida de la cantidad acumulada; va sumando a su valor, el valor de la variable que está acumulando.

Ahora sí, usaremos la variable `acumP` (acumulador de pares) y `contP` (contador de pares), para ir obteniendo los datos necesarios para nuestra sumatoria. Lo mismo para los impares `acumI`, `contI`. Cada que encontramos un número par, aumentamos en uno nuestro contador de pares, y sumamos a nuestra variable acumuladora, el valor del número en sí. Lo mismo para los impares.

Al final, calculamos nuestros promedios, que son nada más y nada menos, que el valor del acumulador, dividido entre el valor de nuestro contador. Recuerda que es el acumulador de los pares entre el contador de los pares, lo que nos dará el promedio de los pares. Y sí, lo mismo para los impares. 

***Para reflexionar***: ¿De qué tipo deberán ser las variables usadas? ¿con qué valores será conveniente inicializar nuestros contadores y acumuladores?

## Pseudocódigo

<textarea class="output">
Inicio del programa
    entero N, x
    flotante contP = 0, acumP = 0
    flotante contI = 0, acumI = 0
    leer N
    Desde i = 1, hasta i == N, incrementos de 1:
        leer x
        si x%2 == 0 entonces:
            contP ++
            acumP += x
        sino:
            contI ++
            acumI += x
        fin si
    fin Desde
    flotante promP = acumP / contP 
    flotante promI = acumI / contI
    mostrar promP
    mostrar salto_de_linea
    mostrar promI
Fin del programa</textarea>