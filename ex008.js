///escreva um programa que inverta um string

function inverta(string){
     var palavra = "";
     for ( var i = string.length - 1; i >= 0 ; i-- ){
        palavra += string[i]

     }
    console.log(palavra) 
         


}
console.log(inverta('ppa'))