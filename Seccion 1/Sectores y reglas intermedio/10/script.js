const nav=document.querySelector('.nav');

window.addEventListener('scroll', function(){
nav.classList.toggle('activate', window.scrollY>0)
})