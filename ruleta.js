/*
 * Codigo para funciones de la ruleta
 */

const ruleta = document.getElementById('ruleta');
const spinBtn = document.getElementById('spin-btn');

spinBtn.addEventListener('click', () => {
    const segmentos = document.querySelectorAll('.segmento');
    const primerSegmento = segmentos[0]; // Obtener el primer segmento
    
    // Mover el primer segmento al final del div
    ruleta.appendChild(primerSegmento);
    
    // Gira la ruleta al ángulo calculado
    const randomAngle = Math.floor(Math.random() * 360) + 3600;
    ruleta.style.transition = 'transform 3s ease-out';
    ruleta.style.transform = `rotate(${randomAngle}deg)`;
});
