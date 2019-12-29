var Luisa = {
    nombre: `Luisa`,
    apellido:`Velázquez`,
    peso: 50,
};

/* const mujeres = (mujer) => {
    console.log(`Hola, me llamo ${mujer.nombre}`);

}

mujeres(Luisa); */


const INCREMENTO_PESO = 0.2;
const DIAS_ANO = 365;

const mujeres = (mujer) => {
    mujer.peso += INCREMENTO_PESO
}

const chicas = (mujer) => {
    mujer.peso -= INCREMENTO_PESO
}

console.log(`${Luisa.nombre} aumentó de peso éste último año ${Luisa.peso}kg`);

for (var i = 1; i <= DIAS_ANO; i++) {
  
    var random = Math.random();

    if(random < 0.25) {
     mujeres(Luisa)
    }else if (random < 0.5) {
     chicas(Luisa)
    }
}

console.log(`Ella, bajó de peso ${Luisa.peso.toFixed(2)}kg `);


/* var Chris = {
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

for(var i = 1; i = DIAS_TODO_ANO; i++ ) {
    
    var random = Math.random();
    
    if(random < 0.25){
        hombre(Chris)
    }else if (random < 0.5){
        hombre(Chris)
    }
}
console.log(`${Chris.nombre}, aumentó a ${chris.peso.toFixed(2)}kg, éste año`) */


