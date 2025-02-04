const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
});


document.addEventListener('mousemove', (e) => {
    const rastro = document.createElement('div');
    rastro.classList.add('rastro-sangre');
    
    // Posiciona el rastro en la ubicación del ratón
    rastro.style.left = `${e.pageX - 5}px`;  /* Ajustamos para que el rastro esté centrado */
    rastro.style.top = `${e.pageY - 5}px`;
    
    // Añadir el rastro al body
    document.body.appendChild(rastro);
    
    // Eliminar el rastro después de 500ms (duración de la animación)
    setTimeout(() => {
        rastro.remove();
    }, 500);
});
