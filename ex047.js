function matriz(arr){
    return arr.filter((item, index) => arr.includes(item, index + 1))
}
let matrizz = [1,3,4,5,6,7,7,7,7,8,9,9,9]
let novamatriz = matriz(matrizz)
console.log(novamatriz)