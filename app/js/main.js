const header = document.querySelector('.header');
const headerTranparent = document.querySelector('.header--tranparent');

window.addEventListener("scroll", () => {
    if(window.scrollY > 10){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
})


document.getElementById("footer__form").addEventListener("submit", (e) => {
    e.preventDefault();
    const inputField = document.querySelector('input[type="email"]');
    if(inputField.value != ""){
        $(".footer__input").removeClass("error");
        console.log(inputField.value);
        inputField.value = "";
    }else{
        $(".footer__input").addClass("error");
    }
})

$(document).ready(function() {
    $('.menu').click (function(){
        $(this).toggleClass('open');
        $(".header__mobile").toggleClass('open');
    });
    $(".footer__input input").focusin(function(){
        $(".footer__input").addClass("border-color");
        $(".footer__input").removeClass("error");
    })
    $(".footer__input input").focusout(function(){
        $(".footer__input").removeClass("border-color");
    })
})


// Swiper start
const aboutSwiper = new Swiper(".mySwiper", {
    // spaceBetween:20,
    // centeredSlides:true,
    // sliderPerView:1,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:{
        576:{
            sliderPerView:1.5,
            spaceBetween:10,
        },
        768:{
            sliderPerView:2,
            spaceBetween:15,
        },
        992:{
            sliderPerView:3,
            spaceBetween:20,
        },
    }
})

const swiper1 = new Swiper(".swiper-container", {
    grabCursor:true,
    slidePerView:1,
    spaceBetween:10,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
})