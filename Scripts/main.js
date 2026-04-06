const NAV = document.getElementById('nav');
const BTN_MENU = document.getElementById('menu');

BTN_MENU.addEventListener('click', () => {
    
    NAV.classList.toggle('nav-show');

    if (NAV.classList.contains('nav-show')) {
        document.body.style.overflow = 'hidden';
        BTN_MENU.setAttribute('aria-expanded', 'true');
    } else {
        document.body.style.overflow = '';
        BTN_MENU.setAttribute('aria-expanded', 'false');
    };
});