let layoutImgs = document.getElementsByClassName('layout');

for(let layoutImg of layoutImgs){
    layoutImg.addEventListener('mouseover', function(){
        //자료 clear
        for(let i=0; i < layoutImgs.length; i++){
            layoutImgs[i].style.border = '';
        }
        this.style.border = '3px solid red';
        let view = document.getElementById('view');
        view.setAttribute('src', this.src);
        view.setAttribute('alt', this.alt);
    });
}
