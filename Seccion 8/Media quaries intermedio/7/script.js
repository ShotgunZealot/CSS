window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const body = document.body;

    if (window.scrollY > 200 && window.innerHeight > window.innerWidth) {
        header.classList.add('fixed');
        body.classList.add('scrolled');
        header.style.opacity=1;
    } else {
        header.classList.remove('fixed');
        body.classList.remove('scrolled');
        header.style.opacity=1;
    }
    if (window.scrollY > 80 && window.scrollY < 200){
        header.style.opacity=0;     
    }
});