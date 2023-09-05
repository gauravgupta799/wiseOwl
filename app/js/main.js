const header = document.querySelector('.header');
const headerTranparent = document.querySelector('.header--tranparent');
const barWhite = document.querySelector('.bar-white');
const logo2 = document.querySelector('.logo-2');
// const loader = document.querySelector(".page-loader");

gsap.registerPlugin(ScrollTrigger);


// ====== Pre-loader start ======
const till = gsap.timeline({
    paused:"true"
});
till.to("#percent, #bar",{
    duration:0.2,
    opacity:0,
    zIndex:-1,
});
till.to("#preloader",{
    duration:1,
    yPercent:-100
})

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
    id = setInterval(frame, 50);
}
// ====== Pre-loader end ======

const locoScroll = new LocomotiveScroll({
    el:document.querySelector("#body"),
    smooth:true,
    direction: 'vertical',
    getDirection:true,
    smartphone: {
        smooth: true,
    },
    tablet: {
        smooth: true,
    }
});
ScrollTrigger.scrollerProxy("#body",{
    scrollTop(value){
        return arguments.length ? locoScroll.scrollTo(value, 0,0,): 
        locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect(){
        return{
            top:0, left:0, 
            width:window.innerWidth,
            height:window.innerHeight
        }
    },
    pinType:document.querySelector("#body").style.transform ? "transform" : "fixed"
});


// locoScroll.on("scroll", (instance)=>{
//     let headerHeight = header.getBoundingClientRect().height;
//     console.log("instance", instance.direction)
//     if(instance.direction === 'down'){
//         if(instance.scroll.y > headerHeight){
//             header.classList.add("sticky")
//         }
//     }else{
//         header.classList.remove("sticky");
//     }
// })


// Function to toggle the "sticky" class on the header
function toggleHeaderSticky(scrollY) {
    if (scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
}

// Function to handle the "barWhite" and "logo2" elements
function handleBarWhiteAndLogo2(scrollY) {
    if (barWhite !== null && logo2 !== null) {
      if (scrollY > 50) {
        barWhite.classList.add("sticky");
        logo2.src = "../../app/assets/logos/wiseOwl-logo.svg";
      } else {
        barWhite.classList.remove("sticky");
        logo2.src = "../../app/assets/logos/logo-black.svg";
      }
    }
  }

locoScroll.on("scroll", (position) => {
    const scrollY = position.scroll.y;
    toggleHeaderSticky(scrollY);
    handleBarWhiteAndLogo2(scrollY);
})


//======  Sticky header start ======
// window.addEventListener("scroll", () => {
//     const scrollY = window.scrollY;
//     toggleHeaderSticky(scrollY);
//     handleBarWhiteAndLogo2(scrollY);
// })

locoScroll.on("scroll", ScrollTrigger.update);
//======  Sticky header end ======


//======  Active Page Link start ======
const windowPathname = window.location.pathname;
const navLinks = document.querySelectorAll(".header__mobile-link");
navLinks.forEach(link =>{
  const navLinkPathname = new URL(link.href).pathname;
  if((windowPathname === navLinkPathname) || 
    (windowPathname === "/index.html" && navLinkPathname === "/")){
    link.classList.add("active");
  }
})
//======  Active Page Link end ======


// Mobile Menu Toggle start
$(document).ready(function() {
    $('.menu').click(function(){
        $(this).toggleClass('open');
        $(".header__mobile").toggleClass('open');
        $(".overlay").toggleClass('active');
        $('body').toggleClass('hidden');
    });
    $(".footer__input input").focusin(function(){
        $(".footer__input").addClass("border-color");
        $(".footer__input").removeClass("error");
    })
    $(".footer__input input").focusout(function(){
        $(".footer__input").removeClass("border-color");
    })
})
// Mobile Menu Toggle End


// form Validation start
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
// form Validation end 


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
// Swiper end 


// stick services start
const sSections =document.querySelectorAll(".services__categoriesWrapper");
if(sSections != null) {
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry) => {
            const heading = entry.target.children[0];
            if (entry.intersectionRatio > 0){
                heading.classList.add("visible");
            }else{
                heading.classList.remove("visible");
            }
        })
    });
    sSections.forEach((section) =>{
        observer.observe(section);
    });
}
// stick services end 


// stick values start
// const valuesSection = document.querySelector(".values__bottom");
// const valuesWrapper = document.querySelectorAll(".values__detailsWrapper");
// if(valuesWrapper != null){
//     const io = new IntersectionObserver((entries)=>{
//         entries.forEach((entry)=>{
//             const target = entry.target
//             const heading = target.children[0];
//             if(entry.intersectionRatio > 0){
//                 heading.classList.add("sticks");
//                 target.classList.add("visible");
//                 document.querySelector(".values__headingWrapper").classList.add("sticks")
//             }else{
//                 target.classList.remove("visible");
//                 document.querySelector(".values__headingWrapper").classList.remove("sticks")
//             }
//         })
//     })
//     valuesWrapper.forEach((value)=>{
//         io.observe(value);
//     })
// }
// stick values end


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
            })
            observer.unobserve(counterSection);
        },{
            root:null,
            threshold:0.4,
        }
    );
    CounterObserver.observe(counterSection);
}
// Counter script end


