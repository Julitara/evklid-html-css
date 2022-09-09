//swiper

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
});

//info_tab

document.querySelectorAll('.info__link').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {

    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.info__link').forEach(function (btn) {
      btn.classList.remove('btn-active')
    });

    e.currentTarget.classList.add('btn-active');

    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

document.querySelectorAll('.info__link').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {

    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.info__link').forEach(function (btn) {
      btn.classList.remove('btn-active')
    });

    e.currentTarget.classList.add('btn-active');

    document.querySelectorAll('.tabs-item-pic').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-pic--active')
    });

    document.querySelector(`[data-t="${path}"]`).classList.add('tabs-pic--active');
  });
});


//burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  });
});

//search

document.querySelector('.header__search-btn').addEventListener('click', function () {
  document.querySelector('.header__search').classList.add('header__search-show')
})

document.querySelector('.header__search-close').addEventListener('click', function () {
  document.querySelector('.header__search').classList.remove('header__search-show')
})


//accordion

new Accordion(".js-accordion-container");









