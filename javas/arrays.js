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