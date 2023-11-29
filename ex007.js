// escreva um programa que  encontre o  maior elemento em um array.

function Maior(){
    let numeros = [1, 10, 20 ,30, 40,1010101010101001]
    let maiornumero = 0;

    for( let i in numeros){
        let numero = numeros[i]
        
        if (maiornumero < numero){
            maiornumero = numero;
            

        }

    }
    return maiornumero
}

console.log(Maior())