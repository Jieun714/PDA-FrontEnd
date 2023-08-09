/*
document.getElementById('win_open').onclick=function(){
    // window.open('hello');
    // location.href ="wwww.naver.com";
    document.write('hello');
}
*/

/*
let d = document.body;
console.log(d);

let list_id = document.getElementById('listId');
console.log(list_id);

let li_class = document.getElementsByClassName('listClass');
console.log(li_class);

let tagName = document.getElementsByTagName('li');
console.log(tagName);

// listName이 들어간 element 이름
let names = document.getElementsByName('listName');
console.log(names);

// body의 자손들
let child1 = document.body.children;
console.log(child1);

// 세 번째 자료 선택
let lis = document.getElementsByTagName('li')[2].className;
console.log(lis);

*/

let ele_red = document.getElementsByClassName('red');
let ele_red1 = document.querySelectorAll('.red');

console.log(ele_red);
console.log(ele_red1);

// length를 반대로
/*for(let i= ele_red.length-1; i>=0; i--){
    ele_red[i].className = 'green';
}*/

// querySelectorAll 사용
/*for(let item of ele_red1){
    item.className = 'green';
}*/

// spread 정보 사용
[...ele_red].forEach(item=>item.className='green');

/*
    children: 자식 중 element type 요소만 반환
    (자료의 요소를 받아줄때 사용)
    firstChild
    lastChild
    nextSlibing
    previousSibing

    hasChildNode;
*/

const ele_ul = document.getElementsByTagName('ul')[0];
console.log(`children : ${ele_ul.children}`);
console.log(`hasChildNodes : ${ele_ul.hasChildNodes}`);
console.log(ele_ul.firstElementChild);
console.log(ele_ul.lastElementChild);

// Sibling
let ele_m3 = document.getElementById('m3');
let next_ele_m3 = ele_m3.nextElementSibling;
console.log(next_ele_m3);
next_ele_m3.style.backgroundColor='yellow';
ele_m3.previousElementSibling.style.backgroundColor='skyblue';

