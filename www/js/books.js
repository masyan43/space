$(function() {		
		 					
	//makes active li element	
	$(".books").click(function() {		
		$(".books").removeClass("active_books_li");
		$(this).toggleClass("active_books_li");
		var factId = $(this).attr('name');
		$('.books_li').removeClass('active_book');
		$(factId).toggleClass('active_book');						
	});		

});