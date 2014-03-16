// collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".main-panel").offset().top < 10) {
        $(".scroll-down").addClass("hide");
    } else {
        
    }
});


// Smoothscrolling on body//


	$(document).ready(function(){
		
		$('html, body').smoothWheel();
	
		
	});

//Initialize WOW and Stellar //

$(document).ready(function() {
	new WOW().init();
	$.stellar();
	
	
		
 if ($(window).width() < 767) {
	 
	$("div").removeClass("wow"); 
	
          
        
}
else {
             }

	
});







	


	

