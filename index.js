// Carrossel

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

// Mural

const numFotos = 33
const mural = document.querySelector('#mural')
const fotos = []

for (let i = 0; i < numFotos; i++) {
    fotos[i] = document.createElement('figure')
    fotos[i].classList.add('imagem')
    fotos[i].tabIndex = numFotos - i
    const imagem = document.createElement('img')
    const alt = `./assets/alts/alt_${('000' + (i + 1)).slice(-4)}.txt`
    imagem.classList.add('foto')
    imagem.src = `./assets/fotos/foto_${('000' + (i + 1)).slice(-4)}.jpeg`
    fetch(alt)
        .then(resposta => resposta.text())
        .then(texto => {
            imagem.alt = texto
        })
    fotos[i].append(imagem)
    mural.insertBefore(fotos[i], mural.firstChild)
}