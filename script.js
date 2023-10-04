//Totes les notes han d'anar de 0 a 10.
let nomEstudiant = "Tony"; 
let notaExamen1 = 6.50;
let notaExamen2 = 4.20;
let notaProjecte = 5.80;

//Per calcular el pes de cada examen, calculem percentatges
let pesExamen1 = (notaExamen1 * 20) /  100; 
let pesExamen2 = (notaExamen2 * 20) /100;
let pesProjecte = (notaProjecte * 60) / 100;

//Suma de todas las notas ya con su peso para que de la nota final:
let notaFinal = pesExamen1 + pesExamen2 + pesProjecte;

//Bloque de condicional
if(notaFinal >= 7){

    console.log("Felicitats!! Vas molt be a classe!");

}else{

    console.log("Necessites millorar la teva nota per aprovar el mòdul!!");
}
