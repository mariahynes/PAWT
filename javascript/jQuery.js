$(document).ready(function(){


$('.navbar a.navbar-link').click(function() {
    var navbar_toggle = $('.navbar-toggle');
    if (navbar_toggle.is(':visible')) {
        navbar_toggle.trigger('click');
    }
});



$("#li_contact").on("click", function(){

	$("#myNavbar li").removeClass("active");
	$(this).addClass("active");
	
});

$("#li_tours").on("click", function(){

	$("#myNavbar li").removeClass("active");
	$(this).addClass("active");
	
	
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
