// Función para manejar el botón de volver arriba
document.addEventListener('DOMContentLoaded', function() {
    const btnVolverArriba = document.getElementById('btnVolverArriba');
    const footer = document.querySelector('footer');
    
    // Función para verificar la posición del scroll
    function verificarScroll() {
        // Obtener la posición del footer
        const footerPos = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Si el footer está visible o cerca de ser visible
        if (footerPos < windowHeight * 1.5) {
            btnVolverArriba.classList.add('visible');
        } else {
            btnVolverArriba.classList.remove('visible');
        }
    }
    
    // Evento de scroll
    window.addEventListener('scroll', verificarScroll);
    
    // Evento de clic en el botón
    btnVolverArriba.addEventListener('click', function() {
        // Scroll suave hacia arriba
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Verificar la posición inicial
    verificarScroll();
});