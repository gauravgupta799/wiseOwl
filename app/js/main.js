const header = document.querySelector('.header');
const headerTranparent = document.querySelector('.header--tranparent');
const barWhite = document.querySelector('.bar-white');
const logo2 = document.querySelector('.logo-2');

const loader = document.querySelector(".page-loader");

// ====== Pre-loader start ======
window.onload = () =>{
    loader.style.display = 'none';
  }
// ====== Pre-loader end ======

// window.addEventListener("load",()=>{
//     var c = 0;
//     const count = setInterval(function(){      
//         c = c + Math.floor(Math.random() * 20);
//         if(c < 100){   
//            document.querySelector(".loader__count").innerHTML = c ;
//         }else{
//             c = 100;
//             document.querySelector(".loader__count").innerHTML = c;  
//             clearInterval(count);
//         }
//     },150);
// })


//======  Active Page Link start ======
const windowPathname = window.location.pathname;
const navLinks = document.querySelectorAll(".header__mobile-link");
navLinks.forEach(link =>{
  const navLinkPathname = new URL(link.href).pathname;
  if((windowPathname === navLinkPathname) || (windowPathname === "/index.html" && navLinkPathname === "/")){
    link.classList.add("active");
  }
})
//======  Active Page Link end ======

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

// form Validation
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
        $(".overlay").toggleClass('active');
        // $('#body').toggleClass("fixed-position");
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
if(counterSection != null && counters != null) {
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
}


// contact form
const checkAgree = document.querySelector(".form-check-input");
var submitBtn = document.getElementById("submit")

if(submitBtn != null && checkAgree != null) {
    submitBtn.disabled = "true";
    checkAgree.checked = false;
    checkAgree.addEventListener("change",(e)=>{
        if(e.target.checked){
            submitBtn.disabled = false;
            submitBtn.addEventListener("click",(e)=>{
                e.preventDefault();
                document.querySelectorAll(".form-control").forEach((input, i) => {
                    if(input.value != ""){
                        checkAgree.checked= false;
                        input.value="";
                    }else{
                        alert("Please fill the all field.")
                    }
                })
            })
        }else{
            submitBtn.disabled = "true";
        }
    })
}

//====== Animation  start ======
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

//  animation fade in 
const fadeIn = gsap.utils.toArray(".animate-fade-in");
fadeIn.forEach((mainContent, i) => {
  const anim = gsap.fromTo(
    mainContent,
    { opacity: 0 },
    { duration: 1, opacity: 1, stagger: 0.2 }
  );
  ScrollTrigger.create({
    trigger: mainContent,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration: 1,
    ease: Power4.easeOut,
  });
});

// animate fade in up
const textContainers = gsap.utils.toArray(".animate-fade-in-up");
textContainers.forEach((item, i) => {
  const anim = gsap.fromTo(
    item,
    { opacity: 0, y: 50 },
    { duration: 1, opacity: 1, y: 0 }
  );
  ScrollTrigger.create({
    trigger: item,
    animation: anim,
    toggleActions: "play",
    once: true,
    duration: 1,
    stagger:0.1,
    ease: Power4.easeOut,
  });
});


// slider left
const leftSlide = gsap.utils.toArray(".slide-left");
leftSlide.forEach((left, i) =>{
  const anim = gsap.fromTo(left, 
    { opacity: 0, width:0},
    { opacity: 1, width:"100%", duration:1}
  );
  ScrollTrigger.create({
    trigger: left,
    animation: anim,
    toggleActions: "play",
    delay:0.4,
    duration: 3,
    ease: Power4.easeInOut,
  });
})

// slide right
const rightSlide = gsap.utils.toArray(".slide-right");
rightSlide.forEach((right, i) =>{
  const anim = gsap.fromTo(right, 
    { opacity: 0, x:100},
    { opacity: 1, x:0, duration:1}
  );
  ScrollTrigger.create({
    trigger: right,
    animation: anim,
    toggleActions: "play",
    delay:0.6,
    duration: 3,
    ease: Power4.easeInOut,
  });
})

