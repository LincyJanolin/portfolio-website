const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    mobileMenu.classList.remove('active');
  }
});

const modalOverlay = document.getElementById('certModal');
const modalName = document.getElementById('modalCertName');
const modalCat = document.getElementById('modalCertCat');
const modalImg = document.getElementById('modalCertImg');

document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('click', () => {
    modalName.textContent = card.dataset.name;
    modalCat.textContent = card.dataset.category;
    modalImg.src = card.dataset.img;
    modalOverlay.classList.remove('hidden');
  });
});

function closeModal() {
  modalOverlay.classList.add('hidden');
}

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});


