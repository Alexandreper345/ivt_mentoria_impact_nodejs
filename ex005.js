//Escreva um programa que verifica se o número é primo


function primo(n){

    if ((n % 2 != 0 || n == 2) && n >1 ){
        
        console.log('é primo')


    } else {
     console.log('não é primo')
    }

} 

console.log(primo(5))