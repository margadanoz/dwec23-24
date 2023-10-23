//Arrays que emmagatzemarán la info dels plametes
//Después llenaremos los objetos planeta que creemos con los datos
//de estas arrays:
const nombres = ["Mercurio", "Venus", "Marte", "Jupiter", "Saturno"];
const distanciasSol= [9.54, 0.72, 1.52, 5.20, 0.39];
const tamañoRelativo = [0.38, 0.95, 5.3, 11.2, 9.45];
const fechaDescrubrimiento = ["265 a.c", "1610", "1610", "sVII", "1610"] ;

//Array on emmagatzemarem els objectes planeta:
const arrayPlanetas = [];

//Creamos la clase, según ES6 donde se creará el objeto planeta:
class Planeta{

    //constructor de Planeta que almacenará sus propiedades,
    //que posteriormente llenaremos con los datos de las arrays:
    constructor(nombrePlaneta,distanciaSol,tamañoRelativo, fechaDescrubrimiento){

        this.nombrePlaneta = nombrePlaneta;
        this.distanciaSol = distanciaSol;
        this.tamañoRelativo = tamañoRelativo;
        this.fechaDescrubrimiento = fechaDescrubrimiento;
    }

    //Declaramos los métodos que vamos a usar en la clase Planeta,
    //en este caso simplemente muestran la informacion:
    muestraInfo(){

        return "Nombre planeta: " + this.nombrePlaneta + "\n"+
        "Distancia del planeta al sol: "+this.distanciaSol+
        "\n"+
        "Tamaño relativo respecto de la tierra: "+this.tamañoRelativo + "\n"+
        "Fecha de descubrimiento: "+this.fechaDescubrimiento;
    }
}

//Creamos el bucle donde iremos almacenando la informacion
//en los objetos planeta que creemos, con la info que proviene de los arrays:
for(let i = 0; i < nombres.length; i++){

    //Primero creamos los objetos planeta:
    const planeta = new Planeta(nombres[i],
                    distanciasSol[i],
                    tamañoRelativo[i],
                    fechaDescrubrimiento[i]);
    
    //Después almacenamos en el array de los planetas los objetos
    //quye vamos creando:
    arrayPlanetas.push(planeta);
    
}

//Aqui ya estaría contenida la info de los objetos que hemos ido creando:
//console.log(arrayPlanetas);

//Para ordenar los planetas con la distancia al sol.
arrayPlanetas.sort((a, b) => a.distanciaSol - b.distanciaSol);

//Creamos el objeto de la clase date para ofrecerlo posteriormente en cgl:
let fecha = new Date();

console.log("Planetas ordenados de menor a mayor distancia al sol:");
console.log(arrayPlanetas);
console.log("Informacion ofrecida el: ", fecha);