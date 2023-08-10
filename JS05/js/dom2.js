
let ele_tr = document.querySelectorAll("tbody>tr");

for(let item of ele_tr){
    item.addEventListener('click', function(){
        console.log('click : ' + item.textContent);
        item.classList.toggle("yellow");
    });
}
