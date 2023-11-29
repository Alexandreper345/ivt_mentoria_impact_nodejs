function SegundoMenorelemento(array){
    if (array.lenght <2){
        return "não há segundo menor elemento no array."
    }
    array.sort(function(a,b){
        return a - b; 

    });
    return array[1]; 

}

var meuarray = [5,3,1,5,6,]
var segundomenor = SegundoMenorelemento(meuarray);
console.log(segundomenor)