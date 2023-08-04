window.onload=function(){
    let elel = document.getElementsByClassName("main_menu")[0];

    elel.addEventListener('click', function() {
        let a = document.getElementsByTagName('nav')[0].classList.toggle('visible');
        console.log(a);
    });
}