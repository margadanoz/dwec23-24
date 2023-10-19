//Creación de los arrays que almacenarán la info sobre los planetas:
//En el indice 0 -->distancia del sol (se toma la medida UA, unidad de medida 
//utilizada en astronomia para descibir las distancias dentro del sistema solar)
//en el 1-->tamaño relativo, cuantas veces son el tamaño de la tierra
//En el 2 --> fecha de descubrimiento
const mercurio = ["Mercurio", 0.39, 0.38, "265 a.c"];
const venus = ["Venus", 0.72, 0.95, "1610 d.c"];
const marte = ["Marte",1.52, 5.3, "1610 d.c"];
const jupiter = ["Jupiter", 5.20, 11.2, "sVII a.c"];
const saturno = ["Saturno",9.54, 9.45, "1610 d.c"];

//Creamos el constructor para posteriormente ir creando todos los objetos:
function Planeta(){

    //Propiedades del constructor planeta que herederán las instancias:
    this.nombrePlaneta = "";
    this.distanciaSol = "";
    this.tamañoRelativo = "";
    this.fechaDeDescubrimiento = "";

    //Método del constructor planeta que heredarám las instancias que creemos:
    this.muestraInfoDelPlaneta = function(){

        //Este constructor retorna un string donde irán comprendidas todas sus propiedades
        //descritas arriba. Las cuales iremos machacando en cada instancia con la info que nos venga de los arrays
        //de cada respectivo planeta:
        return "Nombre planeta: " + this.nombrePlaneta + "\n"+
        "Distancia del planeta al sol: "+this.distanciaSol+
        "\n"+
        "Tamaño relativo respecto de la tierra: "+this.tamañoRelativo + "\n"+
        "Fecha de descubrimiento: "+this.fechaDeDescubrimiento;
    }

}

//Variables para trabajar con los planetas que se irán creando:
//Las instancias a partir del constructor planeta:
let Mercurio;
let Venus;
let Marte;
let Jupiter;
let Saturno;

//Inserción de fecha actual para cuando fueron creados los registros
//que se muestran en el ejercicio:
let fecha = new Date();

//Aquí imprimiria dia formato string, mes, dia, año y hora
console.log("Informacion emitida el", fecha); 

//Recorremos el array de cada planeta para llenar la instancia del objeto que
//hemos creado:
Mercurio = new Planeta();

/**
 * Utilizo este bucle para asignar cada elemento según el indice que tiene,
 * dado que un forEach normal me insertaba el mismo registro en todos.
 * Vamos llenando instancia del constructor planeta con sus propiedades:
 */
for(let [index, elemento] of mercurio.entries()){
   
    //Detectamos cada índice para insertar el registro correspondiente en cada propiedad de la instancia:
    if(index === 0){
        Mercurio.nombrePlaneta = elemento;
    } 
    if(index === 1){
        Mercurio.distanciaSol = elemento;

    } 
    if(index === 2){
        Mercurio.tamañoRelativo = elemento;

    }
    if(index === 3){
        Mercurio.fechaDeDescubrimiento = elemento;

    }
   
}
//Mostramos info por pantalla del planeta Mercurio:
console.log("<-----INFO DE MERCURIO----->");
  console.log(Mercurio.muestraInfoDelPlaneta());

//Llenando instancia de Venus:
    Venus = new Planeta();
//Iremos repitiendo la misma estructura en cada Planeta:
    for(let [index, elemento] of venus.entries()){

        if(index === 0){
            Venus.nombrePlaneta = elemento;
        } 
        if(index === 1){
            Venus.distanciaSol = elemento;
    
        } 
        if(index === 2){
            Venus.tamañoRelativo = elemento;
    
        }
        if(index === 3){
            Venus.fechaDeDescubrimiento = elemento;
    
        }
        
    }

//MOstrando info del planeta Venus:
console.log("<-----INFO DE VENUS----->");
console.log(Venus.muestraInfoDelPlaneta());

