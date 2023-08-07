function fn_move1(){
    console.log('fn_move1-1');
    console.log('fn_move1-2');
}

fn_move1(); //함수 호출
console.log('----------------------------');
fn_move1();

console.log('----------------------------');

function fn_move2(irum, age){
    console.log(`name: ${irum}, age: ${age}`);
    console.log('움직입니다!!!');
}
fn_move2('hong', 20);

console.log('----------------------------');

function getSu(){
    let su = 100;
    return su;
}
let su = getSu();
console.log('su:' + su);

console.log('----------------------------');

/*
    두 개의 숫자를 입력 받아서 더하는 기능을 구현하시오.
*/

let su1 = 10;
let su2 = 20;

function addNums(num1, num2){
    return num1+num2;
}
let result = addNums(10, 20);
console.log(result);

console.log('----------------------------');

function prt(arg){
    console.log(arg, typeof arg);
}

prt(10);

console.log('----------------------------');

function prt2(arg){
    console.log(arg, typeof arg);
}

let arr = [10, 20, 30];
prt2(arr);

console.log('----------------------------');

let irum='kim'; //전역변수
function prt3(){
    var test='hong'; //지역변수
    console.log(irum, test);
}

prt3();
console.log('----------------------------');
// console.log(irum, test);

for(var i=1; i < 15; i++){
    console.log(i);
}
console.log(i);

console.log('----------------------------');

const prt4=function(){
    console.log('prt');
}
prt4();

const prt5=function(irum, age){
    console.log('irum', irum);
    console.log('age', age);
}
prt5('test', 20);
prt5();

console.log('----------------------------');

const show=function(...irum){
    for(let item of irum){
        console.log(item);
    }
}
console.log('-------- parameter 0 -------');
show();

console.log('-------- parameter 2 -------');
show('lee', 'kim');

console.log('-------- parameter 3 -------');
show('lee', 'kim', 'park');

console.log('----------------------------');

let arr1 = [10, 20, 30];
let arr2 = [100, 200, 300];
let arr3 = [...arr1, ...arr2]; //[10, 20, 30, 100, 200, 300]

let prt6=function(t){
    console.log(t[1]);
}
prt6(arr3);

console.log('----------------------------');

let add = function(a, b){
    return a+b;
}
let tot = add(10+20);
console.log(tot); //NaN

console.log('----------------------------');

let prt7=()=>"hong";
let result2 = prt7();
console.log(result2);

console.log('----------------------------');
let prt8 =()=>{
    console.log('test1');
    console.log('test2');
}
prt8();

console.log('----------------------------');

let prt9=(a, b)=>{
    console.log('a :', a, ', b :'+ b);
}
prt9('test1', 'test2');

console.log('----------------------------');

let fn=function(a, b, t1){
    console.log(a, b);
    // console.log(t1);
    t1(a, b);
}

let add2=function(su1, su2){
    console.log('add function : ', (su1+su2));
}

fn(10, 20, add2); //변수처럼 넣은 함수 = 콜백함수

console.log('----------------------------');

[10, 20, 30].forEach(function(item){
    console.log(item);
});

console.log('----------------------------');

[10, 20, 30].forEach((item)=>{
    console.log(item);
});
