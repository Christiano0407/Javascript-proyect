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

personajeNuevo(2)
.then( function(persona) {
    console.log(`Soy el personaje dos: ${persona.name}`)
})
.catch(errorAll)

