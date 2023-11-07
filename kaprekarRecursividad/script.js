//Creamos la variable donde almacenaremos el número que nos entren por el prompt:
let numerosUsuario;

//Creamos variable con la que contaremos el número de cifras repetidas
//Máximo se pueden repetir dos cifras:
let repetidos = 0;

//Pedimos el número por pantalla:
do{

    numerosUsuario = prompt("Ingresa un número de 4 cifras.\n"+
                        "Máximo pueden haber dos cifras que se repitan.");

    //pasamos el string que recibimos elemento a elemento:
    let arrayAuxiliar = [...numerosUsuario];

    //Ese array que son chars ahora lo pasaremos a numbers
    //para posteriormente poder hacer la comparación de si son iguales
    //o no, y cuantos se repiten:
    arrayAuxiliar = arrayAuxiliar.map(Number);

    //reiniciamos los repetidos para que no vaya sumando
    //en las distintas iteraciones:
    repetidos = 0;

    //Comprobamos que no hay más de dos cifras iguales:
    for(let i = 0; i < arrayAuxiliar.length; i++){

        for(let j = i + 1; j < arrayAuxiliar.length; j++){

            //Si coinciden sumamos repetidos, que sabemos que no 
            //podrá haber más de dos porque sino no es válido
            if(arrayAuxiliar[i] === arrayAuxiliar[j]){

                repetidos++;

            }
        }
    }
    //Condición de salida del bucle, si tiene más de dos repes, no es un número, su length
    //no es 4 o es null no vamos a salir del do-while
}while(repetidos > 2 || isNaN(numerosUsuario) || numerosUsuario.length !== 4 || numerosUsuario == null);


//Si hemos salido del bucle porque se cumplen las condiciones llamamos a la función
//que calculará el número de Kaprekar:
encontrarKaprekar(numerosUsuario);

//La función se ejecutará mientras no encontremos a Kaprekar
function encontrarKaprekar(numerosUsuario){

    //Condición para acabar con la repetición de la función:
    //Al hjacer la comparación estricta numerosUsuario se convertirá en number
    //Por eso más abajo utilizamos una variable auxuliar,
    //ya que los numbers no son iterables
    if(numerosUsuario === 6174){

        console.log("Felicidades, has encontrado el número de Kaprekar!");

        //return para parar la ejecución:
        return;
    }


    //Variable auxiliar con la que podremos iterar
    //Para poder ordenar los números:
    let numerosCadena = numerosUsuario.toString();

    //Separamos el string que recibimos por caracteres que ordenamos
    //con sort y que luego volvemos a juntar con join:
    let sustraendo = numerosCadena.split('').sort().join("");

    //Convertimos a number de nuevo:
    sustraendo = +sustraendo;

    //Para crear el minuendo hacemos lo mismo que arriba, 
    //solo que invertimos la resta de sort para ordenarlos de mayor a menor:
    let minuendo = numerosCadena.split('').sort((a,b) => b - a).join("");

    //Convertimos a number de nuevo:
    minuendo = +minuendo;

    //Hacemos la resta de los números ya ordenados:
    let resultado= minuendo - sustraendo;

    //Frase predefinida con las variables para que vaya imprimiendo:
    let impresionFrase = `Operación: ${minuendo} - ${sustraendo} = ${resultado}`;

    console.log(impresionFrase);

    //Le pasamos por parámetro a la función el resultado
    //en cuanto entre lo comparará con el condicional, si ya nos da
    //6174 parará la ejecución, sino continuará hasta hallarlo:
    encontrarKaprekar(resultado);  
}