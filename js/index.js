// make a menu new style

$(function() {
    var $menu = $("#menu"); 
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20 && $menu.hasClass("default")) {
            $menu.removeClass("default").addClass("fixed");
        } else if ($(this).scrollTop() <= 20 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
        }
    });      
});

//scroll animation to anchors

$(function() {    
    $("header li a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination-60 }, 1000);
    });
});

//animation scroll to top

$(function() {
    $('.backtotop').click(function(){
       $('html, body').animate({scrollTop:0}, 1000);
   });
});

// animation scroll to bottom

$(function() {    
    $(".bottom").click(function(){
        $("html, body").animate({scrollTop:$(document).height()}, 1000);
        return false;
    }); 
});





    
