// verificar se o numero é perfeito

function numeroperfeito(number){
    somadivisores = 0 

    for (let i = 1; i < number; i++){
        if (number % i === 0 ){
            somadivisores += i
        }
    }
    if (somadivisores === number){
        return true
    }else{
        return false
    }
}
let numero = 8
var n = numeroperfeito(numero)


if (n){
    console.log(`o numero ${numero} é um numero perfeito`) 
}else{
    console.log(`o numero ${numero} não é um numero perfeito`) 
}