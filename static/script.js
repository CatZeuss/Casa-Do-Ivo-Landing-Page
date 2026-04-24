document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-images img");
    const prevBtn = document.querySelector(".carousel-control.prev");
    const nextBtn = document.querySelector(".carousel-control.next");
    let currentIndex = 0;

    function updateCarousel(index) {
        images.forEach((img, i) => {
            img.classList.remove("active");
            if (i === index) img.classList.add("active");
        });
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel(currentIndex);
    }

    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);

    // Auto-slide every 5 seconds
    setInterval(showNext, 5000);

    // Initialize first image
    updateCarousel(currentIndex);

    // Seleccionamos todos los carruseles
    const carousels = document.querySelectorAll('.carrousel-container');

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll(".carrousel-item img");
        const leftBtn = carousel.querySelector('.left-btn');
        const rightBtn = carousel.querySelector('.right-btn');
        const overlay = document.querySelector('.overlay');
        const overlayImg = document.querySelector('#overlay-img');
        const closeOverlay = document.querySelector('.close-overlay');
        
        // Para manejar la galería de cada carrusel individualmente
        let currentIndex = 0;

        function updateCarousel(index) {
            images.forEach((img, i) => {
                img.classList.remove("active");
                if (i === index) img.classList.add("active");
            });
        }

        function showNext() {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel(currentIndex);
        }

        function showPrev() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel(currentIndex);
        }

        // Configurar botones de navegación para este carrusel específico
        leftBtn.addEventListener('click', () => {
            carousel.querySelector('.carrousel').scrollBy({ left: -120, behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            carousel.querySelector('.carrousel').scrollBy({ left: 120, behavior: 'smooth' });
        });

        // Mostrar imagen en overlay
        images.forEach((img) => {
            img.addEventListener('click', (e) => {
                overlayImg.src = e.target.src;
                overlay.classList.add('visible'); // Cambiar clase para transición
            });
        });

        // Cerrar overlay
        closeOverlay.addEventListener('click', () => {
            overlay.classList.remove('visible'); // Ocultar con transición
        });

        // Cerrar overlay al hacer clic fuera de la imagen
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('visible');
            }
        });

        // Inicializar el primer índice
        updateCarousel(currentIndex);

        // Auto-slide cada 5 segundos
        setInterval(showNext, 5000);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById('testimonial-text');
    const imageElement = document.getElementById('testimonial-image');
    const authorElement = document.getElementById('testimonial-author');
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');

    const testimonials = [
        {
            text: '"Nossa experiência na Casa do Ivo foi <b>simplesmente incrível</b>. O atendimento é <b>impecável</b>, a pousada é <b>extremamente confortável</b> e a localização é <b>perfeita</b> para aproveitar as <b>belezas de Alter do Chão</b>. Com certeza voltaremos!"',
            image: 'https://zeuss.b-cdn.net/casa-do-ivo/static/img/dep-1.png',
            author: 'João e Maria, São Paulo.'
        },
        {
            text: '"<b>Adoramos</b> nossa estadia na <b>Casa do Ivo</b>. Recomendamos a <b>todos que vão conhecer Alter, se hospedarem aqui.</b>"',
            image: 'https://zeuss.b-cdn.net/casa-do-ivo/static/img/dep-2.png',
            author: 'Luciana e Rodrigo, Rio de Janeiro.'
        }
    ];

    let currentIndex = 0;

    function updateTestimonial(index) {
        const testimonial = testimonials[index];
        
        // Fade out the current content
        textElement.style.opacity = 0;
        imageElement.style.opacity = 0;
        authorElement.style.opacity = 0;

        setTimeout(() => {
            // Update the content
            textElement.innerHTML = testimonial.text;
            imageElement.src = testimonial.image;
            authorElement.innerHTML = testimonial.author;

            // Fade in the new content
            textElement.style.opacity = 1;
            imageElement.style.opacity = 1;
            authorElement.style.opacity = 1;
        }, 500); // Wait for the fade out to finish before updating content
    }

    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(currentIndex);
    });

    rightButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(currentIndex);
    });

    // Initialize with the first testimonial
    updateTestimonial(currentIndex);
});

function openDrawer() {
    document.getElementById("side-panel").style.right = "0";
    document.getElementById("overlay-sidepanel").style.visibility = "visible";
    document.getElementById("overlay-sidepanel").style.opacity = "1";
}

function closeDrawer() {
    document.getElementById("side-panel").style.right = "-80%";
    document.getElementById("overlay-sidepanel").style.visibility = "hidden";
    document.getElementById("overlay-sidepanel").style.opacity = "0";
}






