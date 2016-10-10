---
layout: PostPoetry
title: Funciones
date: 2016-10-01 18:20:00
author: rivel_co
tags: Funciones
category: [Semestre-1, Parcial-1]
---

Una función surge siempre que una cantidad depende de otra. Cuando queremos hacer notar una *relación* entre dos cosas, típicamente valores numéricos. Por ejemplo, cuando utilizamos los datos móviles en nuestro celular, la operadora nos cobra según la cantidad de datos utilizados. Es decir, el costo final, está ***en función*** de la cantidad de datos que utilizamos.

De manera formal podemos decir que:

> Una ***función*** \\(f\\) es una regla que asigna a cada elemento \\(x\\) de un conjunto \\(D\\) exactamente un elemento llamado \\(f(x)\\) de un conjunto \\(E\\).

<s>¿Cómo que un conjunto?</s> Imagina dos contenedores o cajas, a una caja le llamamos \\(D\\) y a la otra le llamamos \\(E\\). En ambas cajas tenemos elementos. Si tomamos un elemento de la caja \\(D\\), ese elemento que tomamos, mantiene una relación o *está asignado* a otro elemento único de la caja \\(E\\). Es decir, ***a cada elemento de*** \\(D\\) ***le corresponde un único elemento de*** \\(E\\).

Para describir una función, utilizamos diferentes términos. Es muy importante y útil comprender y recordar las cosas a las que cada término hacen referencia.

Dominio
 : Todos los valores de \\(D\\) a los que les corresponde un valor válido de \\(E\\).
 : De manera trivial: los posibles valores de \\(x\\) que dan en la función un valor válido.

Rango
 : Todos los valores posibles de \\(E\\) (o que están asignados a algún elemento de \\(D\\)).
 : De manera trivial: los posibles valores de \\(y\\) o de \\(f(x)\\).

Variable independiente
 : Un símbolo que representa un número arbitrario en el ***dominio***, es decir, un elemento del conjunto \\(D\\).
 : De manera trivial: \\(x\\).

Variable dependiente
 : Un símbolo que representa un número en el ***rango***, es decir, un elemento del conjunto \\(E\\).
 : De manera trivial: \\(y\\).

Es útil pensar en una función como un procedimiento que le aplicamos a una cosa para transformarla en otra. El producto final de la transformación, dependerá de la cosa por la que empezamos, o la que estamos "*transformando*".

### Ejemplo rápido: Valor de una función

Sea \\(f(x) = 2x + 10\\) determinar \\(f(8)\\) y \\(f(2)\\).

**Solución**: <br>
Como ya se decía, tomamos a \\(x\\) como nuestro elemento a transformar. La transformación que se le va a hacer es:

- Ser multiplicado por \\(2\\)
- Sumar \\(10\\)

Por lo tanto, si hacemos una ***sustitución de valores***, tendríamos que \\(f(8) = 2(8) + 10 = 26\\) y \\(f(2) = 2(2) + 10 = 14\\).

### Ejemplo rápido: Dominio y rango de una función

Sea \\(f(t) = 10t - 2\\) determinar el dominio y rango de la función.

**Solución**: <br>
Recordemos que un número entra en el dominio de la solución cuando al sustituirlo por nuestra variable independiente en la función, esta adquiere un valor real, es decir, que podemos representar en una gráfica o como un número. Si lo pensamos un momento, en el caso de la función \\(f(t)\\) no hay un valor de \\(t\\) que ocasione que la función tome un valor *no válido*, por lo tanto el ***dominio*** son todos los ***números reales*** \\(\Bbb R\\).

Ahora, para cada valor de \\(t\\), \\(f(t)\\) va a tomar en algún momento, todos los valores reales también, por lo tanto ese es su rango.

### Valor de una función

Sea \\(f(x) = x^2 + 3x + 2\\) determinar \\(f(a + b)\\).

**Solución**: <br>
No porque queramos determinar una función con valores de dos variables, nos vamos a asustar. Al fin y al cabo son variables y serán tratadas como si \\(x\\) fuera. Por lo tanto $$f(a + b) = (a + b)^2 + 3(a + b) + 2$$

Como podemos ver, no es la gran cosa, y si la desarrollamos nos quedaría:

$$f(x) = x^2 + 3x + 2$$

$$f(a + b) = (a + b)^2 + 3(a + b) + 2$$

$$f(a + b) = a^2 + b^2 + 2ab + 3a + 3b + 2$$

Sencillo ¿no lo crees?

## Gráfica de una función

Al graficar una función, podemos corroborar datos como el rango y el dominio de la función de manera súper sencilla. Por ejemplo, la función $$ f(x) = 2x + 10 $$ nos generaría una gráfica así:

<div id="JSGrafica1" class="jxgbox JSGmax"></div>

