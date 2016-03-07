$(document).ready(function(){

/*
$(".container").on("click", function(){

 		
		$(this).slideUp("fast");
		

	});


*/

$("#li_contact").on("click", function(){

	$("#myNavbar li").removeClass("active");
	$(this).addClass("active");
	
});

$("#li_tours").on("click", function(){

	$("#myNavbar li").removeClass("active");
	$(this).addClass("active noBorder");
	
	
});

$("#li_home").on("click", function(){

	$("#myNavbar li").removeClass("active");
	$(this).addClass("active");
	
});

$("#li_sculpture").on("click", function(){

	$("#myNavbar li").removeClass("active");
	$(this).addClass("active");
	
});

$("#li_reading").on("click", function(){

	$("#myNavbar li").removeClass("active");
	$(this).addClass("active");
	
});

$("#li_art").on("click", function(){

	$("#myNavbar li").removeClass("active");
	$(this).addClass("active");
	
});

$("#li_login").on("click", function(){

	$("#myNavbar li").removeClass("active");
	$("#li_home").addClass("active");

});

});
