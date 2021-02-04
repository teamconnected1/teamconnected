const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-closed');
const navigat = document.querySelector('.nav');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menu.classList.add('menu-opened');
        navigat.classList.add('nav-trans');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menu.classList.remove('menu-opened');
        navigat.classList.remove('nav-trans');
        menuOpen = false;
    }
});

