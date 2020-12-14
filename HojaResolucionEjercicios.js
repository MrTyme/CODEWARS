//creacion de un array sin usar el metodo clasico
function arr(n) {
    let newArr = [];
    let i = 0;
    while (i < n) {
        newArr.push(i);
        i++;
    }
    return newArr;
}
//solve


///////////////////////////////////////////////////////////

//exponentes
function sumaExp(numbers = []) {
    var res = 0;

    for (let i = 0; i < numbers.length; i++) {
        res += Math.pow(numbers[i], 2);
    //el += es para acumular la suma a la potencia de cada posicion
    //definir el array que se va a operar.
    }
    
    return res;
}
//solve

///////////////////////////////////////////////////////////

//gravity flip.

const flip=(d, a)=>{
    // la letra "d" la columna del cubo y se le pide que se 
    // desplace entra derecha o izquiera Right o Left

    if (d === 'R') {
        return a.sort((a, b) => a-b);
        //si es a la derecha le pedimos que compare y ordene
        //siempre recibe una funcion.

        //como se desplaza a la derecha, le pedimos 
        //que reste la letra "a" a la letra "b"
    }

    if (d === 'L') {
        return a.sort((a, b) => b-a);
    }
}

/*
    lo mas comun en este tipo de 
    ejercicios es utilizar el metodo .sort de los arrays
    que significa ordenar.

    el cual es un metodo que se usa para ordenar de manera 
    descendente o acendente, dependiendo de como que coloque
    el orden de comparacion
*/
//solve


///////////////////////////////////////////////////////////


//Digital root

function digital_root(n) {
    let i = 0, newArr = new Array();
    let acum;

    //parseo la variable y la separo con la funcion split
    newArr[i] = n.toString().split('');
    console.log(newArr[0]);

    
    
}

digital_root(16);
///////////////////////////////////////////////////////////