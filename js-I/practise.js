let a =10
console.log(a)

let b = [1,2,3,4,5]
console.log(b)
console.log('hello world!')

/*
JS
variables,array,functions,loops,classes,objects */

c=20
var d = 30;
let e = 50;

let arr = ["Apple","Mango","Guavawa"]
console.log(arr);

for(let i=0;i<5;i++){
    console.log(arr[i]);
}
arr.push("Banana");//inset at back
arr.pop();//remove from back
arr.shift();//remove at front
arr.unshift("Kiwi");//insert at front
arr.indexOf("Kiwi");//finds you the index


/*
function fun(){
    let a = 5
    if(a==5){
        let b=10;
        console.log("inside b",b);
    }
    console.log("outside",b);
}

function fun2(){
    let a = 5
    if(a==5){
        var f=10;
        console.log("inside f",f);
    }
    console.log("outside",f);
}
function fun3(){
    let a = 5
    if(a==5){
         g=10;
        console.log("inside g",g);
    }
    console.log("outside",g);
}
fun3()
console.log("global",g);
*/

function square_root(n){
    console.log(Math.sqrt(n));
    return "hello";/*this will return hello in place of undefined */
    
} 

/* Function Hoisting */
var sqrt_n = function(){
    console.log("In second sqrt fn");
    return
}
