document.getElementById('append').addEventListener('click', function(e){
    e.preventDefault; //기본 동작을 막음
    // console.log(e.target);
    let irum = document.getElementById('irum');
    let data = irum.value;
    let ele_li = document.createElement('li');

    let txt = document.createTextNode(data);
    ele_li.appendChild(txt);

    document.getElementById('result');
    result.appendChild(ele_li);

    irum.value='';
});

//한번은 속성. 두번은 삭제
const result = document.getElementById('result');

result.addEventListener('click', function(e){
    e.target.classList.toggle('yellow');
});

result.addEventListener('dblclick', function(e){
    //부모의 자식을 찾아야함
    let parent = e.target.parentElement;
    parent.removeChild(e.target);
});