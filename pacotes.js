// Pacotes

const numPacotes = 4
const pacotes = document.querySelector('#pacotes')
const imagens = []

for (let i = 0; i < numPacotes; i++) {
    imagens[i] = document.createElement('figure')
    const pacote = document.createElement('img')
    const alt = `./assets/pacotes/alts/alt_${('0' + (i + 1)).slice(-4)}.txt`
    pacote.classList.add('foto')
    pacote.src = `./assets/pacotes/imagens/pacote_${('0' + (i + 1)).slice(-4)}.jpeg`
    fetch(alt)
        .then(resposta => resposta.text())
        .then(texto => {
            pacote.alt = texto
        })
    imagens[i].append(pacote)
    pacotes.append(imagens[i])
}