// wow libs
new WOW().init();

$(function(){
    $(window).scroll(function(){
        wHeight=$(window).scrollTop();
        if(wHeight>=400){
            $("footer .go_to_up").fadeIn(1000);
        }else{
            $("footer .go_to_up").fadeOut(1000);
        }
    });
    //handle button go to up
    $("footer .go_to_up").on("click",()=>{
        $(window).scrollTop(0,0);
    })

    $(window).on("load",function(){
        $(".loading-section").fadeOut(1000,function(){
            $("body").css("overflow","auto");
            $(this).remove();
        });
    });
    
});

