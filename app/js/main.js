
const header = document.querySelector('.header');

window.addEventListener("scroll", () => {
    console.log(window.screenY)
    if(window.scrollY > 10){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
})


// Swiper start
const swiper1 = new Swiper(".swiper-container", {
    grabCursor:true,
    slidePerView:1,
    spaceBetween:10,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
})