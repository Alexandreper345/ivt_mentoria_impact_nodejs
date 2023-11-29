function fatorialrec(n){
    if (n === 0) return 1;
    if (n === 1) return 1;
    return n * fatorialrec(n - 1)
}

console.log(fatorialrec(10))