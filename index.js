// Menu

const botaoAbrir = document.querySelector('#abrir')
const botaoFechar = document.querySelector('#fechar')
const menu = document.querySelector('#menu')
const fundo = document.querySelector('#fundo')

const abrir = () => {
    menu.style.transform = "translateX(100%)"
    fundo.style.visibility = "initial"
}
const fechar = () => {
    menu.style.transform = "translateX(200%)"
    fundo.style.visibility = "hidden"
}

botaoAbrir.addEventListener('click', abrir)
botaoFechar.addEventListener('click', fechar)
fundo.addEventListener('click', fechar)
window.addEventListener('scroll', fechar)

// Carrossel de Fotos

const botaoEsq = document.querySelector('#voltar')
const botaoDir = document.querySelector('#avancar')
const imagens = document.querySelectorAll('.carrossel__imagem')
let ind = 0
imagens[ind].classList.toggle("selecionada")

const voltar = () => {
    botaoDir.style.visibility = "initial"
    imagens[ind].classList.toggle("selecionada")
    ind--
    imagens[ind].classList.toggle("selecionada")
    if (ind === 0) {
        botaoEsq.style.visibility = "hidden"
    }
}
const avancar = () => {
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