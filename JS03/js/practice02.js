
var arr = [];
document.getElementById('add').addEventListener('click' ,function(){
    let irum = document.getElementById('irum');
    let age = document.getElementById('age');

    arr.push(`${irum.value}, ${age.value}`);
    console.log(`arr: ${arr}`);

    irum.value ='';
    age.value ='';
});

/*
document.getElementById('show').addEventListener('click', function(){
    let result = '';
    arr.(function(item){
        result+=`<li> ${item} </li>`;
    });
    document.getElementById('result').innerHTML = result;
});
*/

/* map 사용 시 */
document.getElementById('show').addEventListener('click', function(){
    let liList = arr.map((item)=>`<li> ${item} </li>`);

    document.getElementById('result').innerHTML = liList;
});
