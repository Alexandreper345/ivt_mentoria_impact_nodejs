function menor(){
    let numeros = [ 10, 20 ,1,30, 40,1010101010101001]
    let menornumero = numeros[0];

    for( let i in numeros){
        let numero = numeros[i]
        
        if (menornumero > numero){
            menornumero = numero;
            

        }

    }
    return menornumero
}

console.log(menor())