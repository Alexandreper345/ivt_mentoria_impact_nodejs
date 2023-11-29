function verificar(string, palavra){
   var correspondencias = string.split(palavra).length - 1
   
   
    if (correspondencias > 0 ){
        return `A palavra "${palavra}" aparece ${correspondencias} vezes na frase`
    }else{
        return `a palavra "${palavra}" não foi encontrada `
    }
}

let letra = "valor"
let frase = `eu tenho um ${letra} de 4 reais mas o ${letra} do produto é de 8 reais`
let ver = verificar(frase,letra);
console.log(ver)