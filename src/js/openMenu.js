let btnMenu = document.querySelector('.burger')
let btnClose = document.querySelector('.burger-close')
let menuHiden = document.querySelector('.sidebar-menu_hiden')
let hidenHeader = document.querySelector('.header')
let flexbox2 = document.querySelector('.flex-box2')
let feedback = document.querySelector('.open-callback')
let flexContainer = document.querySelector('.flex-container')
let width = window.outerWidth

btnMenu.addEventListener('click', function () {
  menuHiden.classList.remove('sidebar-menu_hiden')
  hidenHeader.classList.add('hidden')
  if (width < 768) {
    flexbox2.classList.add('hidden')
  } else {
    flexbox2.style.opacity = '0.05'
  }
})

btnClose.addEventListener('click', function () {
  menuHiden.classList.add('sidebar-menu_hiden')
  hidenHeader.classList.remove('hidden')
  flexbox2.classList.remove('hidden')
  flexbox2.style.opacity = '1'
})

flexbox2.addEventListener('click', function () {
  menuHiden.classList.add('sidebar-menu_hiden')
  hidenHeader.classList.remove('hidden')
  flexbox2.classList.remove('hidden')
  flexbox2.style.opacity = '1'
  feedback.classList.add('hidden')
  feedback.classList.remove('vision-absolute')
})
