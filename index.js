// Modo Escuro
const botao = document.querySelector('#modo-escuro')
const modo = document.documentElement

botao.addEventListener('click', e => {
    modo.style.setProperty('--escuro', modo.style.getPropertyValue('--escuro') === '1' ? 0 : 1)
})

// Carrossel de Fotos
const carrossel = document.querySelector('#carrossel')
let posicao = null
let movendo = false
let translacao = 0

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
        carrossel.style.transform = `translateX(${movimento + translacao}px)`
    }
}

const fim = e => {
    movendo = false
}

if (window.PointerEvent) {
    window.addEventListener('pointerdown', inicio)
    window.addEventListener('pointermove', meio)
    window.addEventListener('pointerup', fim)
} else {
    window.addEventListener('mousedown', inicio)
    window.addEventListener('mousemove', meio)
    window.addEventListener('mouseup', fim)
    window.addEventListener('touchstart', inicio)
    window.addEventListener('touchmove', meio)
    window.addEventListener('touchend', fim)
}
