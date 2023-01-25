// Botão do Trailer 

const botaoTrailer = document.querySelector(".botao-trailer")
const modal = document.querySelector(".modal")
const video = document.getElementById('video')
console.log(video.src)
const linkDoVideo = video.src

function alternarModal() {
  modal.classList.toggle('aberto')
}

// Abrindo a modal na tela

botaoTrailer.addEventListener("click", () => {
  alternarModal()
  video.setAttribute('src', linkDoVideo)
})

const botaoFecharModal = document.querySelector('.fechar-modal')

// Fechando a modal

botaoFecharModal.addEventListener("click", () => {
  alternarModal()
  video.setAttribute("src", "")
})





