/*
document.getElementById('sum').onclick=function(){
    let su1 = document.getElementById('su1');
    let su2 = document.getElementById('su2');

    let num1 = Number(su1.value);
    let num2 = Number(su2.value);

    console.log(num1+num2);

    su1.value = '';
    su2.value = '';
}
*/

document.getElementById('sum')
    .addEventListener('click', function(){
        let su1 = document.getElementById('su1');
        let su2 = document.getElementById('su2');

        let num1 = Number(su1.value);
        let num2 = Number(su2.value);

        console.log(num1+num2);

        su1.value = '';
        su2.value = '';
    });

let su1 = Number('10');
let data=su1.toString();

console.log(typeof su1, su1);
console.log(typeof data, data);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

console.log("===============================");

window.onload=function(){
    let today = new Date();
    console.log(today);

    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let day = today.getDate();
    let hours = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let tot = year+'.'+month+'.'+day+' '+hours+':'+min+':'+sec;

    console.log(tot);
    document.getElementById('result').innerHTML = tot;
}

console.log("===============================");

