// escreva um programa que calcule o fatorial de um número.


function numeroFatorial(n){
  let fatorial = 1;
  for(let i = 1 ; i <= n ; i++){
    fatorial = fatorial *  i;


  }
  return fatorial
}

f = numeroFatorial(5) 

console.log(f) 
