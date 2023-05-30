/*1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.*/
// alert("un mensaje");

/*Dificultad:  🟢
2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
Dificultad:  🟢*/
//document.write("Hello world");

/*3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
Dificultad:  🟢*/
// document.write("el resultado es : ", 3 + 5);
//console.log(3 + 5);

/*4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: 

input: Coder 
Output: Hola Coder

Dificultad:  🟢*/

// let nombreUsuario = prompt("Ingrese nombre de usuario");
// document.write("Hola " + nombreUsuario);

/*5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt*/

// Dificultad:  🟢
// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Ejemplo:

// input: 15 , 3

// Output: El 15 es el número más grande

// Dificultad:  🟢

// let a = prompt("ingrese un numero");
// let b = prompt("ingrese otro numero");
// a = parseInt(a, 10);
// b = parseInt(b, 10);
// if (a > b) {
//   document.write("El " + a + " es el mayor");
// } else {
//   document.write("El " + b + " es el mayor");
// }

/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande*/

// let num1 = parseInt(prompt("ingrese el primer numero"));
// let num2 = parseInt(prompt("ingrese el segundo numero"));
// let num3 = parseInt(prompt("ingrese el tercer numero"));
// let mayor = num1;
// if (num2 > mayor) {
//   mayor = num2;
// }
// if (num3 > mayor) {
//   mayor = num3;
// }
// document.write("El " + mayor + " es el mas grande");

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
// if = si else = sino

/*Dificultad:  🟢🟡 
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

length = longitud de la cadena de texto (20 letras)
substring = extrae un parte de la cadena de texto

input: Hola mundo
Output: oauo
*/

// let frase = prompt("Ingresa una frase: ");
// let vocales = "";
// variable auxiliar vacia para los for
// for desde (let i = 0; "mientras" i < frase.length; i++) {
//   let letra = frase.charAt(i).toLowerCase();
//   if (
//     letra === "a" || "significa o"
//     letra === "e" ||
//     letra === "i" ||
//     letra === "o" ||
//     letra === "u"
//   ) {
//     vocales += letra; concatenar
//     console.log(vocales);
//   }
// }

// document.write(vocales);

/*Dificultad:  🟢🟡
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20


Output: El 20 es divisible por 2.*/

// let num1 = parseInt(prompt(" ingrese un numero"));
// if (num1 % 2 === 0) {
//   document.write(num1 + " es divisible por 2");
// } else if (num1 % 3 === 0) {
//   document.write(num1 + " es divisible por 3");
// } else if (num1 % 5 === 0) {
//   document.write(num1 + " es divisible por 5");
// } else if (num1 % 7 === 0) {
//   document.write(num1 + " es divisible por 7");
// } else {
//   document.write(num1 + " no es divisible por 2 , 3 , 5 , 7");
// }

/*Dificultad:  🟢🟡
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210


let = varia el valor
const = no varia nunca

Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.*/

// const num = parseInt(prompt("Ingrese un número"));
// let divisible = "";
// if (num % 2 === 0) {
//   divisible += "2 , ";
// }
// if (num % 3 === 0) {
//   divisible += "3 , ";
// }
// if (num % 5 === 0) {
//   divisible += "5 , ";
// }
// if (num % 7 === 0) {
//   divisible += "7 , ";
// }
// if (divisible === "") {
//   document.write(num + "no es divisible ni por 2 , 3 , 5 , 7");
// } else {
//   document.write(num + " es divisible por " + divisible.slice(0, -2));
// }

// TAREA
/* Ante un valor ingresado, indicar si tiene o no contenido.*/

// let valor = prompt("ingrese un valor");
// if (valor === null || valor === "") {
//   document.write("no tiene contenido");
// }else {document.write("tiene contenido");
// }

// 6)

// Dados dos números, indicar cual es mayor o si son iguales.

// const1 = prompt("ingrese un numero");
// const2 = prompt("ingrese otro numero");
// if (const1 > const2) {
//   alert("el numero mayor es:" + const1);
// } else if (const1 === const2) {
//   alert("son iguales");
// }