//Planeta Marte:
//Creamos la instancia a partir del constructor:
Marte = new Planeta();

//Utilizamos el bucle para asignar cada elemento
//del array de marte segun el indice que tenga a una propiedad de la instancia:
    for(let [index, elemento] of marte.entries()){
        
        if(index === 0){
            Marte.nombrePlaneta = elemento;
        } 
        if(index === 1){
            Marte.distanciaSol = elemento;
    
        } 
        if(index === 2){
            Marte.tamañoRelativo = elemento;
    
        }
        if(index === 3){
            Marte.fechaDeDescubrimiento = elemento;
    
        }
     
    }
    //Mostramos la informacion del planeta llamando al método:
    console.log("<-----INFO DE MARTE----->");
    console.log(Marte.muestraInfoDelPlaneta());

//CReamos planeta Jupiter:
Jupiter = new Planeta();

//Recorremos el bucle asignando segun el indice que tenga del array que contiene la info
//el elemento adecuado a cada propiedad de la instancia:
for(let [index, elemento] of jupiter.entries()){
   
    //Detectamos cada índice para insertar el registro correspondiente en cada propiedad de la instancia:
    if(index === 0){
        Jupiter.nombrePlaneta = elemento;
    } 
    if(index === 1){
        Jupiter.distanciaSol = elemento;

    } 
    if(index === 2){
        Jupiter.tamañoRelativo = elemento;

    }
    if(index === 3){
        Jupiter.fechaDeDescubrimiento = elemento;

    }
  
}

//Imprimimos la info con la funcion que nos viene dada por el constructor:
console.log("<-----INFO DE JUPITER----->");
console.log(Jupiter.muestraInfoDelPlaneta());

//Creamos el planeta Saturno:
Saturno = new Planeta();

//Llenamos las propiedades del planeta don la info del array del mismo:
for(let [index, elemento] of saturno.entries()){

    if(index === 0){
        Saturno.nombrePlaneta = elemento;
    } 
    if(index === 1){
        Saturno.distanciaSol = elemento;

    } 
    if(index === 2){
        Saturno.tamañoRelativo = elemento;

    }
    if(index === 3){
        Saturno.fechaDeDescubrimiento = elemento;

    }
}

//Imprimimos info del planeta:
console.log("<-----INFO DE SATURNO----->");
console.log(Saturno.muestraInfoDelPlaneta());


/**ç
 * Declaramos el array que contdrá todos los objetos planeta,
 * y los metemos para posteriormente recorrerla y 
 * ordenar los planetas por distancia al Sol de menor a mayor
 */
const arrayPlanetasFinal = new Array();

//Metemos todos los objetos planeta en el array:
arrayPlanetasFinal.push(Mercurio, Venus, Marte, Jupiter, Saturno);

//Comprobación de que efectivamente todos están dentro y muestran sus datos correctamente:
//console.log(arrayPlanetasFinal);

/**
 * Utilizamos el método sort para ordenar el array de planetas según la distancia con el sol.
 * Como lo que hay dentro del array es un objeto hay que indicarle la propiedad por la cual 
 * queremos ordenar, que será la distancia del planeta respecto del sol.
 * los parámetros a y b representaran cada elemento de distancia sol que contengan los objetos planeta
 * Como nos interesa ordenar de menor distancia respecto al sol a mayor distancia respecto al sol hacemos a - b
 * Este metodo irá restando el parametro a al parametro b, si da un numero negativo es que a es menor y lo pone primero
 * si da cero es que son iguales y se quedan como están. a, b ordena ascendete; de menor a mayor, al revés b-a ordena descendente
 */
arrayPlanetasFinal.sort((a, b) => a.distanciaSol - b.distanciaSol);

//Imprimimos la información ordenada por pantalla:
console.log("<--------------->");
console.log("Orden de los planetas de menor distancia al sol, a mayor distancia al sol:");
console.log(arrayPlanetasFinal);


