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