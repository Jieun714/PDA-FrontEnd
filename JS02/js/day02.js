"use strict"
/**
 * let, var, const
 */

//var a=undefined
// console.log('a', a);

let a =30;
{
    let a=10;
    console.log('block a', a);
}
console.log('global a', a);


var su =30;
{
    var su=10;
    console.log('block su', su);
}
console.log('global su', su);

console.log('----------------------------');

for(let i=1; i<=5; i++) {
    console.log('i' , i);
}
// console.log('i', i);

console.log('----------------------------');

let tf='';
if(tf){
    console.log('true');
} else {
    console.log('false');
}

console.log('----------------------------');

let arr=[10, 20, 30] //배열 

let fn=function() {
    console.log('function fn[]');  
}
fn();
console.log('arr.length', arr.length);

for(let i=0; i<arr.length; i++){
    console.log('arr[i]' ,arr[i]);
}

console.log('----------------------------');

console.log(typeof arr);
console.log(typeof (arr));
console.log(typeof fn);
console.log(typeof (fn));

console.log('----------------------------');

let person ={};
console.log(typeof person);
console.log(Array.isArray(arr));
console.log(Array.isArray(person));

console.log('----------------------------');

let x = '10';
let y = 20;
let z = (x+y);
console.log(typeof z, z);
console.log(typeof (10/2), 10/2);
console.log(typeof ('10'/2), ('10')/2);
console.log(typeof ('a'/2), ('a')/2);

console.log('----------------------------');


