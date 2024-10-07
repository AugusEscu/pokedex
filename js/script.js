const menuHamburguesa = document.getElementById('menu-hamburguesa');
const navegacion = document.getElementById('navegacion');

menuHamburguesa.addEventListener('click', () => {
    if (navegacion.style.maxHeight) {
        navegacion.style.maxHeight = null; // Cerrar el menú
    } else {
        navegacion.style.maxHeight = navegacion.scrollHeight + "px"; // Abrir el menú
    }
});