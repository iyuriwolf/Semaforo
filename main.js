const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorid = 0
let intervalId = null

const trafficLight = ( event ) => {
    stopAuto()
    turnOn[event.target.id]()
}

const nextIndex = () => {

    if(colorid<2){
    colorid++
    }
    else{
        colorid = 0
    }
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorid]
    turnOn[color]()
    nextIndex()
}

const stopAuto = () => {
    clearInterval(intervalId)
}

const turnOn = {
    'red':        () => img.src = './img/vermelho.png',
    'yellow':     () => img.src = './img/amarelo.png',
    'green':      () => img.src = './img/verde.png',
    'auto':       () => intervalId = setInterval(changeColor, 2000)
}

buttons.addEventListener('click', trafficLight)
