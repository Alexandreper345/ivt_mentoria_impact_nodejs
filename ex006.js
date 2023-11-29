//Escreva um programa que calcule a média de uma array de números

function media(){
    let num = [10 , 5, 10 , 5 ,5]
    let soma = 0;
    

    for(var i  in num){
        soma += num[i]
    }

    var media = soma / num.length;
    console.log(`a media da array é ${media}`)

}

console.log(media())