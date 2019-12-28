/* alert("Hola"); */
var Steve = {
    nombre: `steve`,
    apellido: `Rogers`,
    edad: 28,
    trabajo: `soldado`,
    sexo: `hombre`
};

function captain(persona){
    console.log(`El se llama ${persona.nombre}`)

    if(persona.apellido){
        console.log(`Su apellido es famoso porque, es: ${persona.apellido}`)
    }else {
     console.log(`No es su apellido`)
    }

    if(persona.edad){
        console.log(`Todavía es muy joven; tiene: ${persona.edad}`)
    }

    if(persona.trabajo){
        console.log(`ÉL es el mejor porque es: ${persona.trabajo}`)
    }

    if(persona===persona.sexo){
        console.log(`No es mujer ${persona.sexo}`)
    }else {
        console.log(`Él, no es mujer es: ${persona.sexo}`)
    }
    
}

captain(Steve);


var Toro = {
    nombre:`Guillermo`,
    apellido:`Del Toro`,
    profesion:`Cineasta`,
    edad:50,
    nacio:`México`,
    genero:`Terror`,
}

function cine(pelicula){

    if(pelicula.nombre){
        console.log(`Él es ${pelicula.nombre}`)
    }

    if(pelicula.apellido){
        console.log(`Y, se apellida:${pelicula.apellido}`)
    }

    if(pelicula===pelicula.profesion){
        console.log(`El no es actor${pelicula.profesion}`)
    }else {
        console.log(`Él, es ${pelicula.profesion}`)
    }

    if(pelicula===pelicula.nacio){
        console.log(`Es Nacido en Estados Unidos ${pelicula.nacio}`)
    }else {
        console.log(`No es nacido en Estados Unidos, es nacido en ${pelicula.nacio}`)
    }
}

cine(Toro);


var Shantal = {
    nombre: `Shantal`,
    edad: 18,
}

const MAYORIA_DE_EDAD = 18;

function edad(mujer){
    return mujer.edad >= MAYORIA_DE_EDAD;
}

function edades(mujer){
 if(edad(mujer)){
     console.log(`Es mayor de edad${mujer.edad}`)
 }else{
     console.log(`Es ${mujer.edad}, menor de edad`)
 }
}

edades(Shantal);


var Luisa = {
    nombre:`Luisa`,
    edad:17,
    peso: 50,
};

const EDAD = 21;
const PESO = 50;

function sueño(mujeres){
    return mujeres.edad < EDAD;
}

function pesos(mujeres) {
    return mujeres.peso >= PESO;
}

function sueños(mujeres){
    if(sueño===mujeres.edad){
     console.log(`Es mayor de edad ${mujeres.edad}`)
    }else{
        console.log(`No es mayor de edad ${mujeres.edad}`)
    }

    if(pesos(mujeres)){
        console.log(`Su peso es el ideal porque, está en ${mujeres.peso}`)
    }else {
        console.log(`Tiene sobrepeso ${mujeres.peso}`)
    }
}

sueños(Luisa);



