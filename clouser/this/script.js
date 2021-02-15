function checkThis (){
    console.log(this)
}

let obj = {
     a: 10,
     b: 'asdsa',
     c: true,
     d: function(){
         console.log(this);
     },
     10: 'kjkjkjk',
     true: 'hahaha',
     e: {
         l: 234,
         m: 'sggsdg',
         n: function(){
              console.log(this)
         },
     },
}