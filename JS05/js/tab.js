const mytabs = document.querySelectorAll('.tabItem');
const tabpanels = document.querySelectorAll('.tabpanel');

// console.log(mytabs);
// console.log(tabpanels);

const init=function(){
    let init_li = mytabs[0].firstElementChild;
    let init_a = init_li.parentElement.getAttribute('aria-controls');
    init_li.classList.add('bgpanel');
    init_li.focus();

    let init_id = document.getElementById(init_a);
    console.log(init_a);
    init_id.classList.add('visit');
}

init();

mytabs.forEach(item=>{
    item.firstChild.addEventListener('focus', function(e){
        e.preventDefault();
    });
});