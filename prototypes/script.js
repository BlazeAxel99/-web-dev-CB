
let str= "Asdasd"                     //3 lvl from null
let num = 233                         //3 lvl from null
let bool = true                       //3 lvl from null
let arr = [243,436,6,346]              //3 lvl from null
let obj = {a:10,b:'asasddd'}            //2 lvl from null
let fun  = function(){console.log('yay!')} //3 lvl from null

// if x and y are not primitive 
// x == y : true <- what does that mean?
// this means they are reference to same obj in memory

console.log('= = = = = = = types = = = = = =')
console.log('typeof String',typeof String)
console.log('typeof Object',typeof Object)
console.log('typeof Boolean',typeof Boolean)
console.log('typeof Number',typeof Number)
console.log('typeof Array',typeof Array)
console.log('typeof Function',typeof Function)

console.log('= = = = = = = proto chain = = = = = =')
console.log(str.__proto__.__proto__==obj.__proto__)
console.log(num.__proto__.__proto__==obj.__proto__)
console.log(bool.__proto__.__proto__==obj.__proto__)
console.log(arr.__proto__.__proto__==obj.__proto__)
console.log(fun.__proto__.__proto__==obj.__proto__)

// Eyerything indirectly inherits from the same thing
// that obj is inherited from 
//i.e. in JS, everythng is essentially an Object

console.log('= = = = = = = prototypes = = = = = =')
console.log(obj.__proto__== Object.prototype)
console.log(str.__proto__== String.prototype)
console.log(num.__proto__== Number.prototype)
console.log(bool.__proto__== Boolean.prototype)
console.log(arr.__proto__== Array.prototype)
console.log(fun.__proto__ == Function.prototype)

// String.prototype inherits from Object.prototype

let x = Object.create(Boolean.prototype)