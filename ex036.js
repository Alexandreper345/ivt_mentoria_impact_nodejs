function ordemnome(a,b){
    if (a.nome < b.nome){
        return -1;
    }
    if (a.nome > b.nome){
        return 1;

    }
    return 0
}
function ordene(){
    let array = [
        {nome: "joao"},
        {nome: "fabiano"},
        {nome: "abelha"},
        {nome: "alexandre"}
    ];
    array.sort(ordemnome);
    return array;
}
console.log(ordene())