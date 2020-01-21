//scoping

// console.log(x);
// console.log(a);
// function sample(params) {
//     var x =12;
//     let a = 15;

//     console.log(x);
//     console.log(a);

//     if(true){
//         var x = 15;
//         let a = 14;

//         console.log(x);
//         console.log(a);
//     }

//     console.log(x);
//     console.log(a);
// }


// function constSample() {
//     const x = [1,2,3];

//     console.log(x);

//     x.push(5);

//     console.log(x);

//     x = 5;

// }

// constSample();

// let a = [3,4,12];

// let b = [1,2, ...a,5];

// // console.log(b);

// function sampleSpread(x,y) {
//     console.log(x);
//     console.log(y);
// }

// // sampleSpread(...a);


/**
 * destructing
 */

// function restSample(...args) {
//     var [,a,b=4] = args;

//     console.log(a);
//     console.log(b);
// }

// restSample(1,2);

// var x = 12;
// var y = 33;

// var obj = {
//     x,
//     y,

//     func1 () {
//         return 5;
//     }
// }

// console.log(obj);

/**
 * default values expression
 */

 //global
 //any expression 
 //return value of a function call

//  function value() {
//      return 5;
//  }

//  var y = 10;

//  function defaultValues(x = y, a = x+1, b = value()) {
//      console.log(x);
//      console.log(a);
//      console.log(b);
//  }

//  defaultValues();

/** 
 * arrow function
 */

// var A = function() {
//     this.x = 10;
//     var self = this;

//     this.func = () => {
//         this.x;
//     }
// }


// //callback

// var a = new A();

/**
 * Classes
 */



// console.log(a.func());



//  var sum = (x,y) => {return x+y};

//  console.log(sum(3,4));

 class MyClass{
     constructor(){
         this.var = 1;
         this.var2 = 2;
     }

     getVar1(params) {
         return this.var;
     }

     getSum(){
         throw 'Unimplemented';
     }
 }

 class MyChildClass extends MyClass{
    getSum(){
        return this.var + this.var2;
    }
 }


 let myClass = new MyChildClass();

 console.log(myClass.getSum())