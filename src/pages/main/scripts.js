var popupContact = document.querySelector('.index-popup__overlay')
var popupButton = document.querySelector('.slider-description__button_popup-link')
var popupCloseButton = popupContact.querySelector('.index-popup__button-close')
var firstInput = popupContact.querySelector('#popup-user-name')

popupButton.addEventListener('click', function () {
    popupContact.classList.add('open');
    firstInput.focus()
    document.body.style.overflow = 'hidden';
})

popupCloseButton.addEventListener('click', function() {
    popupContact.classList.remove('open')
    popupButton.focus()
    document.body.style.overflow = 'initial';
})

window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27 ) {
        popupContact.classList.remove('open');
        popupButton.focus()
        document.body.style.overflow = 'initial';
    }
})

popupContact.addEventListener('click', function(evt) {
    if (evt.target === popupContact ) {
        popupContact.classList.remove('open')
        document.body.style.overflow = 'initial';
        popupButton.focus()
    }
})


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