(*Puedes desplazarte por la gráfica presionando `shift` y arrastrando con el mouse, o usando los controles de la parte inferior. En dispositivos móviles táctiles puedes desplazarte usando dos dedos (juntos entre ellos) y arrastrando el plano, o de igual manera usando los controles.*)

Como podemos notar, la función estará definida en todos los números reales, y nos regresará un valor para todos los números reales también en el rango.

En cambio, la función $$ f(t) = \frac{1}{x} $$ nos dará la gráfica:

<div id="JSGrafica2" class="jxgbox JSGmax"></div>

Como puedes notar, la función no está definida cuando $$x$$ toma un valor de $$0$$, tampoco encontraremos un valor de $$x$$ que le de un valor a la función de $$0$$. Por lo que podemos decir que su dominio son todos los números reales menos $$0$$ y también que su rango son todos los números reales excepto $$0$$.

## Funciones definidas por secciones

Las funciones que son definidas por diferentes formulas en distintos tramos de sus dominios son llamadas ***funciones definidas por secciones***. Por ejemplo, considera una función como la que sigue:

$$
f(x) =
\begin{cases}
x/2,  & \text{si }x \le 0 \\
3x+1, & \text{si }x \gt 0
\end{cases}
$$

Al graficarla se vería así:

<div id="JSGrafica3" class="jxgbox JSGmax"></div>

De esta forma, podemos darnos cuenta de que al momento de querer definir la función con un valor determinado, tendremos que proceder a una ecuación específica según sea el caso, por ejemplo $$ f(3) =  3(3) + 1 = 10$$ debido a que $$3 > 0$$ se tiene que graficar usando la parte de $$ 3x + 1 $$

Otro ejemplo:

$$
f(t) =
\begin{cases}
t, & \text{si } x \ge 0 \\
-t, & \text{si } x \lt 0
\end{cases}
$$

Obtendríamos una gráfica como sigue:

<div id="JSGrafica4" class="jxgbox JSGmax"></div> 

## Simetría

Primero hay que aclarar dos características importantes de las funciones:

> Su una función $$f$$ satisface $$f(-x) = f(x)$$ para todo $$x$$ en su dominio, entonces $$f$$ es una **función par**.

<div id="JSGrafica5" class="jxgbox JSGmax"></div>

En base a lo anterior podemos decir que la función $$ f(x) = x^2 $$ es par porque:

$$ f(-x) = (-x)^2 = x^2 = f(x) $$

Su simetría en una gráfica es con el eje $$y$$, es decir, si graficamos la función para $$x \ge 0$$, obtenemos el resto de la gráfica al reflejarla en el eje $$y$$.

> Si una función $$f$$ satisface $$ f(-x) = -f(x) $$ para cada $$x$$ en su dominio, entonces $$f$$ es una **función impar**.

<div id="JSGrafica6" class="jxgbox JSGmax"></div>

Por lo anterior podemos decir que $$ f(x) = x^3 $$ es una función impar porque:

$$ f(-x) = (-x)^3 = -x^3 = -f(x) $$

Si simetría en una gráfica la tendríamos con el origen, es decir, si graficamos la función para $$x \ge 0 $$ obtenemos el resto de la gráfica rotando $$180°$$ esa porción en relación al origen.

<script type="text/javascript">
(function(){
    var board = JXG.JSXGraph.initBoard('JSGrafica1', {boundingbox:[-8,7,2,-3], showCopyright:false, axis:true});
    board.create('functiongraph', [function(x){ return 2*x+10 }] );
})();
(function(){
    var board = JXG.JSXGraph.initBoard('JSGrafica2', {boundingbox:[-5,5,5,-5], showCopyright:false, axis:true});
    board.create('functiongraph', [function(x){ return 1/x }] );
})();
(function(){
    var board = JXG.JSXGraph.initBoard('JSGrafica3', {boundingbox:[-5,5,5,-5], showCopyright:false, axis:true});
    board.create('functiongraph', [function(x){ if (x <= 0 ){return x/2} else {return 3*x+1}}] );
})();
(function(){
    var board = JXG.JSXGraph.initBoard('JSGrafica4', {boundingbox:[-5,5,5,-5], showCopyright:false, axis:true});
    board.create('functiongraph', [function(x){ if (x >= 0){return x} else {return -x} }] );
})();
(function(){
    var board = JXG.JSXGraph.initBoard('JSGrafica5', {boundingbox:[-5,5,5,-5], showCopyright:false, axis:true});
    board.create('functiongraph', [function(x){ return x*x }] );
})();
(function(){
    var board = JXG.JSXGraph.initBoard('JSGrafica6', {boundingbox:[-5,5,5,-5], showCopyright:false, axis:true});
    board.create('functiongraph', [function(x){ return x*x*x }] );
})();
</script>