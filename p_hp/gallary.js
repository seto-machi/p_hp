"use strict"
// overlay-script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-overlay');
    const nav = document.querySelector('.nav-overlay');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');

        const isOpen = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isOpen);
        nav.setAttribute('aria-hidden', !isOpen);

        // メニューオープン時に背景スクロールを防止
        const x = isOpen ? 'hidden' : '';
        document.body.style.overflow = x;
    });

    const sumnailbox = document.getElementsByClassName('sumnail');
    const closebox = document.getElementsByClassName('butten-box');

    for (var i = 0; i < sumnailbox.length; i++) {
        sumnailbox[i].addEventListener('click', function () {
            const popup = this.querySelector(".popup");
            popup.classList.toggle('popup-close');
        });
    };

});

