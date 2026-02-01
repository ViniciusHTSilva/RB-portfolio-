const modal = document.getElementById("galleryModal");

modal.addEventListener("click", (e) => {
  // evita trocar imagem ao clicar no X
  if (e.target.classList.contains("close")) return;

  const screenMiddle = window.innerWidth / 2;

  if (e.clientX > screenMiddle) {
    nextImage();   // lado direito
  } else {
    prevImage();   // lado esquerdo
  }
});





/* =========================
   VARIÁVEIS GLOBAIS
========================= */
let images = [];
let currentIndex = 0;

const galleryModal = document.getElementById("galleryModal");
const modalImage = document.getElementById("modalImage");

/* =========================
   GERADOR DE IMAGENS
========================= */
function carregarImagens(caminho, opcoes = {}) {
  const {
    inicio = 1,
    fim = 10,
    extensoes = ["jpg", "jpeg", "png", "webp"]
  } = opcoes;

  const imgs = [];

  for (let i = inicio; i <= fim; i++) {
    extensoes.forEach(ext => {
      imgs.push(`${caminho}${i}.${ext}`);
    });
  }

  return imgs;
}

/* =========================
   GALERIAS
========================= */
const galleries = {
  letraCaixa: carregarImagens("./images/Letra/Letras-", {
    inicio: 1,
    fim: 7,
    extensoes: ["jpeg"]
  })
};

/* =========================
   FUNÇÕES DO MODAL
========================= */
function openGallery(product) {
  images = galleries[product];

  if (!images || images.length === 0) return;

  currentIndex = 0;
  modalImage.src = images[currentIndex];
  galleryModal.style.display = "flex";
}

function closeGallery() {
  galleryModal.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImage.src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImage.src = images[currentIndex];
}
