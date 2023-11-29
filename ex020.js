function main(){
    va = 10
    va2 = 1008989
    resto = 0   
    
    while (va2 != 0){
        resto = va % va2
        va = va2
        va2 = resto 

    }
   return va;
}

var lo = main()
console.log( 'o mdc é ' + lo)