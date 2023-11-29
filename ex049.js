function verificarseépotencia(arr){

    for (let i = 0; i < arr; i++){
        if (arr === 2 ** i ){
            return true
        }
    }
    return false
}

let number = 4
let ver = verificarseépotencia(number)
console.log(ver)