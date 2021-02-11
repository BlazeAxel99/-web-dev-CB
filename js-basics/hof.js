function greet(name){
    console.log('Hello',name)
 }

function createGreeter(greeting){
    function greet(name){
       console.log(greeting, name())
    }
    return greet

}
function getName(){
    return document.getElementById('namebox').value
}

let g1 = createGreeter('Good Morning')
let g2 = createGreeter('Good Eve')

console.log(typeof g1)
console.log(greet('kash'))
console.log(greet('Arnav'))

console.log(g1('kash'))
console.log(g1('Arnav'))

console.log(g2('kash'))
console.log(g2('Arnav'))