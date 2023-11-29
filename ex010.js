// estava um programa que remova elementos duplicados de um array.

function removearray(){
    let elementos = [1,1,2,3,4,5,6,7]
    let num = elementos.filter((elem, index, arr) => arr.indexOf(elem) === index)
    console.log(num)

}

removearray()