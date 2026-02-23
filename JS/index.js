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
    AcoPolido: carregarImagens("./images/aco_polido/polido-", {
    inicio: 1,
    fim: 5,
    extensoes: ["jpg"]
  }),
  
    Backlight: carregarImagens("./images/Backlight/Backlight-", {
    inicio: 1,
    fim: 13,
    extensoes: ["jpg"]
  }),

    Claraboias: carregarImagens("./images/Claraboias/Cobertura-", {
    inicio: 1,
    fim: 9,
    extensoes: ["jpg"]
  }),

    Corte: carregarImagens("./images/corte/laser", {
    inicio: 1,
    fim: 3,
    extensoes: ["jpg"]
  }),

    CorteRouter: carregarImagens("./images/corterouter/corte-router-", {
    inicio: 1,
    fim: 3,
    extensoes: ["jpg"]
  }),
  
    FachadaACM: carregarImagens("./images/Fachada_ACM/Fachada_ACM-", {
    inicio: 1,
    fim: 13,
    extensoes: ["jpg"]
  }),

    frontlight: carregarImagens("./images/frontlight/frontlight-", {
    inicio: 1,
    fim: 8,
    extensoes: ["jpg"]
  }),

    Galvanizada: carregarImagens("./images/Galvanizada/Galvanizada-", {
    inicio: 1,
    fim: 8,
    extensoes: ["jpg"]
  }),

  iluminada: carregarImagens("./images/iluminada/iluminada-", {
    inicio: 1,
    fim: 10,
    extensoes: ["jpg"]
  }),

  inox_escovado: carregarImagens("./images/inox_escovado/INOX-", {
    inicio: 1,
    fim: 5,
    extensoes: ["jpg"]
  }),

  Latao: carregarImagens("./images/Latao/Latao-", {
    inicio: 1,
    fim: 4,
    extensoes: ["jpg"]
  }),

  Letra: carregarImagens("./images/Letra/Letras-", {
    inicio: 1,
    fim: 7,
    extensoes: ["jpeg"]
  }),


  Letra_MDF: carregarImagens("./images/Letra_MDF/MDF-", {
    inicio: 1,
    fim: 6,
    extensoes: ["jpg"]
  }),

  letra_PVC: carregarImagens("./images/letra_PVC/PVC-", {
    inicio: 1,
    fim: 3,
    extensoes: ["jpg"]
  }),


  LetraAcrilico: carregarImagens("./images/LetraAcrilico/acrilico-", {
    inicio: 1,
    fim: 12,
    extensoes: ["jpg"]
  }),

  Painel: carregarImagens("./images/Painel/Painel-", {
    inicio: 1,
    fim: 2,
    extensoes: ["jpeg"]
  }),

  produtosacrilico: carregarImagens("./images/produtos_em_acrilico/prod", {
    inicio: 1,
    fim: 6,
    extensoes: ["jpg"]
  }),

  Sinalizacao: carregarImagens("./images/Sinalizacao/sinalizacao-interna-", {
    inicio: 1,
    fim: 6,
    extensoes: ["jpg"]
  }),


  Toldo: carregarImagens("./images/Toldo/toldo-", {
    inicio: 1,
    fim: 4,
    extensoes: ["jpg"]
  }),

  Toldo_cortina: carregarImagens("./images/Toldo_cortina/cortina-", {
    inicio: 1,
    fim: 4,
    extensoes: ["jpg"]
  }),

  toldo_retratil: carregarImagens("./images/toldo_retratil/retratil-", {
    inicio: 1,
    fim: 5,
    extensoes: ["jpg"]
  }),

  Totem: carregarImagens("./images/Totem/Totem-", {
    inicio: 1,
    fim: 8,
    extensoes: ["jpg"]
  }),













































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
