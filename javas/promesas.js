 const API_URL = `https://swapi.co/api/`
 const PEOPLE_URL = `people/:id`
 const OPTS = {crossDomain: true}

 

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(`:id`, id)}`
        $.get(URL, OPTS, function(data){
            
            resolve(data)
        })

        .fail(() => reject(id))
    })
}

function onError(id){
 console.log(`Hubo un error ${id}`)
}


obtenerPersonaje(1)
.then( function (personaje) {
    console.log(`El personaje uno es: ${personaje.name}`)
    return obtenerPersonaje(3)
})

.then( function(personaje){
    console.log(`Soy el nuevo ${personaje.name}`)
    return obtenerPersonaje(4)
})
.then(function(personaje){
    console.log(`Soy el que sigue ${personaje.name}`)
})
.catch(onError)

const APIS = `https://swapi.co/api/`
const PEOPLES = `people/:id`
const OPT = {crossDomain: true}

function personajeNuevo(id){
    return new Promise((resolve, reject) => {
        const URLS = `${APIS}${PEOPLES.replace(`:id`, id)}`
        $.get(URLS, OPT, function(data){
            resolve(data)
        })
        .fail(() => reject(id))
    })
}


function errorAll(id){
    console.log(`Lo siento ${id}`)
}

var ids = [5, 6, 7, 8]

var promesas = ids.map(id => personajeNuevo(id))
Promise
.all(promesas)
.then(personajess => console.log(personajess))
.catch(errorAll)

/* personajeNuevo(2)
.then( function(persona) {
    console.log(`Soy el personaje dos: ${persona.name}`)
})
.catch(errorAll) */

