/*
document.getElementById('win_open').onclick=function(){
    // window.open('hello');
    // location.href ="wwww.naver.com";
    document.write('hello');
}
*/

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
