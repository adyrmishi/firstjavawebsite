let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')

function init(){
    h1.addEventListener('mouseover', () => {
        h1.style.backgroundColor = "blue";
    })
    h2.addEventListener('mouseover', () => {
        h2.textContent = "hello"
    })
}

init();