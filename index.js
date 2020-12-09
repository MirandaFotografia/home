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