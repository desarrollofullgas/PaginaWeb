document.addEventListener('astro:page-load', () => {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const carousel = document.getElementById('carousel');
    const carouselImage = document.getElementById('carousel-image');
    const carouselAlt = document.getElementById('carousel-description');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const closeButton = document.getElementById('closeButton');
    const overlay = document.getElementById('overlay'); // Capa del fondo desenfocado
    let currentIndex = null; // Inicialmente null
    
    function showCarousel(imageIndex) {
        currentIndex = imageIndex; // Asigna el índice actual
        carousel.style.display = 'flex';
        carouselImage.src = galleryImages[imageIndex].src;
        carouselAlt.textContent = galleryImages[imageIndex].alt;
        overlay.style.display = 'block'; // Mostrar el fondo desenfocado
    }
    
    function hideCarousel() {
        currentIndex = null; // Reinicia el índice
        carousel.style.display = 'none';
        overlay.style.display = 'none'; // Ocultar el fondo desenfocado
    }
    
    
    function showPrevImage() {
        if (currentIndex !== null) {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            carouselImage.src = galleryImages[currentIndex].src;
            carouselAlt.textContent = galleryImages[currentIndex].alt;
        }
    }
    
    function showNextImage() {
        if (currentIndex !== null) {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            carouselImage.src = galleryImages[currentIndex].src;
            carouselAlt.textContent = galleryImages[currentIndex].alt;
        }
    }
    
    
    
    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            showCarousel(index);
        });
    });
    
    prevButton.addEventListener('click', () => {
        showPrevImage();
    });
    
    nextButton.addEventListener('click', () => {
        showNextImage();
    });
    
    // Ocultar el carrusel al principio
    hideCarousel();

    // Agregar evento de clic para cerrar el carrusel
closeButton.addEventListener('click', () => {
    hideCarousel();
});

    document.addEventListener('click', (event) => {
        if (!carousel.contains(event.target) && !event.target.classList.contains('gallery-image') && currentIndex !== null) {
            hideCarousel();
        }
    });
});