document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('.story-section');
    const mainContainer = document.getElementById('main-container');

    const backgroundImages = [
        'bg_intro.jpg',       // Intro
        'bg_s1.jpg',          // Temporada 1
        'bg_s2.jpg',          // Temporada 2
        'bg_s3.jpg',          // Temporada 3
        'bg_s4.jpg',          // Temporada 4
        'bg_s5.jpg',          // Temporada 5
        'bg_s6.jpg',          // El Mudo
        'bg_outro.jpg'        // Outro
    ];

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Cambia el fondo cuando la mitad de la sección es visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionIndex = Array.from(sections).indexOf(entry.target);
                const bgImage = backgroundImages[sectionIndex];
                if (bgImage) {
                    mainContainer.style.backgroundImage = `url(${bgImage})`;
                }

                // Efecto de aparición para el contenido de la sección
                const content = entry.target.querySelector('.content-box');
                if (content) {
                    content.classList.add('visible');
                }
            } else {
                 // Ocultar el contenido cuando la sección ya no está visible
                const content = entry.target.querySelector('.content-box');
                if (content) {
                    content.classList.remove('visible');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Carga inicial del fondo
    mainContainer.style.backgroundImage = `url(${backgroundImages[0]})`;
});

