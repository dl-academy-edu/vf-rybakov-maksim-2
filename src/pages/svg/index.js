var buttonMobileHeader = document.querySelector('.mobile-menu_open-js');
var buttonCloseMobileHeader = document.querySelector('.mobile-menu_close-js');
var mobileHeader = document.querySelector('.mobile-menu_js');
var mobileMenu = document.querySelector('.mobile-menu');
 
 
buttonMobileHeader.addEventListener('click', function () {
    mobileHeader.classList.add('mobile-menu__open')
    buttonMobileHeader.classList.add('displey-none')
    buttonCloseMobileHeader.classList.remove('displey-none')
    mobileMenu.classList.add('mobile-menu__background');
    mobileMenu.classList.remove('displey-none');
})
 
buttonCloseMobileHeader.addEventListener('click', function() {
    mobileHeader.classList.remove('mobile-menu__open')
    buttonCloseMobileHeader.classList.add('displey-none')
    buttonMobileHeader.classList.remove('displey-none')
    mobileMenu.classList.remove('mobile-menu__background');
    mobileMenu.classList.add('displey-none');
})