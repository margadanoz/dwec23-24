//Variable que almacena numero ingresado pro prompt:
let numerosUsuario;

//arrays que usaremos para ordenar los números y encontrar Kaprekar:
let arrayMinuendo = [];
let arraySustraendo = [];

//Variable que almacenará los numeros del usuario elemento a elemento en formato string:
let arrayNumeros = [];

//Variable que almacenará los números introducidos pro el usuario que aún están como string
//a Numbers antes de compararlos en la funcion compruebaSiSonIguales();
let arrayNumerica = [];

//Variables para almacenar los numbers finales con los operaremos
//Sus nombres ya definen su funcion:
let minuendo;
let sustraendo;

//Primera funcion que pedirá los numeros al usuario:
pedirDatos();

function pedirDatos(){

    do{

        numerosUsuario = prompt("Ingresa un número de 4 dígitos.\n"+
                        "Como máximo puedes repetir dos cifras.");
    
    }while(numerosUsuario.length !== 4);

    //Cuando sea de cuatro números entonces pasamos el string a chars independioentes
    //en un array:
    arrayNumeros = [...numerosUsuario];

    //Y pasamos cada elemento que nos pasan como string a un array de números:
    arrayNumerica = arrayNumeros.map(Number);
        
    //Aqui ya salen como numbers:
    //console.log(arrayNumerica);

    //Si rtodo va bien llamammos a la funcion que comprueba si hay mas repetidos de los que deberia:
    compruebaSiSonIguales();
}


//funcion que comprobará si los digitos son iguales o diferentes:
//Si hay tres o cuatro digitos iguales no dejará avanzar el código
//Si solo hay dos repes sí
function compruebaSiSonIguales(){

        //Boolean y contador para filtrar si se repiten más de 2 números:
        let repetidos = 0;
        let numeroInvalido = false;

        //Comprobamos si hay más de dos números que se repitan:
        //Posicionamos i al principio del array y j como i+1 para ir comparando el primer numero con el segundo
        //y aSi sucesivamente
        for(let i = 0; i < arrayNumerica.length; i++){

            //console.log(arrayNumerica[i]);

            for(let j = i+1; j < arrayNumerica.length; j++){

                //Comparamos los elementos que hay dentro del array:
                if(arrayNumerica[i] === arrayNumerica[j]){

                    //Aumentamos el contador cada vez que se haya una coincidencia
                    //porque no pueden haber 3 numeros repetidos o 4, como max
                    //pueden ser dos
                    repetidos++;
                    
                    //console.log(arrayNumerica[j]);
                }
            }
        }
        //Si hay más de 2 repetidos nuestro número no será válido.
        if(repetidos > 2){

            numeroInvalido = true;

        }else{

            numeroInvalido = false;
                }
        
        //Si llegados a este punto el número es válido llamamos
        //a la función que lo ordenará, primero sacaremos el minuendo:
        if(!numeroInvalido){

            ordenaMinuendo(arrayNumerica);


        }else{

            //Si no es válido no dejaremos avanzar el código:
            console.log("Su número es inválido, no pueden haber más de dos números que se repitan.");

                    //Si el número no es válido volvemos a pedir los datos hasta que sea válido:
                    pedirDatos();
        }
}

//Función ordenará los números para sacar el número que será el minuendo
//Es decir, sacará el número más grande
function ordenaMinuendo(arrayNumerica){

       //Hacemos una copia del array original:
       arrayMinuendo = [...arrayNumerica];

       //Hacemos copia del array original metiendo elemenrto a elemento,
     //aqui ya son numbers:
     arraySustraendo = [...arrayNumerica];

       //Ordenaremos los números de mayor a menor:
       //Para que formen lo que será el minuendo de la resta
       arrayMinuendo = arrayMinuendo.sort((a, b) => b - a);

       //Pasamos el contenido del array a variable para tener yun numero
        //de cuatro cifras, pero aqui aun será string:
        minuendo = arrayMinuendo.join('');

        //Ahora lo pasamos a Number:
        minuendo = +minuendo;

             //Llamamos a la funcion que transformará el contenido de los arrays
            //En variables numericas sobre las que operaremos, aqui llamamos
            //a la que ordenará de menor a mayor para formar el sustraendo
            ordenaSustraendo(arraySustraendo);

            //Devolvemos un number
        return minuendo;
}


function ordenaSustraendo(arraySustraendo){

     //Ordenamos mediante metodo sort de dos formas distintas
    //La primera ordena los números de menor a mayor:
       arraySustraendo = arraySustraendo.sort((a,b)=> a - b);

       //Como no podemos pasar el array durectamente a number
       //necesitamos el paso intermedio de pasarlo primero a string
        sustraendo = arraySustraendo.join('');
        
        //Y luego ya podemos almacenarlo en una variable
         //como number al cambiarle el signo
        sustraendo = +sustraendo;

        return sustraendo;
    
}

/**Funcion encargada de  realizar los calculos que encontraran la constante de Kaprekar*/
realizaCalculos(minuendo,sustraendo);

function realizaCalculos(minuendo, sustraendo){

    //Boolean para parar el bucle cuando lleguemos al número de Kaprekar.
    let esKaprekar = false;

//Mientras el resultado no sea Kaprekar, 6174 estará haciendo calculos el bucle:
   while(!esKaprekar){
    
    //Actualizamos el valor dela variable del resultado:
    let resultadoResta = 0;
   
        resultadoResta = minuendo - sustraendo;

        //Si es Kaprekar se detendrá el bucle:
        if(resultadoResta === 6174){

            esKaprekar = true;
            console.log("Resultado final:",resultadoResta);
        
            //Sino continuaremos por aqui, llamando a las funciones encaragadas
            //de organizar los numeros y devolvernoslos para continuar
            //haciendo iteraciones en el bucle y sus operaciones hasta hallar la constante de Kaprekar:
        }else{
            
            //Si no llegamos a 6174 ahora el minuendo será el resultado de la resta:
            minuendo = resultadoResta;

            //Pasamos el number a string porque los numbers nio son iterables y necesitamos que lo sea
            minuendo = minuendo.toString();

            //pasamos a array convirtiendolo en number cada elementro:
            minuendo = [...minuendo].map(Number);

            //Como minuendo y sustraendo estan en funciones separadas, copiamos la de minuendo
            //donde ya estan los elementos separados en forma de numbers 
            //para que nos devuelva tb el sustraendo
            let auxiliarSustraendo = [...minuendo];

            //Y ese array lo pasamos llamando a la funcion que nos ordenará el array de minuendo
            //cuyo resukltado ya ordenado nos devuelve en forma de variable Number para seguir operando:
            minuendo = ordenaMinuendo(minuendo);

            //Y ese array lo pasamos llamando a la funcion que nos ordenará el array de minuendo
            //cuyo resukltado ya ordenado nos devuelve en forma de variable Number para seguir operando:
            sustraendo = ordenaSustraendo(auxiliarSustraendo);
                   
        }

    }

    if(esKaprekar){

        console.log("Felicidades! Has encontrado el número de Kaprekar!");

    }

}




