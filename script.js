

window.addEventListener('scroll', () => {
const serviceItems = document.querySelectorAll('.concept__ttl--txt');
serviceItems.forEach(item => {
    const itemPosition = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (itemPosition < windowHeight) {
        item.classList.add('visible');
    }
});
});

window.addEventListener('scroll', () => {
const serviceItems = document.querySelectorAll('.concept__txt');
serviceItems.forEach(item => {
    const itemPosition = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (itemPosition < windowHeight && itemPosition > 0) {
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
        item.style.transition = 'opacity 3s, transform 3s';
    }
});
});

window.addEventListener('scroll', () => {
const serviceItems = document.querySelectorAll('.list__item--flex');
serviceItems.forEach(item => {
    const itemPosition = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (itemPosition < windowHeight) {
        item.classList.add('visible');
    }
});
});

window.addEventListener('scroll', () => {
const serviceItems = document.querySelectorAll('.work__info--txt');
serviceItems.forEach(item => {
    const itemPosition = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (itemPosition < windowHeight && itemPosition > 0) {
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
        item.style.transition = 'opacity 3s, transform 3s';
    }
});
});

window.addEventListener('scroll', () => {
const serviceItems = document.querySelectorAll('.blog__info');
serviceItems.forEach(item => {
    const itemPosition = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (itemPosition < windowHeight && itemPosition > 0) {
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
        item.style.transition = 'opacity 3s, transform 3s';
    }
});
});

window.addEventListener('scroll', () => {
const serviceItems = document.querySelectorAll('.service__list');
serviceItems.forEach(item => {
    const itemPosition = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (itemPosition < windowHeight && itemPosition > 0) {
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
        item.style.transition = 'opacity 3s, transform 3s';
    }
});
});


let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle__btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
    nav.classList.toggle("open");
};

mask.onclick = () => {
    nav.classList.toggle("open");
};


$(function() {
  $('.slider').slick({
    autoplay: true,
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 2,
  });
});
