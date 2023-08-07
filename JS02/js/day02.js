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

console.log(Boolean(''), Boolean(' '));
console.log(Boolean(0), Boolean('0'));
console.log(Number('10'), Number('aa'), Number(null));
Number(undefined);
console.log(String(10));

console.log('----------------------------');

let name ='hong gil dong';
let jumsu = 100;
console.log('name :', name, ', jumsu :', jumsu);
console.log(`name : ${name}, jumsu : ${jumsu}`)

console.log('----------------------------');

/*
단항연산자
-> ++(증감연산자), --(감소연산자)
이항연산자
-> 산술연산자 : +,  -,  *,   /,   %,  ** 

 */

let a1 = 10;
let b = a1++;
console.log(a1, b);

let t1=10;
let t2 = 3;
console.log(t1+t2);
console.log(t1*t2);
console.log(t1/t2);
console.log(t1%t2);
console.log(t1**t2);

console.log(10+20+'aaa');
console.log('aaa'+10+20);

console.log('----------------------------');

/* 비교연산 */
console.log(10>=10);

let a2 ='10';
let b2 = 10;
console.log(typeof a2, typeof b2);
console.log(a==b);
console.log(a===b);

console.log('----------------------------');

let m1={name: 'hong', age:20};
let m2 = m1;
let m3 ={name:'hong', age:20};

console.log(typeof m1, typeof m2, typeof m3);
console.log(m1==m2, m1===m2); //ture
console.log(m1==m3, m1===m3); //false

console.log('----------------------------');

console.log(null==undefined); //true
console.log(null===undefined); //false
console.log(false==''); //ture
console.log(false==0); //true
console.log(false===0); //false

console.log('----------------------------');

/* 복합대입연산 */
let a3 = 10;
console.log('a3', a3);
a3 += 30;
console.log('a3', a3);
a3/=4;
console.log('a3', a3);

let x1 = 10;
let x2 = 20;
let x3 = 4;

x3 *= x1+x2;
console.log(x3);

console.log('----------------------------');

let max;
let su1 = 10;
let su2 = 20;
max = (su1>su2)? su1:su2;
console.log(max);

console.log('----------------------------');

/* 비트 연산 0- shift 연산 */
let a4 = 10;
console.log(a4>>2);
console.log(a4<<2);

console.log('----------------------------');

/* 조건문 - if */
let kor = 85;

/* 합격/불합격 */
if(kor>=60){
    console.log('합격');
} else{
    console.log('불합격');
}

console.log('----------------------------');


