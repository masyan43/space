$(function() {
		
						
	//makes active li element	
	$(".facts").click(function() {		
		$(".facts").removeClass("active_fact_li");
		$(this).toggleClass("active_fact_li");
		// returns content of textArr id
		var factId = $(this).attr('name');
		$('.fact').removeClass('active_fact');
		$(factId).toggleClass('active_fact');							
	});			

});


