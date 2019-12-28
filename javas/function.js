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