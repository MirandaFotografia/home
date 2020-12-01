// Carrossel de Fotos
const carrossel = document.querySelector('#carrossel')
let posicao = null
let movendo = false
let translacao = 0

document.querySelectorAll('.carrossel__imagem').ondragstart = () => false

const inicio = e => {
    posicao = e.pageX
    movendo = true
    const matriz = window.getComputedStyle(carrossel).getPropertyValue('transform')
    if (matriz !== "none") {
        translacao = parseInt(matriz.split(',')[4].trim())
    }
}

const meio = e => {
    if (movendo) {
        const movimento = e.pageX - posicao
        if (movimento + translacao < 0 && movimento + translacao > -1450) {
            carrossel.style.transform = `translateX(${movimento + translacao}px)`
        }
    }
}

const fim = e => {
    movendo = false
}

if (window.PointerEvent) {
    carrossel.addEventListener('pointerdown', inicio)
    carrossel.addEventListener('pointermove', meio)
    carrossel.addEventListener('pointerup', fim)
}// else {
//     carrossel.addEventListener('mousedown', inicio)
//     carrossel.addEventListener('mousemove', meio)
//     carrossel.addEventListener('mouseup', fim)
//     carrossel.addEventListener('touchstart', inicio)
//     carrossel.addEventListener('touchmove', meio)
//     carrossel.addEventListener('touchend', fim)
// }

// Mural de Fotos
