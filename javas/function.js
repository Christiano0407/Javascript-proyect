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

