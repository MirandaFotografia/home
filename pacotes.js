// Pacotes

const numPacotes = 4
const pacotes = document.querySelector('#pacotes')
const imagens = []

for (let i = 0; i < numPacotes; i++) {
    imagens[i] = document.createElement('img')
    imagens[i].classList.add('pacote')
    const alt = `./assets/pacotes/alts/alt_${('0' + (i + 1)).slice(-4)}.txt`
    imagens[i].src = `./assets/pacotes/imagens/pacote_${('0' + (i + 1)).slice(-4)}.jpeg`
    fetch(alt)
        .then(resposta => resposta.text())
        .then(texto => {
            imagens[i].alt = texto
        })
    pacotes.append(imagens[i])
}