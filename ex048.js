function verificar(arr){
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    let letras = arr.toLowerCase().replace(/[^a-z]/g, "")

    for (let letra of alfabeto){
        if (!letras.includes(letra)){
            return false
        }
    }
    return true
}

let frase = "The quick brown fox jumps over the lazy dog."
let ver = verificar(frase)
console.log(ver)