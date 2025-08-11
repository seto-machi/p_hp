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

  //前のやつ
  // const onevhScrollPoint = document.querySelector('.pagescroll');
  // const profile = document.querySelector('#Profile');

  // onevhScrollPoint.addEventListener('click', () => {
  //   profile.scrollIntoView({ behavior: "smooth", block: "start" });
  // })

  //修正後
  const home = document.querySelector('.home');
  const winHeight = home.getBoundingClientRect().height;

  const onevhScrollPoint = document.querySelector('.pagescroll');

  onevhScrollPoint.addEventListener('click', () => {
    window.scroll({ top: winHeight, behavior: "smooth" });
  });

});

const ul = document.querySelector('.slider ul');
const slider = ul.children;

let currentIndex = 0;

function moveSlide() {
  if (currentIndex < 0) {
    currentIndex = slider.length - 1
  }
  const slideWidth = slider[0].getBoundingClientRect().width;
  ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;

};

const slidefirst = slider[0];
const copyfirst = slidefirst.cloneNode(true);
ul.append(copyfirst);


let firstLoop = true;
const recursiveFunc = () => {
  const isReachedTail = currentIndex === 3;
  let awaitTime = 0;
  if (isReachedTail) {
    awaitTime = 600
  } else if (!firstLoop && currentIndex === 0) {
    awaitTime = 1400
  } else {
    awaitTime = 2000
  }

  setTimeout(() => {
    currentIndex++;
    if (ul.classList.contains('no-transition')) {
      ul.classList.remove('no-transition');
    }

    if (isReachedTail) {
      ul.classList.add('no-transition');
      currentIndex = 0;
      moveSlide();
      firstLoop = false
    } else {
      moveSlide();
    }
    recursiveFunc();
  }, awaitTime)
};

recursiveFunc();






