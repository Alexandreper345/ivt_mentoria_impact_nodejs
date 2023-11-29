function encontramos(arr){
    const maior = Math.max(...arr);
    const menor = Math.min(...arr);
    const diferenca = maior - menor;
    return diferenca;
}

const array = [1,3,4,8,10,2,22]
const diferenca = encontramos(array)
console.log(diferenca)