/* var Luisa = {
    nombre: `Luisa`,
    apellido:`Velázquez`,
    peso: 50,
};  */

/* const mujeres = (mujer) => {
    console.log(`Hola, me llamo ${mujer.nombre}`);

}

mujeres(Luisa); */


/*  const INCREMENTO_PESO = 0.2;
const DIAS_ANO = 365;
const META = Luisa.peso -3;
var  dias = 0; 

const mujeres = (mujer) => {
    mujer.peso += INCREMENTO_PESO
}

const chicas = (mujer) => {
    mujer.peso -= INCREMENTO_PESO
}

const comeMucho = () => Math.random() < 0.3

const deporte = () => Math.random() < 0.4

console.log(`${Luisa.nombre} aumentó de peso éste último año ${Luisa.peso}kg`); */

/* for (var i = 1; i <= DIAS_ANO; i++) {
  
    var random = Math.random();

    if(random < 0.25) {
     mujeres(Luisa)
    }else if (random < 0.5) {
     chicas(Luisa)
    }
} */

/* while(Luisa.peso > META) {

if (comeMucho()) {
  mujeres(Luisa)
}

if (deporte()) {
   chicas(Luisa)
}

dias += 1
}



console.log(`pasaron ${dias} bajó de peso ${Luisa.nombre} `);  */


/*  var Chris = {
    nombre:`Christian`,
    peso: 80,
};

const PESO_AUMENTO = 0.2;

const DIAS_TODO_ANO = 365; 

const hombre = (muchaco) => {
    muchaco.peso += PESO_AUMENTO
}

const hombres = (muchacho) => {
    muchacho.peso -= PESO_AUMENTO
}

for(var i = 1; i = DIAS_TODO_ANO; i++) {
    
    var random = Math.random();
    
    if(random < 0.25){
        hombre(Chris)
    }else if (random < 0.5){
        hombre(Chris)
    }
}
console.log(`${Chris.nombre}, aumentó a ${chris.peso.toFixed(2)}kg, éste año`)  */

/* var contador = 0; 

const llueve = () => Math.random() < 0.25

do {
contador++

} while(!llueve());
 
if(contador === 1){
 console.log(`Fuí a ver ${contador} vez`)
}else {
console.log(`Fuí a ${contador} veces`)
}; */

var Premier = prompt (`Quién realizó la mejor transferencia en el mercado...?`)

switch(Premier) {
    case `Arsenal`:
        console.log(`Gabriel Martinelli (Ituano) Undisclosed Details
        Dani Ceballos (Real Madrid) Loan Details
        William Saliba (Saint-Etienne) Undisclosed Details`)
    break
     case `Aston Villa`:
         console.log(`Jota (Birmingham) Undisclosed Details
         Anwar El Ghazi (Lille) Undisclosed Details
         Wesley (Club Brugge) Undisclosed Details`)
    break 
    case `Chelsea`:
        console.log(`Mateo Kovacic (Real Madrid) Undisclosed Details`)  
    break
    case `Everton`:
        console.log(`Jonas Lossl (Huddersfield Town) Free Details
        Andre Gomes (Barcelona) £22m Details
        Fabian Delph (Man City) Undisclosed Details`)  
    break 
    case `Liverpool`:
         console.log(`Jonas Lossl (Huddersfield Town) Free Details
         Andre Gomes (Barcelona) £22m Details
         Fabian Delph (Man City) Undisclosed Details`)
    break
    case `Manchester United`:
        console.log(`Daniel James (Swansea City) Undisclosed Details
        Aaron Wan-Bissaka (Crystal Palace) Undisclosed Details
        Harry Maguire (Leicester City) Undisclosed Details`)
        break
    default:
        console.log(`No es un equipo de la Premier`)
        break
};