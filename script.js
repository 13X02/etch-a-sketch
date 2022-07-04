const right = document.querySelector('.right');
const container = document.createElement('div');
const eraser = document.querySelector('.erase');
const rain = document.querySelector('.rainbow');
const black = document.querySelector('.black');
const wheel = document.querySelector('.wheel');
const submit = document.querySelector('.submit');
const sliderval = document.querySelector('.sliderval');
const slider = document.querySelector('.slider');
const clear = document.querySelector('.clear');
let color="black";
let n = slider.value;
container.className="container";
right.appendChild(container);
createGrid(n);

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
        rowDiv.style.display="flex";
        rowDiv.style.flex="1";
        for (let j = 0; j < `${n}`; j++) {
            let innerChild = document.createElement('div');
            innerChild.className = "child";
            innerChild.classList.add(`[${i}][${j}]`);
            
            rowDiv.appendChild(innerChild);
            innerChild.style.width="100%";
            innerChild.style.height="100%";
        }
        
    }
}
let childs = document.querySelectorAll('.child');
clear.addEventListener('click',()=>{
    childs.forEach(child=>{
        child.style.cssText ="background-color: white;"
    })
})
submit.addEventListener('click',()=>{
    childs.forEach(child=>{
        child.classList.remove('black');
        child.classList.remove('erase');
        child.classList.remove('rain');
        child.classList.remove('select');
        child.classList.add('select');
        colorBG();
    });
});
black.addEventListener('click',()=>{
    childs.forEach(child=>{
        child.classList.remove('black');
        child.classList.remove('erase');
        child.classList.remove('rain');
        child.classList.remove('select');
        child.classList.add('black');
        colorBG();
    });
});
rain.addEventListener('click',()=>{
    childs.forEach(child=>{
        child.classList.remove('black');
        child.classList.remove('erase');
        child.classList.remove('rain');
        child.classList.remove('select');
        child.classList.add('rain');
        colorBG();
    });
});

eraser.addEventListener('click',()=>{
    childs.forEach(child=>{
        child.classList.remove('black');
        child.classList.remove('erase');
        child.classList.remove('rain');
        child.classList.remove('select');
        child.classList.add('erase');
        colorBG();
    });
});
function colorBG(){
    childs = document.querySelectorAll('.child');
    childs.forEach(child => {
        child.onmouseover = ()=>{
            console.log("test");
        if(child.classList.contains('black')){
            color='black'
        }else if(child.classList.contains('erase')){
            color="white";
        }else if(child.classList.contains('rain')){
            color=`#${Math.floor(Math.random()*16777215).toString(16)}`
        }else if(child.classList.contains('select')){
            color = `${wheel.value}`;
        }
        child.style.cssText = `background-color: ${color};`
    }



});
}
colorBG();
slider.oninput = ()=>{
    deleteGrid(n);
    n = slider.value;
    createGrid(n);
    colorBG();
    sliderval.textContent=`${n} x ${n}`
    
}