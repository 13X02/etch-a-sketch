const right = document.querySelector('.right');
const container = document.createElement('div');
const eraser = document.querySelector('.erase');
const rain = document.querySelector('.rainbow');
const black = document.querySelector('.black');
const wheel = document.querySelector('.wheel');
const submit = document.querySelector('.submit');
const sliderval = document.querySelector('.sliderval');
const slider = document.querySelector('.slider');

let color="black";
let n=40;
container.className="container";
right.appendChild(container);
createGrid(n);
slider.oninput = ()=>{
    deleteGrid(n);
    n = slider.value;
    createGrid(n);
    colorBG();
    
}
function deleteGrid(n){
    for (let i = 0; i < `${n}`; i++) {
        container.removeChild(document.querySelector('.row'));
        
    }
}
function createGrid(n){
    for (let i = 0; i < `${n}`; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.className = "row";
        rowDiv.classList.add(`[${i}]`);
        container.appendChild(rowDiv);
        for (let j = 0; j < `${n}`; j++) {
            let innerChild = document.createElement('div');
            innerChild.className = "child";
            innerChild.classList.add(`[${i}][${j}]`);
            rowDiv.appendChild(innerChild);
        }
        
    }
}
const childs = document.querySelectorAll('.child');
submit.addEventListener('click',()=>{
    childs.forEach(child=>{
        child.classList.remove('black');
        child.classList.remove('erase');
        child.classList.remove('rain');
        child.classList.remove('select');
        child.classList.add('black');
    });
});
rain.addEventListener('click',()=>{
    childs.forEach(child=>{
        child.classList.remove('black');
        child.classList.remove('erase');
        child.classList.remove('rain');
        child.classList.remove('select');
        child.classList.add('rain');
    });
});

eraser.addEventListener('click',()=>{
    childs.forEach(child=>{
        child.classList.remove('black');
        child.classList.remove('erase');
        child.classList.remove('rain');
        child.classList.remove('select');
        child.classList.add('erase');
    });
});
function colorBG(){
    childs.forEach(child => {
        child.onmouseover = ()=>{
            console.log("test");
        if(child.classList.contains('black')){
            color='black'
        }else if(child.classList.contains('erase')){
            color="white";
        }else if(child.classList.contains('rain')){
            color=`#${Math.floor(Math.random()*16777215).toString(16)}`
        }
        child.style.cssText = `background-color: ${color};`
    }



});
}
colorBG();
