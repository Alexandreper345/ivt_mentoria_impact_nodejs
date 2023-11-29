function posnegzero(number){
    

    if (number > 0){
        console.log("O NUMERO " + number + " é positivo")
    } else if (number < 0 ){
        console.log("O NUMERO " + number + " é negativo")
    }else{
        console.log("O NUMERO " + number + " é zero")
    }
}

var lo = posnegzero(0)
console.log(lo)