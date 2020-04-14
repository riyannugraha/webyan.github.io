const prevIcon = "<img src='./img/prevIcon.svg'>";
const nextIcon = "<img src='./img/nextIcon.svg'>";


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,     
    navText: [
    prevIcon ,
    nextIcon       
    ],
    responsive:{
        0:{
            items:1            
        },
        600:{
            items:3
        },
        1000:{
            items:3    
        }
    }
});