document.addEventListener('DOMContentLoaded', function() {
    const elementos = document.querySelectorAll('.ima1,.ima2,.ima3,.ima4, p, h2, h1');
  
    function mostrarElementos() {
      elementos.forEach(elemento => {
        const distancia = elemento.getBoundingClientRect().top;
        const alturaVentana = window.innerHeight;
  
        if (distancia < alturaVentana) {
          elemento.classList.add('aparecer');
          
        }
      });
    }
  
    window.addEventListener('scroll', mostrarElementos);
    mostrarElementos(); // Mostrar elementos al cargar la página también
  });
