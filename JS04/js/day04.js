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

/* Object.is 사용  */
let o1 = [10, 20, 30];
let o2 = [10, 20, 30];

console.log(o1===o2); //false

let tf = Object.is(o1[0], o2[0]);
console.log(tf); //ture

console.log("==========================");

/* String */

/*
이메일을 입력받아 ID와 도메인 구분
아이디: aaa
도메인: aaa.com
*/

/* split 사용 */
let email = 'aaa@aaa.com';
let [id, domain] = email.split('@');
console.log(`id: ${id}, domain: ${domain}`);

/* 배열로 담아 */
let result = email.split('@');
console.log(`id: ${result[0]}, domain: ${result[1]}`);

/* indexOf와 slice 사용  */
let idx = email.indexOf('@'); //인덱스 추출
let id2 = email.slice(0, idx);
let domain2 = email.slice(idx+1);
console.log(`id: ${id2}, domain: ${domain2}`);

console.log("==========================");
let arr=[10,20,30];
let arr2=new Array(100, 200, 300);
let newArr = arr.concat(arr2, ['t1','t2']);

console.log(arr);
console.log(newArr);

console.log("==========================");
let data = [10, 50, 40, 30, 100, 50];
console.log(data);

/* find */
let result2 = data.find(function(element){
    // return element===50;
    return element>=40;
});
console.log(result2);

/* filter */
let result3 = data.filter(function(element){
    // return element===50;
    return element>=40;
});
console.log(result3);

console.log("==========================");
/* join 사용 */
let nameArr = ['hong', 'kim', 'lee'];
let result4 = nameArr.join(' ');

console.log(result4);

console.log("==========================");



