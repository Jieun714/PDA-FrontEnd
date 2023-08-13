"use strict"
/* 자주 사용하는 내용을 글로벌변수로 사용 */
let leftBox = document.getElementById('leftBox');
let rightBox = document.getElementById('rightBox');

/* 목록 추가 - 버튼 */
document.getElementById('addBtn').addEventListener('click', function(){
    appendList();
});

/* 목록 추가 - Enter */
function enterKeyPress(e){
    if(e.keyCode == 13){
        appendList();
    }
}

/* 왼쪽 상자에 목록을 추가하는 함수 */
function appendList(){
    const irum = document.getElementById('irum'); //입력 받은 이름
    if(irum.value == "") return; //공백이면 입력이 안되도록

    const option = document.createElement('option'); //option 태그
    const txt = document.createTextNode(irum.value);
    option.appendChild(txt); //option 태그에 이름 추가
    leftBox.appendChild(option); //왼쪽 상자에 값 추가

    irum.value = ''; //값을 비워줌
    irum.focus(); //포커스 다시 맞추기
}

/* 왼쪽 상자에서 오른쪽 상자로 이동 */
document.getElementById('leftToRightBtn').addEventListener('click', function(){
    const collection = leftBox.selectedOptions; //선택된 요소 확인

    for(let i=0; i < collection.length; i++){
        console.log(`go rightBox : ${collection[i].value}`); //넘어가는 값 확인
        rightBox.appendChild(collection[i]); //오른쪽 상자에 추가
        i--;
    }

    /* 오른쪽 상자로 넘어간 element의 selected 해제 */
    for(let item of rightBox){
        item.selected = false;
    }
});

/* 오른쪽 상자에서 왼쪽 상자로 이동 */
document.getElementById('rightToLeftBtn').addEventListener('click', function(){
    const collection = rightBox.selectedOptions; //선택된 요소 확인

    for(let i=0; i < collection.length; i++){
        console.log(`go leftBox : ${collection[i].value}`);
        leftBox.appendChild(collection[i]); //왼쪽 상자에 추가
        i--;
    }

    /* 왼쪽 상자로 넘어간 element의 selected 해제 */
    for(let item of leftBox){
        item.selected = false;
    }
});

/* 클릭시 삭제 - 왼쪽 상자 */
leftBox.addEventListener('dblclick', function(e){
    console.log(`delete element: ${e.target.value}`); //삭제할 요소 확인
    const option = e.target;
    option.remove();
});

/* 클릭시 삭제 - 오른쪽 상자 */
rightBox.addEventListener('dblclick', function(e){
    console.log(`delete element: ${e.target.value}`); //삭제할 요소 확인
    const option = e.target;
    option.remove();
});