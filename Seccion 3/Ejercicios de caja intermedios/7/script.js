const cajaGrande = document.getElementById("space");
const cajaPequena = document.getElementById("box");

cajaGrande.addEventListener("mousemove", function(event) {
    const cajaGrandeRect = cajaGrande.getBoundingClientRect();

    const offsetX = event.clientX - cajaGrandeRect.left;
    const offsetY = event.clientY - cajaGrandeRect.top;

    const translateX = offsetX - cajaPequena.clientWidth / 2;
    const translateY = offsetY - cajaPequena.clientHeight / 2;
    if (
        offsetX >= 13 &&
        offsetX <= (cajaGrandeRect.width-63) &&
        offsetY >= 13 &&
        offsetY <= (cajaGrandeRect.height-63)
    ) {
        cajaPequena.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }
});
