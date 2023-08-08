
/*
    1. Function 생성자 함수
    2. Object 생성자 함수 
    3. 셍성자 힘수
    4. 객체 리터럴
    5. 클래스
 */

/*
const op=new Function("a", "b", "reutrn a+b");

let result=op(10,20);
console.log('result', result);
*/

/* 2. Object 생성자 함수 */
let person1 = new Object();
person1.name ="홍길동";
person1.age =20;
person1.addr="서울";

console.log(`name: ${person1.name}, age: ${person1.age}, addr: ${person1.addr}`);
console.log(person1);
console.log(typeof person1); //object
console.log(Array.isArray(person1)); //false

person1.prt=function(){
    console.log('prt function!!');
}

console.log("===============================");

/* 3. 생성자 함수 생성 */
function Man(irum, age){
    this.irum = irum;
    this.age = age;
    this.prt=function(){
        console.log(`name: ${this.irum}, age: ${this.age}`);
    }
}

let p1=new Man("hong", 20);
let p2=new Man("park", 26);

console.log(p1);
console.log(p2);
console.log(p1.irum, p1.age);
console.log(p2['irum'], p2['age']);
console.log("===============================");

/* 4. 객체 리터럴 */

const m1={irum:'hong', age:20, addr:'서울'};
const m2={irum:'park', age:25, addr:'부산'};

console.log(typeof m1, m1);
console.log(typeof m2, m2);
console.log(m1.irum, m1.age, m1.addr);
console.log(m2['irum'], m2['age'], m2['addr']);
console.log("===============================");

/* 5.  */
class Student{
    constructor(studentId, irum, age){
        this.studentId = studentId;
        this.irum = irum;
        this.age = age;
    }
}

let s1 = new Student(1, 'hong', 20);
let s2 = new Student(2, 'park', 25);

console.log(typeof s1, s1);
console.log(s2, typeof s2);

/* 속성 추가 */
s1.addr='서울';
s1.sayHello=()=>{
    console.log('안녕하세요');
}

console.log(s1);

console.log("=========== 속성 삭제 ===========");
delete s1.age;
console.log(s1);

// s1.nick1 nick2='222';
s1['nick1 nick2']='test!!';
console.log(s1);

console.log(s1['nick1 nick2']);

console.log("===============================");

let a = 'age';

const user={
    naem: 'hong',
    [a]: 20
}

console.log(user);