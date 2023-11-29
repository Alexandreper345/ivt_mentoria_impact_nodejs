// Escreva um programa que conte as vogais de um número 

function vogais(string){
               
        var cont = 0;

        for(var i = 0; i < string.length; i++){
            if (string.charAt(i) == "a" || string.charAt(i) == "e" ||  string.charAt(i) == "o" ||  string.charAt(i) == "i" ||  string.charAt(i) == "u"){
                cont++;

            }
        }
        console.log(`o tanto de vogais que tem na sua string é de ${cont}`)
    }

vogais('alexandre')