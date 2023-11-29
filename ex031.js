function somarmatriz(matriz){
    let soma = 0 

    for (let i = 0; i < matriz.length; i++){
        soma += matriz[i].reduce((acc, curr) => acc + curr, 0);

    }
    return soma;

}
const Matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
const somarelemento = somarmatriz(Matriz);
console.log("a soma dos elementos da matriz é", somarelemento)