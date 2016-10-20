---
layout: General
title: Conteo de vocales
date: 2016-10-10 15:00:00
author: rivel_co
tags: [Ciclos, Introductorios]
category: [Semestre-1, Parcial-2]
---

Como es bien sabido, resulta difícil hacer pan al mismo tiempo que escribes en el teclado. Sin embargo, esto para el maestro B nunca ha sido un impedimento, y aunque parezca que escribe al azar, siempre termina escribiendo algo entendible. Inclusive, le gusta hacer pruebas al momento de hacer panes y escribir. Dichas pruebas consisten en hacer un conteo de la cantidad de vocales que ingresó, pero como es muy tedioso contar letras, prefiere que un programa las cuente por él. Tu tarea es ayudarle a realizar este programa.

## Problema

Escribe un programa que cuente el número de vocales ingresadas por el teclado, ya sean mayúsculas o minúsculas. El programa debe finalizar cuando se ingrese un punto `.`.

## Entrada

Una cantidad no definida de caracteres.

## Salida

Un entero. La cantidad de vocales ingresadas.

## Ejemplo

<textarea class="output">
// Entrada
Este es un kjsdFSDFsdFDSfdsf mal escrito.

// Salida
8</textarea>

## Límites

Cantidad indefinida de caracteres.

## Solución

### Razonamiento

Antes que nada, hay que tener en cuenta una cosa muy importante: ***estamos evaluando caracteres, no palabras***. Por lo tanto, aunque veamos una palabra en la entrada, nosotros analizamos en realidad cada letra o más bien, cada carácter individualmente. Otra cosa muy importante que hay que recordar: ***un espacio también es un carácter***. 

Ahora sí, lo que estaremos haciendo entonces es pedir caracteres, no importa que estos no estén separados por un *enter* o por un espacio, si solicitamos un carácter en nuestro código, el programa al recibirlo, continuará con la ejecución. Como ya dijimos, estaremos pidiendo caracteres, es decir, ***repetiremos el pedir un carácter***. Como estamos hablando de repetir algo, vamos a usar ***ciclos***.

Una vez que ya tengamos el carácter que pedimos, debemos ***evaluarlo***, es decir, compararlo con algo. Ese algo será nada más y nada menos que las vocales, en sus dos versiones, vocales mayúsculas y vocales minúsculas. ¿Por qué hay que compararlas? pues porque si en efecto, el carácter que entró es una vocal, debemos de hacer algo especial. 

Entonces hasta ahora llevamos que usaremos ciclos, porque vamos a repetir cosas, y que usaremos condicionales, porque vamos a evaluar o comparar cosas. Ya con esto en mente, podemos seguir con el siguiente aspecto importante: ¿qué hacemos cuando ya sepamos que sí recibimos una vocal? Pues como el problema indica, hay que ***contarla***. ¿Y cómo hacemos eso? Pues muy sencillo, necesitamos primero un ***contador***.

Un contador, es un nombre coloquial que se le da a una variable que cambia su valor (generalmente incrementando en uno) cada que algo en particular sucede. Es importante saber que este contador deberá estar inicializado con un valor que nosotros conozcamos (generalmente 0), así tendremos bajo control el número de veces que ese contador se ha incrementado, o más bien, la cuenta que estamos haciendo. Volviendo a nuestro problema, debemos contar cada que el carácter que entró es una vocal.

¿Y cuándo dejamos de pedir caracteres? Pues en cuanto la variable que entró (es decir, el carácter) sea un punto (`.`) debemos de terminar con nuestra ejecución. Esto puede ser vigilado por la condición propia de nuestro ciclo. Una vez que ya hayamos terminado ahí, podemos mostrar el valor de nuestro contador, que representará el número de vocales que entraron.

En resumen, estaremos repitiendo algo mientras la variable que estamos recibiendo o evaluando no sea un punto. Lo que estaremos repitiendo será pedir un carácter y evaluarlo, cuando ese carácter sea una vocal (cosa que sabremos gracias a la evaluación) entonces la contamos usando nuestro contador. Al final, mostraremos el valor de esa variable.

### Pseudocódigo

<textarea class="output">
Inicio del programa
    entero contador=0
    caracter c='a'

    mientras c != '.':
        leer c
        si c=='a' ó c=='e' ó c=='i' ó c=='o' ó c=='u':
            contador++
        fin si
        si c=='A' ó c=='E' ó c=='I' ó c=='O' ó c=='U':
            contador++
        fin si
    fin mientras

    mostrar contador
Fin del programa</textarea>