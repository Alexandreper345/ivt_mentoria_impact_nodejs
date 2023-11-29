function SegundoMenorelemento(array){
    if (array.lenght < 3){
        return "não há três menor elemento no array."
    }
    array.sort(function(a,b){
        return a - b; 

    });
    return array[2]; 

}

var meuarray = [4,5,2,1,6,7,8,3]
var segundomenor = SegundoMenorelemento(meuarray);
console.log(segundomenor)