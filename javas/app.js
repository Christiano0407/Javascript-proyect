var Mau = {
    nombre: `Mauricio`,
    edad: 28,
    peso: 50
}
console.log(`Todavía tengo ${Mau.edad} años`)
const EDADMAYOR = 30;
const EDADMENOR = 28;
const DIAS_ANO = 365;
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