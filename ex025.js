function primenumber (num){
    for (var divisor = 2; divisor < num; divisor++)
    if (num % divisor == 0) return false;
    return true; 
}

var determinadoNumero = 10000;

for(var i = 2; i < determinadoNumero; i++) if (primenumber(i)) console.log(i);