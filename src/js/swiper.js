import Swiper from 'swiper/swiper-bundle'
let width = window.innerWidth

function swiperSize() {
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1.15,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}

window.addEventListener('resize', swiperSize)

if (width < 768) {
  swiperSize()
} else {
  document.querySelector('.swiper').classList.remove('.swiper')
}
