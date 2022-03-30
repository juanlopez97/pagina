// const car1 = {}

// const car = new Object();

// const car2 = Object.create();




function Carro(marca, modelo){
this.marca = marca;
this.modelo = modelo;

}

const miCarro = new Carro('Renault','Sandero')
miCarro.marca;
miCarro.modelo;
console.log("Mi carro es un:" + miCarro.marca + " " + miCarro.modelo);

let edad = 36;
let midEdad = edad;
miEdad = 37;
console.log(edad);

const carrito = {
color: 'Gris'

}

const otroCarrito = carrito;
console.log(carrito.color);
console.log(otroCarrito.color);
otroCarrito.color = 'Rojo';
console.log(carrito.color);

