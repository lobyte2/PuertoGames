// Inicializa el indice del slide actual en 0
let slideIndex = 0;

// Selecciona todos los slides
const slides = document.querySelectorAll('.slide');

// Selecciona todos los puntos indicadores
const lineas = document.querySelectorAll('.linea');

// Funcion para mover el slider
function moveSlide(n) {
  // Cambia el índice del slide según 'n' (+1 o -1)
  slideIndex += n;

  // Reinicia el índice a 0 si sobrepasa el numero total de slides
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // Ajusta el índice al último slide si es negativo
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  // Actualiza la visualización del slider y los puntos
  updateSlider();
}


// Funcion para mover el slider a una imagen especifica al hacer clic en los puntos
function moveToSlide(index) {
  slideIndex = index;
  updateSlider();
}

// Actualizar el slider y los puntos
function updateSlider() {
  // Desactivar todas las slides
  slides.forEach(slide => slide.classList.remove('active'));
  
  // Activar la slide actual
  slides[slideIndex].classList.add('active');
  
  // Desactivar todos las lineas
  lineas.forEach(linea => linea.classList.remove('active'));
  
  // Activar el punto correspondiente
  lineas[slideIndex].classList.add('active');
}

// Función para cambiar de imagen automaticamente
function autoSlide() {
  moveSlide(1);
}

// Inicializar el slider
updateSlider();

// Cambiar de imagen cada 5 segundos
setInterval(autoSlide, 5000);
