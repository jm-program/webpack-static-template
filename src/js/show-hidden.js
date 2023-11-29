let about = document.querySelector('.about-us_hidden')
let btnAbout = document.querySelector('.btn-expand')
let textExpand = document.querySelector('.text-expand')
let expandBrands = document.querySelector('.text-expand_brands')
let brands = document.querySelector('.brands__group_hidden')
let expandRepair = document.querySelector('.text-expand_repair')
let repair = document.querySelector('.repair__group_hidden')

btnAbout.addEventListener('click', function () {
  if (about.classList.contains('about-us_hidden')) {
    about.classList.remove('about-us_hidden')
    textExpand.textContent = 'скрыть'
  } else {
    about.classList.add('about-us_hidden')
    textExpand.textContent = 'показать всё'
  }
})

expandBrands.addEventListener('click', function () {
  if (brands.classList.contains('brands__group_hidden')) {
    brands.classList.remove('brands__group_hidden')
    expandBrands.textContent = 'скрыть'
  } else {
    brands.classList.add('brands__group_hidden')
    expandBrands.textContent = 'показать всё'
  }
})

expandRepair.addEventListener('click', function () {
  if (repair.classList.contains('repair__group_hidden')) {
    repair.classList.remove('repair__group_hidden')
    expandRepair.textContent = 'скрыть'
  } else {
    repair.classList.add('repair__group_hidden')
    expandRepair.textContent = 'показать всё'
  }
})
