/* Tracker de productividad.

1. Pedirle al usuario la cantidad de horas estudiadas por cada dia de lasemana, cuantas planeo estudiar,y si hizo ejercicio.
2.Incorporar un metodo que compare cuantas horas de estudio le faltaron o le sobraron, y que retorne cumplido o falludo, y que retorne objetivo cumplido o fallido.
2.b. Crear una función que retorne true si no llego al objetivo de estudio, y no ejercito. Y que retorne false, si alguna de las dos esta presente.
4.Listar los datos de cada dia en un array que simule ser una semana.
5.Buscar el dia segun el usuario un días, y decir si fue productivo.




*/
let semana =[];
let dia="";
let horasEstudio="";
let horasEstimadas="";
let ejercicio="";

class Dia {
    constructor(dia,estimado,estudiado,ejer,prod){
        this.dia=dia;
        this.estimado=estimado;
        this.estudiado=estudiado;
        this.ejer=ejer;
        this.prod="";
    }

    objetivoEstudio(){
        if (this.estimado<=this.estudiado){
            return true;
        }
        else{
            return false;
        }
    }
    objetivoTreino(){
        if(this.ejer=="si"){
            this.ejer=true;
        }
        else{
            this.ejer=false;
        }
    }
    pocaProductividad(){
        if((objetivoEstudio==false)&&(objetivoTreino==false)){
            this.prod="productivo";
        }
    }
}



console.log("Bienvenido al tracker de productividad. \nCon este tracker vas a poder hacer una evaluación simple de tu semana. Considerando:\nHoras de estudio/Horas programadas. \nEjercitación.");

for (let i=1;i<2;i++){
    semana.push(new Dia(
    dia=i,
    horasEstimadas =Number(prompt(`¿Para el día ${i} cuánto desea estudiar?`)),
    horasEstudio =Number(prompt(`¿Para el día ${i} cuánto estudio?`)),
    ejercicio = prompt(`¿Has ejercitado?`) ) )
}

console.log(Dia);
console.log(semana);

// let busquedaDia = prompt("¿Qué día te gustaria saber su productividad?");
// if ( semana.find(Dia =>Dia.xe==busquedaDia))
// {
//     console.log("Su día fue productivo.")
// }
// else {
//     console.log("Su dia no fue productivo.")
// }