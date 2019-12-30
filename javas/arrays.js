/* console.log(`Array`); */

var Luisa = {
    nombre: `Luisa`,
    apellido:`Cantú`,
}

var Chris = {
    nombre:`Christian`,
    apellido:`Velázquez`,
}

var Mau = {
    nombre: `Muricio`,
    apellido:`Sainz`,
}

var Chio = {
    nombre: `Rocío`,
    apellido:`García`,
}

var personas = [Luisa, Chris, Mau, Chio]

for(var i = 0; i < personas.length; i++) {
    var persona = personas[i]

    console.log(`Persona ${persona.nombre}, se apellida ${persona.apellido}`)
};


var Manchester = {
    ciudad: `Manchester`,
    jugador: `Maguire`,
}

var Chelsea = {
    ciudad: `Londres`,
    jugador: `Pulisic`,
}

var Totenham = {
    ciudad: `Londres`,
    jugador: `Keane`,
}

var Arsenal = {
    ciudad: `Londres`,
    jugador: `Aubameyang`,
}

var equipos = [Manchester, Chelsea, Totenham, Arsenal]

for(var i = 0; i < equipos.length; i++) {
    var equipo = equipos[i]

    console.log(`Son los mejores equipos en la premier ${equipo.ciudad}, y su mejor jugador es: ${equipo.jugador}`)
};


var Erika = {
    nombre: `Erika`,
    altura: 1.75,
}

var Fausto = {
    nombre: `Fausto`,
    altura: 1.85,
}

var Rodrigo = {
    nombre: `Rodrigo`,
    altura: 1.95,
}

var Natalia = {
    nombre: `Natalia`,
    altura: 1.55,
}

var Anibal = {
    nombre: `Aníbal`,
    altura: 1.90,
}


const esAlta = jovenes =>  jovenes.altura > 1.80


var joven = [Erika, Fausto, Rodrigo, Natalia, Anibal]

var jovenAlta = joven.filter(esAlta)

console.log(jovenAlta);


var Camila = {
    nombre: `Camila`,
    altura: 1.90,
    sexo: `Mujer`,
}

var Sadri = {
    nombre: `Sadri`,
    altura: 1.80,
    sexo: `Mujer`,
}

var Ale = {
    nombre: `Alejandra`,
    altura: 1.70,
    sexo: `Mujer`
}

var Victor = {
    nombre: `Victor`,
    sexo: `Hombre`,
}

var Erik = {
    nombre: `Erik`,
    sexo: `Hombre`,
}


const sexos = ({sexo}) => sexo > `Hombre` 

var genero = [Camila, Sadri, Ale, Victor, Erik]

var generos = genero.filter(sexos)

console.log(generos);



var Nat = {
    nombre: `Natasaha`,
    altura: 1.65,
}

var Reg = {
    nombre: `Regina`,
    altura: 1.75, 
}

var Mar = {
    nombre: `Mara`,
    altura: 1.55,
}



const girls = girl => ({

    ...girl,
    altura: girl.altura * 100
})

var ninas = [ Nat, Reg, Mar]

var adultas = ninas.map(girls)

console.log(adultas);


function Persona (nombre, apellido) {
    this.nombre = nombre,
    this.apellido = apellido
}

Persona.prototype.saludar = function () {
    console.log(`Hola, yo soy ${this.nombre} ${this.apellido}`)
}

var sacha = new Persona (`Sacha`, `Vela`)
sacha.saludar()


const ALTA = 1.80


function Persona (nombre, apellido, altura) {
    this.nombre = nombre,
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.gritar = function (){
    if(this.altura >= ALTA) {
        console.log(`Hola, soy ${this.nombre}, soy alta`)
    }else {
        console.log(`Demonios, soy muy baja!`)
    }
}

var ana = new Persona (`Ana`, `Armas`, 1.75)
ana.gritar()
var erika = new Persona (`Erika`, `Luna`, 1.90)
erika.gritar()
var joel = new Persona (`Joel`, `Rosas`, 1.65)
joel.gritar()


