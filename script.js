const hamburger = document.querySelector(".menu-bar");
const navMenu = document.querySelector(".link-list");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

var swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween:20,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: { 
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

//Responsive Breakpoints
breakpoints:{
  0:{
    slidesPerView: 1
  },

  658:{
  slidesPerView: 2
},

1004:{
  slidesPerView:3
},
}
});

