const spanCounter = document.getElementById('num')
const btnDecrease = document.getElementById('decrease')
const btnReset = document.getElementById('reset')
const btnIncrease = document.getElementById('increase')

let num = 0

btnDecrease.addEventListener('click', ()=>{
    num-=1
    setNum()
})
btnReset.addEventListener('click', ()=>{
    num = 0
    setNum()
})
btnIncrease.addEventListener('click', ()=>{
    num+=1
    setNum()
})

function setNum() {
    spanCounter.innerHTML = num
    if (num<0) {
        spanCounter.style.color = "red"
    }else if (num > 0) {
        spanCounter.style.color = "green"
    }else{
        spanCounter.style.color = "black"
    }
}