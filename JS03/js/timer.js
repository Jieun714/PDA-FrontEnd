document.getElementById('timer')
    .onclick=function(){
        let a = setInterval(()=>{
            let today = new Date();
            let y = today.getFullYear();
            let m = today.getMonth()+1;
            let d = today.getDate();
            let h = today.getHours();
            let mi = today.getMinutes();
            let s = today.getSeconds();
            let result = `${y}.${m}.${d}. ${h}:${mi}:${s}`;

            document.getElementById('result').innerHTML = result;
        }, 1000); //interval 시간만큼 반복
}

document.getElementById('stop')
    .onclick=function(){

}
