//SALE UN  MENSAJE EN UN  CUATRADO 
//alert("Buenos Días")

//Aparezca un mensaje  en la pagina
//document.write("A la clase de Java")

//aparezca como una prueba
//console.log("A la clase de java")

/* 
1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings (plantillas de cadena)
*/

var nombre = prompt ("Escribe tu nombre: ")
var edad = parseInt(prompt ("Escribe tu edada: "))

//voy a inpromir el resultado 
//console.log (`'Hola ${nombre}, tienes ${edad} años y el año que  viene tendrás ${edad} años'`)
//Convertir la contidad en Número 
document.write (`'Hola ${nombre}, tienes ${edad} años y el año que  viene tendrás ${edad+1} años'`)
