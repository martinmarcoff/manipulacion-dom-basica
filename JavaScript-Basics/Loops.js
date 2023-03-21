//Loops: "ciclos". Hace que una tarea se repita automáticamente.
// Se repiten las tareas (ejemplo, una función) que cumpla las condiciones de un loop

var students = ["Kenneth", "Brito", "Santi", "Alley"]

//la función tiene como parámetro students
// devuelve el mensaje loopeando cada elemento del index students
function sayHello(students) {
    console.log(`Hello, ${students}`)
}

// index tiene un valor de 0
// si index es menor a la longitud de students,
// pasamos al siguiente elemento del index
// luego invocamos la función y le damos como argumento 
//el index de students
for (let index = 0; index < students.length; index++) {
    sayHello(students[index])
}

//otra manera de hacerlo
// aStudent es cada elemento del index de students
//damos aStudent como argumento a sayHello 
for (var aStudent of students){
    sayHello(aStudent) 
}

//forloop con while
//while: significa "mientras la condición sea verdad",
//mientras la longitud del array sea mayor a 0, 
//declaramos una nueva variable y aplicamos shift, que va
//a eliminar un elemento del index por cada ciclo(loop)
//invocamos sayHello con students como parametro
while(students.length > 0){
    var estudiante = students.shift();
    sayHello(students)
}


//ejercicio 
  export function solution(estudiantes, deathCount, nuevo) {
    if (deathCount === 0) {
        estudiantes.push(nuevo)
        return estudiantes
    }
    while (deathCount > 0) {
        estudiantes.shift()
       estudiantes.push(nuevo)
       return estudiantes
   }
        
}





























   