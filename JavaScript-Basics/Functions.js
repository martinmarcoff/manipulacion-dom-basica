// dos tipos de funciones:

//1: funciones declarativas

/*function myFunction() {
    return 3
}

myFunction()*/

//2: funciones de expresión/anónimas

var myFunction = function(a,b){
    return a + b;
}

myFunction(1,2)

//examples
//la funcion sayHello tiene un parámetro "(hello)"
// el parámetro tiene un argumento ("Hola Loco"),
//el cual es declarado cuando se invoca la función
function sayHello(hello) {
    console.log(`${hello}, cómo andás?`);
}



sayHello("Hola loco")