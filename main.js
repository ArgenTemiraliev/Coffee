const menuOpenButton = document.querySelector("#menu-open-button")
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-modile-menu");
})


const menuClosenButton = document.querySelector("#menu-close-button") 
menuClosenButton.addEventListener("click", () => menuOpenButton.click())



const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    gradCursor: true,
    spaceBetween: 25,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  
  });