// TAREA
// Pedir las t=r su promedio, si es mayor
// a 6, mostrar que aprobó, si es menor a 6, mostrar que desaprobó
// y si es igual a 6, mostrar que está en condiciones de recuperación.
// let nota1 = parseFloat(prompt("ingrese nota 1"));
// let nota2 = parseFloat(prompt("ingrese nota 2"));
// let nota3 = parseFloat(prompt("ingrese nota 3"));
// let promedio = (nota1 + nota2 + nota3) / 3;
// if (promedio > 6) {
//   document.write("el alumno aprobo con " + promedio.toFixed(2));
// } else if (promedio < 6) {
//   document.write("el alumno desaprobo con " + promedio.toFixed(2));
// } else {
//   promedio = 6;
//   document.write(
//     "el alumno esta en condiciones de recuperar " + promedio.toFixed(2)
//   );
// }

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

// let diametro = parseFloat(prompt("ingrese diametro"));
// if (diametro > 1.4) {
//   document.write("la rueda es para vehiculo grande");
// } else if (diametro <= 1.4 && diametro > 0.8) {
//   document.write("la rueda es para un vehiculo mediano");
// } else {
//   diametro < 0.8;
//   document.write("la rueda es para un vehiculo pequeño");
// }
// b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4,
// ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un
// grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para
// esta rueda es inferior al recomendado”
// let diametro = parseFloat(prompt("ingrese el diametro"));
// let grosor = parseFloat(prompt("Ingrese el grosor"));
// if (diametro > 1.4 && grosor < 0.4) {
//   document.write("el grosor es inferior al recomendado");
// } else if (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25) {
//   document.write("el grosor es inferior al recomendado");
// } else if (diametro > 1.4) {
//   document.write("la rueda es para vehiculos grandes");
// } else if (diametro > 0.8) {
//   document.write("la rueda es para un vehiculo mediano");
// } else {
//   document.write("la rueda es para un vehiculo pequeño");
// }

// TAREA

// 8)
// Hacer ahora con Switch:
// Pedir las tres notas de un alumno y calcular su promedio, si es mayor
// a 6, mostrar que aprobó, si es menor a 6, mostrar que desaprobó
// y si es igual a 6, mostrar que está en condiciones de recuperación.
// alt+ctrl+f para identar
// let nota1 = parseFloat(prompt("ingresar nota 1"));
// let nota2 = parseFloat(prompt("ingresar nota 2"));
// let nota3 = parseFloat(prompt("ingresar nota 3"));
// let promedio = (nota1 + nota2 + nota3) / 3;
// switch (true) {
//   case promedio > 6:
//     document.write("el alumno esta aprobado con " + promedio.toFixed(2));
//     break;
//   case promedio < 6:
//     document.write("el alumno desaprobo con " + promedio.toFixed(2));
//     break;
//   case promedio == 6:
//     document.write(
//       "el alumo esta en condiciones de recuperacion con un " +
//         promedio.toFixed(2)
//     );
//   default:
//     document.write(" gracias por usar este programa ");
//     break;
// }

// TAREA
// Hacer ahora con Switch:
// Solicitar un numero de mes y mostrar el nombre del mes
// correspondiente.

// let mes = parseInt(prompt("ingrese numero de mes"));
// switch (mes) {
//   case 1:
//     document.write("enero");
//     break;
//   case 2:
//     document.write("febrero");
//     break;
//   case 3:
//     document.write("marzo");
//     break;
//   case 4:
//     document.write("abril");
//     break;
//   case 5:
//     document.write("mayo");
//     break;
//   case 6:
//     document.write("junio");
//     break;
//   case 7:
//     document.write("julio");
//     break;
//   case 8:
//     document.write("agosto");
//     break;
//   case 9:
//     document.write("septiembre");
//     break;
//   case 10:
//     document.write("octubre");
//     break;
//   case 11:
//     document.write("noviembre");
//     break;
//   case 12:
//     document.write("diciembre");
//     break;
//   default:
//     document.write("ingrese un numero de mes valido");
// }

// TAREA
// Hacer ahora con Switch:
// Solicitar un numero de día y mostrar el nombre del día
// let dia = parseInt(prompt("ingrese un numero de dia"));
// switch (dia) {
//   case 1:
//     document.write("lunes");
//     break;
//   case 2:
//     document.write("Martes");
//     break;
//   case 3:
//     document.write("Miercoles");
//     break;
//   case 4:
//     document.write("Jueves");
//     break;
//   case 5:
//     document.write("Viernes");
//     break;
//   case 6:
//     document.write("sabado");
//     break;
//   case 7:
//     document.write("Domingo");
//     break;
//   default:
//     document.write("ingrese numero de 1 a 7");
// }

