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

if(kor>=90){
    console.log('수');
} else if(kor>=80){
    console.log('우');
} else if(kor>=70){
    console.log('미');
} else if (kor>=60){
    console.log('양');
} else {
    console.log('가');
}

console.log('----------------------------');

console.log(10>=10 && 10!=10); //false
console.log(10!==10 && 10>=10); //false
console.log(10==10 && 20>=20); //true
console.log(10>=10 || 10!=10); //true
console.log(10!=10 || 10>=10); //true

console.log('----------------------------');

/*
document.getElementById('btn').onclick=function(){
    let elekor = document.getElementById('kor');
    let kor = elekor.value;
    let result ='';
    if(kor>=90){
        result ='수';
    } else if(kor>=80){
        result ='우';
    } else if(kor>=70){
        result ='미';
    } else if (kor>=60){
        result ='양';
    } else {
        result ='가';
    }

    document.getElementById('result').innerHTML='국어 점수: ' + kor + ', 결과: '+result;

    elekor.value=''; //값 지우기
}
*/

/* if-else 문 */
/*
document.getElementById('btn').onclick=function(){
    let eleKor = document.getElementById('kor');
    let eleEng = document.getElementById('eng');
    let eleMath = document.getElementById('math');

    let kor = Number(eleKor.value); //숫자형으로 변환
    let eng = Number(eleEng.value);
    let math = Number(eleMath.value);

    console.log(kor, eng, math);
    let avg = (kor+eng+math)/3;

    let result ="<li> 평균점수 :"+avg + "</li>";
    if(kor>=90 && eng>= 90 && math >= 90){
        result += "<li> 성취도 : very good</li>";
    } else if(kor>=90 || eng>= 90 || math >= 90) {
        result += "<li> 성취도 : good</li>";
    } else{
        result += "<li> 성취도 : bad</li>";
    }

    document.getElementById('result').innerHTML = result;

    eleKor.value=''; //값 지우기
    eleEng.value=''; //값 지우기
    eleMath.value=''; //값 지우기
}
*/


/**
switch 문

switch(num){ //변수 or 식
    case //값
}
*/

let num = 5;
let data='';
switch(num){
    case 5:
        data += '5';
    case 4:
        data += '4';
    case 3:
        data +='3';
    case 2:
        data += '2';
    case 1:
        data +='1';
        break; //빠져나오고 싶을 떄 사용 
    default:
        data += '나머지경우';
}

console.log(data);

console.log('----------------------------');

/* prompt 사용 */
// let num2 = prompt('숫자를 입력하세요>>', 0);
// console.log(num2);

/*
숫자를 입력 받아서, 3으로 나누면 3의 배수
4 -> 나마지 값 1
5 -> 나머지 값 2
*/

document.getElementById('btn').onclick=function(){
    let input = document.getElementById('num');
    let num = Number(input.value);
    let result = '나머지값은 ';
    switch(num%3){
        case 1:
            result += 1;
            break;
        case 2:
            result += 2;
            break;
        default:
            result += 0;
    }
    document.getElementById('result').innerHTML = result;
    input.value ='';
}

/* for문 */
for(let i=10; i<15; i=i+2){
    console.log('i :'+i);
}

console.log('----------------------------');

/* Iterable */
let arr2 = ['a1', 'a2', 'a3'];
console.log(arr2);
for(let i=0; i<arr2.length; i++){
    console.log(arr2[i]);
}

console.log('----------------------------');

for(let item of arr){
    console.log(item);
}

console.log('----------------------------');

arr.forEach(item=>{
    console.log(item);
});

console.log('----------------------------');

let man={
    irum : '홍길동',
    age : 20,
    addr: '서울'
};
console.log(typeof man, man); //object 타입
console.log(man.irum);
console.log(man.age);
console.log(man.addr);

console.log('----------------------------');

for(let key in man){ //속성에 대한 정보를 출력
    console.log('key :'+ key);
}
// 왜 배열에 작성하지 못하는지,,,

console.log('----------------------------');

for(let index in arr){
    console.log(index);
}

console.log('----------------------------');

let data1 = 'hello, javascript!!!';
console.log(data1[1]); //인덱스 2에 해당하는 값

// data1[1] = t;
// console.log(data1[1]); //에러가 발생. 읽기만 가능하고 할당은 불가능

for(let item of data1){
    console.log(item);
}

/*
data1.forEach((item, index)=>{
    console.log(itme, index);
}); */

console.log('----------------------------');

/* while : 참일 동안 동작 */
let i=0;
while(i<5){
    console.log(++i);
}

console.log('----------------------------');

/*  10 8 6 4 2  출력 */
let j = 10;
while(j>=2){
    console.log(j);
    j -= 2;
}

console.log('----------------------------');

/* break, continue */
let k=1;
while(true){
    console.log(k);
    k++;
    if(k==5) break;
}

console.log('----------------------------');

for(let i=1; i<10; i++){
    if(i%3==0)
        continue;
    console.log(i);
}

console.log('----------------------------');

let m = 0;
while(m<10){
    ++m;
    if(m%3==0)
        continue;
    console.log(m);
}
