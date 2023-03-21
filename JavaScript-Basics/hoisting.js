//hoisting: variables y funciones se procesan antes de que se ejecute el código

//declaración de variable
var myName;
//inicialización de variable
myName= "Martin"


heeeey();

function heeeey() {
    console.log("hola", myName);
}