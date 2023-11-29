function mediaar(){
    let lis = [4,2,3,4,5,6]
    let soma = 0 
    for (var i = 0; i < lis.length; i++){
        soma += lis[i]

    }
    let media = soma / lis.length;
    
    return media;

}

console.log(mediaar())