"user strict" /* 엄격하게 사용하기 위해 */

let a1 =[10, 20, 30];
let a2 = a1;

// console.log(a1 === a2);

// a1.forEach(item=>{
//     console.log(item);
// });

// console.log("==========================");

// a2[1] = 100;
// a1.forEach(item=>{
//     console.log(item);
// });

console.log("==========================");
/* 선언할 떄 ... => 메게변수 여러 개  */
let newA = Object.assign([],a1);
console.log(a1===newA); //false

newA[1] = 100;
a1.forEach(item=>{
    console.log(item);
});

let p1={name :'hong'};
console.log(p1);

Object.assign(p1,{age:20});
console.log(p1);

Object.assign(p1, {name:'park'});
console.log(p1);

console.log("==========================");




console.log("==========================");
