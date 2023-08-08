document.getElementById('btn')
    .onclick=function(){
        document.getElementById("result").innerHTML = addName();
}

const addName=(function(){
    let totName = '';
    let idx = 0;
    let fn=function(){
        let name = document.getElementById('irum');

        totName += (++idx + '. ' + name.value +'<br>');
        return totName;
    };
    return fn;
})();