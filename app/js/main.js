const header = document.querySelector('.header');
const headerTranparent = document.querySelector('.header--tranparent');
const barWhite = document.querySelector('.bar-white');
const logo2 = document.querySelector('.logo-2')

window.addEventListener("scroll", () => {
    if(window.scrollY > 10){
        header.classList.add("sticky");
        if(barWhite != null){ barWhite.classList.add("sticky"); }
        if(logo2 != null){ logo2.src = "../../app/assets/logos/wiseOwl-logo.svg"; }
       
    }else{
        header.classList.remove("sticky");
        if(barWhite != null){ barWhite.classList.remove("sticky"); }
        if(logo2 != null){ logo2.src = "../../app/assets/logos/logo-black.svg";}
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


// Counter script start
const counterSection = document.querySelector(".company");
const counters = document.querySelectorAll(".counter__number");

let CounterObserver = new IntersectionObserver(
    (entries, observer)=>{
        let [entry] = entries;
        if(!entry.isIntersecting) return;

        let speed = 200;
        counters.forEach((counter, index) => {
            const updateCounter = () =>{
                let targetNumber = +counter.dataset.target;
                let initialNumber = +counter.innerText;
                let incPerCount = targetNumber / speed;

                if(initialNumber  < targetNumber ){
                    counter.innerText = Math.ceil(initialNumber + incPerCount);
                    setTimeout(updateCounter, 40);
                }
            }
            updateCounter();
            // if(counter.parentElement.style.animation){
            //     counter.parentElement.style.animation = "";
            // }else{
            //     counter.parentElement.style.animation = `slide-up 0.3s ease forward ${index / counters.length + 0.5}s`
            // }
        })
        observer.unobserve(counterSection);
    },{
        root:null,
        threshold:0.4,
    }
);

CounterObserver.observe(counterSection);


// form Validation
document.querySelector(".contact-form").addEventListener("submit", function(e){
    e.preventDefault();
})
