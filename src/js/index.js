import '../scss/style.scss';
import Swiper from '../../node_modules/swiper/swiper-bundle';

var swiper;
function swiperCard() {
        swiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
        },

        breakpoints: {
          320:{
            enabled: true,
          },

          768:{
            enabled:false,
          }
        },
        
      });
    }
swiperCard();

var button = document.querySelector('.brands__show-all');
var hideSlides = document.querySelectorAll('.slider__item--hidden');
var isOpened = false;

button.addEventListener('click', function () {
  for (let i = 0; i < hideSlides.length; i++) {
  if (!isOpened) {
  hideSlides[i].classList.toggle('slider__item--hidden');
  button.textContent = 'Скрыть';
  button.classList.toggle('brands__show-all--opened');
  isOpened=true;  
} else {
  hideSlides[i].classList.toggle('slider__item--hidden');
  button.textContent = 'Показать все';
  button.classList.toggle('brands__show-all--opened');
  isOpened=false;
  }
}
 });


var button1 = document.querySelector('.technique__show-all');
var hideSlides1 = document.querySelectorAll('.technique__item-hidden');
var isOpened1 = false;

button1.addEventListener('click', function () {
  for (let i = 0; i < hideSlides1.length; i++) {
  if (!isOpened1) {
  hideSlides1[i].classList.toggle('technique__item-hidden');
  button1.textContent = 'Скрыть';
  button1.classList.toggle('brands__show-all--opened');
  isOpened1=true;  
} else {
  hideSlides1[i].classList.toggle('technique__item-hidden');
  button1.textContent = 'Показать все';
  button1.classList.toggle('brands__show-all--opened');
  isOpened1=false;
  }
}
 });

 var button2 = document.querySelector('.text__button');
 var hideSlides2 = document.querySelector('.text__content');
 var isOpened2 = false;
  
 button2.addEventListener('click', function () {
   if (!isOpened2) {
   hideSlides2.classList.toggle('text__content--show');
   button2.textContent = 'Скрыть';
   button2.classList.toggle('brands__show-all--opened');
   isOpened2=true;  
 } else {
   hideSlides2.classList.toggle('text__content--show');
   button2.textContent = 'Показать все';
   button2.classList.toggle('brands__show-all--opened');
   isOpened2=false;
   }
 }); 


 var menu = document.querySelector('.mobile-menu');
 var openMenuButton = document.querySelector('.header__burger');
 var closeMenuButton = document.querySelector('.header__menu-close');
 var page = document.querySelector('.page');
 var isOpened3 = false;
 var desktopScreen = document.querySelector('.desktop-screen');
 
 openMenuButton.addEventListener('click', function (e) {
  e.stopPropagation();
  isOpened3=true;
  menu.classList.add('mobile-menu--show');
  page.classList.add('page__modal');
});

closeMenuButton.addEventListener('click', function () {
  menu.classList.remove('mobile-menu--show');
  page.classList.remove('page__modal');
});
page.addEventListener('click', function () {
    if (isOpened3){
      closeMenuButton.click();
      isOpened3=false;
   }
  });

  
  var chatButton = document.querySelector('.contacts__chat');
  var headerChatButton = document.querySelector('.header__chat');
  var modalChat = document.querySelector('.modal-chat');
  var chatCloseButton = document.querySelector('.modal-chat__close');
  var isOpened4 = false;
  var desktopScreen = document.querySelector('.desktop-screen');

  chatButton.addEventListener('click', function (e) {
  e.stopPropagation();
  isOpened4=true;
  modalChat.classList.remove('modal-chat--hidden');
  menu.classList.remove('mobile-menu--show');
  desktopScreen.classList.add('page__modal');
  });
  
  headerChatButton.addEventListener('click', function (e) {
  e.stopPropagation();
  isOpened4=true;
  modalChat.classList.remove('modal-chat--hidden');
  menu.classList.remove('mobile-menu--show');
  desktopScreen.classList.add('page__modal');
  });
  
  chatCloseButton.addEventListener('click', function () {
  modalChat.classList.add('modal-chat--hidden');
  desktopScreen.classList.remove('page__modal');
  page.classList.remove('page__modal');
  });
  
  desktopScreen.addEventListener('click', function () {
    if (isOpened4){
      chatCloseButton.click();
      isOpened4=false;
   }
  });

  var callButton = document.querySelector('.contacts__call');
  var callButtonHeader = document.querySelector('.header__call');
  var modalCall = document.querySelector('.modal-call');
  var callCloseButton = document.querySelector('.modal-call__close');
  var isOpened5 = false;

    callButton.addEventListener('click', function (e) {
    e.stopPropagation();
    isOpened5=true;
    modalCall.classList.remove('modal-call--hidden');
    menu.classList.remove('mobile-menu--show');
    desktopScreen.classList.add('page__modal');
    });
    
    callButtonHeader.addEventListener('click', function (e) {
    e.stopPropagation();
    isOpened5=true;
    modalCall.classList.remove('modal-call--hidden');
    desktopScreen.classList.add('page__modal');
    });
    
    callCloseButton.addEventListener('click', function (e) {
    e.stopPropagation();
    modalCall.classList.add('modal-call--hidden');
    desktopScreen.classList.remove('page__modal');
    page.classList.remove('page__modal');
    isOpened5 = false;
    });
    
    desktopScreen.addEventListener('click', function () {
      if (isOpened5){
        callCloseButton.click();
        isOpened5=false;
     }
    });