// contact form start
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
// contact form end 


//====== custome cursor start ======
var cursor = document.querySelector('.cursor'),
cursorScale = document.querySelectorAll('.cursor-scale')
mouseX = 0,
mouseY = 0;
gsap.to({}, 0.016, {
    repeat:-1,
    onRepeat:function(){
        gsap.set(cursor,{
            css:{
                left:mouseX,
                top:mouseY
            }
        })
    }
})
cursorScale.forEach((link)=>{
    link.addEventListener("mousemove", ()=>{
        cursor.classList.add('grow');
        if(link.classList.contains('small')){
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });
    link.addEventListener("mouseleave", ()=>{
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
})
window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
})
//====== custome cursor end ======


//====== Animation  start ======
// gsap.registerPlugin(ScrollTrigger);
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
})

//  animation fade in 
const fadeIn = gsap.utils.toArray(".animate-fade-in");
fadeIn.forEach((mainContent, i) => {
  const anim = gsap.fromTo(
    mainContent,
    { opacity: 0, scale:0 },
    {opacity: 1, scale:1,}
  );
  ScrollTrigger.create({
    trigger: mainContent,
    animation: anim,
    scroller:"#body",
    toggleActions: "play",
    once: true,
    duration: 1,
    stagger:0.5,
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
    scroller:"#body",
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
    { opacity: 0,x:-100},
    { opacity: 1, x:0, duration:1}
  );
  ScrollTrigger.create({
    trigger: left,
    animation: anim,
    toggleActions: "play",
    scroller:"#body",
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
    scroller:"#body",
    delay:0.6,
    duration: 3,
    stagger:1,
    ease: Power4.easeInOut,
  });
});



// const circles = gsap.utlils.toArray(".webDesign__circle");
const circles = document.querySelectorAll(".webDesign__circle");
circles.forEach((circle, i) =>{
    const animCircle = gsap.from(circle,{
        opacity: 0, scale:0, duration:1,
        backgroundColor:"#f1b61d", 
    });
    ScrollTrigger.create({
        trigger:circle,
        animation:animCircle,
        toggleActions:'play',
        delay:0.8,
        start:"top 80%",
        end:"bottom 40%",
        scrub:true,
        stagger:0.8,
        ease:Power4.easeIn
    })
});

const values = document.querySelectorAll(".values__detailsWrapper");
values.forEach((value, i) =>{
    const animValue = gsap.fromTo(value,
        {
            opacity: 0, 
            scale:0, 
            xPercent:100,
        },
        {
            opacity: 1, 
            scale:1, 
            xPercent:0,
            duration:1,
            color:"#f1b61d"
        }
    );
    ScrollTrigger.create({
        trigger:value,
        animation:animValue ,
        toggleActions:'play',
        delay:0.8,
        start:"top 80%",
        end:"bottom 40%",
        scrub:true,
        stagger:0.8,
        ease:Power4.easeIn
    })
});

// divider
tl.fromTo(".divider", 
    {  opacity:0, scaleX:0, x:-10 },
    { opacity:1, scaleX:1, x:0},
    ScrollTrigger.create({
        trigger: ".divider",
        scroller:"#body",
        delay:0.6,
        duration: 1.5,
        start:"20% 50%",
        end:"50%",
        ease: Power4.easeInOut,
    })
);



ScrollTrigger.addEventListener("refresh", () => {
    locoScroll.update();
});
ScrollTrigger.refresh();



















// stagger
// const staggerSlide = gsap.utils.toArray(".stg");
// staggerSlide.forEach((stg,i)=>{
//     const anim = gsap.fromTo(stg,
//         { opacity:0, x:50},
//         { opacity:1, x:0, duration:1}
//     )
//     ScrollTrigger.create({
//         trigger: stg,
//         animation: anim,
//         toggleActions: "play",
//         delay:0.6,
//         duration: 1.5,
//         stagger:1,
//         ease: Power4.easeInOut,
//     });
// })


//======  Dark/Light theme start ======
// localStorage.setItem('theme', 'light');
// const switchToggler = document.querySelector("#switchToggle");
// if(switchToggler != null){ 
//     if(switchToggler.checked){
//         body.setAttribute('data-theme', 'dark');
//     }else{
//         switchToggler.addEventListener("change", (e) => {
//             const themeValue = localStorage.getItem("theme");
//             let checkedEvent = e.target.checked;
//             if( checkedEvent && themeValue ==='light'){
//                localStorage.setItem('theme', 'dark');
//                document.body.setAttribute('data-theme', 'dark');
//             }
//             if( checkedEvent === false && themeValue === 'dark'){
//                 localStorage.setItem('theme', 'light');
//                 document.body.removeAttribute('data-theme', 'dark');
//             }
//         })
//     }
// }
//======  Dark/Light theme end ======






// Counter
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