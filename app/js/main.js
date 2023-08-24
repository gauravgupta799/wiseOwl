const header = document.querySelector('.header');
const headerTranparent = document.querySelector('.header--tranparent');
const barWhite = document.querySelector('.bar-white');
const logo2 = document.querySelector('.logo-2');
const loader = document.querySelector(".page-loader");

// ====== Pre-loader start ======
// window.onload = () =>{
//     loader.style.display = 'none';
// }

window.onload = () =>{
    const percent = document.getElementById("percent");
    const bar = document.getElementById("barconfirm");
    let width = 0;
    let id;
    function frame(){
        width = width + Math.floor(Math.random() * 10);
        if(width >= 100){
            clearInterval(id);
            till.play();
        }else{
            width++;
            bar.style.width = width + "%";
            percent.innerHTML = width + "%";
        }
    }

    id = setInterval(frame, 100);
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

//======  Sticky header start ======
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

//======  Sticky header end ======

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

const till = gsap.timeline({
    paused:"true"
});

till.to("#percent, #bar",{
    duration:0.2,
    opacity:0,
    zIndex:-1,
});

till.to("#preloader", {
    duration:0.8,
    width:"0%",
});


const tl = gsap.timeline();
window.addEventListener("load",() => {
    tl.from(".header__logo, .switch",1, {
        opacity:0,
        y:-100,
        delay:-1,
        stagger:0.5,
        ease:Expo.easeInOut
    });
    tl.from(".menu",{
        opacity:0,
        delay:-1,
        ease:Expo.easeInOut
    })
    tl.from(".heading, .subHeading",{
        opacity:0,
        duration:1,
        y:50,
        stagger:0.8,
        ease: Power4.easeInOut,
    });
    tl.from(".hero-btn", {
        opacity:0,
        x:-50,
        ease:Power4.easeOut,
    })
    tl.from(".h-divider",{
        opacity:0,
        scaleX:0,
        x:-10,
        ease:Expo.easeInOut
    })
    tl.from(".hero__footer-link ",1.05, {
        opacity:0,
        x:-50,
        stagger:0.2,
        ease:Power4.easeInOut
    });

    // tl.from(".btn-fade-in",{
    //     opacity:0,
    //     y:-30,
    //     duration:1,
    //     ease:Power4.easeInOut
    // })
   
})
//  animation fade in 
const fadeIn = gsap.utils.toArray(".animate-fade-in");
fadeIn.forEach((mainContent, i) => {
  const anim = gsap.fromTo(
    mainContent,
    { opacity: 0 },
    {opacity: 1, stagger: 0.2, duration:1}
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
    stagger:1,
    ease: Power4.easeOut,
  });
});


// slider left
const leftSlide = gsap.utils.toArray(".slide-left");
leftSlide.forEach((left, i) =>{
  const anim = gsap.fromTo(left, 
    { opacity: 0,x:-5, scaleX:0},
    { opacity: 1, x:0, scaleX:1, duration:1}
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
    stagger:1,
    ease: Power4.easeInOut,
  });
})


// divider
tl.fromTo(".divider", 
    {  opacity:0, scaleX:0, x:-10 },
    { opacity:1, scaleX:1, x:0},
    ScrollTrigger({
        trigger: ".divider",
        delay:0.6,
        duration: 1.5,
        start:"20% 50%",
        end:"50%",
        ease: Power4.easeInOut,
    })
)

// stagger

const staggerSlide = gsap.utils.toArray(".stg");
staggerSlide.forEach((stg,i)=>{
    const anim = gsap.fromTo(stg,
        { opacity:0, x:50},
        { opacity:1, x:0, duration:1}
    )
    ScrollTrigger.create({
        trigger: stg,
        animation: anim,
        toggleActions: "play",
        delay:0.6,
        duration: 1.5,
        stagger:1,
        ease: Power4.easeInOut,
    });
})