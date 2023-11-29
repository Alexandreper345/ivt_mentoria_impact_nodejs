function soma(n){
    if (n === 0){
        return 0
    } else {
        return (n % 10) + soma(Math.floor(n / 10))
    }
}

let so = soma(2)
console.log(so)