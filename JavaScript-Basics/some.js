//Some: devuelve V o F para cada objeto del array que cumplan o no con cierta validación
// se genera un nuevo array

var articulos = [
    {
        nombre: "Bici",
        costo: 50,
    },
    {
        nombre: "television",
        costo: 100
    },
    {
        nombre: "libro",
        costo: 10
    },
    {
        nombre: "celular",
        costo: 1800
    },
    {
        nombre: "laptop",
        costo: 4000
    },
    {
        nombre: "teclado",
        costo: 500
    },
    {
        nombre: "audifonos",
        costo: 1500
    }
]

//almacenamos en la variable la función some
// some busca en el array articulos si hay costos menores o iguales a 700
// retorna true si hay elementos con esa condición, false si no los hay
var articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 500
})