"use strict"

const searchfn=(e)=>{
    e.preventDefault();
    // console.log(e.target);
    let inputValue = e.target.value;
    let li = document.getElementsByTagName('li');

    [...li].forEach(item=>{
        // console.log(item);
        let ele_a = item.getElementsByTagName('a')[0];
        let a_content = ele_a.textContent;
        if(a_content.indexOf(inputValue) != -1){
            // console.log(a_content);
            item.style.display='block';
        } else{
            item.style.display = 'none';
        }
    });
}

document.getElementById("myInput").addEventListener("input", searchfn);