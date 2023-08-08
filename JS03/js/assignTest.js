/*
구조분해 할당
배열이나 객체 속성을 해체해서 개별 변수에 담는 것
*/

let [a, b] = [10, 20];

console.log('a : ', a);
console.log('b : ', b);

/*
let [t1, t2, ...t3] = [100, 200, 300, 400];
console.log('t3: ', t3);
console.log('============================');
*/

let [su1, su2] = [100, 200];
console.log(`su1: ${su1}, su2: ${su2}`);
[su2, su1] = [su1, su2];
console.log(`su1: ${su1}, su2: ${su2}`);

console.log('============================');
let man={
    irum:'hong',
    age: 20,
    addr:'seoul'
}

let {irum, age, addr}=man;
console.log(`irum: ${irum}, age: ${age}, addr: ${addr}`);

console.log('============================');
let [t1, t2, t3] = [10, 20, 30];
console.log(t1);
console.log(t2);
console.log(t3);

console.log('============================');
let [p1=10, p2=20, p3=30] = [1,2];
console.log(p1, p2, p3);

console.log('============================');
let [a2,b2] =['test1','test2','test3','test4'];
console.log(a2, b2);

console.log('============================');
let [k1, ...k2] = ['test1','test2','test3','test4'];
console.log(k1);
console.log(k2);

console.log('============================');

let arr=[];
let arr2=new Array(3);

console.log(typeof arr);
console.log(typeof arr2);
console.log(Array.isArray(arr));
console.log(Array.isArray(arr2));

console.log('============================');
let len;
let arr3=[];
len=arr3.push("a1");
console.log(`len: ${len}, arr: ${arr3}`);

arr3.push("b1");
console.log(`len: ${len}, arr: ${arr3}`);
