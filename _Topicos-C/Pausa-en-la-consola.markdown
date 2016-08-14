---
layout: General
title: Pausar la ejecución en la consola
author: rivel_co
tags: tip
categories:
  - Consola
---

¿Alguna vez has visto lo que pasa cuando ejecutas el ejecutable que se genera de lagún código tuyo, fuera del IDE? Si no lo has intentado, lo que sucede es que en cuanto no ya no hay alguna solicitud de entrada de datos, es decir, que ya no hayas puesto algún `cin`, la consola se cerrará rápidamente, sin siquiera dejarnos ver las salidas.

Esto es normal de la consola, pues no tiene consideración de que los datos deban ser vistos por nosotros, sólo hace lo que está en el código y cuando termina se cierra. Los IDE actuales mantienen la consola abierta después de la ejecución para que podamos ver los resultados que arroja, pero en versiones anteriores eso no pasaba, por lo que era necesario "congelar" la pantalla por distintos métodos para poder apreciar la información.

## Comando "pause"

El hecho de que la consola se cierre rápidamente, se debe a la configuración misma de ésta, no a nuestro programa. Sin embargo, podemos solicitar en nuestra ejecución, un comando en la consola que haga que se "congele" o se mantenga estática sin cerrarse para así tener tiempo de ver las salidas.

Los comandos de la consola los citaremos usando la palabra de control `system`, seguido de esto, y entre paréntesis y comillas dobles, el texto que serían los comando a recibir por parte de la consola. El comando que usaremos es el comando "pause", por lo que de manera completa, su uso desde un programa que escribamos se vería así `system("pause");`. No olvides el punto y coma al final.

En donde sea que lo pongamos, la ejecución entera se detendrá en ese punto, y continuará hasta que hayamos presionado una tecla, sin que esa acción afecte el funcionamiento de nuestro programa. De hecho, cuando usamos esa llamada a la consola, aparece un mensaje que dice "Presione una tecla para continuar . . .". Si queremos quitar ese mensaje, y que simplemente se pause la ejecución, podemos agregar la opción "null", de la siguiente manera `system("pause>>null");`. Así sólo se pausará y continuará en cuanto presionemos otra tecla.

## Las pausas como método de depuración

Utilizar pausas como la anterior, es especialmente útil cuando estamos revisando la ejecución de algún código nuestro y queremos encontrar un punto en donde falla. Es decir, imagina un programa en el que tratas de resolver determinado problema, y aunque todo pareciera apuntar a que debe funcionar, el resultado no es el esperado, es ahí donde ubicar pausas en puntos estratégicos del código nos ayuda bastante, pues podemos ver en qué momento todo iba bien y cuándo empezó a arrojar resultados incorrectos, para de esta manera poder solucionar mejor las deficiencias de nuestros programas.

Puede que en un principio no lo utilices demasiado, pero *créeme*, hay más probabilidades de que te caiga un rayo mientras lees esto, a que no lo uses nunca, ya sea por facilidad, comodidad, o simplemente, mejor rendimiento al resolver problemas usando programas.