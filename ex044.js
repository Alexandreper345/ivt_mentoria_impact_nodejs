function raizperfeita(number){
    let raiz = 0
    for (let i = 0; i <= Math.sqrt(number); i++){
        if(i * i === number ){
            raiz += i
        }
    }
    return raiz
}

let numero = 16 
let raiz = raizperfeita(numero)
if (raiz){
    console.log(" o numero " + numero +  " é uma raiz quadrada perfeita")
}else{
    console.log( " o numero " + numero +  " não é uma raiz quadrada perfeita")
}