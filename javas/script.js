/* alert("Hola"); */
var nombre
var apellido
var edad

nombre = "Sarita";
apellido = 'Ramos';
edad = 27;

console.log("Hola, yo soy" + " " + nombre + " " + apellido);
console.log('Mi edad'+ ' ' + edad);

var mayuscula = nombre.toUpperCase();
var minuscula = apellido.toLowerCase();
var letra = nombre.charAt(0);
var numero = apellido.length;

var nombreCompleto =`${nombre}  ${apellido} `;

var anos = 27;
anos += 1;

var peso = 50;
peso -= 3;

var sobrenombre = `Christiano`;
var apellidos = `Ronan`;

function familia() {
    console.log(`Hola, me dicen ${sobrenombre} y, mi familia es ${apellidos}`)
};

familia(sobrenombre, apellidos);

var leo = {
    peso: 50,
    ojos: `negros`,
    altura: 90
};

function polo({altura}){
    console.log(`Hola, mi ${altura}`)
};

polo(leo);

