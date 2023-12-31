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
/* push, pop */
let arr3=[];
arr3.push("aaa");
arr3.push("bbb");
arr3.push("ddd");
console.log(`배열의 길이: ${arr3.length}, 배열: ${arr3}`);

console.log("==========================");
arr3.forEach(item=>console.log(item));
console.log(arr3.length);

let d1 = arr3.pop("bbb");
console.log(`삭제할 요소: ${d1}, 삭제된 이후 배열: ${arr3}`);

console.log("==========================");
/*
1. forEach
2. map
*/
let irums=['홍', '김', '이', '박', '나'];

/*
document.getElementById('view_btn')
    .addEventListener('click', function(){
    let result ='';
    irums.forEach(item=>{
        result += `<li>${item}</li>`;
    });
    document.getElementById('result').innerHTML = result;
});
*/

/* map */
/*
document.getElementById('view_btn')
    .addEventListener('click', function(){
    let result = irums.map((item)=>`<li> ${item} </li>`);
    document.getElementById('result').innerHTML = result.join('');
});
*/

console.log("==========================");
/* 에러처리 */
try{
    console.log('test1');
    console.log('test2');
    let arr=new Array(-1);
    console.log('test3');
}catch(e){
    console.log(e);
} finally{
    console.log('finally');
}

console.log("==========================");
let t = 11;
try{
    if(t>20){
        console.log('20보다 크다');
    } else if(t==20){
        throw "20과 같다";
    } else{
        throw "20보다 작다"
    }
} catch(e){
    console.log(e);
} finally{
    console.log('finally');
}

console.log("==========================");

document.getElementById('btn').addEventListener('click', function(){
    const txtName = document.getElementById('irum');
    const txtAge = document.getElementById('age');

    try{
        let age = Number(txtAge.value);
        if(Number.isNaN(age)){ //숫자형 자료가 아닐때
            throw new Error("숫자형 자료가 아님!!");
        } else{
            if(age < 0){
                throw new Error("0보다 작습니다.");
            } else {
                let result = `이름: ${txtName.value}<br> 나이: ${age}`;
                document.getElementById('result').innerHTML = result;
            }
        }
    } catch(e){
        console.log(e);
        // document.getElementById('result').innerHTML = '';
    } finally{
        console.log('done');
    }

    irum.value='';
    age.value='';
});
