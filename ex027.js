function remove(){
    var escrito = "aconteceu desse jeito assim ".replace(/\s+/g, "")
    return escrito
}

var lo = remove()
console.log(lo)