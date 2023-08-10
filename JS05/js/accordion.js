let accordins = document.getElementsByClassName('accordin');

for(let i=0; i< accordins.length; i++){
    accordins[i].addEventListener('click', function(){
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        // console.log(this);
        if(panel.style.maxHeight){
            panel.style.maxHeight = '';
        } else{
            panel.style.maxHeight = '10vh';
        }
    });
}