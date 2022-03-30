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
        this.ejercicio=ejer;
        this.productividad="";
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
        if(this.ejercicio=="si"){
            this.ejercicio=true;
            return true
        }
        else{
            this.ejercicio=false;
        }
    }
    pocaProductividad(){
        if((this.objetivoEstudio()==true)&&(this.objetivoTreino()==true)){
            this.productividad="productivo";
        }
        else{
            this.productividad="no productivo";
        }
    }
}



console.log("Bienvenido al tracker de productividad. \nCon este tracker vas a poder hacer una evaluación simple de tu semana. Considerando:\nHoras de estudio/Horas programadas. \nEjercitación.");
let diaProductivo={}
for (let i=1;i<8;i++){
    diaProductivo=(new Dia(
    dia=i,
    horasEstimadas =Number(prompt(`¿Para el día ${i} cuánto desea estudiar?`)),
    horasEstudio =Number(prompt(`¿Para el día ${i} cuánto estudio?`)),
    ejercicio = prompt(`¿Has ejercitado?`) ))
    
    semana.push(diaProductivo);
    diaProductivo.pocaProductividad();
}
console.log("Semana de productividad trackeada: ",semana);