// ¿Qué es una variable y para qué sirve?

- Una variable es un espacio en el que se almacena información,
  sirve para guardar contenido y poder invocarlo luego

//¿Cuál es la diferencia entre declarar e inicializar una variable?

- Declarar una variable es indicar de qué lugar empieza a existir,
  qué nombre tendrá y qué tipo de datos almacenará.

Ej: var objetos = {}

- inicializar una variable es asignarle un valor.

Ej: var objetos = {name: "martin", lastName: "marcoff"}

//¿Cuál es la diferencia entre sumar números y concatenar strings?

- sumar numeros es una operación matematica,
  concatenar strings es unir cadenas de texto

//¿Cuál operador me permite sumar o concatenar?

- el signo "+"

/_2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre
Apellido
Nombre de usuario en Platzi
Edad
Correo electrónico
Mayor de edad
Dinero ahorrado
Deudas_/

- es un objeto

//Traduce a código JavaScript las variables del ejemplo anterior

- var objeto = {
  nombre: "Martin",
  apellido: "Marcoff",
  nombreUsario: "martinmarcoff",
  edad: 28,
  correo: "hola@gmail.com",
  esMayor: true,
  ahorros: 500,
  deudas: 300
  }

/_Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)_/

var usuario = {
fullName: `${objeto.nombre} ${objeto.apellido}`,
dinero: `${objeto.ahorros - objeto.deudas}`
}

// Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?

- Una función es un conjunto de instrucciones que se agrupan
  para realizar una tarea concreta y que se pueden reutilizar fácilmente.
- Forma en la que encapsulamos bloques de código, para que sean reutilizables y ejecutables en el futuro.
- podemos ejecutar la función cuando la necesitemos
  -Cuando invocamos la función le pasamos los argumentos de los parámetros

¿Cuándo me sirve usar una función en mi código?
-Cuando tenemos variables o bloques de códigos muy parecidos (con cambios que podrían ser parámetros y argumentos) que podemos encapsular para reutilizar en el futuro

- Cuando tenemos un archivo con código que es muy largo

¿Cuál es la diferencia entre parámetros y argumentos de una función?

- cuando declaramos la función, ponemos los parámetros entre paréntesis. Cuando llamamos a la función, ponemos los argumentos entre paréntesis.
- parámetros es el "placeholder", el container en el que se almacenan los argumentos (valores) que le pasamos a la función.

Convierte el siguiente código en una función, pero,
cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function user (completeName, nickname) {return
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".")}

¿Qué es un condicional?

- Forma en que ejecutamos un bloque de código u otro, dependiendo de una condición o validación

¿Cuáles son las diferencias entre los condicionales?
-If (else, y elseIf) nos permite hacer validaciones/condiciones completamente distintos en cada validación o condicional

- en Switch todos los casos se comparan con la misma variable o condición que definimos en el switch.

- ¿Puedo combinar funciones y condicionales?
  Si, las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales.

Ejercicio IF

const tipoDeSuscripcion = "Basic";

function mySuscription(tipodeSuscripcion) {
if (tipodeSuscripcion ==="Free"){
console.log("Solo puede tomar los cursos gratis");
}
else if (tipoDeSuscripcion==="Basic") {
console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if (tipoDeSuscripcion==="Expert") {console.log("Puedes tomar casi todos los cursos de Platzi durante un año")}
else if (tipoDeSuscripcion==="ExpertPlus") {console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");}
}

mySuscription()

- ¿Qué es un ciclo?
  forma de ejecutar bloque de código hasta que se cumpla una condición

- ¿Qué tipo de ciclos existen en JavaScript?
  El While hace la validación antes de ejecutar el bloque de código. El Do While ejecuta el código, luego hace la validación y dependiendo la validación, vuelve a repetir el ciclo.

El for nos obliga a definir qué pasa al principio y al final de cada ejecución de código.
Crea una variable (i=0) + validación de la variable (si i es menor que 5, seguí) + qué hacemos con la variable (sumamos uno)
(let i=0; i<5; i++>)

- ¿Qué es un ciclo infinito y por qué es un problema?
  Es cuando una validación de los condicionales no se cumple

- ¿Puedo mezclar ciclos y condicionales?
  Si, aunque los ciclos son una especie de condicionales, nada nos impide agregar mas condicionales dentro del ciclo

- Ejercicio ciclos
  for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
  }

for (let i = 10; i >= 2; i--) {
console.log("El valor de i es: " + i);
}

Con el While:

let i = 0
while (i<5) {
console.log("El valor de i es: " + i);
i++
}

let i = 10
while (i >= 2){
console.log("El valor de i es: " + i)
i--
}

- ¿Qué es unarray?
  es una lista de elementos
  ejemplo: const array = [1, "jaja", true, false]

- ¿Qué es un objeto?
  es una lista de elementos, pero cada elemento tiene un nombre clave
  ejemplo: const obj = {nombre: "Fulanito", edad: 3}

-¿Cuando es mejor usar objetos o arrays?
arrays cuando lo que haremos en un elemento es lo mismo que en todos los demas
objeto cuando los nombres de cada elemento son importantes para diferenciar que haremos con cada elemento

- ¿puedo mezclar arrays con objetos u objetos con arrays?
  Si. Los arrays pueden guardar objetos. Y los ojetos pueden guardar arrays entre sus propiedades.

Ejercicios:

let numbers = [1,2,3,4,5]
let numbers2 = [{number: 1, id: 4}, {number: 2, id: 6}, {number: 3, id:5}]

/\*
Solución 1
function array(numbers) {
console.log(numbers[0]);
}

array(numbers)

Solución 2
function arrayNumbers(numbers){
console.log (numbers)
}

for (let index = 0; index < numbers.length; index++) {
arrayNumbers(numbers[index])
}

Solución 3

function objectNumbers(numbers){
console.log(numbers)
}

for (let index = 0; index < numbers2.length; index++) {
objectNumbers(numbers2[index])
}\*/
