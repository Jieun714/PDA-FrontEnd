// let leftBox = []; //왼쪽 상자
// let rightBox = []; //오른쪽 상자

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
    let irum = document.getElementById('irum'); //입력 받은 이름
    let option = document.createElement('option'); //option 태그
    let txt = document.createTextNode(irum.value);
    option.appendChild(txt); //option 태그에 이름 추가

    let leftBox = document.getElementById('leftBox');
    leftBox.appendChild(option); //왼쪽 상자에 값 추가

    irum.value = ''; //값을 비워줌
    irum.focus(); //포커스 다시 맞추기
}

/* 왼쪽 상자에서 오른쪽 상자로 이동 */
document.getElementById('leftToRightBtn').addEventListener('click', function(){
    // let leftBox = document.querySelectorAll('#leftBox option');
    let leftBox = document.getElementById('leftBox');
    let rightBox = document.getElementById('rightBox');
    let collection = leftBox.selectedOptions; //선택된 요소 확인

    for(let i=0; i < collection.length; i++){
        console.log(collection[i].value); //넘어가는 값 확인
        rightBox.appendChild(collection[i]); //오른쪽 상자에 추가
        i--;
    }

    //오른쪽 상자로 넘어간 element의 selected 해제
    for(let item of rightBox){
        item.selected = false;
    }
});

/* 오른쪽 상자에서 왼쪽 상자로 이동 */
document.getElementById('rightToLeftBtn').addEventListener('click', function(){
    let leftBox = document.getElementById('leftBox');
    let rightBox = document.getElementById('rightBox');
    let collection = rightBox.selectedOptions; //선택된 요소 확인

    for(let i=0; i < collection.length; i++){
        console.log(collection[i].value);
        leftBox.appendChild(collection[i]); //왼쪽 상자에 추가
        i--;
    }

    //왼쪽 상자로 넘어간 element의 selected 해제
    for(let item of leftBox){
        item.selected = false;
    }
});
