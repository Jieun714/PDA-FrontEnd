/*
    IIFE : 정의하지마자 즉 실행되는 함수
*/
(function prt(){
    console.log('prt!!!!!');
})();


let fnprt=function(a, b){
    console.log(`test fnprt ${a}, ${b}`);
}

fnprt(10, 20);

//allow 연산자로 변경
((a, b)=>{
    console.log( `test fnprt2 ${a}, ${b}`);
})(10, 20);

/* 클로저(closure) */
document.getElementById('btn')
    .onclick=function(){
        document.getElementById("result").innerHTML = addCount();
}

const addCount =(function(){
    let cnt = 0;
    let fn=function(){
        cnt++;
        return cnt;
    };
    return fn;
})();