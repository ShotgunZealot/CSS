var imagenesCompletas = [
    'https://i.ebayimg.com/images/g/0aMAAOSw6jJkcf4V/s-l1200.webp',
    'https://blasters4masters.com/wp-content/uploads/2023/04/Call-of-Duty-Ray-Gun-Mark-2-prop-replica-gun-10-900x900.jpg',
    'https://i.ytimg.com/vi/Ee3RULV99No/maxresdefault.jpg',
    'https://i.redd.it/ray-gun-from-cod-zombies-v0-xyfw69q1h08b1.jpg?width=4032&format=pjpg&auto=webp&s=c82a2056f171a4c1212e6ac3420a783cf719abfc'
];
function abrirLightbox(indice) {
    var lightbox = document.getElementById('lightbox');
    var imagenLightbox = document.getElementById('imagenLightbox');
    imagenLightbox.src = imagenesCompletas[indice];
    lightbox.style.display = 'flex';
}

function cerrarLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}