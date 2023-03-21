var myCar = {
    marca: "Gol",
    modelo: "Trend",
    año: 2012,
    detalle: function() {
        console.log(`Auto ${this.marca} ${this.modelo}`);
    }
};

//objeto.propiedad me devuelve el valor
// de esa propiedad en particular
myCar.año = 2012
myCar.detalle() //llamo a la función que está dentro del objeto

//función constructora: 

//generamos un template con sus propiedades y parámetros
function auto(marca, modelo, año) {
    this.marca = marca
    this.modelo = modelo
    this.año = año
}

//utilizamos el constructor "new" para sumar nuevos autos al template
var autoNuevo = new auto("Gol", "Trend", 2012)
var autoViejo = new auto ("Renault", 12, 1985)

// solución ejercicio 24

export function solution(car) {
    if (car.licensePlate) {
        car.licensePlate = true
        return car
    }
    else {car.licensePlate=false
    return car}
  }


 