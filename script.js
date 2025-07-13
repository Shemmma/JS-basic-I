//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log("Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5");


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let stringVariable = "string"
let numberVariable = 1
let booleanVariable = true
let nullVariable = null
let undefinedVariable
let paambtomaquetVariable = "paambtomaquet"
const paambtomaquet = {type:"comida", origen:"catalán", sabor:"riquísimo"};
let arrayVariable = "{paambtomaquet, allioli, calçots}"

console.log("El valor de la variable STRINGVARIABLE = " + stringVariable);
console.log("El valor de la variable NUMBERVARIABLE = " + numberVariable);
console.log("El valor de la variable BOOLEANVARIABLE = " + booleanVariable);
console.log("El valor de la variable NULLVARIABLE = " + nullVariable);
console.log("El valor de la variable UNDEFINEDVARIABLE = " + undefinedVariable);
console.log("El valor de la variable PAAMBTOMAQUETVARIABLE = " + paambtomaquetVariable);
console.log(paambtomaquet);
console.log("El valor de la variable ARRAYVARIABLE = " + arrayVariable);


//OPERADORES ARITMÉTICOS
//Ejercicio 4: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let sumtwonumbersVariable = 1 + 2

console.log("El resultado de 1 + 2 = " + sumtwonumbersVariable);


//Ejercicio 5: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let substracttwonumbersVariable = 1 - 2

console.log("El resultado de 1 - 2 = " + substracttwonumbersVariable);


//Ejercicio 6: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let multiplytwonumbersVariable = 1 * 2

console.log("El resultado de 1 x 2 = " + multiplytwonumbersVariable);


//Ejercicio 7: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let dividetwonumbersVariable = 1 / 2

console.log("El resultado de 1 / 2 = " + dividetwonumbersVariable);


//OPERADORES DE COMPARACIÓN
// Ejercicio 8: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let numberoneVariable = 1
let numbertwoVariable = 2
let comparevariablesVariable = 1 > 2

console.log("El valor de la variable NUMBERONEVARIABLE = " + numberoneVariable);
console.log("El valor de la variable NUMBERTWOVARIABLE = " + numbertwoVariable);
console.log("The truth value of '1 > 2' is " + comparevariablesVariable);


// Ejercicio 9: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let comparevariablesagainVariable = 1 < 2

console.log("The truth value of '1 < 2' is " + comparevariablesagainVariable);


//Ejercicio 10: completa el ejercicio
/*
let num1 = 15
let num2 = 20

let comparacion = //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparacion)
*/

let num1 = 15
let num2 = 20
let comparacion = 15 != 20

console.log(comparacion);

//Ejercicio 11: completa el ejercicio
/*
let num3 = 1
let num3AsString = "1"

let result = //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result) 
*/

let num3 = 1
let num3AsString = "1"
let result = 1 === "1"

console.log(result);

//Ejercicio 12: completa el ejercicio
/*
let result2 = //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2)
*/

let result2 = 1 == "1"

console.log(result2);


//OPERADORES DE CADENAS
//Ejercicio 13: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí

let Gemma = "Gemma"
let Celestino = " Celestino"
let GemmaCelestino = Gemma + Celestino

console.log(GemmaCelestino);


//OPERADORES DE LÓGICA
//Ejercicio 14: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6
let b = 3

console.log(a + b);

let compA = a < 10
let compB = b > 1
let res = compA = compB //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res);

let compC = b < 1
let res2 = compA = compC //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2);

let compD = a == 5
let compE = b == 5
let res3 = compD && compE //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3);

let compF = a == 6
let compG = b == 0

let res4 = compF || compG //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4);

let compH = a == 0
let compI = b == 3
let res5 = compH || compI //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5);

let res6 = compF && compI //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6);
