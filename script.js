document.addEventListener("DOMContentLoaded", function() {
    const services = document.querySelectorAll('.service');

    services.forEach(service => {
        const title = service.querySelector('.service-title');
        const additionalInfo = service.querySelector('.additional-info');

        title.addEventListener('click', function() {
            if (additionalInfo.classList.contains('show')) {
                // Si el contenido ya está visible, lo ocultamos
                additionalInfo.classList.remove('show');
            } else {
                // Si el contenido está oculto, lo mostramos
                additionalInfo.classList.add('show');
            }
        });
    });
});




