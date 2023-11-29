function Ordem(){
    lista = [20,10,40,40]
        
    for (var i = 0; i < lista.length; i++){
        for (let N = 0; N < lista.length - 1; N++){

            if (lista[N] > lista[N + 1]){
                aux = lista[N]
                lista[N] = lista[N + 1]
                lista[N + 1] = aux
                
            }
        }

    }
    console.log(lista)

}
Ordem()