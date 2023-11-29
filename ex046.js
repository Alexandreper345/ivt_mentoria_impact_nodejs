function contarstring(string){
    let contador = 0
    for (let i = 0 ; i < string.length; i++){
        contador++
        
    }
    return `a palavra ${string} tem ${contador} letras`
}

let palavra = "alexandre"
let chamar_a_funcao = contarstring(palavra)
console.log(chamar_a_funcao)