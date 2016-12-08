$(function() {

    
    

    //mercury
    $('.mercury').click(function(e) {
        e.preventDefault();
        $('#overlay').fadeIn(400, function() {
            $('#modal1').css('display', 'block').animate({
                opacity: 1
            }, 200);
        });
    });
    $('.close, #overlay').click(function() {
        $('#modal1').animate({
            opacity: '0'            
        }, 200, function() {
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
        });
    }); 


    //venus
    $('.venus').click(function(e) {
        e.preventDefault();
        $('#overlay').fadeIn(400, function() {
            $('#modal2').css('display', 'block').animate({
                opacity: 1
            }, 200);
        });
    });
    $('.close, #overlay').click(function() {
        $('#modal2').animate({
            opacity: '0'            
        }, 200, function() {
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
        });
    });

    //earth
    $('.earth').click(function(e) {
        e.preventDefault();
        $('#overlay').fadeIn(400, function() {
            $('#modal3').css('display', 'block').animate({
                opacity: 1
            }, 200);
        });
    });
    $('.close, #overlay').click(function() {
        $('#modal3').animate({
            opacity: '0'            
        }, 200, function() {
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
        });
    }); 

    //mars
    $('.mars').click(function(e) {
        e.preventDefault();
        $('#overlay').fadeIn(400, function() {
            $('#modal4').css('display', 'block').animate({
                opacity: 1
            }, 200);
        });
    });
    $('.close, #overlay').click(function() {
        $('#modal4').animate({
            opacity: '0'            
        }, 200, function() {
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
        });
    });

    //jupiter
    $('.jupiter').click(function(e) {
        e.preventDefault();
        $('#overlay').fadeIn(400, function() {
            $('#modal5').css('display', 'block').animate({
                opacity: 1
            }, 200);
        });
    });
    $('.close, #overlay').click(function() {
        $('#modal5').animate({
            opacity: '0'            
        }, 200, function() {
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
        });
    }); 

    //saturn
    $('.saturn').click(function(e) {
        e.preventDefault();
        $('#overlay').fadeIn(400, function() {
            $('#modal6').css('display', 'block').animate({
                opacity: 1
            }, 200);
        });
    });
    $('.close, #overlay').click(function() {
        $('#modal6').animate({
            opacity: '0'            
        }, 200, function() {
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
        });
    }); 

    //uranus
    $('.uranus').click(function(e) {
        e.preventDefault();
        $('#overlay').fadeIn(400, function() {
            $('#modal7').css('display', 'block').animate({
                opacity: 1
            }, 200);
        });
    });
    $('.close, #overlay').click(function() {
        $('#modal7').animate({
            opacity: '0'            
        }, 200, function() {
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
        });
    });

    //neptune
    $('.neptune').click(function(e) {
        e.preventDefault();
        $('#overlay').fadeIn(400, function() {
            $('#modal8').css('display', 'block').animate({
                opacity: 1
            }, 200);
        });
    });
    $('.close, #overlay').click(function() {
        $('#modal8').animate({
            opacity: '0'            
        }, 200, function() {
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
        });
    });                             
});


