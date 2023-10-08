//1a PARTE:
//Variables para almacenar en grados celsius:
//2010:
let any2010Juny = 25.8;
let any2010Julol = 28.6;
let any2010Agost = 30.1;

//2015
let any2015Juny = 26.5;
let any2015Juliol = 29.3;
let any2015Agost = 30.8;

//2020
let any2020Juny = 27.2;
let any2020Juliol = 29.9;
let any2020Agost = 31.5;

//2A PARTE:
//Calculo de temperatura media por año i almacenaje en variables separadas:
//Primero sumamos la temperatura de los 3 meses
let suma2010 = any2010Juny + any2010Julol + any2010Agost;
let suma2015 = any2015Juny + any2015Juliol + any2015Agost;
let suma2020 = any2020Juny + any2020Juliol + any2020Agost;

//Luego dividimos el total entre el numero de meses para sacar la media:
let mitjanaAny2010Celsius = suma2010 / 3;
let mitjanaAny2015Celsius = suma2015 / 3;
let mitjanaAny2020Celsius = suma2020 / 3;


//3A PARTE:
//Convertir la temperatura media de Celsius a Fahrenheit y Kelvin
//Conversion a Fahrenheit:
let mitjanaAny2010Fahrenheit = (mitjanaAny2010Celsius * 9/5) + 32;
let mitjanaAny2015Fahrenheit = (mitjanaAny2015Celsius * 9/5) + 32;
let mitjanaAny2020Fahrenheit = (mitjanaAny2020Celsius * 9/5) + 32;

//Conversion a Kelvin:
let mitjanaAny2010Kelvin = mitjanaAny2010Celsius + 273.15;
let mitjanaAny2015Kelvin = mitjanaAny2015Celsius + 273.15;
let mitjanaAny2020Kelvin = mitjanaAny2020Celsius + 273.15;

//4aPARTE
//Utilizar el operador ternario para determinar si la media es mayor a 30:
let superatAny2010 = (mitjanaAny2010Celsius > 30) ? "Sí, la temperatura media de 2010 supera los 30 grados Celsius" : "No,en 2010 la temperatura media no es superior a 30 grados Celsius.";

let superatAny2015 = (mitjanaAny2015Celsius > 30) ? "Sí, la temperatura media de 2015 supera los 30 grados Celsius" : "No,en 2015 la temperatura media no es superior a 30 grados Celsius.";

let superatAny2020 = (mitjanaAny2020Celsius > 30) ? "Sí, la temperatura media de 2020 supera los 30 grados Celsius" : "No,en 2020 la temperatura media no es superior a 30 grados Celsius.";

//5a PARTE:
//Mostrar por consola las tempraturas medias en Celsius,Fahrenheit i Kelvin
//Y si se superaron los 30 grados celsius o no de media

//MOSTRAMOS POR CONSOLA RESULTADO DE LA 4aPARTE
//¿Se superaron los 30 grados Celsius de media?
console.log("Se superaron los 30 grados Celsius en 2010?");
console.log(superatAny2010);
console.log("Se superaron los 30 grados Celsius en 2015?");
console.log(superatAny2015);
console.log("Se superaron los 30 grados Celsius en 2020?");
console.log(superatAny2020);

//Temperaturas medias de cada año en Celsius:
console.log("MEDIAS CELSIUS");
console.log("En 2010 la media en Celsius fue de", mitjanaAny2010Celsius);
console.log("En 2015 la media en Celsius fue de",mitjanaAny2015Celsius);
console.log("En 2020 la media en Celsius fue de",mitjanaAny2020Celsius);

//Temperaturas medias de cada año en Fahrenheit:
console.log("MEDIAS FAHRENHEIT");
console.log("En 2010 la media en Fahrenheit fue de", mitjanaAny2010Fahrenheit);
console.log("En 2015 la media en Fahrenheit fue de",mitjanaAny2015Fahrenheit);
console.log("En 2020 la media en Fahrenheit fue de",mitjanaAny2020Fahrenheit);

//Temperaturas media de cada año en Kelvin:
console.log("MEDIAS KELVIN");
console.log("En 2010 la media en Kelvin fue de", mitjanaAny2010Kelvin);
console.log("En 2015 la media en Kelvin fue de",mitjanaAny2015Kelvin);
console.log("En 2020 la media en Kelvin fue de",mitjanaAny2020Kelvin);



