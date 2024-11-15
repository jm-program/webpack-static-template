import 'swiper/swiper-bundle.css'
import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

import '../scss/style.scss'

const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
  let swiper

  breakpoint = window.matchMedia(breakpoint)

  const enableSwiper = function (className, settings) {
    swiper = new Swiper(className, settings)

    if (callback) {
      callback(swiper)
    }
  }

  const checker = function () {
    if (breakpoint.matches) {
      return enableSwiper(swiperClass, swiperSettings)
    } else {
      if (swiper !== undefined) swiper.destroy(true, true)
      return
    }
  }

  breakpoint.addEventListener('change', checker)
  checker()
}

resizableSwiper('(max-width: 767px)', '.mySwiper', {
  modules: [Pagination],
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

resizableSwiper('(max-width: 767px)', '.repair-swiper', {
  modules: [Pagination],
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
resizableSwiper('(max-width: 767px)', '.price-swiper', {
  modules: [Pagination],
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

// brands-block
const button = document.querySelector('.brand-button')
const text = document.querySelector('.brand-button__text')
const wrapper = document.querySelector('.mySwiper__wrapper')
const img = document.querySelector('.brand-button__img')
button.addEventListener('click', () => {
  if (!wrapper.classList.contains('mySwiper__wrapper--open')) {
    wrapper.classList.add('mySwiper__wrapper--open')
    img.classList.add('brand-button__img--open')
    text.textContent = 'Скрыть'
  } else {
    wrapper.classList.remove('mySwiper__wrapper--open')
    img.classList.remove('brand-button__img--open')
    wrapper.classList.add('mySwiper__wrapper--close')
    text.textContent = 'Показать все'
  }
})

// main-block
const buttonMain = document.querySelector('.main__read-more')
const textMain = document.querySelector('.main__read-more-content')
const wrapperMain = document.querySelector('.main__content')
const imgMain = document.querySelector('.main__read-more-img')
buttonMain.addEventListener('click', () => {
  if (!wrapperMain.classList.contains('main-content--open')) {
    wrapperMain.classList.add('main-content--open')
    imgMain.classList.add('brand-button__img--open')
    textMain.textContent = 'Скрыть'
  } else {
    wrapperMain.classList.remove('main-content--open')
    imgMain.classList.remove('brand-button__img--open')
    wrapperMain.classList.add('main-content--close')
    textMain.textContent = 'Показать все'
  }
})
// repair-block

const button_repair = document.querySelector('.repair-button')
const text_repair = document.querySelector('.repair-button__text')
const wrapper_repair = document.querySelector('.repair__wrapper')
const img_repair = document.querySelector('.repair-button__img')
button_repair.addEventListener('click', () => {
  if (!wrapper_repair.classList.contains('repair__wrapper--open')) {
    wrapper_repair.classList.add('repair__wrapper--open')
    img_repair.classList.add('repair-button__img--open')
    text_repair.textContent = 'Скрыть'
  } else {
    wrapper_repair.classList.remove('repair__wrapper--open')
    img_repair.classList.remove('repair-button__img--open')
    wrapper_repair.classList.add('repair__wrapper--close')
    text_repair.textContent = 'Показать все'
  }
})

// burger_menu--open

const burger_button = document.getElementById('burger-button')
const modal_burger = document.querySelector('.burger-menu')
const body = document.querySelector('.body')
const close = document.querySelector('.header-navigation__button-close')
const show = document.querySelector('.modal--show')
document.addEventListener('click', (e) => {
  let withinBoundaries = e.composedPath().includes(show)
  if (!withinBoundaries) {
    modal_burger.classList.remove('modal--show')
    body.classList.remove('body-style')
  }
})

burger_button.addEventListener('click', (e) => {
  e.stopPropagation()
  modal_burger.classList.add('modal--show')
  body.classList.add('body-style')
})

close.addEventListener('click', () => {
  modal_burger.classList.remove('modal--show')
  body.classList.remove('body-style')
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal_burger.classList.remove('modal--show')
    body.classList.remove('body-style')
  }
})

//call menu
const call_button = document.querySelectorAll('.header__button-call')
const modal_call = document.querySelector('.call-menu')
const close_call = document.querySelector('.call-close')
const modalCallContainer = document.querySelector('.call-menu__container')
const closeModalCall = () => {
  modal_call.classList.remove('modal--show')
  body.classList.remove('body-style')
  modal_call.style.display = 'none'
}

document.addEventListener('click', (e) => {
  let withinBoundaries = e.composedPath().includes(modalCallContainer)
  if (!withinBoundaries) {
    closeModalCall()
  }
})

call_button.forEach(function (button) {
  button.addEventListener('click', (e) => {
    e.stopPropagation()
    modal_call.classList.add('modal--show')
    body.classList.add('body-style')
    modal_call.style.display = 'flex'
  })
})

close_call.addEventListener('click', () => {
  closeModalCall()
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModalCall()
  }
})
//chat menu
const feedback_button = document.querySelectorAll('.header__button-chat')
const modal_feedback = document.querySelector('.feedback-menu')
const close_feedback = document.querySelector('.feedback-close')
const modalFeedbackContainer = document.querySelector(
  '.feedback-menu__container'
)

const closeModalFeedback = () => {
  modal_feedback.classList.remove('modal--show')
  body.classList.remove('body-style')
  modal_feedback.style.display = 'none'
}

document.addEventListener('click', (e) => {
  let withinBoundaries = e.composedPath().includes(modalFeedbackContainer)
  if (!withinBoundaries) {
    closeModalFeedback()
  }
})

feedback_button.forEach(function (button) {
  button.addEventListener('click', (e) => {
    e.stopPropagation()
    modal_feedback.classList.add('modal--show')
    body.classList.add('body-style')
    modal_feedback.style.display = 'flex'
  })
})

close_feedback.addEventListener('click', () => {
  closeModalFeedback()
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModalFeedback()
  }
})
