var buttonMobileHeader = document.querySelector('.mobile-menu_open-js');
var buttonCloseMobileHeader = document.querySelector('.mobile-menu_close-js');
var mobileHeader = document.querySelector('.mobile-menu_js');
var mobileMenu = document.querySelector('.mobile-menu');


buttonMobileHeader.addEventListener('click', function () {
    mobileHeader.classList.add('mobile-menu__open')
    buttonMobileHeader.classList.add('display-none')
    buttonCloseMobileHeader.classList.remove('display-none')
    mobileMenu.classList.add('mobile-menu__background');
    mobileMenu.classList.remove('display-none');
})

buttonCloseMobileHeader.addEventListener('click', function() {
    mobileHeader.classList.remove('mobile-menu__open')
    buttonCloseMobileHeader.classList.add('display-none')
    buttonMobileHeader.classList.remove('display-none')
    mobileMenu.classList.remove('mobile-menu__background');
    mobileMenu.classList.add('display-none');
})
