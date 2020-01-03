/* console.log(`Hola!`); */

/* const API_URL = `https://swapi.co/api/`;
const PEOPLE_URL = `people/:id`;

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(`:id`, 1)}`
const options = {crossDomain: true}

const onPeopleResponse = function(persona) {
    console.log(`Hola, soy ${persona.name}`)
}

$.get(lukeUrl, options, onPeopleResponse); */


const API_URL = `https://swapi.co/api/`
const PEOPLE_URL = `people/:id`

const LUKEURL = `${API_URL}${PEOPLE_URL.replace(`:id`, 1)}`
const OPTION = {crossDomain:true}

$.get(LUKEURL,OPTION, function(luke){
    console.log(`Hola, me llamo ${luke.name}`)
});

const API_URLS = `https://swapi.co/api/`
const DARK_URL = `people/:id`

const VADERURL = `${API_URLS}${DARK_URL.replace(`:id`, 4)}`
const OPT = {crossDomains:true}

$.get(VADERURL, OPT, function(sith){
    console.log(`Vuelo al lado oscuro, porque, soy ${sith.name}`)
})


const APIS_URL = `https://swapi.co/api/`
const GIRL_URL = `people/:id`

const LEIAURL = `${APIS_URL}${GIRL_URL.replace(`:id`, 5)}`
const OPTS = {crossDomain: true}

const FORCE = function(leia){
 console.log(`Hola, soy hermana de Luke; me llamo ${leia.name}`)
}

$.get(LEIAURL, OPTS, FORCE)

