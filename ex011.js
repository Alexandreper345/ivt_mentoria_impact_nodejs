//escreva um programa que verifique se uma string é um palíndromo

var listapalavras = ['ovo','asa','subir_no_onibus']



function verifique(palavra){
    let totaldeletras = palavra.length;
    let letrasconf = Math.floor(totaldeletras / 2 )
    for (let i = 0; i < letrasconf; i++){
        let letras = palavra[i]
        let indice = i;
        let indicecomp = totaldeletras - 1 - indice;
        let letrasacomp = palavra[indicecomp];
        if (letras != letrasacomp){
            return false;
        }

    }
    return true;

}


listapalavras.forEach((palavra,ind) => {
    if (verifique(palavra)) {
        console.log("a palavra", palavra, "é palindromo")
    } else {

        console.log("a palavra", palavra, "não é palindromo")
    }

})