const body = document.querySelector('body');
const container = document.createElement('div');
container.className="container";
document.body.appendChild(container);
for (let i = 0; i < 16; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.className = "row";
    rowDiv.classList.add(`[${i}]`);
    container.appendChild(rowDiv);
    for (let j = 0; j < 16; j++) {
        let innerChild = document.createElement('div');
        innerChild.className = "child";
        innerChild.classList.add(`[${i}][${j}]`);
        rowDiv.appendChild(innerChild);
    }
    
}
const childs = document.querySelectorAll('.child');
childs.forEach(child => {
    child.addEventListener('click',()=>{
        child.style.cssText = "background-color: black;"
    })
    
});