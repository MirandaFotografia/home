// Carrossel de Fotos
// const carrossel = document.querySelector('#carrossel')
// let posicao = null
// let movendo = false
// let translacao = 0

// const inicio = e => {
//     posicao = e.clientX
//     movendo = true
//     const matriz = window.getComputedStyle(carrossel).getPropertyValue('transform')
//     if (matriz !== "none") {
//         translacao = parseInt(matriz.split(',')[4].trim())
//     }
// }

// const meio = e => {
//     if (movendo) {
//         const movimento = e.clientX - posicao
//         if (movimento + translacao < 0 && movimento + translacao > -1450) {
//             carrossel.style.transform = `translateX(${movimento + translacao}px)`
//         }
//     }
// }

// const fim = e => {
//     movendo = false
// }

// if (window.PointerEvent) {
//     carrossel.addEventListener('pointerdown', inicio)
//     carrossel.addEventListener('pointermove', meio)
//     carrossel.addEventListener('pointerup', fim)
// }

const botaoEsq = document.querySelector('#voltar')
const botaoDir = document.querySelector('#avancar')
const imagens = document.querySelectorAll('.carrossel__imagem')
let ind = 0
imagens[ind].classList.toggle("selecionada")

const voltar = evento => {
    botaoDir.style.visibility = "initial"
    imagens[ind].classList.toggle("selecionada")
    ind--
    imagens[ind].classList.toggle("selecionada")
    if (ind === 0) {
        botaoEsq.style.visibility = "hidden"
    }
}
const avancar = evento => {
    botaoEsq.style.visibility = "initial"
    imagens[ind].classList.toggle("selecionada")
    ind++
    imagens[ind].classList.toggle("selecionada")
    if (ind === 4) {
        botaoDir.style.visibility = "hidden"
    }
}

botaoEsq.addEventListener('click', voltar)
botaoDir.addEventListener('click', avancar)