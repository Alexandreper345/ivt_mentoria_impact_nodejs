function encontrarmaior(matriz){
    let maior = Math.max(...matriz.flat());
    return maior
}

const Matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
const maiorelemento = encontrarmaior(Matriz);
console.log("o maior elemento da matriz é", maiorelemento)