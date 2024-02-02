let rotacionActual = 0;

function rotarElemento() {
    rotacionActual += 45;
    element = document.getElementById("rotatingElement")
    if ('ontouchstart' in document.documentElement){
        element.style.transform = "rotate(" + rotacionActual + "deg)";
    }
}