/* console.log(`Hola!`); */

const API_URL = `https://swapi.co/api/`;
const PEOPLE_URL = `people/:id`;

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(`:id`, 1)}`
const options = {crossDomain: true}

const onPeopleResponse = function(persona) {
    console.log(`Hola, soy ${persona.name}`)
}

$.get(lukeUrl, options, onPeopleResponse);






