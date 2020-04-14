 $(document).ready(function(){

$("#home").on("click",function(){            
    $("header").show();        
    $(".content").show();        
    $("#about-section").hide();
$(".works-section").hide();    
    $(".cards").show();
        $("#riyan").addClass('anim1'); //animation
        $(".lang").addClass('langa');
        $(".right-work-section").removeClass('.right-work-section-animation');
        $(".right-work-section1").removeClass('.right-work-section-animation1');
        $(".works-section-content").removeClass('works');

        $("#about").removeClass("cap");
    $("#works").removeClass("cap");        
        $("#home").removeClass("cap1");

    });

$("#about").on("click",function(){
   $("#about-section").show();
   $(".works-section").hide();
   $(".content").hide();
   $(".contact-section").hide();
     $(".cardss").addClass('anim'); //animation
     $("#riyan").removeClass('anim1'); //animation   
     $(".lang").removeClass('langa');
     $(".right-work-section").removeClass('.right-work-section-animation');
     $(".right-work-section1").removeClass('.right-work-section-animation1');
     $(".navbar").css({"position":"relative","z-index":"999"});
     $(".works-section-content").removeClass('works');

     $("#about").addClass("cap");
     $("#home").addClass("cap1");
     $("#works").removeClass("cap");              
 });

$("#works").on("click",function(){
   $(".works-section").show();
   $(".right-work-section1").addClass('right-work-section-animation1');
   $(".right-work-section").addClass('right-work-section-animation');
   $(".works-section-content").addClass('works');

   $(".contact-section").hide();
   $("#about-section").hide();
   $(".content").hide();
     $("#riyan").removeClass('anim1'); //animation   
     $(".lang").removeClass('langa');          


     $("#about").removeClass("cap");
     $("#home").addClass("cap1");
     $("#works").addClass("cap");             
 });

})