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
const swiper1 = new Swiper(".mySwiper--about", {
    spaceBetween:30,
    slidesPerView:1,
    grabCursor:true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    breakpoints:{
        576:{
            slidesPerView:1.5,
            spaceBetween:10,
        },
        768:{
            slidesPerView:2,
            spaceBetween:15,
        },
        992:{
            slidesPerView:3,
            spaceBetween:20,
        },
    }
})

const swiper2 = new Swiper(".swiper-container", {
    grabCursor:true,
    slidePerView:1,
    spaceBetween:30,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
})

const swiper3 = new Swiper(".mySwiper--team", {
    spaceBetween:30,
    slidesPerView:1,
    grabCursor:true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    breakpoints:{
        576:{
            slidesPerView:1.5,
            spaceBetween:10,
        },
        768:{
            slidesPerView:2,
            spaceBetween:15,
        },
        992:{
            slidesPerView:3,
            spaceBetween:20,
        },
    }
})


