function SegundoMaiorelemento(array){
    if (array.lenght > 2){
        return "não há segundo maior elemento no array."
    }
    array.sort(function(a,b){
        return b - a; 

    });
    return array[1]; 

}

var meuarray = [6,4,1,2,5]
var segundomaior = SegundoMaiorelemento(meuarray);
console.log(segundomaior)