/*1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.*/
//alert("un mensaje");

/*Dificultad:  🟢
2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
Dificultad:  🟢*/
//document.write("Hello world");

/*3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
Dificultad:  🟢*/
//document.write(3 + 5);
//console.log(3 + 5);

/*4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: 

input: Coder 
Output: Hola Coder

Dificultad:  🟢*/

/*let nombreUsuario = prompt("Ingrese nombre de usuario");
document.write("Hola" + nombreUsuario);*/

/*5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
Dificultad:  🟢
6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande
 
Dificultad:  🟢*/

/*let a = prompt("ingrese un numero");
let b = prompt("ingrese otro numero");
a = parseInt(a, 10);
b = parseInt(b, 10);
if (a > b) {
  document.write("El" + a + "es el mayor");
} else {
  document.write("El" + b + "es el mayor");
}*/

/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande*/

/*let num1 = parseInt(prompt("ingrese el primer numero"));
let num2 = parseInt(prompt("ingrese el segundo numero"));
let num3 = parseInt(prompt("ingrese el tercer numero"));
let mayor = num1;
if (num2 > mayor) {
  mayor = num2;
}
if (num3 > mayor) {
  mayor = num3;
}
document.write("El" + mayor + "es el mas grande");*/

/*Dificultad:  🟢
8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.*/

/*let num1 = parseInt(prompt("ingrese un numero"));
if (num1 % 2 === 0) {
  document.write("El" + num1 + "es divisible por dos");
} else {
  document.write("El" + num1 + "no divisible por dos");
}*/

/*Dificultad:  🟢🟡 
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:



input: Hola mundo
Output: oauo
*/
/*
let frase = prompt("Ingresa una frase:");
let vocales = "";

for (let i = 0; i < frase.length; i++) {
  let letra = frase.charAt(i).toLowerCase();
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    vocales += letra;
    console.log(vocales);
  }
}

document.write(vocales);*/

/*Dificultad:  🟢🟡
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20


Output: El 20 es divisible por 2.*/

/*Dificultad:  🟢🟡
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210




Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.*/

/*const num = parseInt(prompt("Ingrese un número"));
if (num % 2 === 0) {
  document.write("El " + num + " es divisible por 2");
} else if (num % 3 === 0) {
  document.write("El " + num + " es divisible por 3");
} else if (num % 5 === 0) {
  document.write("El " + num + " es divisible por 5");
} else if (num % 7 === 0) {
  document.write("El " + num + " es divisible por 7");
} else document.write("El " + num + " no es divisible por 2,3,5 o 7");*/

// TAREA
/* Ante un valor ingresado, indicar si tiene o no contenido.*/

/*var input;
if (input === undefined) {
  alert("no tiene contenido : " + input);
}*/

// 6)

// Dados dos números, indicar cual es mayor o si son iguales.

/*const1 = prompt("ingrese un numero");
const2 = prompt("ingrese otro numero");
if (const1 > const2) {
  alert("el numero mayor es:" + const1);
} else if (const1 === const2) {
  alert("son iguales");
}*/

// TAREA
// Pedir las tres notas de un alumno y calcular su promedio, si es mayor
// a 6, mostrar que aprobó, si es menor a 6, mostrar que desaprobó
// y si es igual a 6, mostrar que está en condiciones de recuperación.

// TAREA
// 7)
// Crear un algoritmo que pida al usuario el diámetro de una rueda
// y su grosor (en metros) y realice las siguientes operaciones:

// a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje
//“La rueda es para un vehículo grande”. Si es menor o igual a 1.4
// pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para
// un vehículo mediano”. Si no se cumplen ninguna de las condiciones
// anteriores debe mostrarse por pantalla el mensaje “La rueda es
//para un vehículo pequeño”.

// b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4,
// ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un
// grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para
// esta rueda es inferior al recomendado”
// TAREA
// 8)
// Hacer ahora con Switch:
// Pedir las tres notas de un alumno y calcular su promedio, si es mayor
// a 6, mostrar que aprobó, si es menor a 6, mostrar que desaprobó
// y si es igual a 6, mostrar que está en condiciones de recuperación.

// TAREA
// Hacer ahora con Switch:
// Solicitar un numero de mes y mostrar el nombre del mes
// correspondiente.

// TAREA
// Hacer ahora con Switch:
// Solicitar un numero de día y mostrar el nombre del día

// TAREA
// Escribe un programa que responda a un usuario que quiere comprar
// un helado en una conocida marca de comida rápida cuanto le costará
// en función del topping que elija. Si no hay concidencias debe
// informarlo.
// El helado sin topping cuesta $100.
// El topping de oreo cuesta $150.
// El topping de KitKat cuesta $175.
// El topping de brownie cuesta $175.

/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
Dificultad:  🟢🟡

2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:



Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido


Dificultad:  🟢🟡
 
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

Dificultad:  🟢🟡
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

Dificultad:  🟢🟡🔴
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 



Input:  40773821 
Output: ‘L’


Dificultad:  🟢🟡
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….

Dificultad:  🟢🟡
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

Dificultad:  🟢🟡
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
Dificultad:  🟢🟡🔴
9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10

Dificultad:  🟢🟡🔴
10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

Ejercicios con Math


Dificultad:  🟢🟡
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

Dificultad:  🟢🟡
12- Realiza un script que genere un número aleatorio entre 1 y 99


Ejercicios con String


Dificultad:  🟢🟡
13- Realiza un script que pida un texto y lo muestre en mayúsculas.
Dificultad:  🟢🟡
14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
Dificultad:  🟢🟡
15- Realiza un script que cuente el número de vocales que tiene un texto.
Dificultad:  🟢🟡
16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
Dificultad:  🟢
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:



Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1*/
