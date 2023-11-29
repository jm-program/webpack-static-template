let call = document.querySelectorAll('.call')
let header = document.querySelector('.header')
let openCallback = document.querySelector('.open-callback')
let closed = document.querySelector('.modal-close')
let flexbox1 = document.querySelector('.flex-box1')
let flexbox2 = document.querySelector('.flex-box2')
let repair = document.querySelector('.menu__repair-logo')
let width = window.innerWidth

call.forEach(function (btn) {
  btn.addEventListener('click', function () {
    openCallback.classList.remove('hidden')
    openCallback.classList.add('vision-absolute')
    flexbox1.classList.add('opacity')
    repair.classList.add('opacity')
    flexbox2.style.opacity = '0.5'
    header.classList.add('hidden')
    if (width < 1366) {
      flexbox1.classList.add('sidebar-menu_hiden')
    }
  })
})

flexbox2.addEventListener('click', function () {
  flexbox1.classList.remove('opacity')
  repair.classList.remove('opacity')
})
closed.addEventListener('click', function () {
  flexbox1.classList.remove('opacity')
  repair.classList.remove('opacity')
  flexbox2.style.opacity = '1'
  openCallback.classList.add('hidden')
  flexbox2.classList.remove('hidden')
  header.classList.remove('hidden')
})
