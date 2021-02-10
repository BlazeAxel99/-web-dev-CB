console.log(beta())

function alpha(){
    return 'A'
}
console.log(beta())
/*console.log(gamma()) will throw error */
function beta(){
    return 'B'
}
let gamma = function(){
    return "C"
}
console.log(beta())
console.log(gamma())

function area(height,width){
    if(/*typeof width === 'undefined'*/ !width ){
        return Math.PI * height * height
    }
    return height * width
}

console.log('area 3,4',area(3,4))
console.log('area 4',area(4))