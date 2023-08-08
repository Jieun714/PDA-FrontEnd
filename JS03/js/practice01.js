document.getElementById('btn')
    .onclick=function(){
        document.getElementById("result").innerHTML = addName();
}

const addName=(function(){
    let totName = '';
    let fn=function(){
        let name = document.getElementById('irum');
        totName += '<li>' + name.value +'</li>';
        name.value = '';
        return totName;
    };
    return fn;
})();