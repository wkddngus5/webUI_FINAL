

jQuery(document).ready(function(){

    $(".spread>a").click(function(){
        var submenu = $(this).next("ul");
        
        if(submenu.is(":visible")){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    });
    
    $(".prev").click(function(){
        $("#page1").animate({marginLeft:+0}, 1000);
        
    })
    $(".next").click(function(){
    
        $("#page1").animate({marginLeft:-1000}, 1000);
    
    })


});
