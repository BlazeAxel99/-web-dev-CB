//oops in js
//allows to create objects without defining the class


//one way of creating js object (JSON- Javascript Object Notation)

//Another Way
function Fruit(taste,color){
    this.color = color;
    this.taste = taste;
}
//new keyword
let mango = new Fruit("sweet","yellow");
let orange = new Fruit("sour","orange")

//one way
var apple={
    taste:"sweet",
    color:"red",
}
//Class keyword (ECMAScript 2015)

class FruitClass{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
};
//Functions- Declaration,Function Expressiom
let kiwi = new FruitClass("sour","green");
//Class Expression
let FruitExpression = class{
    constructor(taste,color){
        this.color=color;
        this.taste=taste;
    }
};
let kiwi2 = new FruitClass("sour","green");

/*
var bird={
    x:100,
    y:20,
    color:"blue",
    eggs:["one","two","three"],
     
    fly:function(){
        console.log("bird is flying",this.x,this.y);
    }
    
};
//for loop
for(let i=0; i<bird.eggs.length; i++){
 console.log(bird.eggs[i]);
}
// for each loop
bird.eggs.forEach(function(val,idx){
   console.log(idx,val);
})
*/