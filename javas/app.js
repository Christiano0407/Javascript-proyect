var Mau = {
    nombre: `Mauricio`,
    edad: 28
}
const EDADMAYOR = 30;
/* 
function grande(cumpleanos){
    if(Mau === EDADMAYOR){
        console.log(`Ya soy un señor`);
    }else{
        console.log(`Todavía no soy mayor de edad`);
    }
}
grande(Mau); */
function cumple(edades){
 if(Mau.edad <= EDADMAYOR){
     console.log(`Todavía me faltan dos`);
 }else{
     console.log(`Ya soy mayor`);
 }
}
cumple(Mau);