// TAREA
// Escribe un programa que responda a un usuario que quiere comprar
// un helado en una conocida marca de comida rápida cuanto le costará
// en función del topping que elija. Si no hay concidencias debe
// informarlo.
// El helado sin topping cuesta $100.
// El topping de oreo cuesta $150.
// El topping de KitKat cuesta $175.
// El topping de brownie cuesta $175.

// let topping = prompt("que topping desea? (oreo, kitkat o brownie)");
// switch (topping) {
//   case "oreo":
//     document.write("El helado con topping de oreo cuesta $150");
//     break;
//   case "kitkat":
//     document.write("El helado con topping de kitkat cuesta $175");
//     break;
//   case "brownie":
//     document.write("El helado con topping de brownie cuesta $175");
//     break;
//   default:
//     document.write("lo siento no tenemos ese topping");
// }

/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
Dificultad:  🟢🟡*/

// let edad = parseInt(prompt("ingrese su edad"));
// switch (true) {
//   case isNaN(edad):
//     document.write("al edad ingresada no es un numero");
//     break;
//   case edad >= 18:
//     document.write("esta listo para conducir");
//     break;
//   default:
//     document.write("no esta apto para conducir");
//     break;
// }

/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

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
Output: Introduce un número válido*/
// let notas = parseInt(prompt("ingrese una nota del 0 - 10 "));
// switch (notas) {
//   case 0:
//   case 1:
//   case 2:
//     alert("Muy deficiente");
//     break;
//   case 3:
//   case 4:
//     alert("insuficiente");
//     break;
//   case 5:
//   case 6:
//     alert("suficiente");
//     break;
//   case 7:
//     alert("bien");
//     break;
//   case 8:
//   case 9:
//     alert("snotable");
//     break;
//   case 10:
//     alert("sobresaliente");
//     break;
//   default:
//     alert("no es una nota valida");
// }

/*Dificultad:  🟢🟡
 
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/

// El signo de exclamación ! en JavaScript se utiliza para negar una expresión booleana

// let texto = [];
// while (true) {
//   let cadena = prompt("introduce una frase");
//   if (texto === null) {
//     break;
//   }
//   texto.push(cadena);
//   let contiunuar = confirm("¿quiere seguir ingresando tewxto?");
//   if (!contiunuar) {
//     break;
//   }
// }
// let resultado = texto.join("-");
// alert(resultado);

/*Dificultad:  🟢🟡
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/
// let suma = 0;
// let number;
// while (true) {
//   number = prompt("introduzca numeros");
//   if (number === null) {
//     break;
//   }
//   number = parseFloat(number);
//   if (isNaN(number)) {
//     alert("no es un numeroe valido");
//   } else {
//     suma += number;
//   }
// }
// alert(`la suma de los numeros es:  ${suma}`);

/*Dificultad:  🟢🟡🔴
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
*/
//  (!) se utiliza como operador de negación lógica.
// El valor null es un literal de Javascript que representa intencionalmente un valor nulo o "vacío"
// La función isNaN() en JavaScript se utiliza para determinar si un valor es un número o no.
// let dni;
// // dni no es igual nulo
// while (dni !== null) {
//   dni = prompt("ingrese un numero de dni");
//   if (dni !== null) {
//     if (isNaN(dni)) {
//       alert("ingrese un numero valido");
//     } else if (dni < 0 || dni > 99999999) {
//       alert("el número debe ser entre 0 y 99999999");
//     } else {
//       const letrasdni = "TRWAGMYFPDXBNJZSQVHLCKE";
//       const resto = dni % 23;
//       // La función charAt() en JavaScript se utiliza para obtener el carácter de una cadena
//       // (string) en una posición específica.
//       const resultado = letrasdni.charAt(resto);
//       // Los backticks (`) y el signo de dólar seguido de llaves (${expression}) en JavaScript se utilizan para
//       // definir y manipular literales de plantilla (template literals) o plantillas de cadena (template strings).
//       alert(`la letra del DNI ${dni} es:  ${resultado}`);
//     }
//   }
// }

/*Dificultad:  🟢🟡
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….*/

