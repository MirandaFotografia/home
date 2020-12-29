// Carrossel
const mobile = window.matchMedia("(max-width: 599px)")
const tablet_ver = window.matchMedia("(min-width: 600px)")
const tablet_hor = window.matchMedia("(min-width: 900px)")
const desktop = window.matchMedia("(min-width: 1200px)")

const carrossel = document.querySelector('#carrossel')
const botaoEsq = document.querySelector('#voltar')
const botaoDir = document.querySelector('#avancar')

const numImgs = 7
const getImg = indice => `./assets/banner/banner_${('00' + (indice + 1)).slice(-3)}.jpeg`
const getAlt = indice => `./assets/banner/alt_${('00' + (indice + 1)).slice(-3)}.txt`
const imagens = []
for (let i = 0; i < numImgs; i++) {
    imagens[i] = document.createElement('img')
    imagens[i].classList.add("carrossel__imagem")
    imagens[i].src = getImg(i)
    const alt = getAlt(i)
    fetch(alt).then(resposta => resposta.text()).then(texto => imagens[i].alt = texto)
}

let numMold = mobile.matches ? 1 : desktop.matches ? 4 : tablet_hor.matches ? 3 : 2
const molduras = []

for (let i = 0; i < numMold; i++) {
    molduras[i] = document.createElement('figure')
    molduras[i].classList.add("moldura")
    carrossel.insertBefore(molduras[i], botaoDir)
    molduras[i].append(imagens[i])
}

if (desktop.matches) {
    molduras[0].classList.add('lateral')
    molduras[3].classList.add('lateral')
} else if (tablet_hor.matches) {
    molduras[0].classList.add('lateral')
    molduras[2].classList.add('lateral')
}

const redimensionar = midia => {
    molduras.forEach(moldura => moldura.remove())
    numMold = mobile.matches ? 1 : desktop.matches ? 4 : tablet_hor.matches ? 3 : 2
    for (let i = 0; i < numMold; i++) {
        molduras[i] = document.createElement('figure')
        molduras[i].classList.add("moldura")
        carrossel.insertBefore(molduras[i], botaoDir)
        molduras[i].append(imagens[i])
    }
    if (desktop.matches) {
        molduras[0].classList.add('lateral')
        molduras[3].classList.add('lateral')
    } else if (tablet_hor.matches) {
        molduras[0].classList.add('lateral')
        molduras[2].classList.add('lateral')
    }
}

const voltar = () => {
    for (let i = 0; i < numMold; i++) {
        let ind = imagens.indexOf(molduras[i].firstChild)
        ind - 1 < 0 ? ind = numImgs - 1 : ind--
        molduras[i].append(imagens[ind])
        molduras[i].removeChild(molduras[i].firstChild)
    }
}

const avancar = () => {
    for (let i = numMold - 1; i >= 0; i--) {
        let ind = imagens.indexOf(molduras[i].firstChild)
        ind + 1 >= numImgs ? ind = 0 : ind++
        molduras[i].append(imagens[ind])
        molduras[i].removeChild(molduras[i].firstChild)
    }
}

mobile.addEventListener('change', redimensionar)
tablet_ver.addEventListener('change', redimensionar)
tablet_hor.addEventListener('change', redimensionar)
desktop.addEventListener('change', redimensionar)

botaoEsq.addEventListener('click', voltar)
botaoDir.addEventListener('click', avancar)

// Mural

const numFotos = 45
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
        .then(texto => imagem.alt = texto)
    fotos[i].append(imagem)
    mural.insertBefore(fotos[i], mural.firstChild)
}