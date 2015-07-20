var menu = document.querySelector('#sidebar');
var menuPosition = menu.getBoundingClientRect().top - 24;
window.addEventListener('scroll', function() {
    if ((window.innerWidth >= 1020) && (window.pageYOffset >= menuPosition)) {
        menu.style.position = 'fixed';
        menu.style.top = '48px';
    }
    else {
        menu.style.position = 'absolute';
        menu.style.top = '24px';
    }
});