// for (let i = 1; i <= 30; i++) {
//   let resultado = "";
//   for (let p = 1; p <= i; p++) {
//     resultado += p + "";
//   }

//   console.log(resultado);
// }

/*Dificultad:  🟢🟡
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/
// parseInt() es una función que se utiliza para analizar una cadena y convertirla en un número entero.
//  Devuelve el número entero de la cadena si se puede analizar, y devuelve NaN si la cadena no se puede analizar como número entero.
// Por ejemplo, si llamamos a parseInt("123"), la función devolverá el número entero 123.
// Pero si llamamos a parseInt("abc"), la función devolverá NaN, ya que no se puede analizar la cadena "abc" como un número entero.

// let number = prompt("ingrese un numero entre 1 y 50");
// // isNaN() es una función que se utiliza para comprobar si un valor es NaN (Not a Number).
// // Devuelve true si el valor proporcionado es NaN, y false si no lo es.
// if (isNaN(number) || number < 1 || number > 50) {
//   alert("este no es un numero valido");
// } else {
//   for (let i = number; i >= 1; i--) {
//     let result = "";
//     for (let p = 1; p <= i; p++) {
//       result += i;
//     }
//     console.log(result);
//   }
// }

/*
Dificultad:  🟢🟡
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 



1
12
123
1234
12345
123456
……
*/

// let number = prompt("ingrese un numero del 1 al 50");
// if (isNaN(number) || number > 50) {
//   alert("el numero ingresado no es un numero valido");
// } else {
//   let result = "";
//   for (let i = 1; i <= number; i++) {
//     result += i;
//     console.log(result);
//   }
// }

/*Dificultad:  🟢🟡🔴
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
10*/

// for (let i = 1; i <= 500; i++) {
//   let num = i;
//   if (i % 4 == 0) {
//     num += " es multiplo de 4 ";
//   }
//   if (i % 9 == 0) {
//     num += " es multiplo de 9 ";
//   }
//   console.log(num);
//   if (i % 5 == 0) {
//     console.log("-------------------");
//   }
// }

/*Dificultad:  🟢🟡🔴
10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/
// Las etiquetas <tr> (del inglés "table row")
// definen cada fila de la tabla y encierran todas las columnas.
// Por último, la etiqueta <td> (del inglés "table data cell")
// define cada una de las columnas de las filas
// let num = parseInt(prompt("ingrese numero de filas "));
// let num1 = parseInt(prompt("ingrese numero de columnas "));
// let result = num * num1;
// let tabla = "<table border = '1'>";
// let count = result;
// for (let i = 0; i < num; i++) {
//   tabla += "<tr>";
//   for (let j = 0; j < num1; j++) {
//     tabla += "<td>" + count + "</td>";
//     count--;
//   }
//   tabla += "</tr>";
// }
// tabla += "</table>";
// document.write(tabla);

/*Ejercicios con Math


Dificultad:  🟢🟡
11- Realiza un script que pida por teclado 3 edades y
3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp*/

// let edades = [];
// let nombres = [];
// for (let i = 0; i < 3; i++) {
//   let edad = parseInt(prompt("ingrese edad " + (i + 1) + ":"));
//   let nombre = prompt("ingrese nombre " + (i + 1) + " :");
//   edades.push(edad);
//   nombres.push(nombre);
// }
// // El operador de propagación se coloca delante de un iterable
// // y permite acceder a cada uno de los elementos de manera individual.
// let indexMayor = edades.indexOf(Math.max(...edades));
// let nombreMayor = nombres[indexMayor];
// alert("la persona mayor es : " + nombreMayor);

// El método indexOf() devuelve el índice, dentro del objeto String que realiza la llamada,
// de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde;
// o -1 si no se encuentra dicho valor.]

/*Dificultad:  🟢🟡
12- Realiza un script que genere un número aleatorio entre 1 y 99*/

// let random = Math.floor(Math.random() * 99) + 1;
// console.log(`el aleatorio es : ${random}`);
// La función Math. random() devuelve un número de coma flotante pseudo-aleatorio, comprendido en el rango de 0 a menor que 1 (es decir, incluido el 0 pero no el 1), con una distribución aproximadamente uniforme en este rango. Dicho rango puede ser ampliado hasta los valores deseados.
// Math. floor() es un método del objeto estándar Math que redondea un número dado hacia el número entero anterior
/*Ejercicios con String


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
