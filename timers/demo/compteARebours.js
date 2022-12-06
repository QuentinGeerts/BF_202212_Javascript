let count = 10;
let timer = null;

const result = document.getElementById('count')


window.onload = () => {
    result.innerText = count
    timer = setInterval(decrement, 1000)
}

function decrement () {

    if (count === 0) {
        clearInterval(timer)
        return;
    }
    
    count--;
    result.innerText = count
}