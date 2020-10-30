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



