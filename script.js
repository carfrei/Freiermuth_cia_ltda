// script.js

document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    
    const duracionLogo = 3000; // 3 segundos
    const idiomaGuardado = localStorage.getItem('idiomaPreferido');
    
    // Si ya existe un idioma guardado, redirigimos inmediatamente (después del splash)
    if (idiomaGuardado) {
        setTimeout(() => {
            window.location.href = `${idiomaGuardado}/index.html`;
        }, duracionLogo + 500); 
        return; 
    }

    // Lógica normal: Mostrar selector después del splash
    setTimeout(() => {
        splashScreen.style.opacity = '0';

        setTimeout(() => {
            splashScreen.classList.add('oculto');
            // Aseguramos que la capa de splash no intercepte clics
            splashScreen.style.zIndex = '-1'; 
            
            mainContent.classList.remove('oculto');
        }, 500); 
        
    }, duracionLogo);
});

/**
 * Guarda la preferencia de idioma y redirige al archivo HTML correspondiente.
 * NOTA: Esta función es llamada por los botones en index.html
 * @param {string} idioma - 'es', 'en', o 'de'.
 */
function cargarContenido(idioma) {
    localStorage.setItem('idiomaPreferido', idioma);
    window.location.href = `${idioma}/index.html`;
}