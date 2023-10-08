/*
Se nos facilitan tres variables que contienen informacion sobre una ciudad.
let esCapital-->Una variable booleana
let numeroCiudadanos -->seria un number (numero entero)
let impuestoPorCiudadano -->seria un number (será un float)


esCapital: será cierta sí y sólo sí la ciudad es capital.
numeroCiudadanos: es el número de ciudadanos de ésta ciudad.
impuestoPorCiudadano: es el impuesto medio mensual que paga un ciudadano
    de esa ciudad.


Para nosotros, una Metropolis será una ciudad si bien es una capital con 
más de 100.000 ciudadanos o bien es ciudad con más de 200.000 ciudadanos
y una renta media de 720.000.000 al año.

Dad una expresión booleana con las tres variables de tal manera que sea
cierta si y solo si la ciudad es una metropolis.

Teniendo en cuenta las 3 variables, tiene que salir true.
*/

let esCapital = false;
let numeroCiudadanos = 200000;
let impuestoPorCiudadano = 300.4;

const primeraCondicion = esCapital && numeroCiudadanos > 100000;



const segundaCondicionA = numeroCiudadanos > 200000;
const segundaCondicionB = numeroCiudadanos * impuestoPorCiudadano * 12 >= 720000000;
const segundaCondicion = segundaCondicionA && segundaCondicionB;




const esMetropolis = primeraCondicion || segundaCondicion;

//const esMetropolis = (esCapital && numeroCiudadanos > 100000) || (segundaCondicion);

console.log("¿Es Metropolis?", esMetropolis);
