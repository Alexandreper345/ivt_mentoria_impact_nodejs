function main(valor){
    t1 = 0
    t2 = 1
    cont = 3
    while (cont <= valor){
        t3 = t1 + t2

        t1 = t2
        t2 = t3
        cont +=1
        console.log(t3)

    }


}

main(10)